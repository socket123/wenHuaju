
var contextPath = null;
var user = null;

$(function(){
	contextPath = $(".mui-title ").attr("data");
	user =login_yanz();//判断用户是否登录

	care_Page_ajax();// 点击事件

	mui_int();//初始化

	var url = ""+contextPath+"/app/address/list.html";
	var data = {
		userId:user.userId,
		appLoginToken:user.appLoginToken
	};
	get_address_ajax(url,data);//接收数据


	mui_radio_getValue("radio");//获取默认值
	mui_get_click();//设为默认

	 addAddress_class_click();//增加
});
//****/*************增加数据***************************************************************************
function  addAddress_class_click() {
	// 增加 地址
	$(document).on("click",".addAddress_class",function(){

		if($(".addAddress_code").attr("code") == ""){
			mui.toast("请选择地区");
			return ;
		}
		var url = ""+contextPath+"/app/area/get_areaList_code.html";
		var codes = $(".addAddress_code").attr("code");
		var data = {
			userId:user.userId,
			appLoginToken:user.appLoginToken,
			code:codes
		};
		var  datas = get_areaList_code_ajax(url,data);

		if (datas.result == false ){
			mui.toast("添加失败");
		}else  if (datas.result == true){
			var areaId =datas.data.code.id;
			var telephone =$(".addAddress_telephone").val();
			var detail =$(".addAddress_detail").val();
			var fullname = $(".addAddress_fullname").val();
			set_shuju_json(areaId,telephone,detail,fullname);
			var url = ""+contextPath+"/app/address/add.html";
			var data = {
				userId:user.userId,
				appLoginToken:user.appLoginToken,
				areaId:areaId,
				telephone:telephone,
				detail:detail,
				fullname:fullname
			};
			get_addAddress_class_ajax(url,data);
		}

	});

	// 修改地址 地址
	$(document).on("click",".esite_cll",function(){
		if($(".editAddress_code").attr("code") == ""){
			mui.toast("请选择地区");
			return ;
		}
		var url = ""+contextPath+"/app/area/get_areaList_code.html";
		var codes = $(".editAddress_code").attr("code");
		var data = {
			userId:user.userId,
			appLoginToken:user.appLoginToken,
			code:codes
		};
		var  datas = get_areaList_code_ajax(url,data);

		if (datas.result == false ){
			mui.toast("添加失败");
		}else  if (datas.result == true){
			var areaId =datas.data.code.id;
			var telephone =$(".editAddress_telephone").val();
			var detail =$(".editAddress_detail").val();
			var fullname = $(".editAddress_fullname").val();
			set_shuju_json(areaId,telephone,detail,fullname);
			var url = ""+contextPath+"/app/address/edit-post/"+$('.editAddress_code').attr('ids')+".html";
			var data = {
				userId:user.userId,
				appLoginToken:user.appLoginToken,
				areaId:areaId,
				telephone:telephone,
				detail:detail,
				fullname:fullname
			};
			get_addAddress_class_ajax(url,data);
		}

	});
}

// 数据 判断
function  set_shuju_json(areaId,telephone,detail,fullname) {

	if(areaId == null || areaId== undefined || areaId.trim() == ""){
		mui.toast("区号错误");
		return ;
	}
	if(telephone == null || telephone== undefined || telephone.trim() == "" ){
		mui.toast("电话不能为空");
		return ;
	}
	if(!checkPhone(telephone)){
		mui.toast("电话错误格式错误");
		return ;
	}

	if(detail == null || detail== undefined || detail.trim() == ""){
		mui.toast("详细地址不能为空");
		return ;
	}
	if(fullname == null || fullname == undefined || fullname.trim() == ""){
		mui.toast("姓名不能为空");
		return ;
	}
}

// 收货地址  数据接收
function  get_addAddress_class_ajax(url,data) {
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast("操作失败");
			}else  if (data.result == true){
				// mui.toast("操作成功");
				if($(".adress_queding").length > 0){
					baseGteAction(""+contextPath+"/app/user/receivingAddress.html?id=from");
				}else {
					baseGteAction(""+contextPath+"/app/user/receivingAddress.html");
				}
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});

}
// 收货地址  地区查询
function  get_areaList_code_ajax(url,data) {
	var flag = null ;
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				flag = data;
			}else  if (data.result == true){

				flag = data;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}

//****/*************修改数据***************************************************************************

function address_get_ajax_one(url,data) {
	var flag = null ;
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast("编辑出错");
			}else  if (data.result == true){
				$(".editAddress_fullname").val(data.data.fullname);
				$(".editAddress_telephone").val(data.data.telephone);
				$(".editAddress_code").text(data.data.area.pathNames);
				$(".editAddress_code").attr("code",data.data.area.code);
				$(".editAddress_code").attr("ids",data.data.id);
				$(".editAddress_detail").val(data.data.detail);
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});

}


//****/*************接收数据***************************************************************************
// 收货地址  数据接收
function  get_address_ajax(url,data) {
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
				get_address_ajax_html(data);
				flag = true ;
			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});
	return flag ;
}

// 收货地址 html s数据接收
function  get_address_ajax_html(data) {
		console.log(data);
		var html = [];
		// console.log(data.data.addressList);
		var addressList = data.data.addressList;
		for(var i = 0 ; i < addressList.length; i ++){
			var addressList_data = addressList[i];
			html.push(' <div>');
			html.push('		 <ul class="mui-table-view addresUL tiaozhuanUl" ids="'+addressList_data.id+'" >');
			html.push('			 <li class="mui-table-view-cell mui-media address_li">');
			html.push('					<a href="javascript:;" class="tiaozhua_Address" ids="'+addressList_data.id+'" >');
			html.push('							<div class="mui-media-body">');
			html.push('								 <p class=\'mui-ellipsis-2 addre_nameS\'>');
			html.push('									'+addressList_data.fullname+'');
			html.push('									 <span class="mui-pull-right addre_phones">'+addressList_data.telephone+'</span>');
			html.push('									</p>');
			html.push('								</div>');
			html.push('								<div class="mui-media-body">');
			html.push('										 <p class=\'mui-ellipsis-2 addre_address\'>')
			html.push('												'+addressList_data.area.pathNames4Print+'/'+addressList_data.detail+'');
			html.push('										 </p>');
			html.push('								</div>');
			html.push('					</a>');
			html.push('			</li>');
			html.push('  <li class="li_ule litext" ids="'+addressList_data.id+'">');
			html.push('		<div class="mui-input-row mui-radio mui-left">');
			if (addressList_data.isDefault == 1){
				html.push('			 <input type="radio" name="radio" class="radio isDefault"   value="'+addressList_data.id+'" >');
			}else {
				html.push('			 <input type="radio" name="radio" class="radio" value="'+addressList_data.id+'" >');
			}

			html.push('			 		<label>设为默认');
			html.push('			  </label>');
			html.push('		 		</div>');

			html.push('		 	<span class="mui-icon mui-icon-trash  mui-pull-right delete_Address"  ids="'+addressList_data.id+'">删除</span>');
			html.push('		 	 <span class="mui-icon  mui-icon-compose  mui-pull-right edite_Address" ids="'+addressList_data.id+'">编辑</span>');
			html.push('		 </li>');




			html.push('		  </ul>');
			html.push('	  </div>');

		}
		$(".mui_address").html(html.join(''));

			$(".isDefault").click();

}
//****/*************点击事件***************************************************************************

	// 收货地址 选择
function care_Page_ajax(){


		// 修改 地址
		$(document).on("click",".edite_Address",function(){
				$('#account_edit').show();
				$('#setting').hide();
				$(".addres_hide").hide();
				// mui('#account_edit').popover("show");
				var url = ""+contextPath+"/app/address/get/"+$(this).attr("ids")+".html";
				var data = {
					userId:user.userId,
					appLoginToken:user.appLoginToken
				};
				address_get_ajax_one(url,data);

		});

		// 修改 地址 返回主页面
		$(document).on("tap",".addres_eaut_div",function(){
				$('#account_edit').hide();
				$('#setting').show()
				$(".addres_hide").show();
					
		});

		// 跳转 订单确认页 mevaletUl 选中效果
		$(document).on("tap",".tiaozhua_Address",function(){
			console.log( $(".tiaozhua_Address").length);
			for(var i = 0 ; i < $(".tiaozhua_Address").length; i ++){
				$(".tiaozhua_Address").eq(i).parent().parent().removeClass("mevaletUl");
			}
			$(this).parent().parent().addClass("mevaletUl");
		});

		// 跳转 订单确认页 mevaletUl 跳转 确定
		$(document).on("tap",".adress_queding",function(){
			var  flag = false;
			for(var i = 0 ; i < $(".tiaozhuanUl").length; i ++){
				if ($(".tiaozhuanUl").eq(i).hasClass("mevaletUl")){
					flag = true ;
					var ids = $(".tiaozhuanUl").eq(i).attr("ids");
					baseGteAction(""+contextPath+"/app/category/order_page.html?addresID="+ids+"")
				}
			}
			if(!(flag)){
				mui.toast("请选中")
			}
		});

		// 删除  弹窗显示
		$(document).on("click",".delete_Address",function(){
			$("#delete").attr("data",$(this).attr("ids"));
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
				
				var url = ""+contextPath+"/app/address/delete/"+$("#delete").attr("data")+".html";
				var data = {
					userId:user.userId,
					appLoginToken:user.appLoginToken
				};
				get_addAddress_class_ajax(url,data);
				mui.toast(""+$("#delete").attr("data")+"");	
			}


		})



}



//****/*************设为默认***************************************************************************

// 单选点击事件 设为默认
function  mui_get_click() {
	$(document).on("click",".litext",function(){
		var url = ""+contextPath+"/app/address/set-default-address/"+$(this).attr("ids")+".html";
		var data = {
			userId:user.userId,
			appLoginToken:user.appLoginToken
		};
		mui_get_click_ajax_sde(url,data);
	});
}

// 单选点击事件 设为默认 数据 提交
function  mui_get_click_ajax_sde(url,data) {
	var flag = false ;
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			if (data.result == false ){
				mui.toast("操作失败");
			}else  if (data.result == true){
				// mui.toast("操作成功");

			}
		},
		error: function (data) {
			mui.toast("请求出错");
		}
	});

}
//****/*************接收数据***************************************************************************

// 单选取值
function mui_radio_getValue(className) {
	//"radio"
	var rdsObj   = document.getElementsByClassName(className);

	for(var i = 0; i < rdsObj.length; i++){
		if(rdsObj[i].checked){
			console.log(rdsObj[i].value);
			return rdsObj[i].value;
		}

	}
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
				console.log(e.detail.page.id + ' beforeShow');
				console.log(e);

				
			});
			view.addEventListener('pageShow', function(e) {

							console.log(e.detail.page.id + ' show');
			});
			view.addEventListener('pageBeforeBack', function(e) {
								console.log(e.detail.page.id + ' beforeBack');
			});
			view.addEventListener('pageBack', function(e) {
								console.log(e.detail.page.id + ' back');
			});
		})(mui);
		
		
		
		if(mui.os.stream){
			document.getElementById("check_update").display = "none";
		}
		


}

	

		