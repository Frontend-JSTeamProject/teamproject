// header 스크롤하면 nav를 header로 이동
const header = document.querySelector('header');
const navList = document.querySelector('#header_nav_list');
const solutionsWrapper = document.querySelector('.firm_wrapper');

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

// firm 하위메뉴
const solutionPop = document.querySelector('nav #nav_list .firm_pop');

solutionPop.addEventListener('click', () => {
  solutionPop.classList.toggle('active');
});

// 스크롤 내렸을 때 header firm 하위메뉴
const scrollSolutionPop = document.querySelector('header #header_nav_list .firm_pop');

scrollSolutionPop.addEventListener('click', () => {
  scrollSolutionPop.classList.toggle('active');
});

//컨텐츠 영역   

const circle = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.05, // 50%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, circle);

const contents = document.querySelectorAll('.circle-ani');

// 반복문을 돌려 모든 DOM에 적용
contents.forEach(el => observer.observe(el));
