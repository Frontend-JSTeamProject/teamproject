// const mainOptions1 = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5,
// }

// const mainObserver1 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       entry.target.classList.add('active');
//     }
//   });
// }, options);

// const topTitles = document.querySelectorAll('.top_txt');
// topTitles.forEach(el => mainObserver1.observe(el));

const mainTopVideos = document.querySelectorAll('#main_top_container .video_wrapper video');
const mainTopPrevBtn = document.querySelector('#top_video_prev_btn');
const mainTopnextBtn = document.querySelector('#top_video_next_btn');

(function videoAutoSlide () {
  let i = 0;
  mainTopPrevBtn.addEventListener('click', () => {
    mainTopVideos[i].classList.remove('active');
    i--;
    i < 0 ? (i = mainTopVideos.length - 1) : false;
    mainTopVideos[i].classList.add('active')
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
}, 4000)


const topBgLeft = document.querySelector('#main_top_container .top_bg_wrapper .top_bg_left');
const topBgRight = document.querySelector('#main_top_container .top_bg_wrapper .top_bg_right');

addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;
  topBgLeft.style.transform = `translate(${x / 30}px, ${5 - y / 50}px`;
  topBgRight.style.transform = `translate(${-x / -70}px, ${y / 20}px`;
});
