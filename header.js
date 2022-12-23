/* 
solution 페이지
header 스크롤하면 nav를 header로 이동

const header = document.querySelector('header');
const navList = document.querySelector(
  'header + .solutions_container .solutions_wrapper nav .nav_wrapper #nav_list'
);

addEventListener('scroll', () => {
  let num = navList.offsetTop + 30;
  if (scrollY > num) {
    header.classList.add('on');
  } else if (scrollY <= num) {
    header.classList.remove('on');
  }
});
*/

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
