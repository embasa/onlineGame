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
  $('#modalWrapper iframe').attr('src',link);
  //$('#modalWrapper a').attr('href',destination);
  $(current).addClass('hidden');
  $(destination).removeClass('hidden');

  return false;
}

function goToAns(){
  var destination = $('#modalWrapper a').attr('href');
  $('#modalWrapper').addClass('hidden');
  $(destination).removeClass('hidden');

};

$(document).ready(main);
