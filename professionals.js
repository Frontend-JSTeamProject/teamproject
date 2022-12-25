// header 스크롤하면 nav를 header로 이동
const header = document.querySelector('header');
const navList = document.querySelector('#header_nav_list');
const solutionsWrapper = document.querySelector('.solutions_wrapper');

let prevScroll = scrollY;
console.log('prevScroll:', prevScroll);

const scrolled = () => {
  let currentScroll = scrollY;
  console.log('currentScroll:', currentScroll);

  const headerHt = header.offsetHeight;
  console.log(headerHt);

  console.log('scrollY:', scrollY);

  if (prevScroll > currentScroll) {
    header.classList.add('active');
    header.classList.remove('on');
  } else if (prevScroll < currentScroll) {
    // header.classList.remove('active');
    header.classList.add('on');
  }

  prevScroll = currentScroll;
  console.log('scrollY:', scrollY);
  console.log('함수내 prevScorll:', prevScroll);
};

addEventListener('scroll', scrolled);

addEventListener('scroll', () => {
  let num = solutionsWrapper.offsetTop + 16;
  console.log('num:', num);
  if (scrollY <= num) {
    header.classList.remove('active');
    header.classList.remove('on');
  } else {
    header.classList.add('active');
  }
});

// header lang 하위메뉴
const headerLang = document.querySelector('header .header_container_right .lang');

headerLang.addEventListener('click', () => {
  headerLang.classList.toggle('active');
});

// side_bar
const sideBar = document.querySelector('.side_bar');
const sideBarSearch = document.querySelector('.side_bar_search');
const sideBarTxt = document.querySelector('.side_bar_search > span');

addEventListener('wheel', e => {
  console.log(e.deltaY, e.deltaX);
  //양수면 휠 다운 / 음수는 휠 업

  if (e.deltaY > 1) {
    console.log(sideBar);
    sideBar.style.top = '0';
    sideBarSearch.style.height = '80px';
    sideBarTxt.style.opacity = '0';
    sideBarSearch.classList.add('scrolldown');
    sideBar.style.transition = '.2s';
    sideBarSearch.style.transition = '.8s';
  } else {
    sideBar.style.top = '100px';
    sideBarSearch.style.height = '285px';
    sideBarTxt.style.opacity = '1';
  }
});

// Main Sub-Menu Page
const mainSubMenuPge = document.querySelector('.main_menu_page');
const mainMenuOpenIcon = document.querySelector('#menu');
const mainMenuCloseIcon = document.querySelector('.icon_close');
const body = document.querySelector('body');
// const mainSubMenu = document.querySelector('.gnb_menu_inner');

mainMenuOpenIcon.addEventListener('click', () => {
  mainSubMenuPge.classList.add('open');
  body.classList.add('no_scroll');
});
mainMenuCloseIcon.addEventListener('click', () => {
  mainSubMenuPge.classList.remove('open');
  body.classList.remove('no_scroll');
});

// solution 하위메뉴
const solutionPop = document.querySelector('nav #nav_list .solution_pop');

solutionPop.addEventListener('click', () => {
  solutionPop.classList.toggle('active');
});

// 스크롤 내렸을 때 solution 하위메뉴
const scrollSolutionPop = document.querySelector('header #header_nav_list .solution_pop');

scrollSolutionPop.addEventListener('click', () => {
  scrollSolutionPop.classList.toggle('active');
});

// view_all
const viewAllMoves = document.querySelectorAll(
  '.view_all > a > i'
);
const viewAllBtns = document.querySelectorAll(
  ' .view_all > a > i'
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


