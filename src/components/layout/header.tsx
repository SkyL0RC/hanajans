import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Hakkımızda", href: "#about" },
        { name: "Hizmetler", href: "#services" },
        { name: "Çalışmalarımız", href: "#portfolio" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <img
                        src="/pics/logo/han-ajans-logo.jpg"
                        alt="Han Ajans Logo"
                        className="h-12 w-auto object-contain rounded-sm"
                    />
                    <span className="text-xl font-bold tracking-tight text-white">Han Ajans</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
