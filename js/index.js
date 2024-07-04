
// 맨 위로 가기
$('.back-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0}, 1000)
    // js + html 설계에서는 <a href="#"> + css 를 사용했었다.
});


// header 한개를 붙였다 떼는 방법
// 메뉴 sticky
// $(window).on('scroll', function(){
//     // console.log(scrollY);
//     if(scrollY > 465){
//         $('.page-header').css({'position':'fixed', top: '-100px'})
//         .animate({top: 0},1000)
//     }
//     if(scrollY <= 466){
//         $('.page-header').css({'position':'absolute', top: '465px', 'transition':'none'})
//     }
// })

// header를 2개 사용하여 하나는 위에 숨겨 두었다가 꺼내는 방법
$(window).on('scroll', function(){
    // console.log(scrollY);
    if(scrollY > 465){
        $('.page-header.sticky').stop().animate({top: 0},100) 
        // stop()은 큐 안의 다른 명령을 지우고 대신 자신을 실행하시오 라는 의미
        // 즉 실시간 처리때 사용
    }
    if(scrollY <= 466){
        $('.page-header.sticky').stop().animate({top:'-200px'},100)
    }
});

// 최상위 부모로부터의 위치
console.log($('.hero-header').offset());
console.log($('.page-header.sticky').offset());
// 부모로부터의 위치
console.log($('.hero-header').position());
console.log($('.page-header.sticky').position());


// scroll spy : 
// 컨텐츠의 위치에 따라 메뉴를 표시하기


// html, body {scroll-behavior : smooth}
$('.primary-nav a').on('click', function(event){
    event.preventDefault();

    // console.log($(this).attr('href'));
    const id = $(this).attr('href');
    // console.log($(id).offset());

    $('html, body').animate({scrollTop: $(id).offset().top },400)
});

// 스크롤에 따라 글자 색 변경
$(window).on('scroll', function(){
    const top = scrollY;
    console.log(top);

    // js의 forEach()와 같다
    // 차이점은 index 먼저, 다음이 item이다.
    $('.primary-nav a').css('color', 'white');

    $('p').each(function(i){
        const tag = $(this);
        // console.log(tag.offset().top);
        // if(top > tag.offset().top && top > tag.offset().top + $(this).height()){
        if(top > tag.offset().top){
            $('.primary-nav li').eq(i).find('a').css('color', 'red');
        }
    });
})