// header scroll
const header = document.querySelector('header');
console.log(scrollY);
let prevScroll = scrollY;
console.log('prevScroll:', prevScroll);

const scrolled = () => {
  // 이전 스크롤 값과 현재 스크롤 값을 비교하여 현재 스크롤 값이 크면 스크롤이 아래로 진행

  // 스크롤 이벤트가 발생될 때만 스크롤된 값 반환
  let currentScroll = scrollY;
  console.log('currentScroll:', currentScroll);

  const headerHt = header.offsetHeight;
  console.log(headerHt);

  // prevScroll < currentScroll ? (header.style.top = `-${headerHt}px`) : (header.style.top = 0);
  prevScroll < currentScroll ? posTop(headerHt) : posTop(0);

  prevScroll = currentScroll; // 이전 스크롤 값에 현재 스크롤 값 대입
  console.log('함수내 prevScorll:', prevScroll);
};
function posTop(top) {
  header.style.top = `-${top}px`;
}

addEventListener('scroll', scrolled);

// header lang 하위메뉴
const headerLang = document.querySelector('header .header_container_right .lang');

headerLang.addEventListener('click', () => {
  headerLang.classList.toggle('active');
});


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

// Main Sub-Menu Page
const mainSubMenuPge = document.querySelector('.main_menu_page');
const mainMenuOpenIcon = document.querySelector('#menu');
const mainMenuCloseIcon = document.querySelector('.icon_close');
const body = document.querySelector('body');
// const mainSubMenu = document.querySelector('.gnb_menu_inner');


mainMenuOpenIcon.addEventListener('click', e => {
  mainSubMenuPge.classList.add('open');
  body.classList.add('no_scroll');
});
mainMenuCloseIcon.addEventListener('click', e => {
  mainSubMenuPge.classList.remove('open');
  body.classList.remove('no_scroll');
});



// progressBar
const progressBar = document.querySelector('.progressBar');

addEventListener('scroll', progress);

function progress() {
  let winScrollTop = document.documentElement.scrollTop;
  console.log(`스크롤한 거리:`, winScrollTop);
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;
  console.log(scrollHt, clientHt);
  let height = (winScrollTop / (scrollHt - clientHt)) * 100;
  console.log(height);

  progressBar.style.height = height + `%`;
}

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
const mainTitle1 = document.querySelectorAll('#main_highlights h2, #main_centers h2, .main_insights_inner h3, .main_insights_bg, .main_insights_slide_list, .insights_arrow_box, .view_all_btn, .main_careers_inner h1');
console.log(mainTitle1);

mainTitle1.forEach(el => mainObserver1.observe(el));

// 스크롤 이벤트2
const mainOptions2 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
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

// 스크롤 이벤트3
const mainOptions3 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05,
};

const mainObserver3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, mainOptions3);
// main_center 스크롤 이벤트
const centerSlideScrolls = document.querySelectorAll(
  '#main_centers .centers_inner .centers_slide_wrap .centers_slide_container'
);

centerSlideScrolls.forEach(el => mainObserver3.observe(el));

// main_center 슬라이드
const centerSlides = document.querySelectorAll(
  '#main_centers .centers_inner .centers_slide_wrap .slide_box'
);
const centerPrevBtns = document.querySelectorAll(
  '#main_centers .centers_slide_wrap .btn .slide_btn .prev'
);
const centerNextBtns = document.querySelectorAll(
  '#main_centers .centers_slide_wrap .btn .slide_btn .next'
);
const centerSlideInfoes = document.querySelectorAll(
  '#main_centers .centers_inner .centers_slide_wrap .centers_slide_container .slide_box .info'
);

console.log(centerSlides);
console.log(centerPrevBtns);
console.log(centerNextBtns);
console.log(centerSlideInfoes);

// 스와이프 전체
/* 
  const centerSlideMove1 = () => {
    let i = 0;
    centerSlides[i].classList.remove('active');
    i--;
    i < 0 ? (i = centerSlides.length - 1) : false;
    centerSlides[i].classList.add('active');
  };

  const centerSlideMove2 = () => {
    let i = 0;
    centerSlides[i].classList.remove('active');
    i++;
    if (i >= centerSlides.length) {
      i = 0;
    }
    centerSlides[i].classList.add('active');
  };

  centerPrevBtns.forEach(btn => {
    btn.addEventListener('click', centerSlideMove1);
  });
  centerNextBtns.forEach(btn => {
    btn.addEventListener('click', centerSlideMove2);
  }); 
*/

// center 슬라이드 뒤로 버튼
centerPrevBtns[0].addEventListener('click', () => {
  centerSlides[0].classList.remove('active');
  centerSlides[5].classList.add('active');
});
centerPrevBtns[5].addEventListener('click', () => {
  centerSlides[5].classList.remove('active');
  centerSlides[4].classList.add('active');
});
centerPrevBtns[4].addEventListener('click', () => {
  centerSlides[4].classList.remove('active');
  centerSlides[3].classList.add('active');
});
centerPrevBtns[3].addEventListener('click', () => {
  centerSlides[3].classList.remove('active');
  centerSlides[2].classList.add('active');
});
centerPrevBtns[2].addEventListener('click', () => {
  centerSlides[2].classList.remove('active');
  centerSlides[1].classList.add('active');
});
centerPrevBtns[1].addEventListener('click', () => {
  centerSlides[1].classList.remove('active');
  centerSlides[0].classList.add('active');
});

// center 슬라이드 앞으로 버튼
centerNextBtns[0].addEventListener('click', () => {
  centerSlides[0].classList.remove('active');
  centerSlides[1].classList.add('active');
});
centerNextBtns[1].addEventListener('click', () => {
  centerSlides[1].classList.remove('active');
  centerSlides[2].classList.add('active');
});
centerNextBtns[2].addEventListener('click', () => {
  centerSlides[2].classList.remove('active');
  centerSlides[3].classList.add('active');
});
centerNextBtns[3].addEventListener('click', () => {
  centerSlides[3].classList.remove('active');
  centerSlides[4].classList.add('active');
});
centerNextBtns[4].addEventListener('click', () => {
  centerSlides[4].classList.remove('active');
  centerSlides[5].classList.add('active');
});
centerNextBtns[5].addEventListener('click', () => {
  centerSlides[5].classList.remove('active');
  centerSlides[0].classList.add('active');
});

// info 움직임
/* 
  (function centerSlideInfoMove() {
    let i = 0;
    centerPrevBtns[i].addEventListener('click', () => {
      centerSlideInfoes[i].classList.remove('active');
      i--;
      i < 0 ? (i = centerSlideInfoes.length - 1) : false;
      centerSlideInfoes[i].classList.add('active');
    });
    centerNextBtns[i].addEventListener('click', () => {
      centerSlideInfoes[i].classList.remove('active');
      i++;
      if (i >= centerSlideInfoes.length) {
        i = 0;
      }
      centerSlideInfoes[i].classList.add('active');
    });
  })(); 
*/

// 뒤로 버튼 눌렀을 때 info 효과
centerPrevBtns[0].addEventListener('click', () => {
  centerSlideInfoes[0].classList.remove('active');
  centerSlideInfoes[5].classList.add('active');
});
centerPrevBtns[5].addEventListener('click', () => {
  centerSlideInfoes[5].classList.remove('active');
  centerSlideInfoes[4].classList.add('active');
});
centerPrevBtns[4].addEventListener('click', () => {
  centerSlideInfoes[4].classList.remove('active');
  centerSlideInfoes[3].classList.add('active');
});
centerPrevBtns[3].addEventListener('click', () => {
  centerSlideInfoes[3].classList.remove('active');
  centerSlideInfoes[2].classList.add('active');
});
centerPrevBtns[2].addEventListener('click', () => {
  centerSlideInfoes[2].classList.remove('active');
  centerSlideInfoes[1].classList.add('active');
});
centerPrevBtns[1].addEventListener('click', () => {
  centerSlideInfoes[1].classList.remove('active');
  centerSlideInfoes[0].classList.add('active');
});

// 앞으로 버튼 눌렀을 때 info 효과
centerNextBtns[0].addEventListener('click', () => {
  centerSlideInfoes[0].classList.remove('active');
  centerSlideInfoes[1].classList.add('active');
});
centerNextBtns[1].addEventListener('click', () => {
  centerSlideInfoes[1].classList.remove('active');
  centerSlideInfoes[2].classList.add('active');
});
centerNextBtns[2].addEventListener('click', () => {
  centerSlideInfoes[2].classList.remove('active');
  centerSlideInfoes[3].classList.add('active');
});
centerNextBtns[3].addEventListener('click', () => {
  centerSlideInfoes[3].classList.remove('active');
  centerSlideInfoes[4].classList.add('active');
});
centerNextBtns[4].addEventListener('click', () => {
  centerSlideInfoes[4].classList.remove('active');
  centerSlideInfoes[5].classList.add('active');
});
centerNextBtns[5].addEventListener('click', () => {
  centerSlideInfoes[5].classList.remove('active');
  centerSlideInfoes[0].classList.add('active');
});

// view_all
const viewAllMoves = document.querySelectorAll(
  '#main_centers > .centers_inner > .centers_slide_wrap > .centers_slide_container > .slide_box > .info > .btn > .view_all > a'
);
const viewAllBtns = document.querySelectorAll(
  '#main_centers > .centers_inner > .centers_slide_wrap > .centers_slide_container > .slide_box > .info > .btn > .view_all > a > i'
);

// 마우스 올렸을 때
viewAllMoves.forEach(move => {
  move.addEventListener('mouseover', () => {
    viewAllBtns.forEach(el => {
      el.animate(
        {
          transform: ['translateX(0)', 'translateX(0)', 'translateX(110px)'],
          width: ['48px', '140px', '48px'],
        },
        {
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
    });
  });
});

// 마우스 뗐을 때
viewAllMoves.forEach(move => {
  move.addEventListener('mouseout', () => {
    viewAllBtns.forEach(el => {
      el.animate(
        {
          transform: ['translateX(110px)', 'translateX(0)', 'translateX(0)'],
          width: ['48px', '140px', '48px'],
        },
        {
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
    });
  });
});

// main_centers 배경 텍스트
const centerBgTxt = document.querySelector('#main_centers .centers_flow_txt');

addEventListener('scroll', () => {
  let num = centerBgTxt.offsetTop;
  if (scrollY > num) {
    centerBgTxt.style.transform = `translateX(-${scrollY - 2050}px)`;
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

// CAREERS bg
const career = document.querySelector('.careers_bg_txt');

addEventListener('scroll', () => {
  console.log(scrollY);
  if(scrollY < 1400) {
    career.style.right = `-70%`;
  }else if(scrollY >= 1400) {
    career.style.right = `${(scrollY - 5300)}px`;
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