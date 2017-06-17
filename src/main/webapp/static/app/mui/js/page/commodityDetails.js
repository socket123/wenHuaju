
var contextPath = null;
var id = null;
$(function(){
	contextPath = $(".mui-title").attr("data");
	var user = login_yanz();//判断用户是否登录

	 id = $(".mui-title").attr("ids");
	commDity_ajax_html()
	shoppn_TeXiao(user);

	//tanchuang();
});


	// 购物车 特效
function shoppn_TeXiao(user){
// 购物车点击选中 事件
	commodity_click();//
		// 购物车 点击事件
		$(document).on("click",".nav_imgs",function(){

			fade_shoppen_show();			
		});

		// 弹窗 点击事件
		$(document).on("click",".tanchuang",function(){

			fade_shoppen_hide();
		});




		// 购物车 选项点击事件 确定
		$(document).on("click",".commodity",function(){
			var flage_comdit = 0 ;
			var flage_comdit_count = 0 ;
			//第一类 属性 id
			var itemId  = null ;
			//第二类 属性 id
			var valueId  = null ;
			var html = [];
			for(var i = 0 ;  i < $(".kuanshi_commodity").length ; i ++){
				var kuans = $(".kuanshi_commodity").eq(i);
				if(kuans.hasClass("kuanshi_commodity_vactive")){
					flage_comdit ++ ;
					itemId = kuans.attr("ids");
					html.push(''+kuans.attr("ids")+'');
				}else {
				}
			}
			for(var i = 0 ;  i < $(".kuanshi_commodity_2").length ; i ++){
				var kuanshi_commodity_2 = $(".kuanshi_commodity_2").eq(i);
				if(kuanshi_commodity_2.hasClass("kuanshi_commodity_vactive")){
					flage_comdit ++ ;
					valueId = kuanshi_commodity_2.attr("ids");
					html.push(''+kuanshi_commodity_2.attr("ids")+'');
				}else {
				}
			}
			if($(".kuanshi_commodity").length > 0){
				flage_comdit_count ++;
			}
			if($(".kuanshi_commodity_2").length > 0){
				flage_comdit_count ++;
			}
			//["3_15","2_10",...]
			if(flage_comdit == flage_comdit_count ){
				var productId = $(".mui-title").attr("ids");
				var count = $("#test").val();
				var userId = $(".mui-title").attr("ids");
				var attributes = "";
				if(html.length > 0){
					attributes = html.join("_");
				}else {
					attributes= ["3_15"];
				}
				var url = ""+contextPath+"/app/cart/add.html";
				var data={
					productId:productId,
					count:count,
					attributes:attributes,
					userId:user.userId,
					appLoginToken:user.appLoginToken
				};
				var flages = ajax_get_commodity_flage(url,data);
				if(flages){
					fade_shoppen_hide();
					mui.toast("添加购物车成功");
				}else {
					mui.toast("添加购物车失败");
				}
			}else {
				mui.toast("添加购物车失败");
			}
		});

}
// mui.toast("账号已经被登录");
// baseGteAction(""+contextPath+"/app/user/login.html");
// ajax 购物车 数据 提交
function  ajax_get_commodity_flage(url,data) {
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
				
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}


// 购物车点击选中 事件
function commodity_click() {
// 购物车 选项点击事件 选项选择 效果 特效
	$(document).on("click",".kuanshi_commodity",function(){
		// 类型 选中
		for(var i = 0 ;  i < $(".kuanshi_commodity").length ; i ++){
			var kuans = $(".kuanshi_commodity").eq(i);
			if($(this).attr("ids") != kuans.attr("ids")){
				kuans.removeClass("kuanshi_commodity_vactive");
			}
		}
		$(this).addClass("kuanshi_commodity_vactive");
		//子类显示
		for(var j = 0 ;  j < $(".comm_body").length ; j ++){
			var comm_body = $(".comm_body").eq(j);
			comm_body.removeClass("commode_vactive");
			$(".comm_ID_"+$(this).attr("ids")+"").addClass("commode_vactive");
			for(var i = 0 ;  i < $(".kuanshi_commodity_2").length ; i ++){
				var kuans = $(".kuanshi_commodity_2").eq(i);
				kuans.removeClass("kuanshi_commodity_vactive");
			}
		}
	});
	// 购物车 选项点击事件 子类 特效 选项选择 效果 特效
	$(document).on("click",".kuanshi_commodity_2",function(){
		for(var i = 0 ;  i < $(".kuanshi_commodity_2").length ; i ++){
			var kuans = $(".kuanshi_commodity_2").eq(i);
			if($(this).attr("ids") != kuans.attr("ids")){
				kuans.removeClass("kuanshi_commodity_vactive");
			}
		}
		$(this).addClass("kuanshi_commodity_vactive");
	});
}


// ajax 数据 读取 商品详情
function  commDity_ajax_html() {
	$.ajax({// 请求数据
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url: ""+contextPath+"/app/product/"+id+".html",
		data: {appCartCookieId:id },
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				commdityDeataill_html(data);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
}


// html 插入数据
function  commdityDeataill_html(data) {
//contextPath+
	console.log(data);
	var product = data.data.product;
	$(".mui-title").text(product.name);
	//// 页面html
	var html = [];
	html.push(' <ul class="mui-table-view" id="tab_one"  data="0" class="imgDat" style="margin-top: 0px;background: #2AC198">');
	html.push('		 <div class="imgDat_ked">');
	html.push('			<img src="'+contextPath+product.imageSmall+'" alt="" class="imgDat_imgs">');
	html.push('		 </div>');
	html.push('		<li class=" mui-media imgDat_imgs_li" >');
	html.push('			 <a href="javascript:;" class="img_div_a">');
	html.push('					<div class="mui-pull-left img_div_one img_div_texe">');
	html.push('						 <div class="mui-pull-left mui-media-object">');
	html.push('							  <span class="img_text_one_span img_text_span_one">&yen;'+product.featuredPrice+'</span>');
	html.push('						 </div>');
	html.push('						 <p class=\'mui-ellipsis-1\'>');
	html.push('							  <del  class="img_text_one_span">&yen;'+product.price+'</del>');
	html.push('									 <br/>');
	html.push('							<span   class="img_text_one_span">已售&nbsp;27042件</span>');
	html.push('						</p>');
	html.push('				  </div>');
	html.push('				 <div class="mui-pull-left img_div_two img_div_texe">');
	html.push('					 <p class=\'mui-ellipsis-2 img_text_two_span\'>'+product.shortDescription+'</p>');//商品标题
	html.push('				</div>');
	html.push('			</a>');
	html.push('		</li>');
	html.push('</ul>');
	html.push('  <ul class="mui-table-view" >');
	html.push('		 <li class="mui-table-view-cell" >');
	html.push('			商品详情');
	html.push('		</li>');
	html.push('		<li class="mui-table-view-cell" >');
	html.push('			<div class="commodity_imgs">');//商品详情
	html.push('				'+product.description+'	');//商品详情
	html.push('			</div>');//商品详情

	if(product.appLongImage1 != ""){

		html.push('		<img src="'+contextPath+product.appLongImage1+'" class="commodity_imgs">	');//商品详情图片
	}
	if(product.appLongImage2 != ""){

		html.push('		<img src="'+contextPath+product.appLongImage2+'" class="commodity_imgs">	');//商品详情图片
	}
	if(product.appLongImage3 != ""){

		html.push('		<img src="'+contextPath+product.appLongImage3+'" class="commodity_imgs">	');//商品详情图片
	}
	if(product.appLongImage4 != ""){

		html.push('		<img src="'+contextPath+product.appLongImage4+'" class="commodity_imgs">	');//商品详情图片
	}
	if(product.appLongImage5 != ""){

		html.push('		<img src="'+contextPath+product.appLongImage5+'" class="commodity_imgs">	');//商品详情图片
	}

	html.push('		 </li>');
	html.push(' </ul>');

	$(".mui_content_divs").html(html.join(''));
//--------------------------------------------------------------------------------------------------------------------------------------------------
	//// 购物车html
	var html_nav = [];
	//// 类型html
	var html_nav_Lx=[];
	html_nav.push('<div class="mui-scroll-wrapper">');
	html_nav.push('			 <div class="mui-scroll"  style="overflow: auto;height:300px;" >');
	html_nav.push('				 <ul class="mui-table-view">');
	html_nav.push('					 <li class="mui-table-view-cell mui-media">');
	html_nav.push('							 <img class="mui-media-object mui-pull-left mui_Zidingyi" src="'+contextPath+'/static/app/mui/images/shuijiao.jpg">');
	html_nav.push('							 <div class="mui-media-body">');
	html_nav.push('								<p class=\'mui-ellipsis-2 \'>');
	html_nav.push('								 	<h3 class="h_three">&yen;'+product.featuredPrice+'</h3>');
	html_nav.push('								 </p>');
	html_nav.push('								 <p class=\'mui-ellipsis-2\'>库存 &nbsp;99999 </p>');
	// html_nav.push('								 <p class=\'mui-ellipsis-2\'>已选 &nbsp; 默认</p>');
	html_nav.push('							 </div>');
	html_nav.push('					 </li>');
	html_nav.push(' 				<li class="li_ule lx_liue">');
	html_nav.push('					 <div class="mui-media-body ">');
	html_nav.push('						 <p class=\'mui-ellipsis-2 \'>');
	html_nav.push('								  款式类型');
	html_nav.push('						</p>');
	html_nav.push('					</div>');
	html_nav.push('					 <div class="mui-media-body ">');
	for(var i = 0 ; i < product.attrList.length ; i ++ ){//类型显示
		var productAttrList = 	product.attrList[i];
		if(i == 0 ){
			html_nav.push('						<div class="kuanshi_commodity  kuanshi_commodity_1 kuanshi_commodity_vactive" ids="'+productAttrList.id+'">');
			html_nav.push('							'+productAttrList.name+'');
			html_nav.push('						</div>');
		}else{
			html_nav.push('						<div class="kuanshi_commodity kuanshi_commodity_1" ids="'+productAttrList.id+'">');
			html_nav.push('							'+productAttrList.name+'');
			html_nav.push('						</div>');
		}
			if(productAttrList.valueList.length > 0){//判断
				if(i == 0 ){
					html_nav_Lx.push('					 <div class="mui-media-body comm_ID_'+productAttrList.id+' comm_body commode_vactive"  >');
				}else {
					html_nav_Lx.push('					 <div class="mui-media-body  comm_body comm_ID_'+productAttrList.id+'">');
				}
				for(var j = 0; j <productAttrList.valueList.length ; j ++ ){
					var valueL = productAttrList.valueList[j];
					if( j == 0 && i == 0){
						html_nav_Lx.push('						<div class="kuanshi_commodity_1 kuanshi_commodity_2 kuanshi_commodity_vactive" ids ="'+valueL.id+'"  price="'+valueL.price+' ">');
						html_nav_Lx.push('							'+valueL.name+'');
						html_nav_Lx.push('						</div>');
					}else {
						html_nav_Lx.push('						<div class="kuanshi_commodity_1 kuanshi_commodity_2 " ids ="'+valueL.id+'"  price ="'+valueL.price+'" >');
						html_nav_Lx.push('							'+valueL.name+'');
						html_nav_Lx.push('						</div>');
					}

				}
				html_nav_Lx.push('					 </div>');
			}
	}
	html_nav.push('					 </div>');
	html_nav.push('				 </li>');
	html_nav.push('				<li class="li_ule">');
	html_nav.push('					 <div class="jian_hao_div_onew">');
	html_nav.push('							<p class=\'mui-ellipsis-2\'>');
	html_nav.push('								   购买数量');
	html_nav.push('							</p>');
	html_nav.push('					 </div>');
	html_nav.push('					 <div class="jian_hao_div">');
	html_nav.push('					  		<div class="mui-numbox" data-numbox-min=\'1\' data-numbox-max=\'99999\'>');
	html_nav.push('					 			 <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>');
	html_nav.push('								 <input id="test" class="mui-input-numbox" type="number" value="1" />');
	html_nav.push('								 <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>');
	html_nav.push('							</div>');
	html_nav.push('					</div>');
	html_nav.push('				 </li>');
	html_nav.push('			  </ul>');
	html_nav.push('		</div>');
	html_nav.push('		<div class="commodity">');
	html_nav.push('			  确定');
	html_nav.push('		 </div>');
	html_nav.push('</div>');

	$(".nav_imgs_hidee").html(html_nav.join(''));

	$(".lx_liue").append(html_nav_Lx.join(''));

}
//
	// 购物 弹窗显示
function fade_shoppen_show(){
		$(".tanchuang").show();
		$(".nav_imgs_hidee").fadeIn(500);	
		$(".nav_imgs_hidee").css("height","340px");
}

	// 购物 弹窗 隐藏
function fade_shoppen_hide(){
		$(".tanchuang").hide();
		$(".nav_imgs_hidee").fadeOut(500);	
		$(".nav_imgs_hidee").css("height","0px");
}