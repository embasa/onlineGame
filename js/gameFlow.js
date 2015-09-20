var main = function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

  });

};

function nextVideo(link,current,destination){
  $('#videoFrame').attr('src',link);
  //$('#modalWrapper a').attr('href',destination);
  $(current).addClass('hidden');
  $(destination).removeClass('hidden');

  return false;
}

$(document).ready(main);
