var contextPath = null;
var user = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录
	care_Page_ajax();
	page_list();
	get_flag_init();
});
///------------------------------接收数据  生成动态 html -----------------------------------------------------------------------------------------------------------

//数据 判断
function get_flag_init() {

	// 全部
	var url = ""+contextPath+"/app/order/list.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken
	};
	var divs = $("#orderAll");
	ajax_get_set(url,data,divs);
	// 未付款
	var url = ""+contextPath+"/app/order/list-pending-pay.html";
	var div = $("#orderUnpaid");
	ajax_get_set(url,data,div);
	// 未收货
	var url = ""+contextPath+"/app/order/list-delivering.html";
	var div = $("#orderNotShipped");
	ajax_get_set(url,data,div);
	//  已完成
	var url = ""+contextPath+"/app/order/list-finished.html";
	var div = $("#orderNotComplete");
	ajax_get_set(url,data,div);
}

//   获取 分类数据
function  ajax_get_set(url,data,div) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				console.log(data);
				ajax_init_html(data,div);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}


// 初始化 html
function  ajax_init_html(data,idv) {
	var orderList = data.data.orderList;
	var html = [];
	for (var i =0; i < orderList.length; i ++){
		var order = orderList[i];

		var hasPaidString = order.hasPaidString;// 状态
		var ids = order.id ;// id
		var createDateString = order.createDateString;// 时间
		var orderItemList = order.orderItemList;// 商品
		html.push('   <li class="li_ule mui-media orderId"  ids = "'+ids+'">');
		html.push('			 <a href="javascript:;">');
		html.push('					<div class="orderMy mui-media-body">');
		html.push('						 <p class=\'mui-ellipsis-2 order_page_text\'>');
		html.push('							 <span class="mui-pull-left">'+createDateString+'</span>');
		html.push('								 <span class="myorder_stauts">【'+hasPaidString+'】</span>');
		html.push('									   <a  class="mui-icon mui-icon-trash mui-pull-right care_delte" id="care_delte"  data="'+ids+'"> </a>');
		html.push('							 </p>');
		html.push('						 </div>');

		for(var j = 0 ; j < orderItemList.length ; j ++ ){

			var orderItem = orderItemList[j];
			html.push('				<div class="order-img-div order-deraile" ids="'+ids+'">');
			html.push('					<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="'+contextPath+orderItem.imageSmall+'">');
			html.push('					<div class="mui-media-body">');
			html.push('					<p class=\'mui-ellipsis-2 order_page_text\'>'+orderItem.name+'</p>');
			html.push('					 <h3 class="order_page_text myorder_yen">&yen;'+orderItem.price+'</h3>');
			html.push('					<p class=\'mui-ellipsis-2 order_page_text\'>数量×'+orderItem.count+'</p>');
			html.push('					</div>');
			html.push('				 </div>');
		}


		html.push('				</a>');
		html.push('             <span class="mui-pull-left order_pricAll">总计：&yen;'+order.totalPrice+'</span>');


		html.push('	 </li>');

	}
	idv.html(html.join(''));


}



///------------------------------ 点击事件-----------------------------------------------------------------------------------------------------------
	//  我的订单 点击事件
function care_Page_ajax(){


		// 跳转详情页
		$(document).on("tap",".order-deraile",function(){

			window.location.href=""+contextPath+"/app/user/myOrder_detail.html?orderId="+$(this).attr("ids")+"";
		});

		// 删除  弹窗显示
		$(document).on("tap","#care_delte",function(){
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
				
				// 全部
				var url = ""+contextPath+"/app/order/cancel/"+$("#delete").attr("data")+".html";
				var data ={
					userId:user.userId,
					appLoginToken:user.appLoginToken
				};
				ajax_cancel_set(url,data);
			}
		})
}
///------------------------------ 删除订单-----------------------------------------------------------------------------------------------------------


//   获取 分类数据 删除
function  ajax_cancel_set(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				mui.toast(data.message);
				console.log(data);
				baseGteAction(""+contextPath+"/app/user/myOrder.html");
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}


///------------------------------ 分页-----------------------------------------------------------------------------------------------------------
var orderAll_div = $("#orderAll");
var orderUnpaid_div = $("#orderUnpaid");
var orderNotShipped_div = $("#orderNotShipped");
var orderNotComplete_div = $("#orderNotComplete");


//数据 判断 orderAll_div 全部
function get_flag_init_page_orderAll_div(cunton) {

	// 全部
	var url = ""+contextPath+"/app/order/list.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		cunton:cunton
	};
	var divs = $("#orderAll");
	ajax_get_set_page(url,data,divs);

}

//数据 判断 orderAll_div 全部
function get_flag_init_page_orderUnpaid_div(cunton) {

	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		cunton:cunton
	};
	// 未付款
	var url = ""+contextPath+"/app/order/list-pending-pay.html";
	var div = $("#orderUnpaid");
	ajax_get_set_page(url,data,div);

}

//数据 判断 orderAll_div 全部
function get_flag_init_page_orderNotShipped_div(cunton) {
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		cunton:cunton
	};
	// 未收货
	var url = ""+contextPath+"/app/order/list-delivering.html";
	var div = $("#orderNotShipped");
	ajax_get_set_page(url,data,div);

}

//数据 判断 orderAll_div 全部
function get_flag_init_page_orderNotComplete_div(cunton) {
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		cunton:cunton
	};
	//  已完成
	var url = ""+contextPath+"/app/order/list-finished.html";
	var div = $("#orderNotComplete");
	ajax_get_set_page(url,data,div);
}
//   获取 分类数据 分页
function  ajax_get_set_page(url,data,div) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url: url,
		data: data,
		success: function (data) {
			if (data.result == false) {
				mui.toast(data.message);
			} else if (data.result == true) {
				console.log(data);
				ajax_init_html_page(data, div);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}

// 分页 html
function  ajax_init_html_page(data,idv) {
	var orderList = data.data.orderList;
	if(orderList.length == 0){
		mui.toast("已经到底了");
		return ;
	}
	var html = [];
	for (var i =0; i < orderList.length; i ++){
		var order = orderList[i];

		var hasPaidString = order.hasPaidString;// 状态
		var ids = order.id ;// id
		var createDateString = order.createDateString;// 时间
		var orderItemList = order.orderItemList;// 商品
		html.push('   <li class="li_ule mui-media orderId"  ids = "'+ids+'">');
		html.push('			 <a href="javascript:;">');
		html.push('					<div class="orderMy mui-media-body">');
		html.push('						 <p class=\'mui-ellipsis-2 order_page_text\'>');
		html.push('							 <span class="mui-pull-left">'+createDateString+'</span>');
		html.push('								 <span class="myorder_stauts">【'+hasPaidString+'】</span>');
		html.push('									   <a  class="mui-icon mui-icon-trash mui-pull-right care_delte" id="care_delte"  data="'+ids+'"> </a>');
		html.push('							 </p>');
		html.push('						 </div>');

		for(var j = 0 ; j < orderItemList.length ; j ++ ){

			var orderItem = orderItemList[j];
			html.push('				<div class="order-img-div order-deraile" ids="'+ids+'">');
			html.push('					<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="'+contextPath+orderItem.imageSmall+'">');
			html.push('					<div class="mui-media-body">');
			html.push('					<p class=\'mui-ellipsis-2 order_page_text\'>'+orderItem.name+'</p>');
			html.push('					 <h3 class="order_page_text myorder_yen">&yen;'+orderItem.price+'</h3>');
			html.push('					<p class=\'mui-ellipsis-2 order_page_text\'>数量×'+orderItem.count+'</p>');
			html.push('					</div>');
			html.push('				 </div>');
		}


		html.push('				</a>');
		html.push('             <span class="mui-pull-left order_pricAll">总计：&yen;'+order.totalPrice+'</span>');


		html.push('	 </li>');

	}
	idv.append(html.join(''));


}
function  page_list() {
	(function($) {
		//阻尼系数
		var deceleration = mui.os.ios?0.003:0.0009;
		$('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration:deceleration
		});
		$.ready(function() {
			//循环初始化所有下拉刷新，上拉加载。
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								// ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
								self.endPullDownToRefresh();
							}, 1000);
						}
					},
					up: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var orderAll = self.element.querySelector('#orderAll');
								var orderUnpaid = self.element.querySelector('#orderUnpaid');
								var orderNotShipped = self.element.querySelector('#orderNotShipped');
								var orderNotComplete = self.element.querySelector('#orderNotComplete');
								if(orderAll != null ){
										

									var pageNo = parseFloat(orderAll_div.attr("data"))+1;
									orderAll_div.attr("data",pageNo);
									get_flag_init_page_orderAll_div(pageNo);
								}else  if (orderUnpaid != null ){

									var pageNo = parseFloat(orderUnpaid_div.attr("data"))+1;
									orderUnpaid_div.attr("data",pageNo);
									get_flag_init_page_orderUnpaid_div(pageNo);
								}else  if (orderNotShipped != null ){

									var pageNo = parseFloat(orderNotShipped_div.attr("data"))+1;
									orderNotShipped_div.attr("data",pageNo);
									get_flag_init_page_orderNotShipped_div(pageNo);
								}else  if (orderNotComplete != null ){

									var pageNo = parseFloat(orderNotComplete_div.attr("data"))+1;
									orderNotComplete_div.attr("data",pageNo);
									get_flag_init_page_orderNotComplete_div(pageNo);
								}

								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
		});
	})(mui);


}

// 	var createFragment = function(ul, index, count, reverse) {
// 		var length = ul.querySelectorAll('li').length;
// 		var fragment = document.createDocumentFragment();
// 		var li;
// 		for (var i = 0; i < count; i++) {
// 			li = document.createElement('li');
// 			li.className = 'mui-table-view-cell';
// 			li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
// 			fragment.appendChild(li);
// 		}
// 		return fragment;
// 	};
// });