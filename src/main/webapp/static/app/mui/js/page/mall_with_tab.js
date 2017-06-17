var contextPath = null;
var user = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录

	yuanxing();

	click_product();
	ajax_product_get();
	get_search_chang();
})

/**=======================
 *  搜索 商品 初始化
 *
 =======================*/
/**
 * 搜索框 变化 改变
 */
function  get_search_chang() {
	$('.search-product-input').bind('input propertychange', function() {
		if($(this).val() == ""){
			$(".product-mui-hide").hide();
		}else {
			$(".product-mui-hide").show();
			ajax_product_get_search($(this).val());
		}
	});
	// 隐藏 框
	$(document).on("click",".mui-product-clso",function(){
		$(".product-mui-hide").hide();
	});
}
/**
 * 初始化
 */
function  ajax_product_get_search(name) {
	// 全部
	var url = ""+contextPath+"/app/product/list-featured-Search.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		name:name
	};
	ajax_get_product_search(url,data)
}

/**
 * ajax 接收数据	搜索商品
 * @param url
 * @param data
 */
function  ajax_get_product_search(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
			}else  if (data.result == true){
				ajax_get_product_html_search(data);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}

/**
 * 商品 html 数据动态插入 搜索
 */
function  ajax_get_product_html_search(data) {
	var html = [];
	var productList = data.data.productList;
	if(productList.length == 0){
		html.push('		  <li class="mui-table-view-cell product-ul-rom">没有查询到数据</li>');
	}else {
		var keys = 0 ;
		$.each(productList,function(key,value) {
			keys = key;
			html.push('		 <li class="mui-table-view-cell product-li-height">');
			html.push('			 <a href="commodityDetails.html?id='+value.id+'">');
			html.push('					 <img class="mui-media-object mui-pull-left" src="'+contextPath+value.imageSmall+'">');
			html.push('					 <div class="mui-media-body">');
			html.push('						 <p class="mui-ellipsis">'+value.name+'</p>');
			if(value.featuredPrice != ""){
				html.push('						<p class="mui-ellipsis produc_new_p">'+value.featuredPrice+'.00</p>');
			}else {
				html.push('						<p class="mui-ellipsis produc_new_p">'+value.price+'.00</p>');
			}
			html.push('					</div>');
			html.push('				 </a>');
			html.push('		</li>');
		});
	}

	$(".product-ul-es").html(html.join(''));
	if(keys > 5){
		var height =parseFloat($(".product-li-height").eq(0).css("height"))*5;
		console.log(height);
		$(".product-index-postion").css("height",""+height+"");
	}else {
		$(".product-index-postion").removeAttr("style");
	}
}




/**=======================
 * 读取 推荐为 商品 初始化
 *
 =======================*/

/**
 * 初始化
 */
function  ajax_product_get() {
	// 全部
	var url = ""+contextPath+"/app/product/list-featured-Home.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
	};
	ajax_get_product(url,data)
}

/**
 * ajax 接收数据	推荐位 商品
 * @param url
 * @param data
 */
function  ajax_get_product(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				ajax_get_product_html(data);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}

/**
 * 商品 html 数据动态插入
 */
function  ajax_get_product_html(data) {
		var html = [];
		var productList = data.data.productList;
	$.each(productList,function(key,value) {
		html.push('		 <li class="mui-table-view-cell mui-media">');
		html.push('			 <a href="commodityDetails.html?id='+value.id+'">');
		html.push('				 <img class="mui-media-object mui-pull-left mui_Zidingyi" src="'+contextPath+value.imageSmall+'">');
		html.push('					  <div class="mui-media-body">');
		html.push('							  <p class=\'mui-ellipsis-2 produc_name_p\'>'+value.name+'</p>');
		html.push('							  <p class=\'mui-ellipsis-2 produc_olrd_p\'><del>'+value.price+'.00</del></p>');
		if(value.featuredPrice != ""){
			html.push('						<p class="mui-ellipsis produc_new_p">'+value.featuredPrice+'.00</p>');
		}else {
			html.push('						<p class="mui-ellipsis produc_new_p">'+value.price+'.00</p>');
		}
		html.push('						</div>');
		html.push('				 </a>');
		html.push('		 </li>');
	});
	 $(".product-index-ul").html(html.join(''));
}



/**=======================
 *  初始化
 *
 =======================*/


// 点击事件
function click_product() {
	$(document).on("click",".product_fenl",function(){
		mui.alert("正在建设中");
	});

}

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