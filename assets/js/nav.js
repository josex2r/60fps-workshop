// Array reverse for jQuery selectors.
jQuery.fn.reverse = [].reverse;

$(document).ready(() => {
  const $a = $('#navbar li a');
  let $el = $($a[0]).parent();
  const path = window.location.pathname.replace(/(^\/)|(\/$)|(\/raf)/g, '') || '/';
  const regExp = new RegExp(path, 'i');

  $a.reverse().each((index, el) => {
    const href = el.href;

    if (href.match(regExp)) {
      $el = $(el).parent();
    }
  });

  $el.addClass('active');
});
