import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function CompanyProfile() {
  return (
    <div className="min-h-screen to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <span>🌿</span>
            Alam News Indonesia
            <span>🌱</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Media Terdepan dalam Pelestarian Alam dan Konservasi Lingkungan
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            Berdiri sejak 2010 • 14+ Tahun Melayani Informasi Lingkungan
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Tentang Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-blue-900">Alam News Indonesia</strong> adalah platform media independen 
                yang berdedikasi untuk menyampaikan informasi akurat dan mendalam 
                tentang isu-isu lingkungan, konservasi alam, dan keberlanjutan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Didirikan pada tahun 2010 oleh sekelompok jurnalis lingkungan, 
                kami telah tumbuh menjadi sumber terpercaya bagi masyarakat, 
                pemerintah, dan organisasi lingkungan dalam memahami tantangan 
                dan solusi pelestarian alam Indonesia.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 text-center">
                <div className="text-2xl font-bold text-blue-800 mb-2">5,000+</div>
                <div className="text-gray-600 font-medium">Artikel Publikasi</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 text-center">
                <div className="text-2xl font-bold text-blue-800 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Jurnalis Profesional</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 text-center">
                <div className="text-2xl font-bold text-blue-800 mb-2">12</div>
                <div className="text-gray-600 font-medium">Penghargaan Nasional</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Visi & Misi</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi media terdepan yang menginspirasi masyarakat Indonesia 
                untuk aktif menjaga dan melestarikan alam melalui informasi 
                yang edukatif dan solutif.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Misi</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  Menyajikan berita lingkungan yang akurat dan berimbang
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  Mengedukasi masyarakat tentang pentingnya konservasi
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  Memfasilitasi dialog antara pemangku kepentingan
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  Mendukung kebijakan lingkungan yang berkelanjutan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Struktur Organisasi</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            {/* CEO Level */}
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 p-6 rounded-xl text-center border-2 border-blue-600 max-w-xs">
                <div className="text-2xl mb-2">👑</div>
                <h4 className="font-bold text-blue-800 text-lg">Direktur Utama</h4>
                <p className="text-blue-600 font-medium">Dr. Sari Indah, M.Si</p>
                <p className="text-gray-600 text-sm mt-1">Pemimpin Redaksi & Strategi</p>
              </div>
            </div>

            {/* Management Level */}
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              <div className="bg-white p-5 rounded-lg text-center border-2 border-blue-300 max-w-xs">
                <div className="text-xl mb-2">📊</div>
                <h4 className="font-bold text-blue-800">Direktur Operasional</h4>
                <p className="text-blue-600 text-sm">Budi Santoso, S.Hut</p>
                <p className="text-gray-600 text-xs mt-1">Manajemen & Pengembangan</p>
              </div>
              <div className="bg-white p-5 rounded-lg text-center border-2 border-blue-200 max-w-xs">
                <div className="text-xl mb-2">✍️</div>
                <h4 className="font-bold text-blue-800">Pemimpin Redaksi</h4>
                <p className="text-blue-600 text-sm">Maya Purnama, M.Si</p>
                <p className="text-gray-600 text-xs mt-1">Kualitas Konten & Editorial</p>
              </div>
            </div>

            {/* Departments Level */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h5 className="font-bold text-blue-800 mb-4">Divisi Pemberitaan</h5>
                <div className="space-y-2">
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Redaktur Senior</span>
                    <span className="text-gray-600">(3)</span>
                  </div>
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Jurnalis Lapangan</span>
                    <span className="text-gray-600">(15)</span>
                  </div>
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Fotografer</span>
                    <span className="text-gray-600">(5)</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h5 className="font-bold text-blue-800 mb-4">Divisi Teknologi</h5>
                <div className="space-y-2">
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Web Developer</span>
                    <span className="text-gray-600">(4)</span>
                  </div>
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Data Analyst</span>
                    <span className="text-gray-600">(2)</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h5 className="font-bold text-blue-800 mb-4">Divisi Kemitraan</h5>
                <div className="space-y-2">
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Partnership Manager</span>
                    <span className="text-gray-600">(3)</span>
                  </div>
                  <div className="flex justify-between bg-blue-100 px-4 py-2 rounded">
                    <span className="font-medium">Community Officer</span>
                    <span className="text-gray-600">(4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Awards */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Pencapaian & Penghargaan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Award 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 items-start">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shrink-0">
                2023
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">
                  Penghargaan Jurnalistik Lingkungan Terbaik
                </h4>
                <p className="text-blue-600 font-medium mb-2">Kementerian Lingkungan Hidup & Kehutanan</p>
                <p className="text-gray-700">
                  Untuk liputan investigasi Deforestasi di Kalimantan Timur
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 items-start">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shrink-0">
                2022
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">
                  Media Peduli Lingkungan Award
                </h4>
                <p className="text-blue-600 font-medium mb-2">Walhi Indonesia</p>
                <p className="text-gray-700">
                  Kontribusi dalam edukasi perubahan iklim kepada masyarakat
                </p>
              </div>
            </div>

            {/* Award 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 items-start">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shrink-0">
                2021
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">
                  Digital Innovation Award
                </h4>
                <p className="text-blue-600 font-medium mb-2">Kominfo</p>
                <p className="text-gray-700">
                  Platform digital interaktif Peta Konservasi di Indonesia
                </p>
              </div>
            </div>

            {/* Award 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 items-start">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shrink-0">
                2020
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">
                  Best Environmental Reporting
                </h4>
                <p className="text-blue-600 font-medium mb-2">ASEAN Media Forum</p>
                <p className="text-gray-700">
                  Serial dokumenter Menyelamatkan Terumbu Karang Nusantara
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

      