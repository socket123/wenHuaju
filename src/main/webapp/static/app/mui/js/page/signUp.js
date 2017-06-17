$(function(){

	care_Page_ajax();

	
});


	// 
function care_Page_ajax(){



		// 购物车 点击在勾选事件
		$(document).on("click",".order_button",function(){
				window.location.href="mall_with_tab.html";
						
		});


		// 删除  弹窗显示
		$(document).on("click","#care_delte",function(){
			$("#delete").attr("data",$(this).attr("data"));
			mui('#delete').popover('toggle');					
		});


		// 获取值
		mui('body').on('tap', '.mui-popover-action li>a', function() {
			var a = this,
				parent;
			//根据点击按钮，反推当前是哪个actionsheet
			for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
				if (parent.classList.contains('mui-popover-action')) {
					break;
				}
			}
			//关闭actionsheet
			mui('#' + parent.id).popover('toggle');	
			if ($(this).attr("data") == "delted") {//点击删除信息
		
				mui.toast(""+$("#delete").attr("data")+"");	
			}


		})


}


	