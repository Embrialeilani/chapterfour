// app/berita/page.tsx
import Link from 'next/link'
import { Calendar, User, Search } from 'lucide-react'
import { beritaData } from '../../data/berita'


const categories = [
  'Lingkungan',
  'Konservasi',
  'Perubahan Iklim',
  'Satwa Liar',
  'Energi Terbarukan',
  'Polusi',
]

export default function BeritaPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <span>🌿</span>
            Berita Terkini
            <span>🌱</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Media Terdepan dalam Pelestarian Alam dan Konservasi Lingkungan
          </p>
        </div>
      </div>

     
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full pl-10 pr-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border border-black rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beritaData.map((berita) => (
            <article 
              key={berita.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white">
                <div className="text-center">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {berita.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h2 className="font-bold text-xl mb-3 line-clamp-2">
                  {berita.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {berita.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {berita.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {berita.date}
                  </div>
                </div>
                
                {/* Read More */}
                <Link 
                  href={`/berita/${berita.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white hover:bg-gray-700 px-8 py-3 rounded-full  transition-colors font-semibold">
            Muat Lebih Banyak
          </button>
        </div>
      </main>
    </div>
  )
}