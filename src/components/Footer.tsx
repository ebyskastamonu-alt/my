import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Nexil" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-black">Nexil</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Yeni nesil geliştiriciler için tasarlanmış modern bir programlama dili. Hızlı, güvenli ve güçlü.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                <Github className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a href="mailto:nexil.team@outlook.com" className="w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Kaynaklar</h3>
            <ul className="space-y-3">
              <li><a href="/nexil-sozdizimi.pdf.pdf" target="_blank" className="text-gray-600 hover:text-red-500 transition-colors">Belgeler</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Öğretimler</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">API Referansı</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Örnekler</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Topluluğu Kontrol Edin</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Discord</a></li>
              <li><a href="mailto:nexil.team@outlook.com" className="text-gray-600 hover:text-red-500 transition-colors">E-posta Gönder</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Nexil Programlama Dili. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Hizmet Şartları</a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Lisans</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-2">İletişim: <a href="mailto:nexil.team@outlook.com" className="text-red-500 hover:text-red-600 font-semibold">nexil.team@outlook.com</a></p>
          <p className="text-gray-500 text-sm">Nexil'i seçtiğiniz için teşekkür ederiz.</p>
        </div>
      </div>
    </footer>
  );
}
