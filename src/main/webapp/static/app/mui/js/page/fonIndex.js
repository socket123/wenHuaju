
var contextPath = null;

$(function(){
	contextPath = $(".mui-title ").attr("data");

	login_yanz();//获取登录信息
	yuanxing();

})


	// 圆形适配 
function yuanxing(){
		$(window).height();
		$(document).height();


		var widths = (($(window).width()-30)/4-70)/2;
		$(".li_divall").css({
			"margin-left": widths+"px",
			"margin-right": widths+"px",
			"margin-top":  "10px",
			"margin-bottom":  "10px",
		});


}