<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>钱包</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/wallet.css">
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
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav header_nav_wallater">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left ">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>
        </button>
        <h1 class="mui-center mui-title header_nav_color" data="${pageContext.request.contextPath}" >钱包</h1>
    </div>
    <!--页面标题栏结束-->
    <!--页面主内容区开始-->
    <div class="mui-page-content">

        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">

                <ul class="mui-table-view" id="tab_one"  data="0" class="imgDat" style="margin-top: 0px;">
                    <li class="li_ule mui-media " style="background: #2BC19C;">
                        <p class='mui-ellipsis-1 persion_P '>
                            账户余额(元)
                        </p>
                        <div class="wallet_text_sapn">

                            <div class="wallet_div_one">
													<span class="wallet_div_one_text">
													273.20
													</span>


                            </div>
                        </div>
                    </li>

                    <li class="mui-table-view-cell mui-media">
                        <a class="mui-icon mui-icon-qq mui-navigate-right persion_li_div"
                           href="#account_chongzhi" >
                            充值
                        </a>

                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a class="mui-icon mui-icon-qq mui-navigate-right persion_li_div"
                           href="#account_tixian">
                            提现
                        </a>

                    </li>





                </ul>

            </div>
        </div>
    </div>
    <!--页面主内容区结束-->
</div>
<!--单页面结束-->


<div id="account_chongzhi" class="mui-page">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>钱包
        </button>
        <h1 class="mui-center mui-title header_nav_color">充值</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="li_ule">
                        <div class="mui-input-row">
                            <label >充值金额</label>
                            <input type="text" placeholder="充值金额">
                        </div>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left mui_media_weFU_img"  src="${pageContext.request.contextPath}/static/app/mui/images/zhifubao.jpg">

                            <div class="mui-media-object mui_media_weFU">
                                推荐支付宝用户使用
                            </div>

                            <div class="mui-switch">
                                <div class="mui-switch-handle"></div>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left mui_media_weFU_img"  src="${pageContext.request.contextPath}/static/app/mui/images/weixin.jpg">

                            <div class="mui-media-object mui_media_weFU">
                                推荐微信用户使用
                            </div>

                            <div class="mui-switch">
                                <div class="mui-switch-handle"></div>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs">
        <a href="#delete">
            确定

        </a>
    </nav>
</div>

<div id="account_tixian" class="mui-page ">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>钱包
        </button>
        <h1 class="mui-center mui-title header_nav_color">提现</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="li_ule">
                        <div class="mui-input-row">
                            <label >提现金额</label>
                            <input type="text" placeholder="提现金额">
                        </div>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left mui_media_weFU_img"  src="${pageContext.request.contextPath}/static/app/mui/images/zhifubao.jpg">

                            <div class="mui-media-object mui_media_weFU">
                                推荐支付宝用户使用
                            </div>

                            <div class="mui-switch">
                                <div class="mui-switch-handle"></div>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left mui_media_weFU_img"  src="${pageContext.request.contextPath}/static/app/mui/images/weixin.jpg">

                            <div class="mui-media-object mui_media_weFU">
                                推荐微信用户使用
                            </div>

                            <div class="mui-switch">
                                <div class="mui-switch-handle"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs">
        <a href="#delete">
            确定
        </a>

    </nav>
</div>



</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.view.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/wallet.js"></script>
<!-- <script src='${pageContext.request.contextPath}/static/app/mui/js/feedback.js'></script> -->

<script>



</script>

</html>