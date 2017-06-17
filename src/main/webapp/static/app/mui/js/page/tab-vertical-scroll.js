

// 结算 选择
function care_Page_ajax(){





}
	
	// 商城分类  数据显示 html 插入
function   mall_tab_html(contextPath) {
	var controls = document.getElementById("segmentedControls");
	var contents = document.getElementById("segmentedControlContents");
	var html = [];
	var html_product= [];
	// var i = 1,
	// 	j = 1,
	// 	m = 10, //左侧选项卡数量+1
	// 	n = 10; //每个选项卡列表数量+1

	$.ajax({// 请求数据
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:"list-with-product.html",
		data: {},
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				var categoryList = data.data.categoryList;//分类
				for(var i = 0; i <	categoryList.length ;  i ++){
					var category = categoryList[i];//数据
					html.push('<a class="mui-control-item" data-index="' + (i - 1) + '" href="#content' + i + '"   data="' + category.id + '"  >' + category.name + '</a>');
					var productList = categoryList[i].productList;//数据
					html_product.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
							for(var j = 0; j <	productList.length ;  j ++){
								var product = productList[j];
								if (j == 0) {
									html_product.push('<li class="mui-table-view-cell"><img class="tab_imgs" src="'+contextPath+product.imageSmall+'"></li>');
								}else{
									// 第' + i + '个选项卡子项-' + j +
									html_product.push('<li class="mui-table-view-cell">');
									html_product.push('		<a href="commodityDetails.html?id='+product.id+'">');
									html_product.push('			<img class="mui-media-object mui-pull-left mui_Zidingyi" src="'+contextPath+product.imageSmall+'">');
									html_product.push('			<div class="mui-media-body">');
									html_product.push('				<p class="mui-ellipsis-2">'+product.name+'</p>');
									html_product.push('				<p class="mui-ellipsis-2">'+product.price+'.00</p>');
									html_product.push('			</div>');
									html_product.push('		</a>');
									html_product.push('</li>');

								}

					}
					html_product.push('</ul></div>');
					contents.innerHTML = html_product.join('');
				}
				controls.innerHTML = html.join('');
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});

	// for (; i < m; i++) {
	// 	html.push('<a class="mui-control-item" data-index="' + (i - 1) + '" href="#content' + i + '">分类' + i + '</a>');
	// }
	// controls.innerHTML = html.join('');
    //
	// html = [];
    //
    //
	// for (i = 1; i < m; i++) {
	// 	html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
	// 	for (j = 1; j < n; j++) {
	// 		if (j == 1) {
	// 			html.push('<li class="mui-table-view-cell"><img class="tab_imgs" src="'+contextPath+'/static/app/mui/images/shuijiao.jpg"></li>');
	// 		}else{
	// 			// 第' + i + '个选项卡子项-' + j +
	// 			html.push('<li class="mui-table-view-cell">');
	// 			html.push('		<a href="commodityDetails.html">');
	// 			html.push('			<img class="mui-media-object mui-pull-left mui_Zidingyi" src="'+contextPath+'/static/app/mui/images/shuijiao.jpg">');
	// 			html.push('			<div class="mui-media-body">');
	// 			html.push('				<p class="mui-ellipsis-2">党政要闻党政要闻党政要闻党政要闻党政要闻党政要闻</p>');
	// 			html.push('			</div>');
	// 			html.push('		</a>');
	// 			html.push('</li>');
    //
	// 		}
	// 	}
	// 	html.push('</ul></div>');
	// }
	// contents.innerHTML = html.join('');
}

function mui_int(contextPath){
			mui.init({
				swipeBack: true //启用右滑关闭功能
			});
	var controls = document.getElementById("segmentedControls");
	var contents = document.getElementById("segmentedControlContents");
			 mall_tab_html(contextPath);//分类数据

			//默认选中第一个
			controls.querySelector('.mui-control-item').classList.add('mui-active');
//			contents.querySelector('.mui-control-content').classList.add('mui-active');
			(function() {
				var controlsElem = document.getElementById("segmentedControls");
				var contentsElem = document.getElementById("segmentedControlContents");
				var controlListElem = controlsElem.querySelectorAll('.mui-control-item');
				var contentListElem = contentsElem.querySelectorAll('.mui-control-content');
				var controlWrapperElem = controlsElem.parentNode;
				var controlWrapperHeight = controlWrapperElem.offsetHeight;
				var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight;//左侧类别最大可滚动高度
				var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight;//右侧内容最大可滚动高度
				var controlHeight = controlListElem[0].offsetHeight;//左侧类别每一项的高度
				var controlTops = []; //存储control的scrollTop值
				var contentTops = [0]; //存储content的scrollTop值
				var length = contentListElem.length;
				for (var i = 0; i < length; i++) {
					controlTops.push(controlListElem[i].offsetTop + controlHeight);
				}
				for (var i = 1; i < length; i++) {
					var offsetTop = contentListElem[i].offsetTop;
					if (offsetTop + 100 >= maxScroll) {
						var height = Math.max(offsetTop + 100 - maxScroll, 100);
						var totalHeight = 0;
						var heights = [];
						for (var j = i; j < length; j++) {
							var offsetHeight = contentListElem[j].offsetHeight;
							totalHeight += offsetHeight;
							heights.push(totalHeight);
						}
						for (var m = 0, len = heights.length; m < len; m++) {
							contentTops.push(parseInt(maxScroll - (height - heights[m] / totalHeight * height)));
						}
						break;
					} else {
						contentTops.push(parseInt(offsetTop));
					}
				}
				contentsElem.addEventListener('scroll', function() {
					var scrollTop = contentsElem.scrollTop;
					for (var i = 0; i < length; i++) {
						var offsetTop = contentTops[i];
						var offset = Math.abs(offsetTop - scrollTop);
//						console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
						if (scrollTop < offsetTop) {
							if (scrollTop >= maxScroll) {
								onScroll(length - 1);
							} else {
								onScroll(i - 1);
							}
							break;
						} else if (offset < 20) {
							onScroll(i);
							break;
						}else if(scrollTop >= maxScroll){
							onScroll(length - 1);
							break;
						}
					}
				});
				var lastIndex = 0;
				//监听content滚动
				var onScroll = function(index) {
					if (lastIndex !== index) {
						lastIndex = index;
						var lastActiveElem = controlsElem.querySelector('.mui-active');
						lastActiveElem && (lastActiveElem.classList.remove('mui-active'));
						var currentElem = controlsElem.querySelector('.mui-control-item:nth-child(' + (index + 1) + ')');
						currentElem.classList.add('mui-active');
						//简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
						var controlScrollTop = controlWrapperElem.scrollTop;
						if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
							controlWrapperElem.scrollTop = controlMaxScroll;
						} else if (controlScrollTop > controlTops[index] - controlHeight) {
							controlWrapperElem.scrollTop = 0;
						}
					}
				};
				//滚动到指定content
				var scrollTo = function(index) {
					contentsElem.scrollTop = contentTops[index];
				};
				mui(controlsElem).on('tap', '.mui-control-item', function(e) {
					scrollTo(this.getAttribute('data-index'));
					return false;
				});
			})();
		
}

	
