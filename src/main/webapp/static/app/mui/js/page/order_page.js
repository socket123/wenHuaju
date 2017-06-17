var contextPath = null;
var user = null;

var swith = false;

$(function(){
	contextPath = $(".mui-title ").attr("data");
	user =login_yanz();//判断用户是否登录
	order_Page_ajax();
});


	// 提交订单
function order_Page_ajax(){

		// 购物车 点击结算事件
		$(document).on("click",".nav_orderPage_right",function(){
			// window.location.href=""+contextPath+"/app/user/myOrder.html";
			var preorderId = $(".preorderId").attr("ids");
			var addressId =  $(".addres-id").attr("ids");
			var notice = $(".notice-order").val() ;
			if(addressId == null || addressId == undefined ||  addressId == ""){
				mui.toast("请选择收货地址");
				return ;
			}
			var payType =  3 ;// 默认支付宝支付
			var k = 0;
			for(var i = 0 ; i < $(".zhifu").length ; i ++){
					if(	$(".zhifu").eq(i).hasClass("mui-active")){
						if(k == 0){
							payType = $(".zhifu").eq(i).attr("ids");
							k ++ ;
							console.log(k);
						}else {
							mui.toast("只能选中一个");
							return ;
						}
					}else {
					}
			}
			if( k == 0){
				mui.toast("请选择支付方式");
				return ;
			}
			var url = ""+contextPath+"/app/order/add/"+preorderId+".html";
			var data = {
				userId:user.userId,
				appLoginToken:user.appLoginToken,
				addressId:addressId,
				notice:notice,
				payType:payType
			};
			 get_ajax_data(url,data);
		});




		var cartitem = 	address_sessionStorage_get('preorderId');// 读取存储信息
		//  获取 预购订单商品信息
		var url = ""+contextPath+"/app/preorder/"+cartitem+".html";
		var data = {
			userId:user.userId,
			appLoginToken:user.appLoginToken
		};
		order_page_get_ajax(url,data);

	if($(".order_page_4").attr("ids") != ""){

		var url = ""+contextPath+"/app/address/get/"+$(".order_page_4").attr("ids")+".html";
		var data = {
			userId:user.userId,
			appLoginToken:user.appLoginToken
		};
		address_get_ajax_one(url,data);
	}else {

	}


}
//-------------------------数据 提交-----------------------------------------------------------------------------------------------------------------------------------------------------
// 数据 提交
function  get_ajax_data(url,data) {
	mui.toast("正在提交订单。。。。");
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
				flag = false;
			}else  if (data.result == true){
					console.log(data);
				mui.toast(data.message);
				baseGteAction(""+contextPath+"/app/user/myOrder.html");

				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}



//-------------------------//  单个 收货地址 信息接收 查询-----------------------------------------------------------------------------------------------------------------------------------------------------

//  单个 收货地址 信息接收 查询
function  address_get_ajax_one(url,data) {
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				flag = false;
			}else  if (data.result == true){
				address_get_ajax_one_html(data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}
// 订单 商品 数据 接收
function  order_page_get_ajax(url,data) {
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				flag = false;
			}else  if (data.result == true){
				order_page_get_ajax_html(data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}

//单个 收货地址
function  address_get_ajax_one_html(data) {

	var html = [];

	var addressList = data.data;

		var addressList_data = addressList;

			html.push('		 <li class="mui-table-view-cell mui-media addres_div addres-id" ids="'+addressList_data.id+'" >');
			html.push('				  <a href="javascript:;">');
			html.push('						  <div class="mui-media-body">');
			html.push('								 <p class=\'mui-ellipsis-2\' >收货人：'+addressList_data.fullname+' <span class="mui-pull-right">'+addressList_data.telephone+'</span> </p>');
			html.push(' 							 <p class=\'mui-ellipsis-2\' >收货地址：'+addressList_data.area.pathNames+'/ '+addressList_data.detail+'</p>');
			html.push('							 </div>');
			html.push('					</a>');
			html.push('		</li>');


	$(".addres_charu").html(html.join(''))
}

// 确认订单 信息读取  预购订单 信息读取
function  order_page_get_ajax_html(data) {
	console.log(data);
	var cart_data = data.data;
	var html = [];
	var  priceAll = 0.00;
	var  addressList_data = cart_data.address;// 收货地址
	var  preorder = cart_data.preorder;// 预购订单信息
	var  preorderItemList = cart_data.preorderItemList;//  商品信息

	for(var i = 0 ; i < preorderItemList.length; i ++) {
				var cartItemList = preorderItemList[i];
				var count = cartItemList.count;//数量
				var ids = cartItemList.id;//主键 id 购物车
				var attrList = cartItemList.attrList; //属性
		var attrItem_heml = [];
		for (var j = 0; j < attrList.length; j++) {
			attrItem_heml.push(attrList[j].attributeItemName);
			attrItem_heml.push(attrList[j].attributeItemValueName);
		}
				html.push('	 	<li class="mui-table-view-cell mui-media " style="background: #E3F8F3;">');
				html.push('			  <a href="javascript:;">');
				html.push('					     <img class="mui-media-object mui-pull-left mui_Zidingyi"   src="' + contextPath + cartItemList.imageSmall + '"  ids="' + cartItemList.id + '">');
				html.push('							 <div class="mui-media-body">');
				html.push('									  <p class=\'mui-ellipsis-2 order_page_text\'>' + cartItemList.name + '/类型：' + attrItem_heml.join("-") + '</p>');
				html.push('										 <h3 class="order_page_text yeN_color">&yen;' + (cartItemList.price * count) + '</h3>');
				html.push('										<p class=\'mui-ellipsis-2 order_page_text\'>数量×'+count+'</p>');
				html.push('							 </div>');
				html.push('				 </a>');
				html.push(' 	</li>');
				priceAll = priceAll + (cartItemList.price  * count);//总数量			}
	}
			html.push('		  <li class="mui-table-view-cell ">');
			html.push('				<a class="mui-navigate-right" href="' + contextPath + '/app/user/receivingAddress.html?id=from">');
			html.push('					 <span class="mui-badge">请选择</span>');
			html.push('						收货地址');
			html.push('				  </a>');
			html.push('		 </li>');
	html.push('		 <div class="addres_charu preorderId"   ids = "'+preorder.id+'">');

	if(addressList_data.fullname != undefined){
				html.push('		 <li class="mui-table-view-cell mui-media addres_div addres-id" ids="'+addressList_data.id+'" >');
				html.push('				  <a href="javascript:;">');
				html.push('						  <div class="mui-media-body">');
				html.push('								 <p class=\'mui-ellipsis-2\' >收货人：'+addressList_data.fullname+' <span class="mui-pull-right">'+addressList_data.telephone+'</span> </p>');
				html.push(' 							 <p class=\'mui-ellipsis-2\' >收货地址：'+addressList_data.area.pathNames4Print+'/ '+addressList_data.detail+'</p>');
				html.push('							 </div>');
				html.push('					</a>');
				html.push('		</li>');
	}else {
				html.push('		 <li class="mui-table-view-cell mui-media addres_div addres-id" >');
				html.push('				  <a href="javascript:;">');
				html.push('						  <div class="mui-media-body">');
				html.push('								 <p class=\'mui-ellipsis-2\' >请填写收货地址</span> </p>');
				html.push('							 </div>');
				html.push('					</a>');
				html.push('		</li>');

	}
	html.push('		 </div>');
			html.push('		 <li class="mui-table-view-cell">');
			html.push('				 <a class="mui-navigate-right">');
			html.push('						 <span class="mui-badge">&yen;10</span>');
			html.push('							配送方式');
			html.push('					</a>');
			html.push('		  </li>');


			$(".totalPrice").text(priceAll);
			$(".order_page_4").html(html.join(''));




}
