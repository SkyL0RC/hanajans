import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-transparent relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Bize Ulaşın
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Projeleriniz için fiyat teklifi almak veya görüşmek için iletişime geçin.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* İletişim Bilgileri */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a
                                href="tel:+905378317838"
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors hover:scale-105 duration-300"
                            >
                                <Phone className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-1">Telefon</h3>
                                <p className="text-gray-400 text-sm hover:text-white transition-colors">0537 831 7838</p>
                            </a>
                            <a
                                href="mailto:hanajanskaracabey@gmail.com"
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors hover:scale-105 duration-300"
                            >
                                <Mail className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-1">E-Posta</h3>
                                <p className="text-gray-400 text-sm hover:text-white transition-colors">hanajanskaracabey@gmail.com</p>
                            </a>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors md:col-span-2">
                                <MapPin className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-1">Adres</h3>
                                <p className="text-gray-400 text-sm max-w-xs">
                                    Tavşanlı, 135. Sk. No:3/A, 16700 Karacabey/Bursa
                                </p>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-white/10 text-center relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Tav%C5%9Fanl%C4%B1%2C%20135.%20Sk.%20No%3A3%2FA%2C%2016700%20Karacabey%2FBursa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className="filter grayscale-0"
                            ></iframe>
                        </div>
                    </div>

                    {/* İletişim Formu */}
                    {/* Sosyal Medya Yönlendirmesi */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center h-full">
                        <h3 className="text-2xl font-bold text-white mb-6">Çalışmalarımızı İnceleyin</h3>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Güncel projelerimizi ve referanslarımızı görmek için Instagram sayfamızı ziyaret edebilirsiniz.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <a
                                href="https://www.instagram.com/hanajanskaracabey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                                Instagram'da Takip Et
                            </a>

                            <a
                                href="https://www.google.com/maps/place/Han+Ajans+Karacabey/@40.2141296,28.3561349,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5e112c7bf4b15:0xe7ea8f5b6e2b5db9!8m2!3d40.2141296!4d28.3587098!16s%2Fg%2F11ww3knvqd?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                <MapPin className="w-5 h-5" />
                                Konuma Git
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
