<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html class="ui-page-login">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>找回密码</title>
    <link href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/forget_password.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />

</head>

<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}">找回密码</h1>
</div>
<div class="mui-content">
    <div class="mui-card">
        <div class="mui-card-content">


            <div class="login_ing login_img ">
                <span class="mui-icon mui-icon-phone"></span>
            </div>
            <div class="login_ing login_input">
                <input id='account_phone' type="text" class="mui-input-clear mui-input login_input_s " placeholder="请输入手机号">
            </div>
            <div class="login_ing login_yanzhengm regites_sen_ms">
                获取验证码
            </div>

        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-content">


            <div class="login_ing login_img ">
                <span class="mui-icon mui-icon-email"></span>
            </div>
            <div class="login_ing login_input">
                <input id='account_send' type="text" class="mui-input-clear mui-input login_input_s" placeholder="请输入验证码">
            </div>

        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-content">


            <div class="login_ing login_img">
                <span class="mui-icon mui-icon-locked"></span>
            </div>
            <div class="login_ing login_input">
                <input id='account_password' type="password" class="mui-input-clear mui-input login_input_s" placeholder="请输入新密码">
            </div>

        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-content">


            <div class="login_ing login_img">
                <span class="mui-icon mui-icon-locked"></span>
            </div>
            <div class="login_ing login_input">
                <input id='account_orlde_password' type="password" class="mui-input-clear mui-input login_input_s" placeholder="请确认密码">
            </div>

        </div>
    </div>



    <div class="mui-content-padded">
        <button id='reg_edit' class="mui-btn mui-btn-block mui-btn-primary regist_buttion ">修改</button>
        <div class="link-area">
            <a id='reg_login' href="${pageContext.request.contextPath}/app/user/login.html" class="reg">账号登录</a>
            <span class="spliter">|</span>
            <a id='forgetPassword' href="${pageContext.request.contextPath}/app/user/info.html" class="reg" >账号注册</a>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/forget_password.js"></script>
</body>

</html>