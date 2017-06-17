var contextPath = null;
var user = null ;
$(function(){
	contextPath = $(".mui-title ").attr("data");
	user = login_yanz();//判断用户是否登录
	care_Page_ajax();

	
});



/**=======================
 * 留言 提交
 *
 =======================*/

/**
 * 初始化
 */
function care_Page_ajax(){

	//点击事件 发送
	$(document).on("click","#submitFeedback",function(){

		if(falge_message_feedbeek($("#question").val(),$("#contact").val())){
			ajax_user_feedback($("#question").val(),$("#contact").val());
		}else {

		}


	});
}


/**
 * 初始化
 */
function  ajax_user_feedback(content,emails) {

	// 全部
	var url = ""+contextPath+"/app/guestBook/set_guest_books.html";
	var data ={
		userId:user.userId,
		appLoginToken:user.appLoginToken,
		content:content,
		email:emails,

	};
	ajax_set_fouerUser_feedback(url,data)
}

/**
 * ajax 接收数据 用户信息 用户名称
 * @param url
 * @param data
 */
function  ajax_set_fouerUser_feedback(url,data) {
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
				$("#question").val("");
				$("#contact").val("");
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}

	