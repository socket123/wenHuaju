<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>设置</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/setting.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <style>


    </style>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/feedback.css" />
</head>

<body class="mui-fullscreen">
<!--页面主结构开始-->
<div id="app" class="mui-views">
    <div class="mui-view">
        <div class="mui-navbar">
        </div>
        <div class="mui-pages">
        </div>
    </div>
</div>
<!--页面主结构结束-->
<!--单页面开始-->
<div id="setting" class="mui-page">
    <!--页面标题栏开始-->
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left ">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>
        </button>
        <h1 class="mui-center mui-title header_nav_color" data="${pageContext.request.contextPath}">设置</h1>
    </div>
    <!--页面标题栏结束-->
    <!--页面主内容区开始-->
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell mui-media setting_divd">
                        <a class="mui-navigate-right"  id="head">
                            头像
								<span class="mui-pull-right head">
									<img class="head-img mui-action-preview img_wrap" id="head-img1"  src="${pageContext.request.contextPath}/static/app/mui/images/60x60.gif"
                                         onerror="javascript:this.src='${pageContext.request.contextPath}/static/app/mui/images/60x60.gif';" />
                                        <input id="upload" type="file" accept="image/*;">
									</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media setting_divd">
                        <a href="#account_name"  class="mui-navigate-right">姓名

                            <span class="mui-pull-right  user-name">Hbuilder</span>
                        </a>
                    </li>
                    <%--<li class="mui-table-view-cell mui-media setting_divd">--%>
                        <%--<a  href="#account_phone" class="mui-navigate-right ">电话--%>

                            <%--<span class="mui-pull-right user-phone">152******6722</span>--%>
                        <%--</a>--%>
                    <%--</li>--%>
                    <li class="mui-table-view-cell mui-media setting_divd">
                        <a  href="#account_password" class="mui-navigate-right ">修改密码

                            <span class="mui-pull-right user-password">*******</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <nav class="mui-bar mui-bar-tab nav_imgs" >
            <a href="#login_out" class="extopna">

                退出登录

            </a>
        </nav>


    </div>
    <!--页面主内容区结束-->
</div>
<!--单页面结束-->
<%--姓名--%>
<div id="account_name" class="mui-page">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>设置
        </button>
        <h1 class="mui-center mui-title header_nav_color">修改名称</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="li_ule">
                        <div class="mui-input-row">
                            <label >修改名称</label>
                            <input type="text" placeholder="修改名称" class="user-name-input">
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs">
        <a href="#edit_name">
            确定修改

        </a>
    </nav>
</div>

<%--&lt;%&ndash;修改电话&ndash;%&gt;--%>
<%--<div id="account_phone" class="mui-page ">--%>
    <%--<div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">--%>
        <%--<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color">--%>
            <%--<span class="mui-icon mui-icon-left-nav header_nav_color"></span>设置--%>
        <%--</button>--%>
        <%--<h1 class="mui-center mui-title header_nav_color">修改电话</h1>--%>
    <%--</div>--%>
    <%--<div class="mui-page-content">--%>
        <%--<div class="mui-scroll-wrapper">--%>
            <%--<div class="mui-scroll">--%>
                <%--&lt;%&ndash;<ul class="mui-table-view mui-table-view-chevron">&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<li class="li_ule">&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<div class="mui-input-row">&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<label >修改电话</label>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<input type="text" placeholder="修改电话" class="user-phone-input">&ndash;%&gt;--%>
                        <%--&lt;%&ndash;</div>&ndash;%&gt;--%>
                    <%--&lt;%&ndash;</li>&ndash;%&gt;--%>
                <%--&lt;%&ndash;</ul>&ndash;%&gt;--%>
                    <%--<div class="mui-card">--%>
                        <%--<div class="mui-card-content">--%>


                            <%--<div class="login_ing login_img ">--%>
                                <%--<span class="mui-icon mui-icon-phone"></span>--%>
                            <%--</div>--%>
                            <%--<div class="login_ing login_input">--%>
                                <%--<input id='accoun_phone' type="text" class="mui-input-clear mui-input login_input_s" placeholder="请输入新手机号">--%>
                            <%--</div>--%>
                            <%--<div class="login_ing login_yanzhengm regites_sen_ms">--%>
                                <%--获取验证码--%>
                            <%--</div>--%>

                        <%--</div>--%>
                    <%--</div>--%>
                    <%--<div class="mui-card">--%>
                        <%--<div class="mui-card-content">--%>


                            <%--<div class="login_ing login_img ">--%>
                                <%--<span class="mui-icon mui-icon-email"></span>--%>
                            <%--</div>--%>
                            <%--<div class="login_ing login_input">--%>
                                <%--<input id='account_send' type="text" class="mui-input-clear mui-input login_input_s" placeholder="请输入验证码">--%>
                            <%--</div>--%>

                        <%--</div>--%>
                    <%--</div>--%>
            <%--</div>--%>
        <%--</div>--%>
    <%--</div>--%>
    <%--<nav class="mui-bar mui-bar-tab nav_imgs">--%>
        <%--<a href="#edit_phobe">--%>
            <%--确定修改--%>
        <%--</a>--%>
    <%--</nav>--%>
<%--</div>--%>



<%--修改密码--%>
<div id="account_password" class="mui-page ">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>设置
        </button>
        <h1 class="mui-center mui-title header_nav_color">修改密码</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">

                <div class="mui-card">
                    <div class="mui-card-content">


                        <div class="login_ing login_img ">
                            <span class="mui-icon mui-icon-phone"></span>
                        </div>
                        <div class="login_ing login_input">
                            <input id='accoun_phone' type="text" class="mui-input-clear mui-input login_input_s" placeholder="请输入新手机号">
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
                            <input id='newPassword' type="password" class="mui-input-clear mui-input login_input_s" placeholder="请输入新密码">
                        </div>

                    </div>
                </div>
                <div class="mui-card">
                    <div class="mui-card-content">


                        <div class="login_ing login_img">
                            <span class="mui-icon mui-icon-locked"></span>
                        </div>
                        <div class="login_ing login_input">
                            <input id='newPasswordEs' type="password" class="mui-input-clear mui-input login_input_s" placeholder="请确认密码">
                        </div>

                    </div>
                </div>



            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs">
        <a href="#edit_password">
            确定修改
        </a>
    </nav>
</div>



<div id="edit_name" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell edit_name">
            <a href="javascript:;" style="color: #FF3B30;" data="">确定</a>
        </li>
    </ul>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a href="#edit_name"><b>取消</b></a>
        </li>
    </ul>
</div>

<%--<div id="edit_phobe" class="mui-popover mui-popover-action mui-popover-bottom">--%>
    <%--<ul class="mui-table-view">--%>
        <%--<li class="mui-table-view-cell edit_phobe">--%>
            <%--<a href="javascript:;" style="color: #FF3B30;" data="">确定</a>--%>
        <%--</li>--%>
    <%--</ul>--%>
    <%--<ul class="mui-table-view">--%>
        <%--<li class="mui-table-view-cell">--%>
            <%--<a href="#edit_phobe"><b>取消</b></a>--%>
        <%--</li>--%>
    <%--</ul>--%>
<%--</div>--%>

<div id="edit_password" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell edit-password-produc">
            <a href="javascript:;" style="color: #FF3B30;" data="">确定</a>
        </li>
    </ul>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a href="#edit_password"><b>取消</b></a>
        </li>
    </ul>
</div>


<div id="login_out" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell login_out_div">
            <a href="javascript:;" style="color: #FF3B30;" data="login_out">确定</a>
        </li>
    </ul>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a href="#login_out"><b>取消</b></a>
        </li>
    </ul>
</div>

</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.view.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/page/setting.js"></script>
<!-- <script src='${pageContext.request.contextPath}/static/app/mui/js/feedback.js'></script> -->

<script>



</script>

</html></html>