$(document).ready(() => {
  const $a = $('#navbar li a');
  let $el = $($a[0]).parent();
  const path = window.location.pathname.replace(/\//g, '') || '/';
  const regExp = new RegExp(path, 'i');

  $a.each((index, el) => {
    const href = el.href.replace(/\//g, '');

    if (href.match(regExp)) {
      $el = $(el).parent();
    }
  });

  $el.addClass('active');
});
