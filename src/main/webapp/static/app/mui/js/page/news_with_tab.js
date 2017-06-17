
function  page_list() {

	(function($) {
		//阻尼系数
		var deceleration = mui.os.ios?0.003:0.0009;
		$('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration:deceleration
		});
		$.ready(function() {


			//循环初始化所有下拉刷新，上拉加载。
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {// 下拉刷新
						callback: function() {
							var self = this;
							setTimeout(function() {
								// console.log("down");

								// var ul = self.element.querySelector('.mui-table-view');
								// ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
								self.endPullDownToRefresh();
							}, 1000);// 暂停1秒钟
						}
					},
					up: {
						callback: function() {//下拉 加载
							var self = this;
							setTimeout(function() {


								for(var i = 0 ; i < $(".mobileseds").length ; i  ++ ){
									var tab_one = self.element.querySelector("#tab_"+(i+1)+"");
									if (null != tab_one ) {
										var ids=document.getElementById("item"+(i+1)+"mobile").getAttribute("ids");
										var divs=document.getElementById("tab_"+(i+1)+"");
										var indexs = divs.getAttribute("data");
										var index = parseFloat(indexs)+1;
										ajax_get_set_html_page(index,divs,ids);
										divs.setAttribute("data",index);
									}

								}


								self.endPullUpToRefresh();
							}, 1000);// 暂停1秒钟
						}
					}
				});
			});

		});
	})(mui);

}


$(function(){
	login_yanz();//判断是否登录
	click_with();



})


function click_with(){


	// 点击跳转 详情
	$(document).on("tap",".news_tabe_sipUp",function(){

		window.location.href="newsDetail.html?id="+$(this).attr("data")+"";

	});


	// 点击跳转活动详情
	$(document).on("tap",".news_tabe_iedit",function(){
		window.location.href="signUp.html";

	});

	var url = "list.html";
	var data ={};

	ajax_get_set(url,data);

}


//   获取 分类数据
function  ajax_get_set(url,data) {
	$.ajax({
		type: "post",
		dataType: "json",
		//async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){

				var html = new_hear_html(data);
				for(var j = 0 ; j < html.length ; j ++){// 内容详情
					var url = "list-with-news.html";
					var data ={
						id:html[j],
						cuntId:0
					};

					ajax_get_set_html(url,data,$(".item"+(j+1)+"mobileseds"),j);
				}
				page_list();
				var slider = mui(".sliders");

				slider.slider({
					interval: 5000
				});
			}
		},
		error: function (data) {

			mui.toast("请求出错");


		}
	});
}


// 头部 html  数据
function  new_hear_html(data) {
	// console.log(data.data.categoryList);
	var html = [];//存储 分类 html
	var html_count = [];//存储内容 html
	var html_data = [];// 存储 分类id ;

	var name_title = $(".mui-title").attr("datas");
	var das = data.data.categoryList;
	for(var i = 0 ; i < das.length ; i ++){
		var us = das[i].id;
		if(name_title != undefined){
			if (name_title == das[i].name){
				html.push('  <a class="mui-control-item mui-active" href="#item'+(i+1)+'mobile">');//分类
				html_count.push('<div id="item'+(i+1)+'mobile" ids ="'+us+'" class="mui-slider-item mui-control-content mui-active mobileConunt">');//mobileCunt 标识符 计算数量//内容
			}else {
				html.push('  <a class="mui-control-item " href="#item'+(i+1)+'mobile">');//分类
				html_count.push('<div id="item'+(i+1)+'mobile" ids ="'+us+'" class="mui-slider-item mui-control-content  mobileConunt">');//mobileCunt 标识符 计算数量//内容
			}
		}else{
			if (i == 0){
				html.push('  <a class="mui-control-item mui-active" href="#item'+(i+1)+'mobile">');//分类
				html_count.push('<div id="item'+(i+1)+'mobile" ids ="'+us+'" class="mui-slider-item mui-control-content mui-active mobileConunt">');//mobileCunt 标识符 计算数量//内容
			}else {
				html.push('  <a class="mui-control-item " href="#item'+(i+1)+'mobile">');//分类
				html_count.push('<div id="item'+(i+1)+'mobile" ids ="'+us+'" class="mui-slider-item mui-control-content  mobileConunt">');//mobileCunt 标识符 计算数量//内容
			}
		}
		html.push(''+das[i].name+'');
		html.push(' </a>');

		html_count.push(' 				<div class="mui-scroll-wrapper">');
		html_count.push('						<div class="mui-scroll item'+(i+1)+'mobileseds mobileseds">');
		html_count.push('				 </div>');
		html_count.push('				 </div>');
		html_count.push(' </div>');
		html_data.push(us);//id存储
	}

	$("#hear_mui_news").html(html.join(''));//分类
	$(".newId").html(html_count.join(''));//内容
	return html_data ;
}



//   获取 文章数据
function  ajax_get_set_html(url,data,div,ise) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:url,
		data: data,
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);
			}else  if (data.result == true){
				// console.log(data);
				img_huandengp_html(data,div,ise);
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}
// 幻灯片 插入
function  img_huandengp_html(data,div,ise) {
	// console.log(data.data.categoryList);
	var html = [];

	var categoryList = data.data.categoryList ;
	var pisid = [];
	var categoryLists = [];
	for(var k = 0 ; k < categoryList.length ; k ++) {
		if (categoryList[k].posid == ",1,"){
			pisid.push(categoryList[k]);

		}else {
			categoryLists.push(categoryList[k]);
		}

	}


	if (pisid.length > 0){

		//幻灯片
		html.push(' 		<div class="mui-content">');

		html.push('<div id="slider_one_1" class="mui-slider sliders">');
		html.push(' <div class="mui-slider-group mui-slider-loop" >');
		html.push('		<div class="mui-slider-item mui-slider-item-duplicate">');
		html.push('			 <a href="newsDetail.html?id='+pisid[pisid.length-1].id+'" class="news_tabe_sipUp" data="'+pisid[pisid.length-1].id+'" >');
		html.push('					 <img src="'+pisid[pisid.length-1].image+'">');
		html.push('						  <p class="mui-slider-title">'+pisid[pisid.length-1].title+'</p>');
		html.push('			   </a>');
		html.push('		  </div>');
		/*选择最后一张*/
		for(var j = 0; j < pisid.length ; j ++){
			var datAlls = pisid[j];
			html.push(' 	<div class="mui-slider-item">');
			html.push('			  <a href="newsDetail.html?id='+datAlls.id+'" class="news_tabe_sipUp" data="'+datAlls.id+'">');
			html.push('				  <img src="'+datAlls.image+'">');
			html.push('					 <p class="mui-slider-title">'+datAlls.title+'</p>');
			html.push('			 </a>');
			html.push('		 </div>');

			/*选择第一张*/
		}
		html.push(' 	<div class="mui-slider-item mui-slider-item-duplicate">');
		html.push('		  	<a href="newsDetail.html?id='+pisid[0].id+'" class="news_tabe_sipUp" data="'+pisid[0].id+'" >');
		html.push('				  <img src="'+pisid[0].image+'">');
		html.push('					<p class="mui-slider-title">'+pisid[0].title+'</p>');
		html.push('			 </a>');
		html.push('		 </div>');

		html.push('</div>');

		html.push('  <div class="mui-slider-indicator mui-text-right">');
		html.push('	 <div class="mui-indicator mui-active"></div>');
		for(var j = 0; j < pisid.length-1 ; j ++){
			html.push('<div class="mui-indicator"></div>');

		}
		html.push('			 </div>');
		html.push(' 			</div>');
		html.push(' 		</div>');
	}
	html.push('<ul class="mui-table-view"  id="tab_'+(ise+1)+'" data="0">');

	// 文章详情插入
	for(var j = 0; j < categoryLists.length ; j ++) {
		var categoryListsAll = categoryLists[j];

		html.push(' 	 <li class="mui-table-view-cell mui-media">');
		html.push(' 		 <a href="newsDetail.html?id='+categoryListsAll.id+'" class="news_tabe_sipUp" data="'+categoryListsAll.id+'">');
		html.push(' 			 <img class="mui-media-object mui-pull-left mui_Zidingyi" src="'+categoryListsAll.image+'">');
		html.push(' 				 <div class="mui-media-body">');
		html.push(' 					 <p class="mui-ellipsis-2">'+categoryListsAll.title+'</p>');
		html.push(' 				 </div>	');
		html.push(' 			</a>	');
		html.push(' 	</li>	');


	}
	html.push(' </ul>	');

	div.html(html.join(''));

}




//   获取 文章数据 分页
function  ajax_get_set_html_page(index,divs,ids) {
	$.ajax({
		type: "post",
		dataType: "json",
		async: false,   // 同步为false
		url:"list-with-news.html",
		data: {
			cuntId:index,
			id:ids
		},
		success: function (data) {

			if (data.result == false ){
				mui.toast(data.message);
				// console.log(data);
			}else  if (data.result == true){
				// console.log(data);
				createFragmentss(data,index,divs);
			}
		},
		error: function (data) {

			mui.toast("请求出错");

		}
	});
}

// 下拉加载 数据 html 拼接
function createFragmentss(data,index,ides) {
	var categoryList = data.data.categoryList ;
	for(var  i = 0; i < categoryList.length ; i ++){
		var datAlls = categoryList[i];
		var li = document.createElement("li");
		li.setAttribute("class", "mui-table-view-cell mui-media");

		var a = document.createElement("a");
		a.setAttribute("href", "newsDetail.html?id="+datAlls.id+"");
		a.setAttribute("class", "news_tabe_iedit");
		var img = document.createElement("img");

		//设置 img 属性，如 id
		img.setAttribute("class", "mui-media-object mui-pull-left mui_Zidingyi");

		//设置 img 图片地址
		img.src = ""+datAlls.image+"";


		var div = document.createElement("div");
		div.setAttribute("class", "mui-media-body");
		var p = document.createElement("p");
		p.setAttribute("class", "mui-ellipsis-2");
		p.innerHTML = ""+datAlls.title+"";


		div.appendChild(p);

		a.appendChild(img);
		a.appendChild(div);
		li.appendChild(a);

		ides.appendChild(li);
		ides.setAttribute("data",index);
	}

}