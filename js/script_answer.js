document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});
/* 문서의 요소(태그)가 다 준비되면 실행해 */
/* $(값) <- 제이쿼리 객체 <- 제이쿼리 함수를 실행할수 있음  */
$(function () {
  gnb();
  function gnb(){
	$(".full_menu, .nav li").mouseover(function () {
		$(".full_menu").stop().slideDown(600);
	});
	$(".full_menu, .nav li").mouseleave(function () {
		$(".full_menu").stop().slideUp(600);
	});
	$(".full_cover>ul>li").mouseover(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "100%");
	});
	$(".full_cover>ul>li").mouseleave(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "0%");
	});
	$(".nav li").mouseover(function () {
		$(this).find(".line").css("width", "100%");
	});
	$(".nav li").mouseleave(function () {
		$(this).find(".line").css("width", "0%");
	});
	$("#header .mo").click(function () {
		$(".mo_menu").stop().slideToggle("fast");
		$("#header .mo").css("color", "red");
	});
};
	/**
	 * mainCarousel
	 * 시간마다 일시키는 timer
	 * 애니메이션효과를 갖고있는 slide
   * 시간마다 슬라이드 계산함수
   * -> 시간마다 인덱스 계산 , slide함수 호출함
	 * * */
	var i = 0 // current
		var k = null; // k는 prev
    var n= null; // next
    var mainInterval = null; //current
    var speed =2000; //반복시간
    var mainInterval;// setintervalid
	timer();
	function timer() {
		mainInterval=setInterval(function () {
			i++;
			k = i - 1;
			if (i == 3) {
				i = 0;
			}
			slide();
		}, speed);
	}

	function slide() {
		$('.slide_btn ul li').off('click');
		$('.cursor_left, .cursor_right').off('click');
		$('.reset').off('click',reset);//비동기방식이라리셋이란 함수를 호출함
		clearInterval(mainInterval);
    //-100% -> 0 
		$(".slide_cover ul li").find(".white_box")
    .css("left", "-100%").stop()
    .animate({ left: "0%" }, 1000,
    function(){
      $(".white_box").stop().animate({left:"100%"},1000)
      $(".slide_cover ul li").eq(i).addClass("on");
      $(".slide_cover ul li").eq(k).removeClass("on");
			$(".color, .img_logo, .img_text, .box").removeClass('on');
      $(".slide_btn ul li").eq(i).find(".color").addClass("on");
      $(".slide_cover ul li").eq(i).find(".img_logo").addClass("on");
      $(".slide_cover ul li").eq(i).find(".img_text").addClass("on");
      $(".slide_cover ul li").eq(i).find(".box").addClass("on");
      $(".slide_cover ul li a img").removeClass("on");		
      $(".slide_cover ul li").eq(i).find("a img").addClass("on");
    });
    
    $(".slide_cover ul li")
    .eq(k)
    .animate({left:0}, speed,function(){
      setTimeout(function(){//지정시간지나고딱한번만하는일
      //trigger
			$('.slide_cover ul li').on("click",click_slide);
			$('.cursor_left').on("click",left_click);
			$('.cursor_right').on("click",right_click)
      },1000)
			var pause_css=$('.pause_css').css("display")
			if(pause_css=="none"){clearInterval(mainInterval);
			$(".color").removeClass("on");}
			else{
				timer();
				$('.slide_btn ul li').eq(i).find(".color").addClass('on')
			}

    })
		n=i;
	}
/**
 * click_slide
 * pager 함수
 */
function click_slide(){
	i=$(this).index();
	if(i==n)return;
	k=n;
	slide();
	$(".color").removeClass.on
}

  //click_slide(페이져버튼)

  /**
   * left_click
   * left 커서함수
   */
	function left_click(){
		i--;
	 	if(i==-1)i=2
		if(i==n) return;
		k=n ;
		slide();
		$('.color')
		.removeClass('on')
	}
  /**
   * right_click
   * right 커서함수
   */
	function right_click(){
	 i++;
	 if(i==3)i=0
	if(i==n) return;
	k=n ;
	slide();
	$('.color')
	.removeClass('on');
	}

  /**
   * reset
   * play,stop
   */
	function reset(){
		var pause_css=$('.pause_btn').css('display')
		var start_css=$('.start_btn').css('display')
		if(pause_css=="none"){
			clearInterval(mainInterval);
		 $('.color').removeClass('on')
		}else{
			timer();
			$('.slide_btn ul li').eq(i).find('.color').addClass('on')
		}
	}
	/**
	 * 이벤트 핸들러
	 */
	$('.reset').click(function(){
		reset();
	})
	$('.reset .pause_btn').click(function(){
		$('.pause_btn').css('display','none');
		$('.start_btn').css('display','block'); 
	})
	$('.reset .start_btn').click(function(){
		$('.pause_btn').css('display','block');
		$('.start_btn').css('display','none'); 
	})

	 $('.slide_btn ul li').on('click',click_slide)
	$('.cursor_left').on('click',left_click)
	$('.cursor_right').on('click',right_click)
	$('.main_cursor').mousemove(function(e){
		var x=e.clientX;
		var y=e.clientY;
		$('.cursor').css({left:x,top:y})
	})

/** 
* resize
**/

$(window).resize(function(){
	var w_width=$(window).width();
	var img_height=$(".slide_cover ul li img.pc").height();
	var img_height_mo=$(".slide_cover ul li img.mo").height();
	if(w_width>1330){
		$("#main_slide .slide_cover").height(img_height)
	}else{
		$("#main_slide .slide_cover").height(img_height_mo);
		$(".slide_cover ul li img.pc").css("display","none");
		$(".slide_cover ul li img.mo").css("display","block");
		}
})
$(window).trigger('resize');

}); //jQuery




