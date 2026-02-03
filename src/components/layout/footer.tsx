import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-transparent border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <img
                            src="/pics/logo/han-ajans-logo.jpg"
                            alt="Han Ajans Logo"
                            className="h-16 w-auto object-contain rounded-sm"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Karacabey'in öncü dijital baskı ve reklam merkezi. Markanızı görünür kılıyoruz.
                        </p>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-white shrink-0" />
                                <span>Tavşanlı, 135. Sk. No:3/A, 16700 Karacabey/Bursa</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-white shrink-0" />
                                <a href="tel:+905378317838" className="hover:text-white transition-colors">0537 831 7838</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-white shrink-0" />
                                <a href="mailto:hanajanskaracabey@gmail.com" className="hover:text-white transition-colors">hanajanskaracabey@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Linkler */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Hızlı Menü</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Hizmetlerimiz</a></li>
                            <li><a href="#portfolio" className="hover:text-white transition-colors">Referanslar</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Sosyal */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Takip Edin</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/hanajanskaracabey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Han Ajans. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
