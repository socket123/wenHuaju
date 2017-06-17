<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>首页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->

    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/fonIndex.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/grean.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/iconfont.css">
    <link href="${pageContext.request.contextPath}/static/app/mui/css/style.css" rel="stylesheet" />
    <!--App自定义的css-->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/app/mui/css/app.css"/>
    <script src="${pageContext.request.contextPath}/static/app/mui/js/jquery-1.11.3.min.js"></script>

    <style>



    </style>
</head>
<body>
<div class="mui-bar mui-bar-nav header_nav">
    <%--<a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left header_nav_color"></a>--%>
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}" ins = "shouye">首页</h1>
</div>
<div class="mui-content mui_content_divs">
    <div id="slider" class="mui-slider" >
        <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg2.jpg" class="indec_imgs">
                </a>
            </div>
            <!-- 第一张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg1.jpg" class="indec_imgs">
                </a>
            </div>
            <!-- 第二张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg3.jpg" class="indec_imgs">
                </a>
            </div>
            <!-- 第三张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg4.jpg" class="indec_imgs">
                </a>
            </div>
            <!-- 第四张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg5.jpg" class="indec_imgs">
                </a>
            </div>
            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="${pageContext.request.contextPath}/static/app/images/bg2.jpg" class="indec_imgs">
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
        <li class="li_ule ">
<%--mui_icon_index--%>
            <div class="li_divall">
                <div class="li_div red"><a href="${pageContext.request.contextPath}/app/acticle/culturalInformation.html" class="li_div_a">
                    <span class="mui-icon iconfont icon-zixun header_nav_color mui_icon_index" ></span>
                </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span ">文化资讯</div>
            </div>
            <div class="li_divall">
                <div class="li_div green">
                    <a href="${pageContext.request.contextPath}/app/acticle/culturalCommunity.html" class="li_div_a">

					         	<span class="mui-icon iconfont icon-shequ header_nav_color ">
					         		
					         	</span>
                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">文化社区</div>
            </div>
            <div class="li_divall">
                <div class="li_div blue"><a href="${pageContext.request.contextPath}/app/acticle/eventAnnouncement.html" class="li_div_a">
                    <span class="mui-icon iconfont icon-meg header_nav_color mui_icon_index"></span>
                </a></div>
                <div class="clear"></div>
                <div class="li_div_span">活动公告</div>
            </div>
            <div class="li_divall">
                <div class="li_div prick">
                    <a href="${pageContext.request.contextPath}/app/acticle/trainingStudy.html" class="li_div_a">
                        <span class="mui-icon  iconfont icon-peixun header_nav_color mui_icon_index"></span>

                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">培训学习</div>
            </div>

            <div class="li_divall">
                <div class="li_div blue">
                    <a  href="${pageContext.request.contextPath}/app/category/index.html" class="li_div_a">
                        <span class="mui-icon  iconfont icon-shangcheng header_nav_color mui_icon_index"></span>

                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">文化商城</div>
            </div>

            <div class="li_divall">
                <div class="li_div prick">
                    <a  href="${pageContext.request.contextPath}/app/acticle/culturalCelebrities.html" class="li_div_a">
                        <span class="mui-icon  iconfont icon-mingrenzhuanfang header_nav_color mui_icon_index"></span>

                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">文化名人</div>
            </div>

            <div class="li_divall">
                <div class="li_div blue">
                    <a  href="${pageContext.request.contextPath}/app/acticle/cultureChannel.html" class="li_div_a">
                        <span class="mui-icon  iconfont icon-pindao header_nav_color mui_icon_index"></span>

                    </a>
                </div>
                <div class="clear"></div>
                <div class="li_div_span">文化频道</div>
            </div>



        </li>

        <li class="li_ule">
            <div class="index_li_title">
                —— &nbsp;<span >文化南京</span>&nbsp;——
            </div>
            <img class="index_li_title_img" src="${pageContext.request.contextPath}/static/app/images/bg5.jpg">
            <img class="index_li_title_img" src="${pageContext.request.contextPath}/static/app/images/new2.jpg">
            <img class="index_li_title_img" src="${pageContext.request.contextPath}/static/app/images/new3.jpg">
            <img class="index_li_title_img" src="${pageContext.request.contextPath}/static/app/images/new4.jpg">
        </li>

    </ul>
</div>


<%@ include file="common/foot.jsp"%>
</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/fonIndex.js"></script>
<script>
    mui.init();
    var slider = mui("#slider");

    slider.slider({
        interval: 5000
    });


</script>
</html>