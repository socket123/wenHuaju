var contextPath = null;
var user = null ;
var orderId = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	orderId = $(".mui-title ").attr("ids");
	user = login_yanz();//判断用户是否登录
	care_Page_ajax();

});

// 点击信息
function  care_Page_ajax() {
	// 全部
	var url = ""+contextPath+"/app/order/"+orderId+".html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken
	};
	ajax_get_order(url,data);
}

//   获取  订单数据
function  ajax_get_order(url,data) {
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
				ajax_get_order_html(data)
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}

/**
 * 接收信息 html
 *
 */
function  ajax_get_order_html(data) {
	var order = data.data.order;// 订单信息
	var orderItemList = data.data.orderItemList;//
	var showPayBtn = data.data.showPayBtn;//true 未支付 false 已支付

	var html = [];

		html.push(' <li class="li_ule mui-media">');
		html.push('		 <a href="javascript:;">');
		html.push('			<div class="orderMy mui-media-body">');
		html.push('				 <p class=\'mui-ellipsis-2\'>');
		html.push('					<span class="myorder_stauts ">【'+order.hasPaidString+'】</span>');
		html.push('			 	  </p>');
		html.push('				  <p class=\'mui-ellipsis-2\'>');
		html.push('					 <span class="">收货人：'+order.addressFullname+'</span>');
		html.push('					 <span class="mui-pull-right">电话：'+order.addressTelephone+'</span>');
		html.push('					</p>');
		html.push('					 <p class=\'mui-ellipsis-2\'>');
		html.push('							 <span class="">收货地址：'+order.areaPathNames+'-'+order.addressDetail+'</span>');
		html.push('					 </p>');
		html.push('			 </div>');
		for (var i = 0; i < orderItemList.length; i++) {
			var orderItem = orderItemList[i];
			var attrList = orderItem.attrList; //属性
			var attrItem_heml = [];
			for (var j = 0; j < attrList.length; j++) {
				attrItem_heml.push(attrList[j].attributeItemName);
				attrItem_heml.push(attrList[j].attributeItemValueName);
			}
			html.push('			 <div class="order-img-div order-product-li" ids="'+orderItem.product.id+'">');
			html.push('					<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="' + contextPath + orderItem.imageSmall + '">');
			html.push('					<div class="mui-media-body">');
			html.push('						<p class=\'mui-ellipsis-2 order_page_text\'>' + orderItem.name + '类型：'+attrItem_heml.join("-")+'</p>');
			html.push('							 <h3 class="order_page_text myorder_yen">&yen;' + orderItem.price + '</h3>');
			html.push('						<p class=\'mui-ellipsis-2 order_page_text\'>数量×' + orderItem.count + '</p>');
			html.push('					</div>');
			html.push('			 </div>');
		}

		html.push('		</a>');
		html.push('			<span class="mui-pull-left">总计：&yen; '+order.totalPrice+'</span>');
		if (showPayBtn) {
			html.push('		  <button type="button" class="mui-btn mui-btn-success mui-btn-outlined order_button mui-pull-right get-zhifu">去支付</button>');
		} else {
			html.push('		  <button type="button" class="mui-btn mui-btn-success mui-btn-outlined order_button mui-pull-right get-gou-shop">再次购买</button>');
		}

		html.push('	 </li>');


	$(".order-ul-cle").html(html.join(''));

}


















































