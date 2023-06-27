/*

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Draggable.min.js"></script>

*/

// select the draggable element
const draggable = document.querySelector('.popup-container');

// create a Draggable instance for the element
Draggable.create(draggable, {
  type: 'y', // only allow vertical dragging
  trigger: '.popup-drag-element', // only allow dragging when this element is clicked
  bounds: document.getElementsByClassName('popup-wrapper'),
  onDrag: function () {
    // get the current position of the draggable element
    const position = this.y;

    // get the height of the draggable element
    // const height = this.target.getBoundingClientRect().height;

    // get the height of the bounding box
    // const boxHeight = this.target.parentNode.getBoundingClientRect().height;
    console.log(position);

    // check if the element has been dragged to the bottom of the bounding box
    if (position === 0) {
      // play your animation here
      console.log('hit the bottom');
      const tl = gsap.timeline();
      tl.to('.popup-container', {
        y: 500,
      });
      tl.to('.popup-wrapper', {
        opacity: 0,
        duration: 0.3,
      });
      tl.to('.popup-wrapper', {
        display: 'none',
      });
    }
  },
});

const signupButton = document.querySelectorAll('.is-mobile-popup');

const cancelButton = document.querySelector('#cancel-action');

signupButton.forEach((e) => {
  console.log(e);
  e.addEventListener('click', (event) => {
    event.preventDefault();
    const tl = gsap.timeline();
    tl.to('.popup-wrapper', {
      display: 'flex',
    });
    tl.to('.popup-wrapper', {
      opacity: 1,
      duration: 0.3,
    });
    tl.fromTo(
      '.popup-container',
      {
        y: 500,
      },
      {
        y: -10,
        ease: 'power2.out',
        duration: 0.8,
      }
    );
  });
});

cancelButton.addEventListener('click', (event) => {
  event.preventDefault();
  const tl = gsap.timeline();
  tl.to('.popup-container', {
    y: 500,
  });
  tl.to('.popup-wrapper', {
    opacity: 0,
    duration: 0.3,
  });
  tl.to('.popup-wrapper', {
    display: 'none',
  });
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('diff-email')) {
  signupButton.click();
}

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
    each: 0.075,
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

var cpTenantDomain = 'tango';
var cpRouterName = 'inbound-router';
var cpHubspotFormID = ['15b9b469-a138-4736-b544-4e4c2071a6ab'];
var lead = {};
window.addEventListener('message', function (event) {
  if (event.data.type === 'hsFormCallback') {
    if (event.data.eventName === 'onFormSubmit') {
      for (var key in event.data.data) {
        if (Array.isArray(event.data.data[key].value)) {
          event.data.data[key].value = event.data.data[key].value.toString().replaceAll(',', ';');
        }
        lead[event.data.data[key].name] = event.data.data[key].value;
      }
      if (Object.keys(lead).length <= 1) {
        lead = event.data.data;
      }
    } else if (event.data.eventName === 'onFormSubmitted') {
      ChiliPiper.submit(cpTenantDomain, cpRouterName, { map: true, lead: lead });
    }
  }
});
