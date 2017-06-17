
var contextPath = null;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	care_Page_ajax();
	mui_int();
});



function care_Page_ajax(){



// 登录 提交事件
	$(document).on("click","#login",function(){
		if (falge_message_redDiv($("#account_phone").val(),$("#account_password").val())){
			var url  = "login-post.html";
			var data = {
				username:$("#account_phone").val(),
				password:$("#account_password").val()

			};
			ajax_get_refist(url,data);

		}

	});



}


// ajax 提交
function  ajax_get_refist(url,data) {
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

				var ids = data.data.user.id;
				var appLoginToken = data.data.user.appLoginToken;
				set_key(ids,appLoginToken);
				baseGteAction(""+contextPath+"/app/index.html");
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}
// js  注册判断
function  falge_message_redDiv(account_phone,account_password) {
	if(account_phone.trim() == "" || account_phone.length < 1){
		mui.toast("手机号不能为空");
		return  false;
	}
	if(!(checkPhone(account_phone))){
		mui.toast("手机号格式不正确");
		return  false;
	}

	if(account_password.trim() == "" || account_password.length < 1){
		mui.toast("密码不能为空");
		return  false;
	}
	if(account_password.length < 6){
		mui.toast("密码不能小于6位数");
		return  false;
	}

	return true ;
}

function mui_int(){
	
		
}

	
