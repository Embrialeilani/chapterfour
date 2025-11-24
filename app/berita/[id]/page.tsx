import React from 'react'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { beritaData } from '../../../data/berita'


interface PageProps {
  params: {
    id: string
  }
}

export default function DetailBeritaPage({ params }: PageProps) {
  const id = parseInt(params.id)
  const berita = beritaData.find(item => item.id === id)

  if (!berita) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Berita Tidak Ditemukan</h1>
          <Link href="/berita" className="text-blue-600 hover:underline">
            Kembali ke halaman berita
          </Link>
        </div>
      </div>
    )
  }

  const relatedNews = beritaData
    .filter(item => item.id !== id && item.category === berita.category)
    .slice(0, 2)

  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              PortalBerita
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Beranda</Link>
              <Link href="/berita" className="text-blue-600 font-semibold">Berita</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Beranda</Link>
          <span>/</span>
          <Link href="/berita" className="hover:text-blue-600">Berita</Link>
          <span>/</span>
          <span className="text-gray-400">Detail</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <Link 
            href="/berita"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Kembali ke Berita
          </Link>

      
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
              <div className="text-center px-4">
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {berita.category}
                </span>
                <h1 className="text-3xl font-bold">
                  {berita.title}
                </h1>
              </div>
            </div>

     
            <div className="p-8 border-b">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {berita.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {berita.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {berita.readTime}
                  </div>
                </div>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <Share2 size={16} className="mr-2" />
                  Bagikan
                </button>
              </div>
            </div>

        
            <div className="p-8">
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: berita.content }}
              />

          
              {berita.tags && berita.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {berita.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

      
          {relatedNews.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((relatedNews) => (
                  <Link 
                    key={relatedNews.id}
                    href={`/berita/${relatedNews.id}`}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block"
                  >
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {relatedNews.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedNews.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {relatedNews.date}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}