<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>个人中心</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/personalCenter.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/iconfont.css">

    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>

    <style>



    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}"  ins = "zhongxin" ></h1>

    <a href="settting.html" class="mui-icon  mui-pull-right header_nav_color" id="care_delte"
    > 设置</a>
</div>

<div class="mui-content mui_content_divs">
    <ul class="mui-table-view" id="tab_one"  data="0" class="imgDat" style="margin-top: 0px;">
        <li class=" mui-media " style="background: #2BC19C;">
            <div class="person_div_tone " align="center" >
                <img src="${pageContext.request.contextPath}/static/app/mui/images/cbd.jpg"   class="personalcent img_wrap" />
                <p class='mui-ellipsis-1 persion_P user-name'>
                    misdjrenj%
                </p>
                <!-- <img src="${pageContext.request.contextPath}/static/app/mui/images/60x60.gif" alt="" class="personalcent"  >
                <button class="mui-btn mui-btn-success mui-btn-outlined persion_button_one" type="button">
                    点击登录
                </button> -->
            </div>
        </li>
        <li class="li_ule">
            <div class="personal_two">
                <div class="li_div prick">
                    <a href="wallet.html" class="li_div_a">
                        <span class="mui-icon iconfont icon-qianbao header_nav_color">
                        </span>
                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">钱包</div>
            </div>
            <div class="personal_two">
                <div class="li_div blue">
                    <a href="${pageContext.request.contextPath}/app/user/myOrder.html" class="li_div_a">
                        <span class="mui-icon iconfont icon-dingdan header_nav_color">
                        </span>
                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">订单</div>
            </div>
            <div class="personal_two">
                <div class="li_div green">
                    <a href="${pageContext.request.contextPath}/app/category/mallClassification.html" class="li_div_a">
                        <span class="mui-icon iconfont icon-fenlei-copy header_nav_color">
                        </span>
                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">分类</div>
            </div>
        </li>
        <div class="clear"></div>
        <li class="mui-table-view-cell mui-media">
            <a href="wallet.html" class="mui-icon iconfont icon-qianbao  mui-navigate-right persion_li_div">
                我的钱包
            </a>

        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="${pageContext.request.contextPath}/app/user/myOrder.html" class="mui-icon iconfont icon-dingdan mui-navigate-right persion_li_div">
                我的订单
            </a>

        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="receivingAddress.html" class="mui-icon iconfont icon-shequ mui-navigate-right persion_li_div">
                收货地址管理
            </a>

        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="feedback.html" class="mui-icon iconfont icon-meg mui-navigate-right persion_li_div">
                问题反馈
            </a>

        </li>
    </ul>
</div>


<%@ include file="../common/foot.jsp"%>



</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/personalCenter.js"></script>
<script>
    mui.init();

</script>
</html>