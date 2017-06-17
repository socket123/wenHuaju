var contextPath = null;
var user = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录
	care_Page_ajax();
	ajax_user_init();
	mui_int();
	user_imgs();
});

/**=======================
 *修改密码
 *
 =======================*/

/**
 * 初始化
 */
function  ajax_user_password(phone,code,newPassword,newPasswordEs) {


	// 全部
	var url = ""+contextPath+"/app/user/forget-password-step3-post.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		mobile:phone,
		code:code,
		password:newPassword
	};
	ajax_set_fouerUser_passwird(url,data)
}

/**
 * ajax 接收数据 用户信息 用户名称
 * @param url
 * @param data
 */
function  ajax_set_fouerUser_passwird(url,data) {
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

				mui.toast(data.message);
				baseGteAction(""+contextPath+"/app/user/login.html");
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}


/**=======================
 *修改用户名称
 *
 =======================*/

/**
 * 初始化
 */
function  ajax_user_name(name) {

	// 全部
	var url = ""+contextPath+"/app/user/set_user_name.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		name:name
	};
	ajax_set_fouerUser_name(url,data)
}

/**
 * ajax 接收数据 用户信息 用户名称
 * @param url
 * @param data
 */
function  ajax_set_fouerUser_name(url,data) {
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

				mui.toast(data.message);
				baseGteAction("settting.html");
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}

/**=======================
 *获取用户信息
 *
 =======================*/

/**
 * 初始化
 */
function  ajax_user_init() {

	// 全部
	var url = ""+contextPath+"/app/user/get-user.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken
	};
	ajax_set_fouerUser(url,data)
}

/**
 * ajax 接收数据 用户信息
 * @param url
 * @param data
 */
function  ajax_set_fouerUser(url,data) {
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

				frounUser_init_html(data);

			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}

/**
 * 初始化  html 动态插入
 */
function frounUser_init_html(data) {
		console.log(data);
		var user = data.data.user;
		$(".img_wrap").attr("src",""+contextPath+"/upload/"+user.photo+"");
		$(".user-name").text(user.name);
		$(".user-phone").text(user.mobile);
	$(".user-name-input").val(user.name);
	$(".user-phone-input").val(user.mobile);
}








/***
 * 跟换头像
 */
//  初始化 事件
function  user_imgs() {

	// upload input  改变
	$("#upload").change(function(){
		var reader = new FileReader();
		reader.onload = function (e) {
			user_img_show(this.result);
		};
		reader.readAsDataURL(this.files[0]);
	});
}
// 图片处理
function  user_img_show(res) {
	var that = this;
	var img = new Image(),
		maxH = 300;

	img.onload = function () {
		var cvs = document.createElement('canvas'),
			ctx = cvs.getContext('2d');

		if(img.height > maxH) {
			img.width *= maxH / img.height;
			img.height = maxH;
		}
		cvs.width = img.width;
		cvs.height = img.height;

		ctx.clearRect(0, 0, cvs.width, cvs.height);
		ctx.drawImage(img, 0, 0, img.width, img.height);
		var dataUrl = cvs.toDataURL('image/jpeg', 1);
		$(".img_wrap").attr("src",dataUrl);
		$(".img_wrap").show();
		// 上传略
		
		var url = ""+contextPath+"/app/user/set_user_img.html";
		var data ={
			userId:user.userId,
			appLoginToken:user.appLoginToken,
			image:dataUrl,
			path:contextPath
		};
		ajax_get_user_img(url,data);
	};
	img.src = res;
}

// ajax 提交  图片信息 提交
function  ajax_get_user_img(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			console.log(data);
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				mui.toast(data.message);

			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}


/***
 *  初始化
 */
function care_Page_ajax(){



	//退出登录 点击事件
	$(document).on("click",".login_out_div",function(){
			clearl();//清除本地存储 的 用户信息
			var url = "logout.html";
			var  data = {};
			ajax_get(url,data);
	});

	//修改 手机 点击事件
	$(document).on("click",".edit_phobe",function(){
		mui.toast("修改手机");
		// var url = "logout.html";
		// var  data = {};
		// ajax_get(url,data);
	});

	//修改 姓名 点击事件
	$(document).on("click",".edit_name",function(){
		if($(".user-name-input").val() != null || $(".user-name-input").val().trim() != ""){

			ajax_user_name($(".user-name-input").val());
		}else {
			mui.toast("请填写信息");
		}


	});
		//验证码  点击事件
	//验证码 点击事件
	$(document).on("click",".regites_sen_ms",function(){
		if (falge_message_phone($("#accoun_phone").val())){
			send_mes($(".regites_sen_ms"),$("#accoun_phone").val(),"forget-password-step1-post.html");
		}
	});

	//修改 密码 点击事件
	$(document).on("click",".edit-password-produc",function(){
		if (falge_message_password($("#accoun_phone").val(),$("#account_send").val(),$("#newPassword").val(),$("#newPasswordEs").val())){
			ajax_user_password($("#accoun_phone").val(),$("#account_send").val(),$("#newPassword").val(),$("#newPasswordEs").val());
		}else {

		}


	});



}






// ajax 提交 退出登录
function  ajax_get(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {
			console.log(data);
			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				mui.toast(data.message);
				baseGteAction("login.html");
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}



// mui 初始化
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

	
