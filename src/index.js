////////////////////////////////////////////////////////
// Swiper
//////////////////////////////////////////////////////// 

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// 
// 1つめのswiper
// 

const swiper = new Swiper('.swiper-1', {
  // Optional parameters

  // 横にスライドするように設定を変更
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // スクロールバーを不要にする
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar-1',
  // },
});

// スライド番号表示するTextNodeを作成
// realIndexを使って、表示中のスライド番号を取得する
let titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')

// idがswiper-title のhtml要素に
// 現在表示中のスライド番号を表示させる
let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);

// スライドが切り替わった際の
// イベントハンドラfunctionを作成

// スライドが切り替わった際のイベントをハンドリングする
swiper.on('slideChange', function(){
  console.log('slide changed');

  // realIndexをconsole.logで出力
  // 表示中のスライド番号と、realIndexが一致するか確認
  console.log(swiper.realIndex);
  
  // 先に表示していた要素を削除
  titleElement.remove();

  // 新しいスライド番号でタイトルを表示
  titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')
  titleContainer.appendChild(titleElement);
});

// 
// 2つめのswiper
// 

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters

  // 横にスライドするように設定を変更
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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

// タイトル用のリストを準備
const titles = [
  "ぴえんのイラスト（男性）",
  "浮かれる人のイラスト（女性）",
  "怖くて腰が抜ける人のイラスト（女性）",
  "悔しくてハンカチを噛む人のイラスト（男性）",
];

// スライド番号表示するTextNodeを作成
// 配列 titles から realIndexを使ってタイトルを作る
let titleElement2 = document.createTextNode(titles[swiper2.realIndex])

// idがswiper-title-2 のhtml要素に
// 現在表示中のスライド番号を表示させる
let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function(){
  // 先に表示していた要素を削除
  titleElement2.remove();

  // 新しいスライド番号のタイトルを表示
  titleElement2 = document.createTextNode(titles[swiper2.realIndex])
  titleContainer2.appendChild(titleElement2);
});

