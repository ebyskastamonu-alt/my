import { Check } from 'lucide-react';

export default function CodeShowcase() {
  const codeExample = `fonksiyon main() {

    // Basit ve zarif
    yazdır("Merhaba, Nexil!")

    // Güçlü tip sistemi
    değişken sayılar: tamsayı[] = [1, 2, 3, 4, 5]

}`;

  const highlights = [
    'Akıllı otomatik tamamlama',
    'Gerçek zamanlı sözdizimi kontrolü',
    'Entegre hata ayıklayıcı',
    'Git entegrasyonu',
    'Tema özelleştirmesi',
    'Uzantı marketplası'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="bg-gray-900 px-6 py-4 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm font-mono">main.nex</span>
              </div>

              <div className="p-8">
                <pre className="text-sm sm:text-base leading-relaxed">
                  <code className="font-mono">
                    <span className="text-purple-400">fonksiyon</span>
                    <span className="text-white"> main() {'{'}</span>
                    {'\n\n'}
                    <span className="text-gray-500">    // Basit ve zarif</span>
                    {'\n'}
                    <span className="text-white">    </span>
                    <span className="text-yellow-400">yazdır</span>
                    <span className="text-white">(</span>
                    <span className="text-green-400">"Merhaba, Nexil!"</span>
                    <span className="text-white">)</span>
                    {'\n\n'}
                    <span className="text-gray-500">    // Güçlü tip sistemi</span>
                    {'\n'}
                    <span className="text-white">    </span>
                    <span className="text-purple-400">değişken</span>
                    <span className="text-white"> sayılar: </span>
                    <span className="text-blue-400">tamsayı</span>
                    <span className="text-white">[] = [</span>
                    <span className="text-orange-400">1</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">2</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">3</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">4</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">5</span>
                    <span className="text-white">]</span>
                    {'\n\n'}
                    <span className="text-white">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Maksimum Üretkenlik için Güçlü IDE
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nexil Studio sadece bir editör değildir. Sizi daha üretken hale getirmek için tasarlanmış eksiksiz bir geliştirme ortamıdır.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
