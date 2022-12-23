
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
    sideBarSearch.style.height = '5rem';
    sideBarTxt.style.opacity = '0';
    sideBarSearch.classList.add('scrolldown');
    sideBar.style.transition = '.2s';
    sideBarSearch.style.transition = '.8s';
  } else {
    sideBar.style.top = '8rem';
    sideBarSearch.style.height = '16.5rem';
    sideBarTxt.style.opacity = '1';
  }
});