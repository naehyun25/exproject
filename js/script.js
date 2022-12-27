document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#layer button").addEventListener("click", function () {
    document.querySelector("#layer").style.display = "none";
  });
});




// 문서의 요소(태그)가 다 준비되면 실행해 -. js 는 doncontentloaded jquery는 $(function)
// $(값)<-제이쿼리 객체 <-제이쿼리에서 제공하는 함수를 실행할수있음
// function함수를 객체로 만든거
$(function () {
  $(".full_menu, .nav li").mouseover(function () {
    $(".full_menu").stop().slideDown(600);
  });
  $(".full_menu, .nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(600);
  });
}); //jQuery
$(function () {
  $(".full_cover>ul>li").mouseover(function () {
    var i=$(this).index();//원뎁스 li중 마우스 올라간요소의 번호를 i에 할당
    $(".nav li").eq(i).find(".line").css("width,100%") //eq(n)n번째 요소를 취득
//투뎁스 i번째에 마우스 오버시 원뎁스 i번째에 find()하위 탐색
  });
  $("full_cover>ul>li").mouseleave(function(){
    var i=$(this).index();
    $(".nav li").eq(i).find(".line").css("width","0%");
  })
  $(".nav li").mouseover(function(){
    $(this).find(".line").css("width","100%");
  })
  $(".nav li").mouseleave(function(){
    $(this).find(".line").css("width","0%");
  })
  /**
   * mainCarousel
   * 시간마다 일시키는 timer
   * 애니메이션효과를 갖고있는 slide
   ***/

  var i=0,k=null,repeat;
  timer();
  function timer(){
    
    setInterval(function(){
      i++;
      k=i-1;
      if(i==3){i=0;}
      // (i==3)?i=0:i;
      console.log(i)
      slide();
    },5000);

  }


  function slide(){
    //-100%->()1s-> 0%->(1s)->100%
    $('.white_box').css("left","-100%").stop().animate({left:"0%"},1000,
    function(){
      $('.white_box').stop().animate({left:"100%"},1000)
    });
    $('.slide_cover ul li').eq(i).addClass('on');
    $('.slide_cover ul li').eq(i).find('h2').addClass('on');
    $('.slide_cover ul li').eq(i).find('.box1').addClass('on');
    $('.slide_cover ul li').eq(i).find('p').addClass('on');
    $('.slide_cover ul li').eq(i).find('a img').addClass('on');
    $('.slide_cover ul li').eq(k).removeClass('on');
    $('.slide_cover ul li a img').removeClass('on');
    console.log("i=",i,"k=",k,)




  }
 














}); 
//jQuery
//slideDown안에 트랜지션등 여러가지 애니메이션 값이 있어서 마우스를 여러번왔다갔다하면
//   계속 조금씩 지연하면서 하기 때문에 계속 오르락내리락 한다
//그래서 .stop() 함수를 써준다-> 지금 지시받은 일이 있으면 멈추고 그것부터해
//제이쿼리든 함수든 태그는 문자열로 인식해서 ""나 ''안에써준다.

//햄버거메뉴 
$(function(){
$("#header .mo").click(function(){
  $(".mo_menu").stop().slideToggle("fast");
  $("#header. mo").css('color','red');
})
});