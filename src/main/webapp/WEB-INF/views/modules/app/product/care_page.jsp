<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>购物车</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/care_page.css">

    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>

    <style>



    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}" >购物车</h1>

    <a class="mui-icon mui-icon-trash mui-pull-right care_delte header_nav_color" id="care_delte"
    ></a>
</div>
<div class="mui-content mui_content_divs">
    <%--<ul class="mui-table-view" style="margin-top: 0px;">--%>
        <%--<li class="mui-table-view-cell mui-media  mui-checkbox">--%>
            <%--<a href="javascript:;">--%>
                <%--<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="${pageContext.request.contextPath}/static/app/mui/images/shuijiao.jpg">--%>
                <%--<div class="mui-media-body">--%>

                    <%--<p class='mui-ellipsis-2 order_page_text'>能和心爱的人一起睡觉，是件幸福的事情；件幸福的事情；可是，件幸福的事情；可是，件幸福的事情；可是，可是，打呼噜怎么办？</p>--%>
                    <%--<h3 class="order_page_text">&yen;650</h3>--%>
                    <%--<p class='mui-ellipsis-2 order_page_text'>数量×1</p>--%>

                <%--</div>--%>
            <%--</a>--%>
            <%--<input name="checkbox_red" type="checkbox" value="1" class="checkbox_class">--%>
        <%--</li>--%>

        <%--<li class="mui-table-view-cell mui-media  mui-checkbox">--%>
            <%--<a href="javascript:;">--%>
                <%--<img class="mui-media-object mui-pull-left mui_Zidingyi"  src="${pageContext.request.contextPath}/static/app/mui/images/shuijiao.jpg">--%>
                <%--<div class="mui-media-body">--%>

                    <%--<p class='mui-ellipsis-2 order_page_text'>能和心爱的人一起睡觉，是件幸福的事情；件幸福的事情；可是，件幸福的事情；可是，件幸福的事情；可是，可是，打呼噜怎么办？</p>--%>
                    <%--<h3 class="order_page_text">&yen;650</h3>--%>
                    <%--<p class='mui-ellipsis-2 order_page_text'>数量×1</p>--%>

                <%--</div>--%>
            <%--</a>--%>
            <%--<input name="checkbox_red" type="checkbox" value="2" class="checkbox_class">--%>
        <%--</li>--%>



    <%--</ul>--%>
</div>
<nav class="mui-bar mui-bar-tab nav_imgs">
    <div class="nav_carePage_left_one mui-pull-left">
        <div class="mui-input-row mui-checkbox">
            <label>全选</label>
            <input name="checkbox1" value="" type="checkbox" class="nav_carePage_left_all" >
        </div>
    </div>
    <div class="nav_carePage_left mui-pull-left">
        <span class="nav_carePage_left_fu">合计</span>
        <span class="nav_carePage_left_num totalPrice">669.00</span>
        <span class="nav_carePage_left_yeu" >元</span>
    </div>

    <div class="nav_carePage_right mui-pull-right">
        结算
    </div>
</nav>

<div id="delete" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell delete_order">
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
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/care_page.js"></script>
<script>
    mui.init();
</script>
</html>