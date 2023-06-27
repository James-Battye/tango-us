/*
<meta name="robots" content="{{wf {&quot;path&quot;:&quot;seo-index&quot;,&quot;type&quot;:&quot;Option&quot;\} }}">

<!-- [Attributes by Finsweet] Table of Contents -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js"></script>
<!-- [Attributes by Finsweet] Social Share -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js"></script>
<!-- [Attributes by Finsweet] Copy to clipboard -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-copyclip@1/copyclip.js"></script>
<!-- [Attributes by Finsweet] CMS Nest -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsnest@1/cmsnest.js"></script>

<link
  rel="stylesheet"
  href="https://unpkg.com/tippy.js@6/animations/scale.css"
/>


<!-- ToolTips Production -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="https://wepf34.csb.app/home.js"></script>

*/

const richText = document.querySelector('.text-rich-text');
const figures = richText.querySelectorAll('figure');

figures.forEach((e) => {
  console.log(e);
  e.classList.remove('w-richtext-align-center');
  e.classList.remove('w-richtext-align-normal');
  e.classList.add('w-richtext-align-fullwidth');
});

const $relatedItems = $('.directory-filter_item');
const $relatedSection = $('.section_cwt-related');

if ($relatedItems.length < 2) {
  $relatedSection.hide();
}

// Hide all the softwares after the 3rd one and replace it with a +x text
$(document).ready(function () {
  const softwares = $('.directory-filter_item-softwares');

  for (let i = 0; i < softwares.length; i++) {
    const software = $(softwares[i]).find('.directory-filter_item-software');

    if (software.length > 2) {
      var remainingCount = software.length - 2;
      var remainingElem = $('<div class="directory-filter_item-software">').text(
        `+${remainingCount}`
      );
      software.eq(2).replaceWith(remainingElem);
    }
  }

  var $itemsHero = $('.cwt-template_hero_software-item');

  if ($itemsHero.length > 1) {
    var text = $itemsHero
      .map(function () {
        return $(this).text();
      })
      .get()
      .join(', ');

    $itemsHero.first().text(text);
    $itemsHero.not(':first').remove();
  }

  var $items = $('.is--cwt-software h2');
  if ($items.length > 1) {
    $items.each(function (index) {
      if (index === $items.length - 1) {
        $(this).prepend('and ');
      } else {
        $(this).text(
          $(this).text() +
            (index === $items.length - 2 && $items.length > 2
              ? ' '
              : $items.length === 2
              ? ''
              : ', ')
        );
      }
    });
  }
});

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
