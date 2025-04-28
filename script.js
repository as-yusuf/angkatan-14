const pages = [
  'assets/page1.jpg',
  'assets/page2.jpg',
  'assets/page3.jpg',
  'assets/page4.jpg'
];

let currentPage = 0;
const image = document.getElementById('page-image');
const container = document.getElementById('container');
const overlay = document.getElementById('text-overlay');
const backButton = document.getElementById('back-button');

container.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    image.classList.add("flip");
    setTimeout(() => {
      image.src = pages[currentPage];
      overlay.classList.remove("show");
      image.classList.remove("flip");
      if (currentPage === pages.length - 1) {
        backButton.style.display = "block";
      }
    }, 500);
  }
});

backButton.addEventListener('click', () => {
  currentPage = 0;
  image.src = pages[currentPage];
  overlay.classList.add("show");
  backButton.style.display = "none";
});

// Autoplay workaround for some browsers
window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('myAudio');
  const playAudio = () => {
    music.play().catch(() => {});
    window.removeEventListener('click', playAudio);
  };
  window.addEventListener('click', playAudio);
});
