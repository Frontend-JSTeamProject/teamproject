// header 스크롤하면 nav를 header로 이동
const header = document.querySelector('header');
const navList = document.querySelector('#header_nav_list');
const professionalContainer = document.querySelector('.professionals_container');

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
  let num = professionalContainer.offsetTop + 16;
  console.log('num:', num);
  if (scrollY <= num) {
    header.classList.remove('active');
    header.classList.remove('on');
  } else {
    header.classList.add('active');
    header.style.backgroundColor = 'none';
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

// search
const serachPage = document.querySelector('.serch_wrap');
const searchOpenIcon = document.querySelector('.header_search');
const searchCloseIcon = document.querySelector('.search_box > .icon_close');
const headerMenu = document.querySelector('header')
const searchBox = document.querySelector('.search_box')
const resetBtn = document.querySelector('.text_reset_icon');
const inputBox = document.querySelector('#searchWord')

searchOpenIcon.addEventListener('click', e => {
  e.preventDefault();
  serachPage.classList.add('open');
  headerMenu.style.display='none';
});
searchCloseIcon.addEventListener('click', e => {
  e.preventDefault();
  serachPage.classList.remove('open');
  headerMenu.style.display='flex';
  searchBox.style.transition = '.1s';
  serachPage.style.transition = '.1s';
});
inputBox.addEventListener('click', e => {
  resetBtn.style.display='block';

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


// 더보기
const viewAllMoves = document.querySelectorAll(
  '#more_btn button'
);
const viewAllBtns = document.querySelectorAll(
  '#more_btn button i'
);

// 마우스 올렸을 때
viewAllMoves.forEach(move => {
  move.addEventListener('mouseover', () => {
    viewAllBtns.forEach(el => {
      el.animate(
        {
          transform: ['translateX(0)', 'translateX(0)', 'translateX(60px)'],
          width: ['42px', '100px', '42px'],
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
          transform: ['translateX(60px)', 'translateX(0)', 'translateX(0)'],
          width: ['42px', '100px', '42px'],
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