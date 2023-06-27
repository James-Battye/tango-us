/*
<!-- ToolTips Production -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="https://wepf34.csb.app/home.js"></script>

*/

function manipulateDOM() {
  const links = document.querySelectorAll('.text-rich-text a');

  links.forEach((e) => {
    e.setAttribute('target', '_blank');
  });

  // Fix links with rel attribute
  $('a').each(function () {
    var url = $(this).attr('href');
    if (url.includes('nofollow')) {
      $(this).attr('rel', 'nofollow');
    } else {
      $(this).attr('rel', 'dofollow');
    }
  });

  $('a').each(function () {
    $(this).attr('href', $(this).attr('href').replace('#nofollow', ''));
    $(this).attr('href', $(this).attr('href').replace('#dofollow', ''));
  });
}

window.addEventListener('DOMContentLoaded', manipulateDOM);

const richText = document.querySelector('.text-rich-text');
const figures = richText.querySelectorAll('figure');

figures.forEach((e) => {
  console.log(e);
  e.classList.remove('w-richtext-align-center');
  e.classList.remove('w-richtext-align-normal');
  e.classList.add('w-richtext-align-left');
});

function matchDates(date1, date2) {
  // Map full month names to their corresponding two-digit month numbers
  const monthMap = {
    January: '1',
    February: '2',
    March: '3',
    April: '4',
    May: '5',
    June: '6',
    July: '7',
    August: '8',
    September: '9',
    October: '10',
    November: '11',
    December: '12',
  };

  // Extract the day, month, and year from the second date string
  const [, month, day, year] = date2.match(/(\w+) (\d+)[a-z]+ (\d+)/);

  // Compare the extracted values to the values in the first date string
  return `${monthMap[month]}/${day}/${year}` === date1;
}

const date1 = '7/15/2023';
const date2 = 'July 15th 2023';

if (window.matchMedia('(min-width: 767px)').matches) {
  const update = document.querySelector('#updateDate');
  const publish = document.querySelector('#publishDate');
  const updateContent = update.innerHTML;
  const publishContent = publish.innerHTML;
  const publishDot = document.querySelector('#updateDot');
  const updateText = document.querySelector('#updatedText');
  const copyURL = document.querySelector('.copyurl');

  if (updateContent === publishContent) {
    updateText.innerHTML = 'Published: ';
    update.remove();
    publishDot.remove();
  }
}

const copyURL = document.querySelector('.copyurl');

// copy url
copyURL.innerHTML = document.URL;

// tooltip
tippy('.blog-post_social-link.copy', {
  content: 'Link copied!',
  animation: 'scale',
  trigger: 'click',
  placement: 'top',
});
/*
// JUMP LINKS - NATALIA'S WAY OF CALLING IT
  window.addEventListener('DOMContentLoaded', function() {
    var richText = document.querySelector('.text-rich-text'); // Replace '.your-rich-text-class' with the actual class of your rich text element

    var links = richText.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('data-scroll-time', '0.5');
    }
  });
*/
