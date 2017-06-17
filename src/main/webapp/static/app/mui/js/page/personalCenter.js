var contextPath = null;
var user = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录


	ajax_user_init();



});

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
	ajax_set_fouerUser_sd(url,data)
}

/**
 * ajax 接收数据 用户信息
 * @param url
 * @param data
 */
function  ajax_set_fouerUser_sd(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);
				baseGteAction("login.html");
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
	var src = ""+contextPath+"/upload/"+user.photo+"";
	$(".personalcent").attr("src",src);
	$(".user-name").text(user.name);
	// $(".user-phone").text(user.mobile);
}


	// 登录 已经登录的情况下 用户信息 html
function  frounUser_html(data) {
	var html = [];
	var user =  data.data.userAll;
	// console.log(user.photo);
	if(user.photo == undefined){
		html.push(' <img src="'+contextPath+'/static/app/mui/images/60x60.gif" alt="" class="personalcent" />');
	}else {
		html.push(' <img src="'+contextPath+'/static/app/mui/images/'+user.photo+'"  alt="" class="personalcent" />');
	}
	html.push(' <p class="mui-ellipsis-1 persion_P ">');
	html.push(''+user.name+'');
	html.push(' </p>');

	$(".person_div_tone").html(html.join(''));
}

// ajax 提交
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

			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}


// ajax 接收数据 用户信息
function  ajax_set_fouerUser(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);

				baseGteAction("login.html");
			}else  if (data.result == true){

				frounUser_html(data);

			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}



//
// // 登录 没有登录的情况下 用户信息 html
// function  frounUser_not_html(data) {
// 	var html = [];
// 	var user =  data.data.userAll;
// 	console.log(user.photo);
// 	if (user.photo == undefined){
//
// 	}
// 	html.push(' <img src=\''+contextPath+'/static/app/mui/images/60x60.gif\' onerror=\'this.src='+contextPath+'"/static/app/mui/images/60x60.gif"\'  alt="" class="personalcent"  >');
// 	html.push(' <button class="mui-btn mui-btn-success mui-btn-outlined persion_button_one" type="button">');
// 	html.push('点击登录');
// 	html.push('</button> ');
// 	return html ;
// }