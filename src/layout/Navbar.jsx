import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    {href: "#byweek", label: "By Week"},
    {href: "#recipes", label: "Recipes"},
    {href: "#tagsandfilters", label: "Tags & Filters"},
    {href: "#mealgenerator", label: "Meal Generator"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-foreground py-2 z-50">
            <nav className="container mx-auto flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight text-primary body">
                    Culinary<span className="text-secondary">Compass</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-primary hover:text-secondary rounded-full">{link.label}</a>
                        ))}
                    </div>
                </div>

                {/* CTA button */}
                <div className="hidden md:block">
                    <a></a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong backdrop-blur-sm rounded-lg mt-2 mx-2 animate-fade-in">
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-md text-muted-foreground hover:text-primary animate-hover py-2 font-light">{link.label}</a>
                        ))}

                        <Button size="sm">Contact Me</Button>
                    </div>
                </div> )}
        </header>);
};