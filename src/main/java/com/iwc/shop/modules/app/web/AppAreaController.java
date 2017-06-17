/**
 * Copyright &copy; 2012-2014 <a href="http://www.iwantclick.com">iWantClick</a>iwc.shop All rights reserved.
 */
package com.iwc.shop.modules.app.web;

import com.google.common.collect.Maps;
import com.iwc.shop.modules.sys.entity.Area;
import com.iwc.shop.modules.sys.service.AreaService;
import com.iwc.shop.modules.sys.utils.AreaUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * 区域Controller
 * @author Tony Wong
 * @version 2015-07-23
 */
@Controller
@RequestMapping("/app/area")
public class AppAreaController extends AppBaseController {
    @Autowired
    private AreaService areaService;
    /**
     * 获得系统默认的地址信息
     * @param response
     * @return
     */
    @RequestMapping(value = "/get-prefix-area-chained-list")
    public String getPrefixAreaChainedList(HttpServletResponse response) {
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();

        Area prefixArea = AreaUtils.getArea(Area.PREFIX_AREA_ID);
        Map<String, Object> oArea = prefixArea.toSimpleObj();
        List<Map<String, Object>> oAreaChainedList = AreaUtils.findChainedList4SimpleObj(prefixArea);

        result = true;
        message = "";
        data.put("prefixArea", oArea);
        data.put("areaChainedList", oAreaChainedList);
        return renderString(response, result, message, data);
    }

    /**
     * 根据 地区 获取 id
     * @param response
     * @return
     */
    @RequestMapping(value = "/get_areaList_code")
    public String get_areaList_code(HttpServletRequest request, HttpServletResponse response) {
        if (!isLoggedIn(request)) {
            return renderNotLoggedIn(response);
        }
        boolean result;
        String message;
        Map<String, Object> data = Maps.newHashMap();
        String code = request.getParameter("code");//行政区编号
        //行政区编号
        if (StringUtils.isBlank(code)) {
            result = false;
            message = "行政区编号不能为空";
            return renderString(response, result, message, data);
        }
        Area area = new Area();
        area.setCode(code);
        Area area1 = areaService.find_areaList_code(area);
        if (area1 == null) {
            result = false;
            message = "区域地址(ID:" + code + ") 不存在";
            return renderString(response, result, message, data);
        }

        result = true;
        message = "";
        data.put("code", area1);
        return renderString(response, result, message, data);
    }
}
