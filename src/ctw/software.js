/*
<!-- [Attributes by Finsweet] CMS Filter -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"></script>

<!-- [Attributes by Finsweet] CMS Load -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js"></script>

<!-- [Attributes by Finsweet] CMS Static -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js"></script>

<!-- [Attributes by Finsweet] Disable scrolling -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"></script>

<meta property="og:image" content="https://uploads-ssl.webflow.com/6082c60d97b1e8632342d7d2/63362f95cb44483bedd39307_New%20Open%20graph%20image%20-%209.26.22%20(1).jpg" />
*/

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
});
