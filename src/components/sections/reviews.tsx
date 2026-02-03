import { Star } from "lucide-react";

export function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Ahmet Yılmaz",
            company: "Yılmaz İnşaat",
            text: "Han Ajans ile çalışmak harikaydı. Tabela ve cephe giydirme işlerimizi zamanında ve çok kaliteli bir şekilde teslim ettiler. Kesinlikle tavsiye ederim.",
            rating: 5,
        },
        {
            id: 2,
            name: "Elif Demir",
            company: "Demir Butik",
            text: "Mağazamızın tüm dijital baskı ve promosyon ürünlerini buradan temin ettik. Tasarım ekibi çok ilgili ve yaratıcı. Teşekkürler!",
            rating: 5,
        },
        {
            id: 3,
            name: "Murat Öztürk",
            company: "Öztürk Lojistik",
            text: "Araç filomuzun giydirme işlemleri için tercih ettik. Malzeme kalitesi ve işçilik çok iyi. Kurumsal kimliğimize değer kattılar.",
            rating: 5,
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-transparent relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Mutlu Müşteriler
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Bizi tercih eden değerli iş ortaklarımızın yorumları.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors relative"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-6 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{review.name}</div>
                                    <div className="text-gray-500 text-xs">{review.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
