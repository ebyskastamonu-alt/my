import { ArrowRight, Download, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import LikeButton from './LikeButton';

export default function Hero() {
  const { user, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [downloadRecorded, setDownloadRecorded] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Nexil Studio v1.2.0 kullanılabilir
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Nexil Logo"
              className="h-32 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-black">
              Programlamanın
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              Geleceği
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Nexil, yeni nesil geliştiriciler için tasarlanmış modern ve güçlü bir programlama dilidir. Hız, basitlik ve ölçeklenebilirlik için oluşturulmuştur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="/NexilStudio_1.2.0_tr.msi"
              download
              onClick={() => {
                if (user && !downloadRecorded) {
                  const { supabase } = require('../lib/supabase');
                  supabase.from('downloads').insert({ user_id: user.id }).then(() => {
                    setDownloadRecorded(true);
                  });
                }
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Download className="w-5 h-5" />
              Nexil Studio İndir
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/nexil-sozdizimi.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black border-2 border-black rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Belgeleri Görüntüle
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LikeButton />

            {!user ? (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
              >
                Giriş Yap / Kaydol
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Çıkış
                </button>
              </div>
            )}
          </div>

          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            onSuccess={() => {
              setDownloadRecorded(false);
            }}
          />

          <div className="pt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Çapraz Platform
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Açık Kaynak
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Ücretsiz
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
