// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper.padination',
    clickable: true,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//swiper.on - イベントの取得
//ここに書く

//表示するテキストを準備
//const currentSliderIndex = swiper.realIndex;
//console.log(currentSliderIndex)
//const text ='スライドを表示しています'
//console.log(text);
//準備したテキストをHTMLに入れる
function updatePanelNumber() {
  var currentIndex = swiper.realIndex + 1;
  console.log(currentIndex)

  // var totalSlides = swiper.slides.length;
  // var currentSlideText = swiper.slides[swiper.realIndex].textContent.trim();
  document.getElementById('swiper-index').textContent = 'スライド' + currentIndex + 'を表示しています';
}
updatePanelNumber();

swiper.on('slideChange', function () {
  updatePanelNumber();
})
