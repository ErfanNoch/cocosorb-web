/**
 * site.config.ts — COCOSORB
 * Single source of truth untuk semua informasi, konten, dan konfigurasi site.
 * Tim: Gaspol
 *
 * Best practice: semua string konten dan data terstruktur ada di sini —
 * komponen hanya mengonsumsi data, tidak hardcode teks di template.
 */

// ─── Brand ──────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'COCOSORB',
  tagline: 'Natural Absorbers & Handicrafts',
  description:
    'Solusi alami pengendali bau berbasis sirkular lokal. Arang aktif tempurung kelapa dalam wadah kriya UMKM nusantara.',
  logoSrc: '/logo.jpeg',
  logoAlt: 'COCOSORB — Natural Absorbers & Handicrafts',
  year: 2026,
  team: 'Gaspol',
} as const;

// ─── SEO / Meta ──────────────────────────────────────────────────────────────

export const SEO = {
  siteUrl: 'https://cocosorb.netlify.app',
  defaultTitle: 'COCOSORB — Solusi Alami Pengendali Bau Berbasis Sirkular Lokal',
  defaultDescription:
    'COCOSORB menggunakan arang aktif dari tempurung kelapa dalam wadah kriya UMKM lokal — menyerap bau secara alami, VOC-free, dan berkelanjutan.',
  ogImage: '/og-image.jpg',
  locale: 'id_ID',
} as const;

// ─── Contact & Social ────────────────────────────────────────────────────────

export const CONTACT = {
  whatsapp: {
    number: '6281234567890',   // ganti dengan nomor aktif
    defaultMessage: 'Halo COCOSORB, saya ingin mengetahui lebih lanjut tentang produk.',
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    },
  },
  email: 'hello@cocosorb.id',
  instagram: 'https://instagram.com/cocosorb',
  tiktok: 'https://tiktok.com/@cocosorb',
  shopee: 'https://shopee.co.id/cocosorb',
  tokopedia: 'https://tokopedia.com/cocosorb',
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Produk', href: '#products' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Ulasan', href: '#testimonials' },
] as const;

// ─── Hero Section ────────────────────────────────────────────────────────────

export const HERO = {
  headline: ['Solusi Alami', 'Pengendali Bau', 'Sirkular Lokal.'],
  headlineAccent: 1, // index baris yang diberi warna accent (italic)
  subheadline:
    'Arang aktif dari tempurung kelapa lokal, dikemas dalam wadah kriya tangan yang indah. Menyerap bau tanpa bahan kimia — untuk udara yang lebih sehat di rumah Anda.',
  badges: ['VOC-Free', 'Arang Tempurung Kelapa', 'Upcycling Limbah'],
  cta: {
    primary: { label: 'Jelajahi Produk', href: '#products' },
    secondary: { label: 'Cara Kerjanya', href: '#how-it-works' },
  },
  stats: [
    { value: '100%', label: 'Bahan Alami' },
    { value: '30+', label: 'Hari Efektif' },
    { value: 'UMKM', label: 'Lokal Berdaya' },
  ],
} as const;

// ─── About / Process Section ─────────────────────────────────────────────────

export const ABOUT = {
  eyebrow: 'Tentang Kami & Misi',
  title: ['Dari Limbah Pertanian,', 'Menuju Udara yang Lebih Bersih.'],
  titleAccent: 1,
  description:
    'Setiap tahun, ribuan ton tempurung kelapa menjadi limbah yang tidak terkelola di perdesaan Indonesia. Kami mengubahnya menjadi solusi sehat untuk udara di ruang-ruang kehidupan Anda.',
  process: [
    {
      id: 'step-1',
      label: 'Limbah Pertanian',
      description:
        'Tempurung kelapa sisa pertanian lokal dikumpulkan dari petani mitra — material yang sebelumnya terbuang atau dibakar sia-sia.',
    },
    {
      id: 'step-2',
      label: 'Pengolahan Arang Aktif',
      description:
        'Tempurung dipirolisis menjadi arang aktif berpori tinggi dengan kapasitas adsorpsi superior terhadap molekul bau seperti NH₃ dan H₂S.',
    },
    {
      id: 'step-3',
      label: 'Kriya Perajin Lokal',
      description:
        'Arang aktif dikemas dalam wadah kerajinan tangan UMKM lokal — estetis, fungsional, dan memberdayakan komunitas pengrajin.',
    },
    {
      id: 'step-4',
      label: 'Produk ke Konsumen',
      description:
        'Produk diterima konsumen dan digunakan hingga habis, lalu isi ulang dibeli — menutup loop sirkular tanpa limbah kemasan baru.',
    },
  ],
  values: [
    {
      id: 'val-circular',
      title: 'Ekonomi Sirkular',
      description:
        'Rantai nilai yang menutup loop: dari pertanian, ke pengolahan, ke produk, ke refill — tanpa pembuangan berlebih.',
    },
    {
      id: 'val-voc',
      title: 'Bebas VOC & Kimia',
      description:
        'Tidak ada pewangi sintetis, tidak ada propellant aerosol — hanya pori-pori arang alami yang mengikat molekul bau.',
    },
    {
      id: 'val-umkm',
      title: 'UMKM Berdaya',
      description:
        'Setiap pembelian mendukung perajin kriya lokal yang membuat wadah produk secara handmade dengan keahlian tradisional.',
    },
  ],
} as const;

// ─── Products ────────────────────────────────────────────────────────────────

export type ProductVariant = 'starter' | 'refill' | 'gift';

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly fullName: string;
  readonly tagline: string;
  readonly description: string;
  readonly imagePlaceholder: string; // warna gradient placeholder
  readonly features: readonly string[];
  readonly tags: readonly string[];
  readonly badge?: string;
  readonly badgeType: 'coconut' | 'sage';
  readonly whatsappMessage: string;
  readonly shopeeUrl?: string;
  readonly tokopediaUrl?: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    id: 'dupa',
    name: 'Room Odor Absorber Dupa',
    fullName: 'COCOSORB Room Odor Absorber Dupa',
    tagline: 'Elegan. Tradisional. Efektif.',
    description:
      'Arang aktif tempurung kelapa dalam wadah dupa estetik. Adsorpsi aktif menarik molekul bau secara pasif — tanpa asap, tanpa parfum sintetis.',
    imagePlaceholder: 'linear-gradient(145deg, #D4C9BC, #B5A897)',
    features: ['Luas area 15–20 m²', 'Efektif 30+ hari', 'Isi ulang tersedia'],
    tags: ['Ruang Tamu', 'Kamar Tidur'],
    badge: 'Terlaris',
    badgeType: 'coconut',
    whatsappMessage: 'Halo COCOSORB, saya ingin memesan Room Odor Absorber Dupa.',
    shopeeUrl: 'https://shopee.co.id/cocosorb',
    tokopediaUrl: 'https://tokopedia.com/cocosorb',
  },
  {
    id: 'pouch',
    name: 'Room Odor Absorber Pouch',
    fullName: 'COCOSORB Room Odor Absorber Pouch',
    tagline: 'Praktis. Fleksibel. Tersembunyi.',
    description:
      'Kantong arang aktif dalam kain perca lokal. Dirancang untuk lemari pakaian, laci, atau kabin mobil — di mana pun bau bersembunyi.',
    imagePlaceholder: 'linear-gradient(145deg, #C8C5B8, #A8A59A)',
    features: ['Fleksibel multi-ruang', 'Dapat diregenerasi matahari', 'Isi ulang tersedia'],
    tags: ['Lemari', 'Sepatu', 'Kabin Mobil'],
    badge: 'Serbaguna',
    badgeType: 'sage',
    whatsappMessage: 'Halo COCOSORB, saya ingin memesan Room Odor Absorber Pouch.',
    shopeeUrl: 'https://shopee.co.id/cocosorb',
    tokopediaUrl: 'https://tokopedia.com/cocosorb',
  },
  {
    id: 'artisan',
    name: 'Artisan Holder',
    fullName: 'COCOSORB Artisan Holder',
    tagline: 'Kerajinan. Karakter. Berkelanjutan.',
    description:
      'Wadah arang aktif handmade dari perajin lokal. Setiap piece unik — perpaduan fungsi udara bersih dan estetika kriya nusantara.',
    imagePlaceholder: 'linear-gradient(145deg, #BFB49F, #A09080)',
    features: ['Handmade UMKM lokal', 'Dekorasi + fungsi', 'Isi ulang tersedia'],
    tags: ['Dekorasi', 'Hadiah'],
    badge: 'Edisi Kriya',
    badgeType: 'coconut',
    whatsappMessage: 'Halo COCOSORB, saya ingin memesan Artisan Holder.',
    shopeeUrl: 'https://shopee.co.id/cocosorb',
    tokopediaUrl: 'https://tokopedia.com/cocosorb',
  },
  {
    id: 'gift-set',
    name: 'Gift Set',
    fullName: 'COCOSORB Gift Set',
    tagline: 'Hadiah Bermakna. Dampak Nyata.',
    description:
      'Paket kompilasi terkurasi — Artisan Holder dan Pouch dalam kotak hadiah premium daur ulang. Pilihan suvenir yang bercerita.',
    imagePlaceholder: 'linear-gradient(145deg, #C9C0B0, #AFA398)',
    features: ['Kemasan hadiah premium', 'Kombinasi 2–3 produk', 'Kartu pesan personal'],
    tags: ['Suvenir', 'Hadiah', 'Korporat'],
    badge: 'Edisi Spesial',
    badgeType: 'sage',
    whatsappMessage: 'Halo COCOSORB, saya ingin memesan Gift Set.',
    shopeeUrl: 'https://shopee.co.id/cocosorb',
    tokopediaUrl: 'https://tokopedia.com/cocosorb',
  },
] as const;

// ─── How It Works Section ────────────────────────────────────────────────────

export const HOW_IT_WORKS = {
  eyebrow: 'Cara Kerja',
  title: ['Bukan Sekadar Wangi.', 'Benar-Benar Menyerap Bau.'],
  titleAccent: 1,
  intro:
    'Kebanyakan produk pengharum hanya "menutupi" bau dengan wangi yang lebih kuat. COCOSORB bekerja secara saintifik: mengikat molekul bau di dalam pori-pori arang aktif.',
  comparison: {
    bad: {
      method: 'Masking',
      subtitle: 'Pengharum Kimia Konvensional',
      description:
        'Menyemprotkan molekul wangi sintetis yang menutupi bau — bukan menghilangkannya. Bau asli tetap ada, ditambah risiko VOC yang memicu alergi dan iritasi saluran napas.',
      points: [
        'Mengandung senyawa kimia sintetis (VOC)',
        'Bau kembali setelah efek wangi habis',
        'Berpotensi memicu alergi & iritasi',
        'Plastik aerosol sulit didaur ulang',
      ],
    },
    good: {
      method: 'Adsorpsi Aktif',
      subtitle: 'Teknologi COCOSORB',
      description:
        'Pori-pori mikro arang aktif tempurung kelapa secara fisik menangkap dan mengikat molekul bau — NH₃, H₂S, dll — langsung dari udara. Tidak ada wangi tiruan yang tersisa.',
      points: [
        '100% bahan alam, zero VOC',
        'Menghilangkan molekul bau sesungguhnya',
        'Aman untuk bayi, lansia, dan hewan peliharaan',
        'Kemasan dapat diisi ulang & didaur ulang',
      ],
    },
  },
  lifespanSteps: [
    {
      id: 'ls-1',
      step: 1,
      title: 'Aktifkan Produk',
      description:
        'Keluarkan dari kemasan, letakkan di ruangan target. Arang aktif langsung bekerja secara pasif tanpa perlu aktivasi khusus.',
    },
    {
      id: 'ls-2',
      step: 2,
      title: 'Gunakan Selama 30+ Hari',
      description:
        'Satu refill efektif 30–45 hari bergantung ukuran ruangan dan kelembaban udara. Performa optimal pada bulan pertama.',
    },
    {
      id: 'ls-3',
      step: 3,
      title: 'Regenerasi Berkala',
      description:
        'Jemur di bawah sinar matahari langsung 1–2 jam per bulan untuk melepaskan sebagian molekul yang terserap dan memperpanjang umur pakai.',
    },
    {
      id: 'ls-4',
      step: 4,
      title: 'Isi Ulang — Zero Waste',
      description:
        'Ketika efektivitas mulai menurun, cukup beli Refill Pack. Wadah Artisan Holder Anda tetap digunakan — tidak perlu ganti kemasan.',
    },
  ],
} as const;

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly initials: string;
  readonly rating: number;
  readonly text: string;
  readonly tags: readonly string[];
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rahma D.',
    role: 'Ibu Rumah Tangga, Jakarta Selatan',
    initials: 'RD',
    rating: 5,
    text: 'Lemari pakaian saya dulu selalu bau lembab. Setelah pasang COCOSORB Pouch, dalam 3 hari baunya hilang. Yang bikin senang, tidak ada wangi tiruan — beneran bersih.',
    tags: ['Lemari', 'Pouch'],
  },
  {
    id: 'testi-2',
    name: 'Bima P.',
    role: 'Mahasiswa Arsitektur, Bandung',
    initials: 'BP',
    rating: 5,
    text: 'Kamar kost saya sempit dan sering bau apek. Artisan Holder-nya juga jadi hiasan meja. Dua fungsi sekaligus — dekorasi yang benar-benar berguna.',
    tags: ['Artisan Holder', 'Kamar'],
  },
  {
    id: 'testi-3',
    name: 'Sari K.',
    role: 'Pemilik Butik, Yogyakarta',
    initials: 'SK',
    rating: 5,
    text: 'Saya order Gift Set untuk hampers karyawan. Tampilannya premium, dan ceritanya tentang upcycling bikin penerimanya terkesan. Pasti repeat order.',
    tags: ['Gift Set', 'Korporat'],
  },
  {
    id: 'testi-4',
    name: 'Andi R.',
    role: 'Penggemar Otomotif, Surabaya',
    initials: 'AR',
    rating: 5,
    text: 'Saya taruh Pouch di kabin mobil. Bau rokok bekas dari pemilik sebelumnya akhirnya hilang dalam 2 minggu. Jauh lebih baik dari parfum gantung biasa.',
    tags: ['Pouch', 'Kabin Mobil'],
  },
] as const;

export const LAB_RESULT = {
  percentage: '87%',
  description:
    'COCOSORB telah melalui uji penyerapan bau terhadap senyawa amonia (NH₃) dan hidrogen sulfida (H₂S). Hasil menunjukkan pengurangan konsentrasi hingga 87% dalam kondisi ruang tertutup selama 24 jam.',
  label: 'Pengurangan Bau (Uji Lab Independen)',
} as const;

// ─── Footer ──────────────────────────────────────────────────────────────────

export const FOOTER_NAV = [
  {
    title: 'Produk',
    links: [
      { label: 'Room Odor Absorber Dupa', href: '#product-dupa' },
      { label: 'Room Odor Absorber Pouch', href: '#product-pouch' },
      { label: 'Artisan Holder', href: '#product-artisan' },
      { label: 'Gift Set', href: '#product-gift-set' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Cara Kerja', href: '#how-it-works' },
      { label: 'Ulasan', href: '#testimonials' },
    ],
  },
] as const;
