import { Megaphone, Shirt, Coffee, CreditCard, FileText, User } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Davetiye Baskı",
            description: "Özel günleriniz için şık ve kişiselleştirilmiş davetiye tasarımları.",
            image: "/pics/hizmetler/davetiye.jpg"
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "Reklam",
            description: "Markanızı öne çıkaran etkili reklam ve tanıtım çözümleri.",
            image: "/pics/hizmetler/reklam.jpg"
        },
        {
            icon: <Shirt className="w-8 h-8" />,
            title: "Tişört Baskı",
            description: "Kişiye özel veya kurumsal logolu tişört baskı hizmetleri.",
            image: "/pics/hizmetler/tisort.png"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Kupa Baskı",
            description: "Fotoğraf veya logolu, hediyelik ve promosyon kupa bardaklar.",
            image: "/pics/hizmetler/kupa.png"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Kartvizit Baskı",
            description: "Kurumsal kimliğinizi yansıtan profesyonel kartvizitler.",
            image: "/pics/hizmetler/kartvizit.png"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Broşür Baskı",
            description: "Ürün ve hizmetlerinizi tanıtan yüksek kaliteli broşürler.",
            image: "/pics/hizmetler/brosur.png"
        },
        {
            icon: <Shirt className="w-8 h-8" />,
            title: "Polar Baskı",
            description: "Sıcak tutan, logolu ve özel tasarım polar baskıları.",
            image: "/pics/hizmetler/polar.png"
        },
        {
            icon: <User className="w-8 h-8" />,
            title: "Şapka Baskı",
            description: "Promosyon veya kişisel kullanım için şapka üzerine baskı.",
            image: "/pics/hizmetler/sapka.png"
        },
    ];

    return (
        <section id="services" className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        İşletmenizin ve kişisel günlerinizin ihtiyaç duyduğu tüm baskı çözümlerini
                        tek çatı altında, profesyonel kalitede sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-center items-center">
                                <div className="mb-4 p-3 rounded-xl bg-white/10 w-fit text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
