const buttons = document.querySelectorAll('.blog_view-all-button');

buttons.forEach((button) => {
  const wrapper = button.closest('.blog_heading-wrapper');
  const heading = wrapper.querySelector('.heading-style-h3');
  console.log(heading.innerHTML);
});
