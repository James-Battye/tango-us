// Hide all the softwares after the 3rd one and replace it with a +x text
$(document).ready(function () {
    const softwares = $(“.directory-filter_software”);
    for (let i = 0; i < softwares.length; i++) {
      const software = $(softwares[i]).find(“.directory-filter_software”);
      if (software.length > 2) {
        var remainingCount = software.length - 2;
        var remainingElem = $(‘<div class=“directory-filter_software”>’).text(`+${remainingCount}`);
        software.eq(2).replaceWith(remainingElem);
      }
    }
  });