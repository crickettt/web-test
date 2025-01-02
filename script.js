// Memaksa audio diputar otomatis
window.onload = function() {
  var audio = document.getElementById('audio');
  audio.play().catch(function(error) {
    console.log('Autoplay gagal, mencoba untuk memutar audio secara manual: ', error);
    audio.muted = false; // Pastikan audio tidak dimute jika autoplay gagal
    audio.play();
  });
};
