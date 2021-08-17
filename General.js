function bindEvent() {  
    document.addEventListener('touchstart', function (evt){
		 var touch = evt.touches[0];
		 var x = Number(touch.pageX); 
	     var y = Number(touch.pageY); 
	     startX = x;  
	     startY = y;
	});  
    document.addEventListener('touchmove', function (evt){
		var touch = evt.touches[0];
		var x = Number(touch.pageX); 
	    var y = Number(touch.pageY);
	    
	   if($('.mui-off-canvas-wrap').hasClass('mui-active') || $('.larger_map').hasClass('cur')){
			event.preventDefault();
			return;
		}
		if(y-startY <= 0){
			$('.poa_botom,.mui-off-canvas-wrap .mui-bar').addClass('cue');
			$('.poa_botom,.mui-off-canvas-wrap .mui-bar').removeClass('cur');
			$(".guide_down_tip").addClass('cur');
		}else{
			$('.poa_botom,.mui-off-canvas-wrap .mui-bar').addClass('cur');
			$('.poa_botom,.mui-off-canvas-wrap .mui-bar').removeClass('cue');
			$(".guide_down_tip").stop().removeClass('cur');
		}
		return;
	});  
    document.addEventListener('touchend', function (evt){

	});  
}  
bindEvent();


$(function(){

	$('.mui-btn-outlined').click(function() {
		$('.mui-bar-nav').removeClass('search-header');
	});

	$('.mui-off-canvas-backdrop').click(function(){
		$('.mui-off-canvas-left').css('-webkit-transform','translate3d(-100%,0,0)');
	});
	function puand(){
		if($('.mui-off-canvas-wrap').hasClass('mui-active')){
			event.preventDefault();
		}
	}

	$('.mui-pull-left').click(function(){
		puand();
	});
	

	
	//左侧栏链接
	$('.mui-table-view-cell a,.mui-bar a').click(function(){
		var H_ref = $(this).attr('href');
		document.location.href=H_ref;
	});

    //页面悬浮底部
	  $('.poa_botom a').click(function(){
	  		$(this).addClass('cur').siblings().removeClass('cur');
	  });

	//首页轮播图
	var mySwiper = new Swiper('.swiper-container',{
		
	})


	mui.init();
	//侧滑容器父节点
	var offCanvasWrapper = mui('#offCanvasWrapper');
	//主界面容器
	var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
	//菜单容器
	var offCanvasSide = document.getElementById("offCanvasSide");

	//移动效果是否为整体移动
	var moveTogether = false;
	//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
	var classList = offCanvasWrapper[0].classList;

	//实现ios平台原生侧滑关闭页面；
	if (mui.os.plus && mui.os.ios) {
		mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
			plus.webview.currentWebview().setStyle({
				'popGesture': 'none'
			});
		});
	}


	//显示大图弹层
	$(document).on('click','.Thumbnails,.hot_list,.classify',function(event){
		$('.larger_map').addClass('cur');
	})
	//关闭大图弹层
	$('.fanhui').on('click',function(){
		$('.larger_map').removeClass('cur');
	})


	//显示背景切换
	$('.popup_no2').click(function(){
		$('.Four_icons,.Four_fanh').addClass('cue').removeClass('cur');
$('.no_tan').addClass('cur').removeClass('cue');
	});
	//关闭背景切换
	$('.guanbi').click(function(){
		$('.Four_icons,.Four_fanh').addClass('cur').removeClass('cue');
$('.no_tan').addClass('cue').removeClass('cur');
	});
	//显示隐藏底部图标
	$('.swiper-container').on('click',function(){
		if($('.Four_icons,.Four_fanh').hasClass('cur')){
			$('.Four_icons,.Four_fanh').addClass('cue').removeClass('cur');
		}else{
			$('.Four_icons,.Four_fanh').addClass('cur').removeClass('cue');
		}
	});
	//隐藏底部图标
	$('.no_tan a').click(function(){
		$('.no_tan').addClass('cue').removeClass('cur');
	});

	//桌面背景事件
	$('.desktop').click(function(){
		$('.screensaver_no1').addClass('cur');
		$('.Four_icons,.Four_fanh').addClass('cue').removeClass('cur');
	});
	$('.screensaver_no1').click(function(){
		$('.screensaver_no1,.swiper-slide-active').removeClass('cur');
	});

	$('.screensaver_no2').click(function(){
		$('.screensaver_no2,.swiper-slide-active').removeClass('cur');
	});

	$('.icon-fm-jt-x').click(function(){
	$('.mui-backdrop,.popping1').show();
	});
	$('.mui-backdrop').click(function(){
		$('.mui-backdrop,.popping1').hide();
	});
	$('.turn_off').click(function(){
		$('.mui-backdrop,.popping1').hide();
	});

	$(".J_close").on("click", function () {
		$(".guide_down_tip").hide();
	})
})