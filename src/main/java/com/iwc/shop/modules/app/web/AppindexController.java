package com.iwc.shop.modules.app.web;

import com.iwc.shop.modules.shop.entity.ShopCategory;
import com.iwc.shop.modules.shop.service.ShopCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 *  首页 列表
 * @author Tony Wong
 */
@Controller
@RequestMapping("/app")
public class AppindexController extends AppBaseController {

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
    public String indexhtml(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("进入首页");
        return "modules/app/index";
    }

}
