/* 
<!--LIBRARIES-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/Flip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Draggable.min.js"></script>

*/

const typingSpeed = 0.025;

// Split the text up
function runSplit() {
  const typeSplit = new SplitType("[tg-element='hero-title']", {
    types: 'words, chars',
  });
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener('resize', function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

function getFirstWord(str) {
  // Trim any leading or trailing spaces from the string
  str = str.trim();
  // Find the first space in the string
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) {
    // If there are no spaces in the string, return the whole string
    return str;
  } else {
    // If there is a space in the string, return the substring before the space
    return str.substring(0, spaceIndex);
  }
}

const sliders = document.querySelectorAll("[element='card-component']");

sliders.forEach((e) => {
  const wrapper = e.querySelector("[element='wrapper']");
  const list = e.querySelector("[element='list']");
  const item = e.querySelector("[element='item']");
  const pagination = e.querySelector('.swiper_pagination');

  const listRaw = list.className;
  const itemRaw = item.className;

  const listClass = getFirstWord(listRaw);
  const itemClass = getFirstWord(itemRaw);

  const swiper = new Swiper(wrapper, {
    spaceBetween: 100,
    direction: 'horizontal',
    wrapperClass: listClass,
    slideClass: itemClass,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    slideActiveClass: 'is-in-view',
    mousewheel: false,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: pagination,
      bulletClass: 'pagination_dot',
      type: 'bullets',
      bulletActiveClass: 'is-active',
      clickable: true,
    },
  });

  swiper.on('slideChange', () => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const title = currentSlide.querySelectorAll('.word');
    const bubble = currentSlide.querySelector("[tg-element='speach-bubble']");
    const letters = currentSlide.querySelectorAll('.char');

    for (let i = 1; i < title.length; i++) {
      const characters = title[i].querySelectorAll('.char');
      characters.forEach((e) => {
        e.style.opacity = '0';
      });
    }

    let tl = gsap.timeline();
    tl.from(bubble, {
      xPercent: 50,
      opacity: 0,
      duration: 0.2,
    }).to(letters, {
      opacity: 1,
      duration: 0,
      stagger: typingSpeed,
    });
  });

  const currentSlide = swiper.slides[swiper.activeIndex];
  const title = currentSlide.querySelectorAll('.word');
  const bubble = currentSlide.querySelector("[tg-element='speach-bubble']");
  const letters = currentSlide.querySelectorAll('.char');

  for (let i = 1; i < title.length; i++) {
    const characters = title[i].querySelectorAll('.char');
    characters.forEach((e) => {
      e.style.opacity = '0';
    });
  }

  let tl = gsap.timeline();
  tl.from(bubble, {
    xPercent: 50,
    opacity: 0,
    duration: 0.3,
  }).to(letters, {
    opacity: 1,
    duration: 0,
    stagger: typingSpeed,
  });
});

//ICONS ANIMATION

gsap.registerPlugin(ScrollTrigger);

// select the all icons
const icons = document.querySelectorAll('.tools_icon-wrapper');

// create the timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_tools', // triggers the animation when the .section element comes into view
    start: 'bottom bottom', // starts the animation when the top of the trigger hits the top of the viewport
    scrub: false, // allows the animation to be scrubbed (paused and resumed) as the trigger scrolls into and out of view
  },
});

// add the stagger and animation to the timeline
tl.from(icons, {
  y: -100, // start at -100% from the top
  opacity: 0, // start with opacity 0
  scale: 0, // start with scale 0
  rotation: 180, // start with 180 degree rotation
  ease: Back.easeOut.config(2),
  stagger: {
    each: 0.05,
    from: 'center', // stagger each animation by 0.1 seconds}
  },
});
function slider1() {
  let splides = $('.slider1');
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(
      splides[i],
      {
        // Desktop on down
        perPage: 1,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: 'loop', // 'loop' or 'slide'
        gap: '35vw', // space between slides
        arrows: 'slider', // 'slider' or false
        pagination: 'slider', // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 30, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        autoplay: true, // enables autoplay
        interval: 4000, // sets slide transition duration to 3 seconds
        breakpoints: {
          991: {
            // Tablet
          },
          767: {
            // Mobile Landscape
          },
          479: {
            // Mobile Portrait
          },
        },
      },
      {
        classes: {
          pagination: 'splide__pagination',
        },
      }
    ).mount();
  }
}
slider1();

$('.splide__pagination')
  .find('li')
  .each(() => {
    $(this).addClass('.splide__pagination__page');
  });

// First, create a timeline for the animation
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.document-more_image-wrapper', // triggers the animation when the .section element comes into view
    start: 'bottom bottom', // starts the animation when the top of the trigger hits the top of the viewport
    scrub: false, // allows the animation to be scrubbed (paused and resumed) as the trigger scrolls into and out of view
  },
});
tl2.from('.document-more_progress-bar', {
  width: '0%',
  stagger: 0.2,
  ease: Back.easeOut.config(2),
});

//GET SHIT DONE ANIMATION

// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $('.section-height').each(function (index) {
    let trackWidth = $(this).find('.track').outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();
window.addEventListener('resize', function () {
  setTrackHeights();
});

let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.section-height',
      start: 'top top',
      end: '98% bottom',
      scrub: 1,
    },
  })
  .to('.track', {
    xPercent: -100,
    ease: 'none',
  });

// thanks
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.thanks-panel_wrap',
      containerAnimation: tlMain,
      start: 'left left',
      end: 'right right',
      scrub: true,
    },
  })
  .to('.thanks-panel', { xPercent: 100, ease: 'none' })
  .to('.thanks-panel_photo', { scale: 1 }, 0)
  .fromTo(
    '.thanks-panel_contain.is-2',
    {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    },
    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' },
    0
  );
