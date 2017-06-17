<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>文章详情</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--标准mui.css-->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/mui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/app/mui/css/page/news_with_tab.css">
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
    <h1 class="mui-title header_nav_color" data="${pageContext.request.contextPath}">文章详情</h1>

    <!-- 	<a class="mui-icon mui-icon-trash mui-pull-right care_delte" id="care_delte"
        ></a> -->
</div>
<div class="mui-content mui_content_divs">
    <ul class="mui-table-view" style="margin-top: 0px;">

        <li class="mui-table-view-cell mui-media">
            <div class="mui-table">
                <div class="mui-table-cell mui-col-xs-10">
                    <h4 class="mui-ellipsis-3">${article.title}
                       </h4>

                    <p class="mui-h5 mui-ellipsis">
		                   	<span id="span_id">
		                   		李四
		                   	</span>
		                   	<span id="data_id">
		                   		2017-04-11 17:25
		                   	</span>
                    </p>
                </div>

            </div>


        </li>
        <li class="mui-table-view-cell mui-media count_li">
            ${article.articleData.content}
        </li>



    </ul>
</div>

</body>
<script src="${pageContext.request.contextPath}/static/app/mui/js/mui.min.js"></script>
<script src="${pageContext.request.contextPath}/static/app/mui/js/comme/geare.js"></script>

<script src="${pageContext.request.contextPath}/static/app/mui/js/page/newsDetail.js"></script>
<script>
    mui.init();
</script>
</html>