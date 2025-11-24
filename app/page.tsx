import Sidebar from "../components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Sidebar title="">
    <div className="rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-3 py-1">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-gray-900 leading-tight ">
              Discover the Worlds <b /> 
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-500 bg-clip-text text-transparent ">
                Hidden
              </span> <br /> 
              Wonders
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Didirikan pada tahun 2010 oleh sekelompok jurnalis lingkungan, 
                kami telah tumbuh menjadi sumber terpercaya bagi masyarakat, 
                pemerintah, dan organisasi lingkungan dalam memahami tantangan 
                dan solusi pelestarian alam Indonesia.
              </p>
            </div>
            </div>
           
            <Link href="/detailberita" className="bg-blue-800 text-white hover:bg-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Selengkapnya</Link>
            
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image 
                src="/img/gambar 1.png" 
                alt="World's Hidden Wonders" 
                width={600} 
                height={400} 
                className="w-full h-auto rounded-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    </Sidebar> 
  );
}