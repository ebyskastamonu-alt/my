import { Download, BookOpen, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../lib/translations';

export default function CTA() {
  const { theme, language } = useTheme();
  const t = translations[language];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          {language === 'tr' ? 'Başlamaya Hazır Mısınız?' : language === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          {language === 'tr' ? 'Nexil ile geleceği oluşturan binlerce geliştiriciye katılın' : language === 'ar' ? 'انضم إلى آلاف المطورين الذين يبنون المستقبل باستخدام Nexil' : 'Join thousands of developers building the future with Nexil'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="/NexilStudio_1.2.0_tr.msi"
            download
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold text-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-red-500/50"
          >
            <Download className="w-6 h-6" />
            {language === 'tr' ? 'Nexil Studio İndir' : language === 'ar' ? 'تحميل Nexil Studio' : 'Download Nexil Studio'}
          </a>

          <a
            href="/nexil-sozdizimi.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="w-6 h-6" />
            {language === 'tr' ? 'Belgeleri Oku' : language === 'ar' ? 'اقرأ التوثيق' : 'Read Documentation'}
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">{language === 'tr' ? 'İndirmeler' : language === 'ar' ? 'التنزيلات' : 'Downloads'}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">5K+</div>
            <div className="text-gray-400">{language === 'tr' ? 'Aktif Geliştiriciler' : language === 'ar' ? 'المطورون النشطون' : 'Active Developers'}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">{language === 'tr' ? 'Ücretsiz & Açık Kaynak' : language === 'ar' ? 'مجاني وموارد مفتوحة' : 'Free & Open Source'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
