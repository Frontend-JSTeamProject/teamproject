// side_bar
const sideBar = document.querySelector('.side_bar');
const sideBarSearch = document.querySelector('.side_bar_search');
const sideBarTxt = document.querySelector('.side_bar_search > span')

addEventListener("wheel", (e) => {
  console.log(e.deltaY, e.deltaX);
  //양수면 휠 다운 / 음수는 휠 업

  if(e.deltaY > 1) {
    console.log(sideBar)
    sideBar.style.top = '0';
    sideBarSearch.style.height = '8rem';
    sideBarTxt.style.opacity = '0';
    sideBarSearch.classList.add('scrolldown');
    sideBar.style.transition = '.2s';
    sideBarSearch.style.transition = '.8s';
  } else {
    sideBar.style.top = '10rem';
    sideBarSearch.style.height = '28.5rem';
    sideBarTxt.style.opacity = '1';
  }
});



// INSIGHTS
const swiperSlide = document.querySelectorAll('.swiper-slide-active');

var swiper = new Swiper(".myswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// 스크롤 이벤트 title
const mainOptions1 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const mainObserver1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, mainOptions1);

// 소제목
const mainTitle1 = document.querySelectorAll('#main_highlights h2, #main_centers h2, .main_insights_inner h3, .main_insights_bg, .main_insights_slide_list, .insights_arrow_box, .view_all_btn, .main_careers_inner>h1');
console.log(mainTitle1);

mainTitle1.forEach(el => mainObserver1.observe(el));





// LOGOSLIDER

var swiper = new Swiper(".main_logo_slider", {
  speed: 50000,
  loop:true,
  slidesPerView: "auto",
  // loopedSlides: 5, //noSwiping : true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
 },
});

/*
let ul = document.querySelector('.logo_list');
let lis = document.querySelectorAll('.logo_list > li');


makeClone();

function makeClone(){
  for(let i = 0; i<lis.length; i++){
    let cloneSlide = lis[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    ul.appendChild(cloneSlide);
  }
}

function move() {
  let curIdx = 0;

  setInterval(function() {
    ul.style.transition = '2.5s';
    ul.style.transform = 'translate3d(-'+20*(curIdx+1)+'px, 0px, 0px)';

    curIdx++;

    
    if(curIdx == lis.length*10){
      setTimeout(function(){
        ul.style.transition = '2.5s';
        ul.style.transform = 'translate3d(0px, 0px, 0px)';
      },201)
      curIdx = 0;
    }

  },100);
}
document.addEventListener('DOMContentLoaded',function(){
  move();
});
*/


/*
let slides = document.querySelector('.logo_list');
let slide = document.querySelectorAll('.logo_list > li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30;


makeClone();

function makeClone(){
  for(let i = 0; i<slideCount; i++){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }
  for(let i = slideCount -1; i >= 0; i--){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();

  setTimeout(function(){
    slides.classList.add('animated');
  },100);
}

function updateWidth() {
  let currentSlides = document.querySelectorAll('.logo_list > li');
  let newSlideCount = currentSlides.length;

  let newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
  slides.getElementsByClassName.width = newWidth;
}
function setInitialPos(){
  let initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
  slides.style.transform = 'translateX('+initialTranslateValue+'px)';
}

function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if(currentIdx == slideCount){
    
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    },500);
    setTimeout(function(){
      slides.classList.add('animated');
    },600);
  }
}

let timer = undefined;

function autoSlide(){
  if(timer == undefined){
    timer = setInterval(function(){
      moveSlide(currentIdx + 1);
    },3000);
  }
}
autoSlide();
*/

// CAREERS bg
const career = document.querySelector('.careers_bg_txt');

addEventListener('scroll', () => {
  console.log(scrollY);
  if(scrollY < 1400) {
    career.style.right = `-70%`;
  }else if(scrollY >= 1400) {
    career.style.right = `${(scrollY- 2200)}px`;
  }
});




// CARRERS SWIPER
/*
var swiper = new Swiper(".careers_swiper", {
  loop: true,
  effect: 'fade',
  fadeEffect: { 
    crossFade: true 
    },
    speed: 2000,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slidechange: function () {

  }
  },

});
*/

// career 스크롤 이벤트
const mainOptions4 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05,
};

const mainObserver4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, mainOptions4);
// main_center 스크롤 이벤트
const scrollevent = document.querySelectorAll(
  '.careers_bg, .career_swiper_wrapper'
);
scrollevent.forEach(el => mainObserver4.observe(el));


// career 슬라이드
const careersPrevBtn = document.querySelectorAll('.prev_btn');
const careersNextBtn = document.querySelectorAll('.next_btn');
const careersWrapper = document.querySelector('.career_swiper_wrapper');
const careersSlider = document.querySelector('.careers_slider');
const careersSlideLeft = document.querySelectorAll('.careers_info');
const careersSlideRight = document.querySelectorAll('.img_banner');
const careersActive = document.querySelectorAll('.careers_swiper_slider')
console.log(careersPrevBtn);

// 이전 버튼
careersPrevBtn[0].addEventListener('click', () => {
  careersActive[0].classList.remove('show');
  careersActive[2].classList.add('show');
});

careersPrevBtn[1].addEventListener('click', () => {
  careersActive[1].classList.remove('show');
  careersActive[0].classList.add('show');
});

careersPrevBtn[2].addEventListener('click', () => {
  careersActive[2].classList.remove('show');
  careersActive[1].classList.add('show');
});

// 다음 버튼
careersNextBtn[0].addEventListener('click', () => {
  careersActive[0].classList.remove('show');
  careersActive[1].classList.add('show');
});

careersNextBtn[1].addEventListener('click', () => {
  careersActive[1].classList.remove('show');
  careersActive[2].classList.add('show');
});

careersNextBtn[2].addEventListener('click', () => {
  careersActive[2].classList.remove('show');
  careersActive[0].classList.add('show');
});

// 나타나기
careersPrevBtn[0].addEventListener('click', () => {
  careersSlideLeft[2].classList.add('move');
  careersSlideRight[2].classList.add('move');
  careersSlideLeft[0].classList.remove('move');
  careersSlideRight[0].classList.remove('move');
});

careersPrevBtn[1].addEventListener('click', () => {
  careersSlideLeft[1].classList.remove('move');
  careersSlideRight[1].classList.remove('move');
  careersSlideLeft[0].classList.add('move');
  careersSlideRight[0].classList.add('move');
});

careersPrevBtn[2].addEventListener('click', () => {
  careersSlideLeft[2].classList.remove('move');
  careersSlideRight[2].classList.remove('move');
  careersSlideLeft[1].classList.add('move');
  careersSlideRight[1].classList.add('move');
});

careersNextBtn[0].addEventListener('click', () => {
  careersSlideLeft[0].classList.remove('move');
  careersSlideRight[0].classList.remove('move');
  careersSlideLeft[1].classList.add('move');
  careersSlideRight[1].classList.add('move');
});

careersNextBtn[1].addEventListener('click', () => {
  careersSlideLeft[1].classList.remove('move');
  careersSlideRight[1].classList.remove('move');
  careersSlideLeft[2].classList.add('move');
  careersSlideRight[2].classList.add('move');
});

careersNextBtn[2].addEventListener('click', () => {
  careersSlideLeft[2].classList.remove('move');
  careersSlideRight[2].classList.remove('move');
  careersSlideLeft[0].classList.add('move');
  careersSlideRight[0].classList.add('move');
});