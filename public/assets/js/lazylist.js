$(document).ready(function(){
  $("#lazylist tr").slice(20).hide();

  var mincount = 20;
  var maxcount = 40;

  $(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
        $("#lazylist tr").slice(mincount,maxcount).fadeIn(1200);

        mincount = mincount+20;
        maxcount = maxcount+20

    }
  });
});
