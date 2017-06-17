<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>商城</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/mall_with_tab.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/iconfont.css">

    <style>


    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
  <%--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>--%>
    <!-- <div class="mui-input-row mui-search"> -->
    <input type="search" class="mui-input-clear header_nav_color search-product-input" id="" placeholder="搜索商品"
           style="background-color:rgba(255,255,255, 1);"   value="" >
    <!-- </div> -->
      <div class="product-mui-hide">
    <div class="product-index-postion ">
                <ul class="mui-table-view product-ul-es">

                </ul>
    </div>
      <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-product-clso"><a href="#">关闭搜索框</a></li>
      </ul>
      </div>
</div>

<div class="mui-content mui_content_divs" data="${pageContext.request.contextPath}"  ins = "shangc">


    <input type="hidden" class="mui-title" data="${pageContext.request.contextPath}"  ins = "shangc" >

    <div id="slider" class="mui-slider" >
        <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop4.jpg" class="product_imgs">
                </a>
            </div>
            <!-- 第一张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop1.jpg" class="product_imgs" >
                </a>
            </div>
            <!-- 第二张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop2.jpg" class="product_imgs" >
                </a>
            </div>
            <!-- 第三张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop3.jpg" class="product_imgs" >
                </a>
            </div>
            <!-- 第四张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop4.jpg" class="product_imgs" >
                </a>
            </div>
            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/shop1.jpg" class="product_imgs" >
                </a>
            </div>
        </div>
        <div class="mui-slider-indicator">
            <div class="mui-indicator mui-active"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
        </div>
    </div>


    <ul class="mui-table-view li_diva_ul">
        <li class="mui-table-view-cell ">

            <div class="li_divall">
                <div class="li_div red"><a href="javascript:;" class="li_div_a product_fenl">
                    <span class="mui-icon iconfont icon-jingpaiguanli header_nav_color" ></span>
                </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span ">竞拍商城</div>
            </div>
            <div class="li_divall">
                <div class="li_div green">
                    <a href="javascript:;" class="li_div_a product_fenl">

			         	<span class="mui-icon iconfont icon-tuijian header_nav_color">

			         	</span>
                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">品牌推荐</div>
            </div>
            <div class="li_divall">
                <div class="li_div blue"><a href="javascript:;" class="li_div_a product_fenl">
                    <span class="mui-icon iconfont  icon-iconhuizongguifan07  header_nav_color"></span>
                </a></div>
                <div class="clear"></div>
                <div class="li_div_span">每日精选</div>
            </div>
            <div class="li_divall">
                <div class="li_div prick">
                    <a href="mallClassification.html" class="li_div_a">
                        <span class="mui-icon iconfont icon-fenlei-copy header_nav_color"></span>

                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">商品分类</div>
            </div>

        </li>
    </ul>




    <ul class="mui-table-view product-index-ul" id="tab_one"  data="0">

        <%--<li class="mui-table-view-cell mui-media">--%>
            <%--<a href="commodityDetails.html?id=36ec687686df49acaebafb048ad645ff">--%>
                <%--<img class="mui-media-object mui-pull-left mui_Zidingyi" src="${pageContext.request.contextPath}/static/app/mui/images/shuijiao.jpg">--%>
                <%--<div class="mui-media-body">--%>
                    <%--<p class='mui-ellipsis-2 produc_name_p'>黄金蜂蜜绿茶</p>--%>
                    <%--<p class='mui-ellipsis-2 produc_olrd_p'><del>600.00</del></p>--%>
                    <%--<p class='mui-ellipsis-2 produc_new_p'>200.00</p>--%>
                <%--</div>--%>
            <%--</a>--%>
        <%--</li>--%>


    </ul>

</div>


<%@ include file="../common/foot.jsp"%>

</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/mall_with_tab.js"></script>

<script>
    mui.init();
    var slider = mui("#slider");

    slider.slider({
        interval: 5000
    });
</script>
</html>