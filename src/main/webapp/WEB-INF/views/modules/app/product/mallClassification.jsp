<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>商城分类</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/tab-vertical-scroll.css">


    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css" />
    <style>

    </style>
</head>

<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}"  >商城分类</h1>
</div>
<div class="mui-content mui-row mui-fullscreen">
    <div class="mui-col-xs-3">
        <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
        </div>
    </div>
    <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/tab-vertical-scroll.js" type="text/javascript" charset="utf-8"></script>

<script>
    $(function(){
        login_yanz();//判断用户是否登录

        mui_int("${pageContext.request.contextPath}");
    });
</script>

</body>

</html>