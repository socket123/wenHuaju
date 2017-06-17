/**
 * Copyright &copy; 2012-2014 <a href="http://www.iwantclick.com">iWantClick</a>iwc.shop All rights reserved.
 *
 * 留言列表
 */
package com.iwc.shop.modules.app.web;

import com.google.common.collect.Maps;
import com.iwc.shop.common.utils.IpAddrUtils;
import com.iwc.shop.common.utils.StringUtils;
import com.iwc.shop.modules.cms.entity.Guestbook;
import com.iwc.shop.modules.cms.service.GuestbookService;
import com.iwc.shop.modules.sys.entity.User;
import com.iwc.shop.modules.sys.service.UserService;
import com.wxpay.util.CodeConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Controller
@RequestMapping("/app/guestBook")
public class AppGuestBookController extends AppBaseController {



    @Autowired
    private GuestbookService guestbookService;

    @Autowired
    UserService userService;


    /***
     *  存储 留言信息
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/set_guest_books")
    public String set_user_name(HttpServletRequest request, HttpServletResponse response, Guestbook guestbooks) {
        if (!isLoggedIn(request)) {
            return renderNotLoggedIn(response);
        }
        boolean result;
        int resultCode;
        String message;
        String userId = request.getParameter("userId");
        User user = userService.getEntity(userId);
        Map<String, Object> data = Maps.newHashMap();
        guestbooks.setIp(IpAddrUtils.getIpAddr(request));
        guestbooks.prePersist();
        guestbooks.setType(CodeConstant.TYPE_TWO);
        guestbooks.setPhone(user.getMobile());
        guestbooks.setWorkunit(user.getMobile());
        guestbooks.setDelFlag(CodeConstant.DEL_FLAG_SHENHE);
        guestbooks.setName(user.getLoginName());

       if( guestbookService.insert(guestbooks) > 0){
           result = true;
             message = "提交成功";
       }else {
           result = false;
           message = "提交失败";

       }

//        if(StringUtils.isBlank(name)){
//            result = false;
//            message = "名称修改失败";
//            return renderString(response, result, message, data);
//        }

//        User user = userService.getEntity(userId);
//        if ( null != user ){
//            user.setName(name);
//            userService.updateAppLoginToken(user);
//            result = true;
//            message = "名称修改成功";
//        }else {
//            result = false;
//            message = "名称修改失败";
//        }



        return renderString(response, result, message, data);
    }

}
