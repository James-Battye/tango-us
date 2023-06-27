$('.feature_animation_tabs-link').on('click tap', function () {
  $(this).find('.feature_animation_paragraph').addClass('is--active');

  $(this).siblings().find('.feature_animation_paragraph').removeClass('is--active');

  $(this)
    .find('.pulse-inactive')
    .removeClass('pulse-inactive')
    .addClass('pulse is--inactive is--active');

  $(this)
    .siblings()
    .find('.pulse')
    .removeClass('is--active')
    .removeClass('is--inactive')
    .removeClass('pulse')
    .addClass('pulse-inactive');
});
