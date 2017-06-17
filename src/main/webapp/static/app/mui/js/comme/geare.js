    var contextPath = null;
    //通用 js 代码
    $(function(){
        contextPath = $(".mui-title ").attr("data");
        // sessionStorage.removeItem('key_a');//删除
        // console.log(sessionStorage.getItem('key_a'));// null
        div_dianji(); // div _ 选择点击事件 点击事件
       
    })


    // 地址 信息存储
    function address_sessionStorage_set(name,val) {
        localStorage.setItem(name, val);
    }

    // 地址 读取
    function address_sessionStorage_get(name) {

        return  localStorage.getItem(name);
    }

    // div _ 选择点击事件 点击事件
    function  div_dianji() {
             var clasz = $(".mui-title").attr("ins");
             $("."+clasz+"").addClass("text_color_gray");
             $("."+clasz+"").removeClass("text_color_green_12");
    }
    
        //设置值
    function  set_key(userId,appLoginToken) {
        // 设置值
        localStorage.setItem('userId', userId);
        localStorage.setItem('appLoginToken', appLoginToken);
    }
    
    // / 获取所有键值
    function login_yanz() {
        var flage = true ;
        var data = {};
        if(window.sessionStorage){//判断 浏览器是否支持h5
            console.log('ok');
        }else{
            console.log('fail');
        }
    
        var userId = localStorage.getItem('userId');
        var appLoginToken = localStorage.getItem('appLoginToken');
        if(userId == null || userId == undefined){
            flage = false;
            baseGteAction(""+contextPath+"/app/user/login.html");
        }
        if(appLoginToken == null || appLoginToken == undefined){
            flage = false;
            baseGteAction(""+contextPath+"/app/user/login.html");
        }
        data.userId = userId;
        data.appLoginToken = appLoginToken;
        console.log(userId);
        console.log(appLoginToken);
        user_flag(userId,appLoginToken);//判断 是否被单点登录
        return data;
    }
    // 清除所有键值
    function  clearl() {
        // 清除所有键值
        localStorage.clear();
    
    }

    // 判断 是否被单点登录
    function user_flag(userId,appLoginToken) {
        // 用户信息 接收 ajax
        var url = ""+contextPath+"/app/user/get-user.html";
        var data = {
            userId:userId,
            appLoginToken:appLoginToken
        };
        ajax_set_fouerUser_flage(url,data);
    }


    // ajax 接收数据 用户信息
    function  ajax_set_fouerUser_flage(url,data) {
        $.ajax({
            type: "post",
            dataType: "json",
          //  async: false,   // 同步为false
            url:url,
            data: data,
            success: function (data) {

                if (data.result == false ){
                    // mui.toast(data.message);
                    mui.toast("账号已经被登录");
                    baseGteAction(""+contextPath+"/app/user/login.html");
                }else  if (data.result == true){

                 

                }
            },
            error: function (data) {

                mui.toast("请求出错");

            }
        });
    }
    //验证码特效
    /********************************************/
    //
     var wait=60;
    
    function send_mes(clasz,phoone,url){
    
    
                 endsms(clasz,phoone,url);
                //验证码计算
    
    }
    function countdownInt(clasz) {
                    var o = clasz;
    
                    if (wait == 0) {
                        o.text("获取验证码");
                        //o.val("获取验证码");
                        o.attr("id","send_sms");
                        o.css("background-color","#2AC19C");
                        o.css("border","#FFFFFF");
                         // o.bind('click', send_mes(clasz));//绑定click事件
                        $(".login_yanzhengm").addClass("regites_sen_ms");
                        wait = 60;
                    } else {
                        // o.unbind("click"); //移除click事件
                        $(".login_yanzhengm").removeClass("regites_sen_ms");
                        console.log()
                        o.html(wait + "s");
                        //o.val(wait + "s");
                        o.attr("id","send_smsb");
                        o.css("background-color","#999999");
                        o.css("border","#999999");
                        wait--;
                        setTimeout(function() {
                            countdownInt(clasz)
                        }, 1000)
                    }
                }
    function endsms(clasz,phoone,url) {
        $.ajax({// 验证码
            type: "post",
            dataType: "json",
          //  async: false,   // 同步为false
            url: url,
            data: {username:phoone},
            success: function (data) {
                console.log(data);
                if (data.result == false ){
                      mui.toast(data.message);
                }else  if (data.result == true){
                    mui.toast("获取验证码成功");
                    
                    countdownInt(clasz);
    
                }
    
    
            },
            error: function () {
    
            }
        });
    }
    /********************************************/
    
    
    //
    function  baseGteAction(url) {
    
    
    
        window.location.href=url;
    }
    
    
    
    /// 验证手机号
    function checkPhone(phone){
    
        if(!(/^1[34578]\d{9}$/.test(phone))){
    
            return false;
        }
    
        return true;
    }

    /// 验证邮箱
    function checkEmail(email){

        if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test(email))){

            return false;
        }

        return true;
    }

    // js  手机号判断
    function  falge_message_phone(account_phone) {
        if(account_phone.trim() == "" || account_phone.length < 1){
            mui.toast("手机号不能为空");
            return  false;
        }
        if(!(checkPhone(account_phone))){
            mui.toast("手机号格式不正确");
            return  false;
        }
        return true ;
    }

        // 修改密码判断定
    function falge_message_password(phone,code,newPassword,newPasswordEs) {
        if(phone.trim() == "" || phone.length < 1){
            mui.toast("手机号不能为空");
            return  false;
        }
        if(code.trim() == "" || code.length < 1){
            mui.toast("验证码不能为空");
            return  false;
        }
     
        if(newPassword.trim() == "" || newPassword.length < 1){
            mui.toast("新密码不能为空");
            return  false;
        }
        if(newPassword != newPasswordEs){
            mui.toast("两次输入的密码不一致");
            return  false;
        }
        return true ;
    }

    // 提交 判断定
    function falge_message_feedbeek(question,contact) {
        if(question.trim() == "" || question.length < 1){
            mui.toast("内容不能为空");
            return  false;
        }
        if(contact.trim() == "" || contact.length < 1){
            mui.toast("邮箱不能为空");
            return  false;
        }

        if(!checkEmail(contact)){
            mui.toast("邮箱格式不正确");
            return  false;
        }


        return true ;
    }


