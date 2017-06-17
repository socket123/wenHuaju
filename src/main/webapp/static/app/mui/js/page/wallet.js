var contextPath = null;

$(function(){
	contextPath = $(".mui-title ").attr("data");
	login_yanz();//判断用户是否登录

	care_Page_ajax();

	mui_int();
});


	// 结算 选择
function care_Page_ajax(){





}


function mui_int(){
	mui.init();
		//初始化单页view
		var viewApi = mui('#app').view({
			defaultPage: '#setting'
		});

		
		var view = viewApi.view;
		(function($) {
			//处理view的后退与webview后退
			var oldBack = $.back;
			$.back = function() {
				if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
					viewApi.back();
				} else { //执行webview后退
					oldBack();
				}
			};
			//监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发)
			//第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象
			view.addEventListener('pageBeforeShow', function(e) {
				//				console.log(e.detail.page.id + ' beforeShow');
			});
			view.addEventListener('pageShow', function(e) {
				//				console.log(e.detail.page.id + ' show');
			});
			view.addEventListener('pageBeforeBack', function(e) {
				//				console.log(e.detail.page.id + ' beforeBack');
			});
			view.addEventListener('pageBack', function(e) {
				//				console.log(e.detail.page.id + ' back');
			});
		})(mui);
		
		
		
		if(mui.os.stream){
			document.getElementById("check_update").display = "none";
		}
		
}

	
