document.addEventListener('DOMContentLoaded', () => {
  // 1. Fitur Toggle Navbar Mobile
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // 2. Fitur Penanganan Form Kontak (Halaman Kontak)
  const contactForm = document.getElementById('contactForm');
  const notification = document.getElementById('formNotification');

  if (contactForm && notification) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('nama').value;

      // Menampilkan Notifikasi Sukses
      notification.textContent = `Terima kasih, ${nama}! Pesan Anda berhasil dikirim.`;
      notification.classList.remove('hidden');

      // Reset Form
      contactForm.reset();

      // Sembunyikan Notifikasi setelah 5 detik
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 5000);
    });
  }
});