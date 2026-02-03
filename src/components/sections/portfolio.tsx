import { useState } from "react";
import { cn } from "@/lib/utils";

export function Portfolio() {
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", name: "Tümü" },
        { id: "brosur", name: "Broşür" },
        { id: "baski", name: "Baskı" },
        { id: "logo", name: "Logo" },
        { id: "promosyon", name: "Promosyon" },
        { id: "plaket", name: "Plaket" },
    ];

    type Project = {
        id: number;
        name: string;
        category: string;
        image: string;
        type?: 'image' | 'video';
        embedId?: string;
    };

    const projects: Project[] = [
        {
            id: 1,
            name: "Tanıtım ve Broşür",
            category: "brosur",
            type: "video",
            embedId: "DTF_y-WiNw8",
            image: "/img/ref1.jpg",
        },
        {
            id: 2,
            name: "Logo Tasarımı",
            category: "logo",
            type: "video",
            embedId: "DTF_TNfiLCv",
            image: "/img/ref2.jpg",
        },
        {
            id: 3,
            name: "Kartvizit Üretimi",
            category: "baski",
            type: "video",
            embedId: "DS3CothDbWk",
            image: "/img/ref3.jpg",
        },
        {
            id: 4,
            name: "Plaket",
            category: "plaket",
            type: "video",
            embedId: "DSvTm7KjXTt",
            image: "/img/ref4.jpg",
        },
        {
            id: 5,
            name: "Özel Tasarım",
            category: "logo",
            type: "video",
            embedId: "DQmo6MbDbnB",
            image: "/img/ref5.jpg",
        },
        {
            id: 6,
            name: "Promosyon Örneği",
            category: "promosyon",
            type: "video",
            embedId: "DOjTDmhiELC",
            image: "/img/ref6.jpg",
        },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Çalışmalarımız
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            İmzamızı attığımız yüzlerce başarılı projeden seçkiler.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                                    filter === cat.id
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                                )}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 border border-white/5"
                        >
                            {/* Render based on project type */}
                            {project.type === 'video' ? (
                                <div className="absolute inset-0 w-full h-full bg-black">
                                    <iframe
                                        src={`https://www.instagram.com/p/${project.embedId}/embed`}
                                        className="w-full h-full object-cover"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                        allow="encrypted-media"
                                        title={project.name}
                                    ></iframe>
                                    {/* Overlay for hover info - optional, might block interaction if z-index is high */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold text-shadow-sm">
                                            {project.name}
                                        </h3>
                                        <span className="text-gray-300 text-xs uppercase tracking-wider">
                                            {categories.find(c => c.id === project.category)?.name}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Fallback for missing images */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 bg-gray-900">
                                        <span className="text-sm font-medium">Görsel Yükleniyor...</span>
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none'; // Hide broken images
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.name}
                                        </h3>
                                        <span className="text-gray-400 text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {categories.find(c => c.id === project.category)?.name}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
