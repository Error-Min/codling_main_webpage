// jQuery 문서 준비 이벤트
$(document).ready(function(){

    // 모바일 환경인지 확인하는 함수
    function isMobile() {
        return window.innerWidth <= 1024;
    }

    // 메뉴 버튼 클릭 이벤트
    $('.menu_btn').click(function(){
        // 모바일 환경일 때만 동작
        if (isMobile()) {
            // 메뉴 버튼의 클래스 토글
            $('.menu_btn').toggleClass('lijo');
            // gnb의 클래스 토글
            $('.gnb').toggleClass('surya');
            // 초기화: 서브메뉴 스타일 제거
            $('.sub').removeAttr('style');  
        }
    });
    
});




$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('#overlay-text').css({ 'opacity' : '0' });
    } else {
      $('#overlay-text').css({ 'opacity' : '1' });
    }
  });


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('#overlay-text1').addClass('scrolled');
    } else {
      $('#overlay-text1').removeClass('scrolled');
    }
  });