package com.wxpay.util;

public interface CodeConstant {

    String SUCCESS = "10000";  //代表成功

    String USER_NOT_CZ = "10001";  //代表失败

    String USER_NOT = "10002";  //代表已注册

    String USER_NOT_PHONE= "10003";  //代表没有注册
    String USERCODE= "10008";  //验证码错误

    String USER_NOT_PASS = "10009";  //代表密码为空

    String USER_NOT_LOGIN = "10010";  //代表没有登录

    String DESTOP_NOT_CZ = "100011";  //代表桌位已经预定过


    String PAGENUMBER = "10";// 每页显示 新闻

    Integer PAGE_ORDER = 5;// 订单 分页 每页显示


    String  DELFLAG = "1";// 显示/0   隐藏 /1

    String DEL_FLAG_SHOW = "0";// 发布
    String DEL_FLAG_HIDE = "1";//删除
    String DEL_FLAG_SHENHE = "2";//审核

    String TYPE_ONE= "1" ;// 状态位 咨询
    String TYPE_TWO= "2" ;// 状态位 建议
    String TYPE_THREE= "3" ;// 状态位 投诉
    String TYPE_FOUR= "4" ;// 状态位 其他

}
