import { Zap, Shield, Code2, Layers, Sparkles, Gauge } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: Zap,
    title: 'Yıldırım Hızı',
    description: 'Optimize edilen derleyici, minimum overhead ile olağanüstü performans sağlar. Kodunuzu inanılmaz hızlarda yürütün.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Bellek Güvenliği',
    description: 'Yerleşik bellek yönetimi, yaygın güvenlik açıklarını önler ve uygulamalarınızı varsayılan olarak güvenli kılar.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Code2,
    title: 'Temiz Sözdizimi',
    description: 'Sezgisel ve anlatımlı sözdizimi, kodu okuması ve yazması kolay hale getirir. Mantığa odaklanın, şablon koda değil.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Layers,
    title: 'Modern Araçlar',
    description: 'Nexil Studio, akıllı kod tamamlama, gerçek zamanlı hata algılama ve güçlü hata ayıklama araçları sağlar.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Sparkles,
    title: 'Zengin Ekosistem',
    description: 'Kapsamlı standart kütüphane ve büyüyen paket ekosistemi. Modern uygulamalar oluşturmak için ihtiyacınız olan her şey.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Gauge,
    title: 'Üretime Hazır',
    description: 'Gerçek dünyadaki uygulamalarında test edilmiş. Startuplardan kurumsal şirketlere kadar, Nexil sizinle birlikte büyür.',
    color: 'from-gray-700 to-gray-900'
  }
];

export default function Features() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 transition-colors ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Neden Nexil?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Modern geliştirme ilkeleri ve son teknoloji ile sıfırdan oluşturulmuştur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10'
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-red-200 hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-red-500/10 to-transparent'
                  : 'bg-gradient-to-br from-red-500/5 to-transparent'
              }`}></div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {feature.title}
                </h3>

                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
