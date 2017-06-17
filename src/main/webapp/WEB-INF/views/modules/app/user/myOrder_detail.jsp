<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>订单详情</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/myOrder_detail.css">
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
    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color"   data="${pageContext.request.contextPath}" ids="${orderId}">订单详情</h1>

</div>
<div class="mui-content mui_content_divs">
    <ul class="mui-table-view order-ul-cle" style="margin-top: 0px;">
        <%--<li class="li_ule mui-media">--%>

            <%--<a href="javascript:;">--%>
                <%--<div class="orderMy mui-media-body">--%>
                    <%--<p class='mui-ellipsis-2 '>--%>
                        <%--<span class="myorder_stauts ">【已完成】</span>--%>
                    <%--</p>--%>
                    <%--<p class='mui-ellipsis-2  '>--%>
                        <%--<span class="">收货人：中国</span>--%>
                        <%--<span class="mui-pull-right">电话：15240326722</span>--%>
                    <%--</p>--%>
                    <%--<p class='mui-ellipsis-2  '>--%>
                        <%--<span class="">收货地址：中国/北京市/市辖区/东城区</span>--%>
                    <%--</p>--%>
                <%--</div>--%>
                <%--<div class="order-img-div">--%>
                    <%--<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="${pageContext.request.contextPath}/static/app/mui/images/shuijiao.jpg">--%>
                    <%--<div class="mui-media-body">--%>

                        <%--<p class='mui-ellipsis-2 order_page_text'>能和心爱的人一起睡觉，是件幸福的事情；件幸福的事情；可是，件幸福的事情；可是，件幸福的事情；可是，可是，打呼噜怎么办？</p>--%>
                        <%--<h3 class="order_page_text myorder_yen">&yen;650</h3>--%>
                        <%--<p class='mui-ellipsis-2 order_page_text'>数量×1</p>--%>
                        <%--<!-- <a href="mall_with_tab.html" > -->--%>

                        <%--<!-- </a> -->--%>
                    <%--</div>--%>
                <%--</div>--%>

            <%--</a>--%>
            <%--<span class="mui-pull-left">总计：&yen; 60</span>--%>

            <%--<button type="button" class="mui-btn mui-btn-success mui-btn-outlined order_button mui-pull-right">--%>
                <%--去支付</button>--%>

        <%--</li>--%>





    </ul>
</div>

</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/myOrder_detail.js"></script>

<script>
    mui.init();
</script>

</html>