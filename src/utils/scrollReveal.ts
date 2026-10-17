/**
 * COCOSORB — Scroll Reveal Utility
 * Menggunakan IntersectionObserver untuk trigger animasi
 * saat elemen masuk ke viewport.
 *
 * Usage: tambahkan class `reveal` + opsional `delay-{n}` pada element.
 * Script ini dipanggil sekali dari BaseLayout.
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Stop observing setelah reveal — performa lebih baik
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,       // Trigger saat 10% elemen terlihat
      rootMargin: '0px 0px -48px 0px', // Sedikit offset agar tidak terlalu awal
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}
