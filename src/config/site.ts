/**
 * site.config.ts - COCOSORB
 * Single source of truth untuk semua informasi, konten, dan konfigurasi site.
 * Tim: Gaspol
 *
 * Best practice: semua string konten dan data terstruktur ada di sini -
 * komponen hanya mengonsumsi data, tidak hardcode teks di template.
 */

// ─── Brand ──────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'COCOSORB',
  tagline: 'Natural Absorbers & Handicrafts',
  description:
    'Solusi alami pengendali bau berbasis sirkular lokal. Arang aktif tempurung kelapa dalam wadah kriya UMKM nusantara.',
  logoSrc: '/logo.jpeg',
  logoAlt: 'COCOSORB - Natural Absorbers & Handicrafts',
  year: 2026,
  team: 'Gaspol',
} as const;

// ─── SEO / Meta ──────────────────────────────────────────────────────────────

export const SEO = {
  siteUrl: 'https://cocosorb.netlify.app',
  defaultTitle: 'COCOSORB - Solusi Alami Pengendali Bau Berbasis Sirkular Lokal',
  defaultDescription:
    'COCOSORB menggunakan arang aktif dari tempurung kelapa dalam wadah kriya UMKM lokal - menyerap bau secara alami, VOC-free, dan berkelanjutan.',
  ogImage: '/og-image.jpg',
  locale: 'id_ID',
} as const;

// ─── Contact & Social ────────────────────────────────────────────────────────

export const CONTACT = {
  whatsapp: {
    number: '6281234567890', // Ganti dengan nomor WhatsApp resmi
    defaultMessage: 'Halo COCOSORB, saya ingin mengetahui lebih lanjut tentang produk Anda.',
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    },
  },
  email: 'hello@cocosorb.id',
  instagram: 'https://instagram.com/cocosorb',
  tiktok: 'https://tiktok.com/@cocosorb',
  shopee: 'https://shopee.co.id/cocosorb',
  tokopedia: 'https://tokopedia.com/cocosorb',
  address: 'Indonesia',
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Produk', href: '#products' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Ulasan', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
] as const;

// ─── Hero Section ────────────────────────────────────────────────────────────

export const HERO = {
  headline: ['Solusi Alami', 'Pengendali Bau', 'Sirkular Lokal.'],
  headlineAccent: 1, // index baris yang diberi warna accent (italic)
  subheadline:
    'Arang aktif dari tempurung kelapa lokal, dikemas dalam wadah kriya tangan yang indah. Menyerap bau tanpa bahan kimia - untuk udara yang lebih sehat di rumah Anda.',
  badges: ['VOC-Free', 'Arang Tempurung Kelapa', 'Sirkular Berkelanjutan'],
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
  title: ['Dari Residu Alami Lokal,', 'Menuju Udara yang Lebih Bersih.'],
  titleAccent: 1,
  description:
    'Material organik dan biomassa lokal yang belum termanfaatkan sering kali terbuang atau mencemari lingkungan. Kami mengolahnya menjadi penyerap bau alami berdaya guna tinggi dalam balutan kriya nusantara.',
  process: [
    {
      id: 'step-1',
      label: 'Biomassa & Residu Alami',
      shortLabel: 'Residu Alami',
      description:
        'Pemanfaatan residu biomassa lokal dan tempurung kelapa dari mitra terpercaya - material organik berharga yang sebelumnya terbuang atau dibakar tanpa nilai tambah.',
    },
    {
      id: 'step-2',
      label: 'Pengolahan Arang Aktif',
      shortLabel: 'Arang Aktif',
      description:
        'Biomassa dipirolisis dan diaktivasi menjadi karbon berpori mikro tinggi dengan kapasitas adsorpsi superior terhadap molekul bau seperti amonia (NH3) dan hidrogen sulfida (H2S).',
    },
    {
      id: 'step-3',
      label: 'Kriya Perajin Lokal',
      shortLabel: 'Kriya Lokal',
      description:
        'Arang aktif dikemas dalam wadah kerajinan tangan UMKM lokal - estetis, fungsional, dan memberdayakan komunitas pengrajin tradisional nusantara.',
    },
    {
      id: 'step-4',
      label: 'Produk ke Konsumen',
      shortLabel: 'Ke Konsumen',
      description:
        'Produk hadir di rumah Anda untuk menyerap bau secara pasif. Saat kapasitas jenuh tercapai, gunakan kemasan isi ulang untuk menutup siklus sirkular tanpa sampah baru.',
    },
  ],
  values: [
    {
      id: 'val-circular',
      title: 'Ekonomi Sirkular',
      description:
        'Rantai nilai yang menutup siklus: dari residu alami, pengolahan arang aktif, wadah kriya, hingga isi ulang berkala tanpa limbah kemasan baru.',
    },
    {
      id: 'val-voc',
      title: 'Bebas VOC & Kimia',
      description:
        'Tidak ada pewangi sintetis, tidak ada propellant aerosol berbahaya - murni pori-pori arang alami yang mengikat molekul bau sesungguhnya.',
    },
    {
      id: 'val-umkm',
      title: 'UMKM Berdaya',
      description:
        'Setiap produk mendukung perajin kriya lokal yang menciptakan wadah dengan ketelitian tangan dan keahlian warisan budaya.',
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
  readonly imagePlaceholder: string;
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
      'Arang aktif tempurung kelapa dalam wadah dupa estetik. Adsorpsi aktif menarik molekul bau secara pasif - tanpa asap, tanpa parfum sintetis.',
    imagePlaceholder: 'linear-gradient(145deg, #D4C9BC, #B5A897)',
    features: ['Luas area 15-20 m²', 'Efektif 30+ hari', 'Isi ulang tersedia'],
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
      'Kantong arang aktif dalam kain perca lokal. Dirancang untuk lemari pakaian, laci, atau kabin mobil - di mana pun bau bersembunyi.',
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
      'Wadah arang aktif handmade dari perajin lokal. Setiap piece unik - perpaduan fungsi udara bersih dan estetika kriya nusantara.',
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
      'Paket kompilasi terkurasi - Artisan Holder dan Pouch dalam kotak hadiah premium ramah lingkungan. Pilihan suvenir berkelas yang memiliki narasi.',
    imagePlaceholder: 'linear-gradient(145deg, #C9C0B0, #AFA398)',
    features: ['Kemasan hadiah premium', 'Kombinasi 2-3 produk', 'Kartu pesan personal'],
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
    'Kebanyakan produk pengharum hanya "menutupi" bau dengan wangi yang lebih tajam. COCOSORB bekerja secara saintifik: mengikat molekul bau di dalam pori-pori arang aktif.',
  comparison: {
    bad: {
      method: 'Masking',
      subtitle: 'Pengharum Kimia Konvensional',
      description:
        'Menyemprotkan molekul wangi sintetis yang menutupi bau - bukan menghilangkannya. Bau asli tetap ada, ditambah risiko VOC yang memicu alergi dan iritasi saluran napas.',
      points: [
        'Mengandung senyawa kimia sintetis (VOC)',
        'Bau kembali setelah efek wangi habis',
        'Berpotensi memicu alergi dan iritasi',
        'Limbah kemasan aerosol sulit didaur ulang',
      ],
    },
    good: {
      method: 'Adsorpsi Aktif',
      subtitle: 'Teknologi COCOSORB',
      description:
        'Pori-pori mikro arang aktif tempurung kelapa secara fisik menangkap dan mengikat molekul bau seperti NH3 dan H2S langsung dari udara. Tidak ada wangi tiruan yang tersisa.',
      points: [
        '100% bahan alami, zero VOC',
        'Menghilangkan molekul bau sesungguhnya',
        'Aman untuk bayi, lansia, dan hewan peliharaan',
        'Kemasan dapat diisi ulang dan didaur ulang',
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
        'Satu refill efektif 30-45 hari bergantung pada ukuran ruangan dan sirkulasi udara. Performa optimal pada bulan pertama.',
    },
    {
      id: 'ls-3',
      step: 3,
      title: 'Regenerasi Berkala',
      description:
        'Jemur di bawah sinar matahari langsung 1-2 jam per bulan untuk melepaskan sebagian uap air dan memperpanjang masa aktif pori-pori arang.',
    },
    {
      id: 'ls-4',
      step: 4,
      title: 'Isi Ulang - Zero Waste',
      description:
        'Ketika efektivitas mulai menurun, cukup beli Refill Pack. Wadah Artisan Holder Anda tetap digunakan tanpa perlu ganti kemasan baru.',
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
    text: 'Lemari pakaian saya dulu selalu bau lembap. Setelah pasang COCOSORB Pouch, dalam 3 hari baunya hilang. Yang bikin senang, tidak ada wangi tiruan - beneran bersih netral.',
    tags: ['Lemari', 'Pouch'],
  },
  {
    id: 'testi-2',
    name: 'Bima P.',
    role: 'Mahasiswa Arsitektur, Bandung',
    initials: 'BP',
    rating: 5,
    text: 'Kamar kost saya sempit dan sering bau apek. Artisan Holder-nya juga jadi hiasan meja. Dua fungsi sekaligus - dekorasi yang benar-benar berguna.',
    tags: ['Artisan Holder', 'Kamar'],
  },
  {
    id: 'testi-3',
    name: 'Sari K.',
    role: 'Pemilik Butik, Yogyakarta',
    initials: 'SK',
    rating: 5,
    text: 'Saya order Gift Set untuk hampers rekanan. Tampilannya premium, dan narasinya tentang upcycling biomassa lokal bikin penerimanya terkesan. Pasti repeat order.',
    tags: ['Gift Set', 'Korporat'],
  },
  {
    id: 'testi-4',
    name: 'Andi R.',
    role: 'Penggemar Otomotif, Surabaya',
    initials: 'AR',
    rating: 5,
    text: 'Saya taruh Pouch di kabin mobil. Bau apek bekas pemilik sebelumnya akhirnya hilang dalam 2 minggu. Jauh lebih nyaman daripada pengharum gantung berbahan kimia.',
    tags: ['Pouch', 'Kabin Mobil'],
  },
] as const;

export const LAB_RESULT = {
  percentage: '87%',
  description:
    'COCOSORB telah melalui uji adsorpsi penyerapan bau terhadap senyawa amonia (NH3) dan hidrogen sulfida (H2S). Hasil menunjukkan penurunan konsentrasi hingga 87% dalam kondisi ruang tertutup selama 24 jam.',
  label: 'Penurunan Bau (Uji Efektivitas Terukur)',
} as const;

// ─── Contact Section ─────────────────────────────────────────────────────────

export const CONTACT_SECTION = {
  eyebrow: 'Hubungi Kami',
  title: ['Mari Berkolaborasi &', 'Dapatkan Solusi Ruang Anda.'],
  titleAccent: 0,
  description:
    'Ingin memesan dalam jumlah khusus, bermitra sebagai reseller UMKM, atau memiliki pertanyaan seputar produk COCOSORB? Tim kami siap membantu.',
  form: {
    nameLabel: 'Nama Lengkap',
    namePlaceholder: 'contoh: Budi Pratama',
    contactLabel: 'Email / Nomor WhatsApp',
    contactPlaceholder: 'contoh: budi@gmail.com atau 0812xxxxxxx',
    categoryLabel: 'Tipe Kebutuhan',
    categories: [
      'Pembelian Retail / Personal',
      'Pesanan Custom / Gift Set / Souvenir',
      'Kemitraan UMKM & Reseller',
      'Konsultasi Produk / Pertanyaan Lain',
    ],
    messageLabel: 'Pesan Anda',
    messagePlaceholder: 'Tuliskan detail pesanan, jumlah, atau pertanyaan Anda di sini...',
    submitLabel: 'Kirim Pesan',
  },
  quickCards: [
    {
      title: 'WhatsApp Resmi',
      value: '+62 812-3456-7890',
      actionText: 'Kirim Chat Langsung',
      type: 'whatsapp',
    },
    {
      title: 'Email Resmi',
      value: 'hello@cocosorb.id',
      actionText: 'Kirim Email',
      type: 'email',
    },
    {
      title: 'Pemesanan Kriya Custom',
      value: 'Tersedia untuk Souvenir & Hampers',
      actionText: 'Diskusikan Kebutuhan',
      type: 'custom',
    },
  ],
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
    title: 'Navigasi',
    links: [
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Cara Kerja', href: '#how-it-works' },
      { label: 'Ulasan Pengguna', href: '#testimonials' },
      { label: 'Kontak & Form', href: '#contact' },
    ],
  },
] as const;
