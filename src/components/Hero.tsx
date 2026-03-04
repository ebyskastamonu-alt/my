import { ArrowRight, Download, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../lib/translations';
import AuthModal from './AuthModal';
import LikeButton from './LikeButton';

export default function Hero() {
  const { user, signOut } = useAuth();
  const { theme, language } = useTheme();
  const t = translations[language];
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [downloadRecorded, setDownloadRecorded] = useState(false);
  return (
    <section className={`relative overflow-hidden pt-20 pb-32 transition-colors ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 to-black'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'
      } bg-[size:24px_24px]`}></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-8 animate-fade-in">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            theme === 'dark'
              ? 'bg-red-900/30 border border-red-700 text-red-400'
              : 'bg-red-50 border border-red-100 text-red-600'
          }`}>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            {language === 'tr' ? 'Nexil Studio v1.2.0 kullanılabilir' : language === 'ar' ? 'Nexil Studio v1.2.0 متاح الآن' : 'Nexil Studio v1.2.0 is available'}
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Nexil Logo"
              className="h-32 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className={`bg-clip-text text-transparent ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-gray-200 to-white'
                : 'bg-gradient-to-r from-black via-gray-900 to-black'
            }`}>
              {language === 'tr' ? 'Programlamanın' : language === 'ar' ? 'مستقبل' : 'The Future of'}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              {language === 'tr' ? 'Geleceği' : language === 'ar' ? 'البرمجة' : 'Programming'}
            </span>
          </h1>

          <p className={`max-w-2xl mx-auto text-xl sm:text-2xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'tr'
              ? 'Nexil, yeni nesil geliştiriciler için tasarlanmış modern ve güçlü bir programlama dilidir. Hız, basitlik ve ölçeklenebilirlik için oluşturulmuştur.'
              : language === 'ar'
              ? 'Nexil هو لغة برمجة حديثة وقوية مصممة لمطوري الجيل الجديد. تم بناؤه من أجل السرعة والبساطة وقابلية التوسع.'
              : 'Nexil is a modern and powerful programming language designed for next-generation developers. Built for speed, simplicity, and scalability.'}
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
              className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              <Download className="w-5 h-5" />
              {language === 'tr' ? 'Nexil Studio İndir' : language === 'ar' ? 'تحميل Nexil Studio' : 'Download Nexil Studio'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/nexil-sozdizimi.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700'
                  : 'bg-white text-black border-black hover:bg-gray-50'
              }`}
            >
              {language === 'tr' ? 'Belgeleri Görüntüle' : language === 'ar' ? 'عرض التوثيق' : 'View Documentation'}
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
                {language === 'tr' ? 'Giriş Yap / Kaydol' : language === 'ar' ? 'تسجيل الدخول / التسجيل' : 'Sign In / Sign Up'}
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className={`inline-flex items-center gap-2 px-4 py-2 transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-red-500'
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <LogOut className="w-5 h-5" />
                  {language === 'tr' ? 'Çıkış' : language === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
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

          <div className={`pt-12 flex items-center justify-center gap-8 text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              {language === 'tr' ? 'Çapraz Platform' : language === 'ar' ? 'متعدد المنصات' : 'Cross-Platform'}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              {language === 'tr' ? 'Açık Kaynak' : language === 'ar' ? 'المصدر مفتوح' : 'Open Source'}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              {language === 'tr' ? 'Ücretsiz' : language === 'ar' ? 'مجاني' : 'Free'}
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-px ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
      }`}></div>
    </section>
  );
}
