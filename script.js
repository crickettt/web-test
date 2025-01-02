window.onload = function() {
  var audio = document.getElementById('audio');
  var image = document.getElementById('image');

  // Tambahkan event listener untuk interaksi pengguna (misalnya klik gambar)
  image.addEventListener('click', function() {
    audio.play().catch(function(error) {
      console.log('Autoplay gagal, mencoba untuk memutar audio secara manual: ', error);
      audio.muted = false; // Pastikan audio tidak dimute jika autoplay gagal
      audio.play();
    });
  });
};
