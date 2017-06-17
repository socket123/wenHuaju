package com.iwc.shop.modules.app.web;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.iwc.shop.common.utils.StringUtils;
import com.iwc.shop.modules.shop.entity.ShopCategory;
import com.iwc.shop.modules.shop.service.ShopCategoryService;
import com.iwc.shop.modules.shop.utils.ShopCategoryUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * 商城  列表
 * @author Tony Wong
 */
@Controller
@RequestMapping("/app/category")
public class AppCategoryController extends AppBaseController {

	@Autowired
	private ShopCategoryService categoryService;

	@RequestMapping("")
	public String index(ModelMap m) {
		List<ShopCategory> categoryList = categoryService.findFirstList();
		m.put("categoryList", categoryList);
		return "modules/app/category/index";
	}


    // 进入商城首页
    @RequestMapping(value = "/index")
    public String index(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("进入商城首页");
        return "modules/app/product/index";
    }
    // 进入 商城 分类页
    @RequestMapping(value = "/mallClassification")
    public String newsDetail(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("进入 商城 分类页");
        return "modules/app/product/mallClassification";
    }

    // 进入 商品详情
    @RequestMapping(value = "/commodityDetails")
    public ModelAndView commodityDetails(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        String appProductId = request.getParameter("id");
        if(StringUtils.isEmpty(appProductId)){
            System.out.println("跳转商品详情页");
        }
        modelMap.put("appProductId", appProductId);
        return new ModelAndView("modules/app/product/commodityDetails");

    }

    // 进入 购物车
    @RequestMapping(value = "/care_page")
    public String care_page(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("进入购物车");
        return "modules/app/product/care_page";
    }

    // 进入 商城 进入我的订单
    @RequestMapping(value = "/myOrder")
    public String myOrder(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("进入 商城 进入我的订单");
        return "modules/app/product/myOrder";
    }




    // 进入 确认订单页
    @RequestMapping(value = "/order_page")
    public ModelAndView order_page(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) {
        String addresID = request.getParameter("addresID");// 分页当前页
        System.out.println("进入 确认订单页");
        modelMap.put("addresID", addresID);
        return new ModelAndView("modules/app/product/order_page");
    }


    /**
     * 查看商品目录列表
     */
    @RequestMapping("/list")
    public String list(HttpServletResponse response) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();
        List<Map<String, Object>> oCategoryList = Lists.newArrayList();
        //List<ShopCategory> categoryList = categoryService.findFirstList();
        List<ShopCategory> categoryList = ShopCategoryUtils.findFirstList();
        for (ShopCategory category : categoryList) {
            Map<String, Object> oCategory = category.toSimpleObj();
            oCategoryList.add(oCategory);
        }

        result = true;
        message = "";
        data.put("categoryList", oCategoryList);
        return renderString(response, result, message, data);
    }

    /**
     * 查看商品目录列表和对应的产品列表
     */
    @RequestMapping("/list-with-product")
    public String listWithProduct(HttpServletResponse response) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();
        List<Map<String, Object>> oCategoryList = ShopCategoryUtils.findFirstListWithProduct4App();

        result = true;
        message = "";
        data.put("categoryList", oCategoryList);
        return renderString(response, result, message, data);
    }
}
