"use client"
import {ReactNode, useState} from "react";
import Link from "next/link";

type SidebarProps = {
  children: ReactNode;
  title: string;
};

export default function Sidebar({children, title}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Navbar Simple */}
            <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900 text-white shadow-md flex justify-center it p-2 relative">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="text-3xl font-bold">ForestLoom</div>
                        

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 ">
                            <Link href="/" className="hover:text-blue-300 transition-colors font-semibold text-xl">
                                Home
                            </Link>
                            <Link href="/profil" className="hover:text-blue-300 transition-colors font-semibold text-xl">
                                Profil
                            </Link>
                            <Link href="/berita" className="hover:text-blue-300 transition-colors font-semibold text-xl">
                                Berita
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-2xl"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>
                    {isOpen && (
                        <div className="md:hidden bg-blue-600 py-4">
                            <div className="flex flex-col space-y-4">
                                <Link 
                                    href="/" 
                                    className="hover:text-blue-200 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/profil" 
                                    className="hover:text-blue-200 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Profil
                                </Link>
                                <Link 
                                    href="/berita" 
                                    className="hover:text-blue-200 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Berita
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <main className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6"></h1>
                    <div className="">
                        {children}
                    </div>
                </div>
            </main>

            <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
                            <div className="space-y-2">
                                <p> Kingbia@gmail.center</p>
                                <p> 08570377624</p>
                                <p> King e madiun iki</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
                            <div className="space-y-2">
                                <p> Facebook</p>
                                <p> Twitter</p>
                                <p> Instagram</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Menu Cepat</h3>
                            <div className="space-y-2">
                                <Link href="/" className="block hover:text-blue-200 transition-colors">
                                    Home
                                </Link>
                                <Link href="/profil" className="block hover:text-blue-200 transition-colors">
                                    Profil
                                </Link>
                                <Link href="/berita" className="block hover:text-blue-200 transition-colors">
                                    Berita
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-8 pt-6 text-center">
                        <p>&copy; 2024 My Landing Page. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
           
        