const cards = document.querySelectorAll('.blog_collection_item');

cards.forEach((e) => {
  if (e.getBoundingClientRect().width > 400) {
    const title = e.querySelectorAll('.blog_collection_title');
    const previewText = e.querySelectorAll('.blog_collection_paragraph');
    previewText[0].classList.add('shown');
    title[0].style.fontSize = '2rem';
  }
});
