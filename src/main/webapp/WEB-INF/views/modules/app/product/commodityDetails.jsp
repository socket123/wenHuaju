<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>商品详情</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/commodityDetails.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/icons-extra.css" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
    <style>
        .nav_imgs_ul:before{display: none !important;}
    </style>
</head>
<body id="body_div">
<div class="mui-bar mui-bar-nav header_nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color " data="${pageContext.request.contextPath}" ids ="${appProductId}">商品详情</h1>

    <a  href="care_page.html"
        class="mui-icon-extra mui-icon-extra-cart mui-pull-right mui_icon_nvar header_nav_color"></a>

</div>
<div class="mui-content mui_content_divs">



</div>


<nav class="mui-bar mui-bar-tab nav_imgs">


    加入购物车
</nav>


<nav class="mui-bar mui-bar-tab nav_imgs_hidee"   >




</nav>



<div class="tanchuang" >


</div>
</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/commodityDetails.js"></script>

<script>
    mui.init();

</script>
</html>