// Top_비디오 자동 슬라이드
const mainTopVideos = document.querySelectorAll('#main_top_container .video_wrapper video');
const mainTopPrevBtn = document.querySelector('#top_video_prev_btn');
const mainTopnextBtn = document.querySelector('#top_video_next_btn');

(function videoAutoSlide() {
  let i = 0;
  mainTopPrevBtn.addEventListener('click', () => {
    mainTopVideos[i].classList.remove('active');
    i--;
    i < 0 ? (i = mainTopVideos.length - 1) : false;
    mainTopVideos[i].classList.add('active');
  });
  mainTopnextBtn.addEventListener('click', () => {
    mainTopVideos[i].classList.remove('active');
    i++;
    if (i >= mainTopVideos.length) {
      i = 0;
    }
    mainTopVideos[i].classList.add('active');
  });
})();

setInterval(function () {
  mainTopnextBtn.click();
}, 4000);

// Top_배경 마우스이벤트
const topBgLeft = document.querySelector('#main_top_container .top_bg_wrapper .top_bg_left');
const topBgRight = document.querySelector('#main_top_container .top_bg_wrapper .top_bg_right');

addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;
  topBgLeft.style.transform = `translate(${x / 40}px, ${-50 / y}px)`;
  topBgRight.style.transform = `translate(${x / -70}px, ${y / -50}px)`;
});

// 스크롤 이벤트1
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
const mainTitle1 = document.querySelectorAll('#main_highlights h2, #main_centers h2');
console.log(mainTitle1);

mainTitle1.forEach(el => mainObserver1.observe(el));

// 스크롤 이벤트2
const mainOptions2 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05,
};

const mainObserver2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, mainOptions2);

// main_highlights 슬라이드
const highLightSlides = document.querySelectorAll('#main_highlights .highlights_slide_wrapper');
console.log(highLightSlides);

highLightSlides.forEach(el => mainObserver2.observe(el));

// main_highlights 배경
const highLightBg = document.querySelector('#main_highlights .highlights_bg');
console.log(highLightBg);

addEventListener('scroll', () => {
  let num = highLightBg.offsetTop - 100;
  console.log(num);
  if (scrollY > num) {
    highLightBg.classList.add('active');
  }
});

// main_highlights 배경 텍스트
const highLightBgTxt = document.querySelector('#main_highlights .highlights_flow_txt');

addEventListener('scroll', () => {
  let num = highLightBgTxt.offsetTop;
  if (scrollY > num) {
    highLightBgTxt.style.transform = `translateX(-${scrollY - 250}px)`;
  }
});

// main_highlights 슬라이드 드래그
const hlSlideScrollBtn = document.querySelector(
  '#main_highlights .hl_scrollbar_wrapper .hl_scrollbar .hl_scrollbar_drag'
);
const hlSlide = document.querySelector('.highlights_slide_wrapper');
const hlSlideBtnWrap = document.querySelector('#main_highlights .hl_scrollbar_wrapper');

const hlSlideMove = e => {
  hlSlideScrollBtn.style.transform = `translate(${e.clientX - 1300}px)`;
  hlSlide.style.transform = `translate(-${e.clientX - 1300}px)`;
};
console.log(hlSlideScrollBtn.offsetLeft);
hlSlideScrollBtn.addEventListener('mousedown', e => {
  let num = e.clientX;
  console.log(e.clientX);
  if (num <= 1615 || num >= 1186) {
    addEventListener('mousemove', hlSlideMove);
    addEventListener('mouseup', () => {
      removeEventListener('mousemove', hlSlideMove);
    });
  } else if (num > 1615 || num < 1186) {
    e.target.style.transform = `translate(${e.clientX}px)`;
  }
});

// main_center 슬라이드
const centerSlides = document.querySelectorAll(
  '#main_centers .centers_inner .centers_slide_wrap .slide_box'
);
const centerPrevBtn = document.querySelector(
  '#main_centers .centers_slide_wrap .btn .slide_btn .prev'
);
const centerNextBtn = document.querySelector(
  '#main_centers .centers_slide_wrap .btn .slide_btn .next'
);
const centerSlideInfoes = document.querySelectorAll(
  '#main_centers .centers_inner .centers_slide_wrap .centers_slide_container .slide_box .info'
);

console.log(centerSlides);
console.log(centerPrevBtn);
console.log(centerNextBtn);
console.log(centerSlideInfoes);

// 스와이프 전체
(function centerSlide() {
  let i = 0;
  centerPrevBtn.addEventListener('click', () => {
    centerSlides[i].classList.remove('active');
    i--;
    i < 0 ? (i = centerSlides.length - 1) : false;
    centerSlides[i].classList.add('active');
  });
  centerNextBtn.addEventListener('click', () => {
    centerSlides[i].classList.remove('active');
    i++;
    if (i >= centerSlides.length) {
      i = 0;
    }
    centerSlides[i].classList.add('active');
  });
})();

// info 움직임
(function centerSlideInfo() {
  let i = 0;
  centerPrevBtn.addEventListener('click', () => {
    centerSlideInfoes[i].classList.remove('active');
    i--;
    i < 0 ? (i = centerSlideInfoes.length - 1) : false;
    centerSlideInfoes[i].classList.add('active');
  });
  centerNextBtn.addEventListener('click', () => {
    centerSlideInfoes[i].classList.remove('active');
    i++;
    if (i >= centerSlideInfoes.length) {
      i = 0;
    }
    centerSlideInfoes[i].classList.add('active');
  });
})();

// main_centers 배경 텍스트
const centerBgTxt = document.querySelector('#main_centers .centers_flow_txt');

addEventListener('scroll', () => {
  let num = centerBgTxt.offsetTop;
  if (scrollY > num) {
    centerBgTxt.style.transform = `translateX(-${scrollY - 2050}px)`;
  }
});
