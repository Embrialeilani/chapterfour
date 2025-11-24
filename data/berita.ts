// data/berita.ts
export interface Berita {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const beritaData: Berita[] = [
  {
    id: 1,
    title: "Pemkot Madiun tetapkan lingkungan PSC dan PRC kawasan bebas rokok",
    excerpt: "Proyek pembangunan infrastruktur transportasi massal telah mencapai 75% penyelesaian dan ditargetkan selesai akhir tahun ini.",
    content: `
      <p>Pemerintah Kota (Pemkot) Madiun, Jawa Timur menetapkan lingkungan 
      Pahlawan Street Center (PSC) dan Pahlawan Religi Center (PRC) menjadi kawasan bebas asap rokok 
      yang berlaku mulai 1 Januari 2026.</p> <br />
      
      <p>Kepala Dinas Kesehatan, Pengendalian Penduduk dan Keluarga Berencana (Dinkes PPKB) 
      Kota Madiun dr. Denik Wuryani di Madiun, Rabu mengatakan penetapan tersebut tertuang dalam Peraturan Daerah (Perda)
       Nomor 9 tahun 2025 tentang Kawasan Tanpa Rokok (KTR).</p> <br />
      
      <p>"PSC dan PRC adalah area strategis dengan aktivitas publik yang tinggi. Karena itu penting untuk menetapkannya sebagai kawasan tanpa rokok," ujar Denik.</p> <br />
      
      <p>Menurutnya, penetapan kawasan tanpa rokok di area wisata Kota Madiun PSC dan PRC yang terdapat sejumlah miniatur ikon negara seperti Patung Merlion, Patung Liberty, Menara Eiffel, 
      dan Masjid Ka'bah tersebut bertujuan mewujudkan lingkungan sehat tanpa asap rokok di area publik.</p> <br />
      
      <p>Bukan hanya larangan untuk merokok, Denik menyebut Perda Nomor 9 tahun 2025 juga melarang tiap orang mengiklankan, mempromosikan, memberikan sponsor, memproduksi atau membuat, menjual, 
      membeli produk rokok tembakau dan elektronik.</p> <br />

      <p>"Jika tidak dipatuhi, pelanggar dikenai sanksi sesuai peraturan perundang-undangan yang berlaku. Akan ada tempat khusus bagi perokok nantinya," kata dia.</p> <br />

      <p>Denik berharap kebijakan tersebut dapat meningkatkan kesadaran masyarakat tentang pentingnya menjaga udara bersih serta melindungi warga dari bahaya asap rokok. Khususnya di kawasan
       yang menjadi ikon wisata dan pusat aktivitas publik di Kota Madiun.</p> <br />
    `,
    category: "Lingkungan",
    author: "GreendMind Journal",
    date: "2024-01-15",
    readTime: "3 min read",
    image: "/img/Lingkungan.jpeg",
    tags: ["lingkungan", "Pahlawan Street Center (PSC", "BebasRokok", "Pemkot madiun"]
  },
  {
    id: 2,
    title: "Program Konservasi Mangrove di Pesisir Demak Ditingkatkan untuk Cegah Abrasi",
    excerpt: "Penanaman 2.000 bibit mangrove di pesisir Demak digelar untuk memulihkan ekosistem pantai dan menekan laju abrasi.",
    content: `
      <p>Demak, 23 November 2025 — Pemerintah Kabupaten Demak bersama komunitas pecinta lingkungan menggelar program penanaman 2.000 bibit mangrove di wilayah pesisir 
      Desa Bedono, Sabtu (22/11). Kegiatan ini dilakukan sebagai upaya pelestarian ekosistem pesisir sekaligus mencegah abrasi yang terus meningkat dalam beberapa tahun terakhir.</p> <br />
      
      <p>Kepala Dinas Lingkungan Hidup Demak, Siti Hariani, mengatakan bahwa penurunan tutupan vegetasi pesisir menjadi salah satu faktor utama kerusakan garis pantai. “Mangrove memiliki peran penting dalam menahan gelombang laut, menjaga habitat biota, dan mengurangi risiko banjir rob. Konservasi ini 
      bukan hanya isu lingkungan, tapi juga ekonomi masyarakat pesisir,” ujarnya.</p> <br />

      <p>Selain pemerintah daerah, aksi penanaman mangrove juga melibatkan lebih dari 300 relawan, mulai dari pelajar, komunitas pecinta alam, hingga nelayan setempat. Para peserta mendapatkan edukasi mengenai pentingnya konservasi dan cara penanaman 
      mangrove yang benar agar tingkat keberhasilan tumbuh lebih tinggi.</p> <br />

      <p>Ketua Komunitas Hijau Nusantara, Damar Pradipta, berharap kegiatan ini dapat dilakukan secara berkelanjutan. “Konservasi tidak berhenti hanya pada penanaman. Perawatan lanjutan dan pengawasan masyarakat sangat penting agar ekosistem mangrove kembali pulih,” jelasnya.</p> <br />

      <p>Warga pesisir menyambut baik program ini karena abrasi telah mengikis lahan pemukiman dan tambak selama lebih dari satu dekade. Dengan adanya penanaman mangrove, masyarakat berharap daerah pesisir lebih terlindungi dan dapat kembali produktif.</p> <br />   

      <p>Program ini direncanakan berlangsung hingga akhir tahun dengan target total penanaman 10.000 bibit mangrove di sepanjang pesisir utara Kabupaten Demak.</p> <br />   

    `,
    category: "Konservasi",
    author: "GreendMind Journal",
    date: "2024-01-14",
    readTime: "4 min read",
    image: "/img/gambar 1.png",
    tags: ["konservasi", "EcoFriendly"]
  },
  {
    id: 3,
    title: "Gelombang Panas Melanda Asia Tenggara, Ahli Peringatkan Dampak Perubahan Iklim Meningkat",
    excerpt: "Gelombang panas ekstrem di Asia Tenggara menjadi bukti nyata dampak perubahan iklim yang semakin mengkhawatirkan.",
    content: `
      <p>Jakarta, 23 November 2025 — Serangkaian gelombang panas ekstrem melanda wilayah Asia Tenggara dalam dua pekan terakhir. 
      Beberapa negara, termasuk Indonesia, Malaysia, dan Thailand, mencatat suhu harian mencapai lebih dari 40°C, m
      eningkatkan risiko dehidrasi, gagal panen, hingga gangguan kesehatan masyarakat.</p> <br /> 
      
      <p>Fenomena ini disebut para peneliti sebagai salah satu konsekuensi langsung perubahan iklim global. Pemanasan suhu permukaan laut, berkurangnya tutupan hutan,
       serta emisi gas rumah kaca menjadi pemicu utama peningkatan suhu ekstrem.</p> <br /> 
      
      <p>Pakar klimatologi Universitas Indonesia, Dr. Raka Pradipta, mengatakan gelombang panas 
      ini diprediksi semakin sering terjadi. “Jika tidak ada penurunan signifikan dalam emisi karbon, gelombang panas 
      ekstrem dapat menjadi kondisi normal dalam beberapa dekade mendatang,” ujarnya.</p> <br /> 

      <p>Selain berdampak pada kesehatan, sektor pertanian juga terancam. Petani di wilayah Jawa Tengah melaporkan berkurangnya 
      hasil panen padi akibat kekeringan dan kurangnya pasokan air irigasi.</p> <br /> 
      
      <p>Pemerintah daerah dan organisasi lingkungan mengimbau masyarakat untuk mengurangi aktivitas luar ruangan, menjaga hidrasi, serta mendorong langkah mitigasi jangka panjang seperti 
      penghijauan, penggunaan energi terbarukan, dan pengurangan polusi industri.</p> <br /> 

      <p>Gelombang panas ini diperkirakan masih berlanjut hingga awal Desember, bergantung pada pola angin dan kondisi atmosfer regional.</p> <br /> 
    `,
    category: "Perubahan Iklim",
    author: "GreendMind Journal",
    date: "2024-01-13",
    readTime: "2 min read",
    image: "/img/perubahan iklim.jpeg",
    tags: ["PerubahanIklim", "GlobalWarming"]
  },
  {
    id: 4,
    title: "Populasi Harimau Sumatra Meningkat, Upaya Konservasi Mulai Berbuah Hasil",
    excerpt: "Populasi harimau Sumatra di Taman Nasional Gunung Leuser dilaporkan meningkat berkat penguatan pengawasan dan kolaborasi masyarakat dalam upaya konservasi.",
    content: `
      <p>Aceh, 23 November 2025 — Balai Konservasi Sumber Daya Alam (BKSDA) Aceh melaporkan peningkatan populasi harimau Sumatra di kawasan Taman Nasional Gunung Leuser. 
      Berdasarkan hasil survei kamera jebak yang dilakukan sepanjang 2024–2025, ditemukan setidaknya enam individu baru, termasuk dua anak harimau.</p> <br />
      
      <p>Kepala BKSDA Aceh, Rahmat Hidayat, menyebut peningkatan populasi ini dipengaruhi oleh penurunan aktivitas perburuan liar serta penguatan pengawasan kawasan konservasi. 
      “Selama dua tahun terakhir kami meningkatkan patroli dan memperketat hukuman bagi pemburu ilegal. Hasilnya terlihat positif,” ujarnya.</p> <br />

      <p>Selain pengawasan, kolaborasi dengan masyarakat lokal menjadi faktor penting. Kelompok masyarakat adat dan relawan lingkungan turut membantu menjaga kawasan 
      hutan serta melaporkan aktivitas mencurigakan yang berpotensi mengancam satwa liar.</p> <br />

      <p>Meski begitu, harimau Sumatra masih tergolong kritis menurut daftar IUCN, dengan ancaman utama berupa pembukaan lahan, konflik dengan manusia,
      dan perdagangan ilegal bagian tubuh satwa.</p> <br />

      <p>Pihak konservasi berharap peningkatan populasi ini menjadi momentum untuk memperluas upaya pelestarian. Pemerintah juga berencana menambah jalur koridor 
      satwa untuk menghubungkan habitat yang terfragmentasi.</p> <br />
    `,
    category: "Satwa Liar",
    author: "GreendMind Journal",
    date: "2024-01-12",
    readTime: "3 min read",
    image: "/img/harimau sumatra.jpeg",
    tags: ["SaveWildlife", "LindungiSatwa", "Harimau Sumatra"]
  },
  {
    id: 5,
    title: "Indonesia Percepat Transisi Energi Terbarukan, Pembangunan PLTS Terapung Mulai Diperluas",
    excerpt: "Proyek PLTS terapung di Waduk Cirata diperluas sebagai bagian dari percepatan transisi energi terbarukan untuk mengurangi ketergantungan Indonesia pada bahan bakar fosil.",
    content: `
      <p>Jakarta, 23 November 2025 — Pemerintah Indonesia terus mempercepat transisi menuju energi ramah lingkungan melalui pembangunan Pembangkit 
      Listrik Tenaga Surya (PLTS) terapung di sejumlah wilayah. Proyek terbaru yang berlokasi di Waduk Cirata, Jawa Barat, kini memasuki tahap ekspansi dengan penambahan kapasitas hingga 150 megawatt.</p> <br />
      
      <p>Kementerian Energi dan Sumber Daya Mineral (ESDM) menyatakan bahwa perluasan ini menjadi langkah penting untuk mengurangi ketergantungan pada energi fosil. 
      Selain efisien, instalasi panel surya di atas permukaan air membantu mengurangi penguapan sekaligus meningkatkan efisiensi energi karena suhu air yang lebih rendah.</p> <br />

      <p>Menurut Direktur Energi Baru dan Terbarukan ESDM, Ardiansyah Putra, upaya ini menjadi bagian dari target Indonesia mencapai bauran energi bersih sebesar 31% pada tahun 2030. “PLTS terapung membuka peluang besar, terutama di daerah dengan lahan terbatas. 
      Teknologi ini akan terus didorong dalam proyek energi hijau nasional,” ujarnya.</p> <br />

      <p>Selain pemerintah, sektor swasta juga turut berinvestasi dalam teknologi energi hijau melalui pembangunan farm angin di Nusa Tenggara dan peningkatan kapasitas PLTA di Sumatra Utara. Para ahli menilai kolaborasi pemerintah 
      dan swasta sangat penting agar percepatan transisi energi berjalan optimal.</p> <br />

      <p>Meskipun demikian, tantangan masih muncul pada sektor pendanaan, regulasi perizinan, serta kebutuhan jaringan listrik yang mampu menampung produksi 
      energi variatif dari sumber terbarukan.</p> <br />
    `,
    category: "Energi Terbarukan",
    author: "GreendMind Journal",
    date: "2024-01-11",
    readTime: "4 min read",
    image: "/img/Energi Terbarukan.jpeg",
    tags: ["EnerfyRenewble", "GreenEnergy"]
  },
  {
    id: 6,
    title: "Kualitas Udara Jakarta Memburuk, Polusi Partikulat PM2.5 Melampaui Batas Aman",
    excerpt: "Kualitas udara Jakarta memburuk dengan kadar PM2.5 melebihi batas aman, dipicu emisi kendaraan dan aktivitas industri.",
    content: `
      <p>Jakarta, 23 November 2025 — Kualitas udara di Jakarta kembali menunjukkan level tidak sehat setelah konsentrasi partikel PM2.5 tercatat melebihi ambang batas aman yang direkomendasikan
       Organisasi Kesehatan Dunia (WHO). Data pemantauan udara pada Jumat (22/11) menunjukkan kadar PM2.5 mencapai angka 92 µg/m³, jauh di atas standar WHO yang hanya 15 µg/m³.</P> <br />

      <p>Peningkatan polusi udara diduga dipicu oleh emisi kendaraan bermotor, kegiatan industri di wilayah penyangga, serta kondisi cuaca yang membuat
       polutan terperangkap di permukaan kota. Sejumlah warga melaporkan kabut asap tipis terlihat sejak pagi hari di beberapa kawasan seperti Sudirman, Kemayoran, dan Pluit.</P> <br />

      <p>Pakar lingkungan Universitas Nasional, Dr. Nadia Wijaya, menilai situasi ini perlu ditangani dengan langkah yang lebih tegas. “Transportasi merupakan penyumbang terbesar polusi di Jakarta. 
      Perlu percepatan menuju kendaraan rendah emisi serta penguatan ruang terbuka hijau,” ujarnya.</P> <br />

      <p>Pemerintah Provinsi DKI Jakarta menyebut sedang menyiapkan langkah mitigasi seperti pengecekan emisi massal, pembatasan kendaraan berbahan bakar fosil secara bertahap, serta peningkatan transportasi publik ramah lingkungan. Selain itu, masyarakat diimbau untuk menggunakan masker saat
       beraktivitas di luar ruangan serta mengurangi kegiatan fisik berat di area terbuka.</P> <br />

      <p>Kondisi kualitas udara diprediksi fluktuatif dalam beberapa hari ke depan tergantung pola angin dan aktivitas kendaraan pada jam sibuk.</P> <br />
    `,
    category: "Polusi",
    author: "GreendMind Journal",
    date: "2024-01-10",
    readTime: "3 min read",
    image: "/img/Polusi.jpeg",
    tags: ["AirPollution", "KurangiPolusi"]
  }
];
