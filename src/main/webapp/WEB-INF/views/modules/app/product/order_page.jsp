<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>确认订单</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/order_page.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>

    <style>



    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}"  >确认订单</h1>
</div>
<div class="mui-content mui_content_divs">
    <ul class="mui-table-view" style="margin-top: 0px;">
        <div class="order_page_4" ids ="${addresID}">

                <%--<li class="mui-table-view-cell mui-media" style="background: #E3F8F3;">--%>
                    <%--<a href="javascript:;">--%>
                        <%--<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="${pageContext.request.contextPath}/static/app/mui/images/shuijiao.jpg">--%>
                        <%--<div class="mui-media-body">--%>

                            <%--<p class='mui-ellipsis-2 order_page_text'>能和心爱的人一起睡觉，是件幸福的事情；件幸福的事情；可是，件幸福的事情；可是，件幸福的事情；可是，可是，打呼噜怎么办？</p>--%>
                            <%--<h3 class="order_page_text">&yen;650</h3>--%>
                            <%--<p class='mui-ellipsis-2 order_page_text'>数量×1</p>--%>

                        <%--</div>--%>
                    <%--</a>--%>
                <%--</li>--%>
                <%--<li class="mui-table-view-cell ">--%>
                    <%--<a class="mui-navigate-right">--%>
                        <%--<span class="mui-badge">请选择</span>--%>
                        <%--收货地址--%>
                    <%--</a>--%>
                <%--</li>--%>
                <%--<li class="mui-table-view-cell mui-media">--%>
                    <%--<a href="javascript:;">--%>
                        <%--<div class="mui-media-body">--%>
                            <%--<p class='mui-ellipsis-2' >收货人：hsh <span class="mui-pull-right">15240326722</span> </p>--%>
                            <%--<p class='mui-ellipsis-2' >收货地址：江苏省南京市江宁区魔灵界的程基大厦江宁区魔灵江宁区魔灵</p>--%>
                        <%--</div>--%>
                    <%--</a>--%>
                <%--</li>--%>
                <%--<li class="mui-table-view-cell">--%>
                    <%--<a class="mui-navigate-right">--%>
                        <%--<span class="mui-badge">&yen;10</span>--%>
                        <%--配送方式--%>
                    <%--</a>--%>
                <%--</li>--%>


        </div>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <div class="mui-media-object mui-pull-left">
                    买家<br>留言

                </div>

                <div class="mui-media-body">
                    <textarea id="textarea" placeholder="请留言" rows="3" class="notice-order"></textarea>
                </div>
            </a>
        </li>
        <li class="mui-table-view-cell">支付方式</li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left mui_media_weFU_img"  src="${pageContext.request.contextPath}/static/app/mui/images/zhifubao.jpg">

                <div class="mui-media-object mui_media_weFU">
                    推荐支付宝用户使用
                </div>

                <div class="mui-switch zhifu" ids="3" id="zhiFuBao">
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

                <div class="mui-switch zhifu"  ids="2" id="weiXin">
                    <div class="mui-switch-handle"></div>
                </div>
            </a>
        </li>

    </ul>
</div>
<nav class="mui-bar mui-bar-tab nav_imgs">
    <div class="nav_orderPage_left mui-pull-left">
        <span class="nav_orderPage_left_fu">应付</span>
        &nbsp;&nbsp;
        <span class="nav_orderPage_left_num totalPrice">669.00</span>
        <span class="nav_orderPage_left_yeu" >元</span>
    </div>
    <div class="nav_orderPage_right mui-pull-right">
        提交订单
    </div>
</nav>
</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/order_page.js"></script>
<script>
    mui.init();
</script>
</html>