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

// search
const serachPage = document.querySelector('.serch_wrap');
const searchOpenIcon = document.querySelector('.header_search');
const searchCloseIcon = document.querySelector('.search_box > .icon_close');
const headerMenu = document.querySelector('header');
const searchBox = document.querySelector('.search_box');
const resetBtn = document.querySelector('.text_reset_icon');
const inputBox = document.querySelector('#searchWord');

searchOpenIcon.addEventListener('click', e => {
  e.preventDefault();
  serachPage.classList.add('open');
  headerMenu.style.display = 'none';
});
searchCloseIcon.addEventListener('click', e => {
  e.preventDefault();
  serachPage.classList.remove('open');
  headerMenu.style.display = 'flex';
  searchBox.style.transition = '.1s';
  serachPage.style.transition = '.1s';
});
inputBox.addEventListener('click', e => {
  resetBtn.style.display = 'block';
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

// tab 하위메뉴
const tabLists = document.querySelectorAll('main .tab_item_wrapper .tab_item > li');
console.log(tabLists);
const tabListTitles = document.querySelectorAll('main .tab_item_wrapper .tab_item li > a');
console.log(tabListTitles);
const tabAll = document.querySelector('main .wrapper .tab_wrapper .tab_all');

tabLists[0].addEventListener('click', () => {
  tabLists[0].classList.toggle('on');
});
tabLists[1].addEventListener('click', () => {
  tabLists[1].classList.toggle('on');
});
tabLists[2].addEventListener('click', () => {
  tabLists[2].classList.toggle('on');
});
tabLists[3].addEventListener('click', () => {
  tabLists[3].classList.toggle('on');
});
tabLists[4].addEventListener('click', () => {
  tabLists[4].classList.toggle('on');
});
tabLists[5].addEventListener('click', () => {
  tabLists[5].classList.toggle('on');
});
tabLists[6].addEventListener('click', () => {
  tabLists[6].classList.toggle('on');
});
tabLists[7].addEventListener('click', () => {
  tabLists[7].classList.toggle('on');
});
tabLists[8].addEventListener('click', () => {
  tabLists[8].classList.toggle('on');
});

// tab all
tabAll.addEventListener('click', () => {
  tabLists.forEach(el => {
    el.classList.toggle('on');
  });
});

// a 초기화
tabListTitles.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
  });
});
