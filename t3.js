document.addEventListener("DOMContentLoaded", function() {
    var backgroundMusic = document.getElementById("background-music");
  
    // Dừng âm nhạc khi người dùng tương tác với trang
    document.addEventListener("click", function() {
      backgroundMusic.pause();
    });
  
    // Phát lại âm nhạc khi người dùng không tương tác nữa
    document.addEventListener("mousemove", function() {
      backgroundMusic.play();
    });
  });
  