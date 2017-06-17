<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>我的订单</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/myOrder.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>


    <style>



    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}">我的订单</h1>

    <!-- 	<a class="mui-icon mui-icon-trash mui-pull-right care_delte" id="care_delte"
        ></a> -->
</div>
<div class="mui-content mui_content_divs">
    <div id="slider" class="mui-slider mui-fullscreen">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a class="mui-control-item mui-active" href="#item1mobile">
                   全部
                </a>
                <a class="mui-control-item" href="#item2mobile">
                    待付款
                </a>
                <a class="mui-control-item" href="#item3mobile">
                    未收货
                </a>
                <a class="mui-control-item" href="#item4mobile">
                    已完成
                </a>
            </div>
        </div>
        <div class="mui-slider-group">
            <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                <div id="scroll1" class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="mui-table-view" style="margin-top: 0px;" id="orderAll" data = "0">



                </ul>
            </div>
        </div>
    </div>

    <div id="item2mobile" class="mui-slider-item mui-control-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <%--未付款--%>
                        <ul class="mui-table-view"  id="orderUnpaid" data = "0">


                        </ul>
                    </div>
                </div>
            </div>

            <div id="item3mobile" class="mui-slider-item mui-control-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <%--未发货--%>
                        <ul class="mui-table-view" id="orderNotShipped" data = "0">


                        </ul>
                    </div>
                </div>
            </div>
            <div id="item4mobile" class="mui-slider-item mui-control-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <%--已完成--%>
                        <ul class="mui-table-view" id="orderNotComplete" data = "0">


                        </ul>
                    </div>
                </div>
            </div>



        </div>
    </div>

</div>
<div id="delete" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a href="javascript:;" style="color: #FF3B30;" data="delted">删除订单</a>
        </li>
    </ul>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a href="#delete"><b>取消</b></a>
        </li>
    </ul>
</div>
</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.pullToRefresh.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.pullToRefresh.material.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/myOrder.js"></script>
<script>
    mui.init();
</script>
</html>