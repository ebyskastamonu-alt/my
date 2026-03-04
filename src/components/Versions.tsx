import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../lib/translations';

export default function Versions() {
  const { language, theme } = useTheme();
  const t = translations[language];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.versions.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl border-2 border-red-500 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } transition-colors`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-red-600 dark:text-red-500">1.2.0</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-semibold">
                {language === 'tr' ? 'Son' : language === 'ar' ? 'الأخير' : 'Latest'}
              </span>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.versions.v120}
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.versions.v120Desc}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t.versions.compilerFix}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t.versions.interpreterFix}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t.versions.editorFix}
                </span>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-2xl border-2 ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          } transition-colors`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
              }`}>1.0.0</span>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.versions.v100}
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.versions.v100Desc}
            </p>
            <div className="space-y-3">
              <div className={`px-4 py-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              } text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language === 'tr' ? 'Temel özellikleri sunuyor' : language === 'ar' ? 'يوفر الميزات الأساسية' : 'Provides core functionality'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
