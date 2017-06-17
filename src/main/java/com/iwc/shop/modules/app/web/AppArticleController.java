package com.iwc.shop.modules.app.web;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

import com.iwc.shop.common.utils.Page;
import com.iwc.shop.common.utils.StringUtils;
import com.iwc.shop.modules.cms.entity.Article;
import com.iwc.shop.modules.cms.entity.ArticleData;
import com.iwc.shop.modules.cms.entity.Category;
import com.iwc.shop.modules.cms.service.ArticleDataService;
import com.iwc.shop.modules.cms.service.ArticleService;
import com.iwc.shop.modules.cms.service.CategoryService;
import com.iwc.shop.modules.shop.entity.ShopCategory;
import com.iwc.shop.modules.shop.service.ShopCategoryService;
import com.iwc.shop.modules.shop.utils.ShopCategoryUtils;
import com.wxpay.util.CodeConstant;
import com.wxpay.util.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 新闻  列表
 * @author Tony Wong
 */
@Controller
@RequestMapping("/app/acticle")
public class AppArticleController extends AppBaseController {

	@Autowired
	private ShopCategoryService categoryService;

    @Autowired
    private CategoryService categoryService_new;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ArticleDataService articleDataService;


	@RequestMapping("")
	public String index(ModelMap m) {
		List<ShopCategory> categoryList = categoryService.findFirstList();
		m.put("categoryList", categoryList);
		return "modules/app/category/index";
	}



    // 进入 新闻首页
    @RequestMapping(value = "/index")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("新闻首页");

        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "文化名人");
        return new ModelAndView("modules/app/news/index");
    }

    // 进入 文化名人
    @RequestMapping(value = "/culturalCelebrities")
    public ModelAndView culturalCelebrities(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("文化名人");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "文化名人");
        return new ModelAndView("modules/app/news/index");
    }
    // 进入 文化社区
    @RequestMapping(value = "/culturalCommunity")
    public ModelAndView culturalCommunity(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("文化社区");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "文化社区");
        return new ModelAndView("modules/app/news/index");
    }
    // 进入 文化资讯
    @RequestMapping(value = "/culturalInformation")
    public ModelAndView culturalInformation(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("文化资讯");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "文化资讯");
        return new ModelAndView("modules/app/news/index");
    }
    // 进入 文化频道
    @RequestMapping(value = "/cultureChannel")
    public ModelAndView cultureChannel(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("文化频道");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "文化频道");
        return new ModelAndView("modules/app/news/index");
    }
    // 进入 活动公告
    @RequestMapping(value = "/eventAnnouncement")
    public ModelAndView eventAnnouncement(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("活动公告");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "活动公告");
        return new ModelAndView("modules/app/news/index");
    }
    // 进入 培训学习
    @RequestMapping(value = "/trainingStudy")
    public ModelAndView trainingStudy(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        System.out.println("培训学习");
        List<Category> sourcelist = categoryService_new.findList_all(null);
        modelMap.put("sourcelist", sourcelist);
        modelMap.put("sourcename", "培训学习");
        return new ModelAndView("modules/app/news/index");
    }



    // 进入 新闻详情页
    @RequestMapping(value = "/newsDetail")
    public ModelAndView newsDetail(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        String cuntId = request.getParameter("id");// 分页当前页
        Article article =  articleService.get(cuntId);
        ArticleData articleData =  articleDataService.get(cuntId);
        article.setArticleData(articleData);
        modelMap.put("article", article);
        return new ModelAndView("modules/app/news/newsDetail");
    }


    /**
     * 查看新闻 目录列表
     */
    @RequestMapping("/list_artice")
    public String list_artice(HttpServletResponse response) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();

        List<Category> sourcelist = categoryService_new.findList_all(null);


        List<Map<String, Object>> oCategoryList = Lists.newArrayList();

        for (Category category : sourcelist) {


            Map<String, Object> maps = new HashMap<String, Object>();
            maps.put("id",category.getId());
            maps.put("beginIndex",0);//分页
            maps.put("endIndex", Integer.parseInt(CodeConstant.PAGENUMBER));//每页分隔
            List<Article>  ac = articleService.findBybiobeject(maps);
            List<Article> mien = new ArrayList<Article>();
            List<Map<String, Object>> oCategoryListsa = Lists.newArrayList();
            for (Article article : ac) {
                Map<String, Object> oCategoryds = article.toSimpleObj();
                oCategoryListsa.add(oCategoryds);
                mien.add(article);
            }
            category.setChildListActive(mien);
            Map<String, Object> oCategory = category.toSimpleObj();

            oCategoryList.add(oCategory);

        }






        result = true;
        message = "";
        data.put("categoryList", oCategoryList);
        return renderString(response, result, message, data);
    }




    /**
     * 查看新闻 目录列表
     */
    @RequestMapping("/list")
    public String list(HttpServletResponse response) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();




        List<Category> sourcelist = categoryService_new.findList_all(null);

        List<Map<String, Object>> oCategoryList = Lists.newArrayList();

        for (Category category : sourcelist) {
            Map<String, Object> oCategory = category.toSimpleObj();
            oCategoryList.add(oCategory);
        }
        result = true;
        message = "";
        data.put("categoryList", oCategoryList);
        return renderString(response, result, message, data);
    }

    /**
     * 查看新闻目录列表和对应的文章详情列表
     */
    @RequestMapping("/list-with-news")
    public String listWithProduct(HttpServletResponse response, HttpServletRequest request) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();

        String userId = request.getParameter("id");
        String cuntId = request.getParameter("cuntId");// 分页当前页
        Integer beginIndex = Integer.parseInt(cuntId);
        if (!(StringUtils.isNotBlank(cuntId))){
            beginIndex = 0;

        }else if ("0".equals(cuntId)){
            beginIndex =  Integer.parseInt(cuntId);
        }else {
            beginIndex = Integer.parseInt(CodeConstant.PAGENUMBER)*Integer.parseInt(cuntId);
        }



        Map<String, Object> maps = new HashMap<String, Object>();
        maps.put("id",userId);


        List<Article>  ac = articleService.findBybiobeject(maps);
        if (Integer.parseInt(cuntId) > ac.size()/ Integer.parseInt(CodeConstant.PAGENUMBER) ){
            result = false;
            message = "已经到底了";

            return renderString(response, result, message, data);
        }

        maps.put("beginIndex",beginIndex);
        maps.put("endIndex", Integer.parseInt(CodeConstant.PAGENUMBER));

        List<Article>  acs = articleService.findBybiobeject(maps);
        result = true;
        message = "";
        List<Map<String, Object>> oCategoryListsa = Lists.newArrayList();

        for (Article article : acs) {
            Map<String, Object> oCategory = article.toSimpleObj();
            oCategoryListsa.add(oCategory);
        }
        data.put("categoryList", oCategoryListsa);
        return renderString(response, result, message, data);
    }
}
