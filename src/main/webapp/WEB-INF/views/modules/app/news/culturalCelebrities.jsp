<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<%--废弃--%>
<head>
    <meta charset="utf-8">
    <title>文化名人</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/news_with_tab.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">

    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>

<style>
    .mui-fullscreen.mui-slider .mui-slider-item>a {transform:none;}
    /*轮播图 位置信息去掉*/
</style>
</head>

<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color">文化名人</h1>
</div>

<!-- 记录页码 -->
<div class="mui-content">
    <div id="slider" class="mui-slider mui-fullscreen">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll" id="hear_mui_news">


            </div>
        </div>
        <div class="mui-slider-group newId">

            <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
            </div>

            <div id="item2mobile" class="mui-slider-item mui-control-content">

            </div>

            <div id="item3mobile" class="mui-slider-item mui-control-content">

            </div>

            <div id="item4mobile" class="mui-slider-item mui-control-content">

            </div>



        </div>



    </div>
</div>

<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.pullToRefresh.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.pullToRefresh.material.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/page/news_with_tab.js"></script>
<script>
    mui.init();


    $(function(){

        click_with("${pageContext.request.contextPath}");
        var slider = mui(".sliders");

        slider.slider({
            interval: 5000
        });
    })


</script>
</body>

</html>