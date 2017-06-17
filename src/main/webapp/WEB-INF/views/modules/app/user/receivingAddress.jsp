<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>收货地址</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/receivingAddress.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">

    <link href="${pageContext.request.contextPath}/static/app/mui/css/mui.picker.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/static/app/mui/css/mui.poppicker.css" rel="stylesheet" />


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
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav ">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left ">
            <span class="mui-icon mui-icon-left-nav header_nav_color"></span>
        </button>
        <h1 class="mui-center mui-title header_nav_color" data="${pageContext.request.contextPath}"  >收货地址</h1>
        <c:if test="${flag_id == 'from'}">
            <button type="button" class="mui-left mui-btn  mui-btn-link mui-btn-nav mui-pull-right ">
                <span class=" header_nav_color adress_queding">确定</span>
            </button>
        </c:if>

    </div>
    <!--页面标题栏结束-->
    <!--页面主内容区开始-->
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper addresWarapper">
            <div class="mui-scroll mui_address" >
                <!-- mui-table-view-chevron -->










            </div>
        </div>

        <nav class="mui-bar mui-bar-tab nav_address nav_imgs" >
            <a href="#account_addAddress" class="nav_imgs_a">

                添加新地址

            </a>
        </nav>


    </div>
    <!--页面主内容区结束-->
</div>
<!--单页面结束-->


<div id="account_addAddress" class="mui-page">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color ">
            <span class="mui-icon mui-icon-left-nav header_nav_color adde_click"></span>地址管理
        </button>
        <h1 class="mui-center mui-title header_nav_color">增加地址</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron addresUL">
                    <li class="mui-table-view-cell">
                        <div class="mui-input-row">
                            <label >收货人</label>
                            <input type="text" placeholder="" class="addAddress_fullname">
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="mui-input-row">
                            <label >联系电话</label>
                            <input type="text" placeholder="" class="addAddress_telephone" >
                        </div>
                    </li>
                    <li class="mui-table-view-cell ">
                        <a class="mui-navigate-right sdctivy showCityPicker3" id="showCityPicker3">
                            所在地区
										<span class="mui-pull-right mui-ellipsis-2 add_addreText cityResult3 addAddress_code"
                                              id="cityResult3" >请选择</span>
                        </a>


                    </li>
                    <li class="li_ule">
                        <div class="mui-input-row">
                            <textarea name="" rows="5" id="textarea_add" placeholder="详细地址" class="addAddress_detail" ></textarea>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs addAddress_class">

        添加


    </nav>
</div>

<div id="account_edit" class="mui-page ">
    <div class="mui-navbar-inner mui-bar mui-bar-nav header_nav addres_eaut_div ">
        <button type="button" class="mui-left  mui-btn  mui-btn-link mui-btn-nav mui-pull-left header_nav_color ">
            <span class="mui-icon mui-icon-left-nav header_nav_color "></span>修改地址
        </button>
        <h1 class="mui-center mui-title header_nav_color ">修改地址</h1>
    </div>
    <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron esutresUL">
                    <li class="mui-table-view-cell">
                        <div class="mui-input-row">
                            <label >收货人</label>
                            <input type="text" placeholder=""  class="editAddress_fullname">
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="mui-input-row">
                            <label >联系电话</label>
                            <input type="text" placeholder="" class="editAddress_telephone" >
                        </div>
                    </li>
                    <li class="mui-table-view-cell ">
                        <a class="mui-navigate-right sdctivy showCityPicker3" id="showCityPicker2">
                            所在地区
										<span class="mui-pull-right mui-ellipsis-2 add_addreText cityResult3 editAddress_code"
                                              id="cityResult2"  >请选择</span>
                        </a>


                    </li>
                    <li class="li_ule">
                        <div class="mui-input-row">
                            <textarea name="" rows="5" id="textarea_edit" placeholder="详细地址" class="editAddress_detail" ></textarea>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <nav class="mui-bar mui-bar-tab nav_imgs esite_cll">

        修改


    </nav>
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
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.view.js "></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/receivingAddress.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.picker.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.poppicker.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/city.data.js" type="text/javascript" charset="utf-8"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/city.data-3.js" type="text/javascript" charset="utf-8"></script>
<!-- <script src='${pageContext.request.contextPath}/static/app/mui/js/feedback.js'></script> -->

<script>

    (function($, doc) {
        $.init();
        $.ready(function() {

            //-----------------------------------------
            //				增加地址	//级联示例
            var cityPicker3 = new $.PopPicker({
                layer: 3
            });
            cityPicker3.setData(cityData3);
            console.log(cityPicker3);

            var showCityPickerButton = doc.getElementById('showCityPicker3');
            var cityResult3 = doc.getElementById('cityResult3');
            showCityPickerButton.addEventListener('tap', function(event) {
                cityPicker3.show(function(items) {
                    console.log(items);
                    cityResult3.innerText = "" + (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                    cityResult3.setAttribute("code",items[2].value);
                    //返回 false 可以阻止选择框的关闭
                    //return false;
                });
            }, false);

            //-----------------------------------------
            //			修改地址		//级联示例
            var cityPicker2 = new $.PopPicker({
                layer: 3
            });
            cityPicker2.setData(cityData3);
            var showCityPickerButton = doc.getElementById('showCityPicker2');
            var cityResult2 = doc.getElementById('cityResult2');
            showCityPickerButton.addEventListener('tap', function(event) {
                cityPicker2.show(function(items) {

                    cityResult2.innerText = "" + (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                    //返回 false 可以阻止选择框的关闭
                    //return false;
                });
            }, false);
        });
    })(mui, document);

</script>

</html>