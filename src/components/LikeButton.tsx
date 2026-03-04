import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LikeButtonProps {
  onAuthNeeded?: () => void;
}

export default function LikeButton({ onAuthNeeded }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    const id = sessionStorage.getItem('likeSessionId') || crypto.randomUUID();
    sessionStorage.setItem('likeSessionId', id);
    setSessionId(id);

    fetchLikeData(id);
    const channel = supabase
      .channel('likes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'likes' }, () => {
        fetchLikeData(id);
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const fetchLikeData = async (id: string) => {
    const { count } = await supabase
      .from('likes')
      .select('*', { count: 'exact', head: true });

    setLikeCount(count || 0);

    const { data } = await supabase
      .from('likes')
      .select('id')
      .eq('session_id', id)
      .maybeSingle();

    setLiked(!!data);
  };

  const handleLike = async () => {
    setLoading(true);

    try {
      if (liked) {
        await supabase.from('likes').delete().eq('session_id', sessionId);
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      } else {
        await supabase.from('likes').insert({ session_id: sessionId });
        setLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        liked
          ? 'bg-red-50 text-red-600 border-2 border-red-500'
          : 'bg-gray-100 text-gray-600 border-2 border-gray-200 hover:border-red-500 hover:text-red-500'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
      <span>{likeCount}</span>
    </button>
  );
}
