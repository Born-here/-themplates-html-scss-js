// .all-menu를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
  $('#nav-all').addClass('active');
});

// #nav-all .close를 클릭했을 때
// #nav-all에게 .active 클래스를 제거한다.
$('#nav-all .nav-all__close').click(function () {
  $('#nav-all').removeClass('active');
});

// #gnb에 마우스 hover했을 때
// #header 에게 .active 클래스를 추가한다.
$(document).ready(function () {
  $('#gnb').mouseenter(function () {
    $('#header').addClass('active');
    $('.gnb__depth2').stop(true, true).slideDown(500);
  });

  $('#gnb').mouseleave(function () {
    $('#header').removeClass('active');
    $('.gnb__depth2').stop(true, true).slideUp(500);
  });
});
$('.util .lang__btn').click(function () {
  $('.lang').toggleClass('active');
});
