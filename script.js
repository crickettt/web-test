// Fungsi untuk menampilkan gambar dan audio saat tombol klaim diklik
document.getElementById('claimButton').addEventListener('click', function() {
  // Menyembunyikan tombol claim setelah diklik
  this.style.display = 'none';

  // Menampilkan gambar dan audio
  var imageContainer = document.getElementById('imageContainer');
  var audio = document.getElementById('audio');

  // Menambahkan kelas untuk menampilkan gambar dan audio
  imageContainer.classList.remove('hidden');
  audio.classList.remove('hidden');

  // Menggerakkan gambar dengan animasi geser
  setTimeout(function() {
    imageContainer.style.transform = 'translateY(100px)';
  }, 100);

  // Memutar audio jika autoplay gagal
  audio.play().catch(function(error) {
    console.log('Autoplay gagal, mencoba untuk memutar audio secara manual: ', error);
    audio.muted = false;
    audio.play();
  });
});
