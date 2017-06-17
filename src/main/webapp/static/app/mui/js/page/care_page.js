var contextPath = null;

var user = null;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录
	care_Page_ajax();
	ckeckbox_all();	
	delete_ckeck();
	var url = ""+contextPath+"/app/cart.html";
	var data = {
		userId:user.userId,
		appLoginToken:user.appLoginToken
	};
	ajax_get_carePage_flage(url,data);
});




	// 结算 选择
function care_Page_ajax(){

		// 购物车 点击结算事件
		$(document).on("click",".nav_carePage_right",function(){
			// window.location.href=""+contextPath+"/app/category/order_page.html";
			// var flag= getVals("checkbox_class"); 购物车选择
			// 	if (flag) {//全选
			// 		// mui.toast('选择');
			// 		var html_1 = getCheckBoxRes("checkbox_class");
            //
			// 		// mui.toast(html_1.join(","));//结算判断 mui 获取复选框的值
            //
			// 		address_sessionStorage_set('cartItem', html_1.join(","));
			// 		window.location.href=""+contextPath+"/app/category/order_page.html";
			// 	}else{// 取消全选
			// 		mui.toast('请选择');
			//
			// 	}


			var url = ""+contextPath+"/app/preorder/add.html";
			var data = {
				userId:user.userId,
				appLoginToken:user.appLoginToken
			};
			address_get_ajax_one_ceshi(url,data);
		});

		//mui_Zidingyi

	// 购物车 点击跳转 商品详情
	$(document).on("click",".mui_Zidingyi",function(){
		var ids = $(this).attr("ids");
		var url = ""+contextPath+"/app/category/commodityDetails.html?id="+ids+"";
		baseGteAction(url);
	});

}

// 生成 预备订单
function  address_get_ajax_one_ceshi(url,data) {
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
				mui.toast(data.message);
			}else  if (data.result == true){
				// console.log(data)
				address_sessionStorage_set('preorderId', data.data.preorder.id);//存储 预购订单id
				flag = true ;
				window.location.href=""+contextPath+"/app/category/order_page.html";
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}
/*----提交信息------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function  ajax_get_orderPage(url,data) {
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
				care_page_html(data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}
/*----获取购物车信息------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 获取购物车信息
function  ajax_get_carePage_flage(url,data) {
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
				care_page_html(data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}


	// 购物车数据 html 动态插入
function  care_page_html(data) {
			var cart_data = data.data;
			var html = [];
			var totalPrice =cart_data.totalPrice;//总价格
			var cartNum = cart_data.cartNum;//总数量
			html.push('		 <ul class="mui-table-view" style="margin-top: 0px;">');
			for(var i = 0 ; i < cart_data.cartItemList.length; i ++){
				var cartItemList = cart_data.cartItemList[i];
				var count = cartItemList.count;//数量
				var ids = cartItemList.id;//主键 id 购物车
				var attrPrintNames = cartItemList.attrPrintNames; //属性
				var attrList = cartItemList.attrList; //属性
				var attrValue = cartItemList.attrValue; //属性
				var product = cartItemList.product; //属性 商品信息
				html.push('			 <li class="mui-table-view-cell mui-media  mui-checkbox">');
				html.push('				 <a href="javascript:;">');
				html.push('					<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="'+contextPath+product.imageSmall+'"  ids="'+product.id+'">');
				html.push('						 <div class="mui-media-body">');
				var attrItem_heml = [];
				for(var j =0 ; j < attrList.length ; j ++  ){
					attrItem_heml.push(attrList[j].attrItem.name);
					attrItem_heml.push(attrList[j].attrValue.name);
				}
				html.push('									<p class=\'mui-ellipsis-2 order_page_text\'>'+product.name+'/类型：'+attrItem_heml.join("-")+'</p>');

				html.push('									<h3 class="order_page_text yeN_color">&yen;'+(product.featuredPrice * count)+'</h3>');
				html.push('									 <p class=\'mui-ellipsis-2 order_page_text\'>数量×'+count+'</p>');
				html.push('						</div>');
				html.push('				 </a>');
				html.push('			<input name="checkbox_red" type="checkbox" value="'+ids+'" class="checkbox_class">');
				html.push('			 </li>');
			}
			html.push(' 	</ul>');
			// html.push('');
			console.log(data);
			$(".totalPrice").text(totalPrice);
			$(".mui_content_divs").html(html.join(''));

	}


/*--------------删除 事件--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	// 删除 事件
function delete_ckeck(){
	// 购物车 点击删除事件
		$(document).on("click","#care_delte",function(){
			
			var flag= getVals("checkbox_class");
				if (flag) {//全选
					// mui.toast('选择');
					var html_1 = getCheckBoxRes("checkbox_class");

				$("#delete").attr("data",html_1.join(","));
				mui('#delete').popover('toggle');			
				}else{// 取消全选
					mui.toast('请选择');
					
				}
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
				// mui.toast(""+$("#delete").attr("data")+"");
				var url = ""+contextPath+"/app/cart/delete_cart.html";
				var data = {
					cartId:$("#delete").attr("data")
				};
				get_click_delte(url,data);
			}

		})
}

// 删除提交
function  get_click_delte(url,data) {
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast(data.message);
				flag = false;
			}else  if (data.result == true){
				mui.toast(data.message);
				var url = ""+contextPath+"/app/cart.html";
				var data = {
					userId:user.userId,
					appLoginToken:user.appLoginToken
				};
				ajax_get_carePage_flage(url,data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;

}




	// 全选
function ckeckbox_all(){
		// 购物车 点击全选事件
		$(document).on("click",".nav_carePage_left_one",function(){
				var flag= getVals("nav_carePage_left_all");
				if (flag) {//全选
					mui.toast('选择');
					setCheckBoxRes("checkbox_class");
				}else{// 取消全选
					mui.toast('请选择');
					deletCheckBoxRes("checkbox_class");
				}
		});
}




	// 插入全选 
function setCheckBoxRes(className){

   var rdsObj   = document.getElementsByClassName(className);
    
    for(i = 0; i < rdsObj.length; i++){
        if(rdsObj[i].checked){      
        }else{
        	 rdsObj[i].checked = true;
        }
    }
}

	// 取消全选 
function deletCheckBoxRes(className){
 
  var rdsObj   = document.getElementsByClassName(className);
    var checkVal = new Array();
    var k        = 0;
    for(i = 0; i < rdsObj.length; i++){
        if(rdsObj[i].checked){
            rdsObj[i].checked = false;
        }else{
        	 rdsObj[i].checked = false;
        }
    }
}


// 结算判断mui 获取复选框的值
function getVals(id){
	var flag = false;
    var res = getCheckBoxRes(''+id+'');
    if(res.length < 1){// 没有选择
        // mui.toast('请选择');
    	flag = false;
        return;
    }else{// 选择
    	flag = true;
    }
    // mui.toast(res);
    return 	flag ; 
    
}

//结算判断 mui 获取复选框的值
function getCheckBoxRes(className){
    var rdsObj   = document.getElementsByClassName(className);
    var checkVal = new Array();
    var k        = 0;
    for(i = 0; i < rdsObj.length; i++){
        if(rdsObj[i].checked){
            checkVal[k] = rdsObj[i].value;
            k++;
        }else{

        }
    }
    return checkVal;
}