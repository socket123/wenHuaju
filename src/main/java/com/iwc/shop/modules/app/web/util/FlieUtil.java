package com.iwc.shop.modules.app.web.util;


import org.apache.log4j.Logger;

import sun.misc.BASE64Decoder;

import java.io.*;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

/***
 *  图片转码
 */
public class FlieUtil {






    //base64字符串转化成图片
    public static String GenerateImage(String imgStr,String imgFilePath)
    {   //对字节数组字符串进行Base64解码并生成图片
        BASE64Decoder decoder = new BASE64Decoder();
        try
        {
            if (imgStr == null){
                //图像数据为空
                return "false";
            }else{
                List<String>  mapList =   split(imgStr,",");//截取字符串
                imgStr =  mapList.get(1);
            //Base64解码
            byte[] b = decoder.decodeBuffer(imgStr);
            for(int i=0;i<b.length;++i)
            {
                if(b[i]<0)
                {//调整异常数据
                    b[i]+=256;
                }
            }
                String filename = System.currentTimeMillis() + ".jpg";

                imgFilePath = imgFilePath+"\\upload\\"+filename;
            //生成jpeg图片
            OutputStream out = new FileOutputStream(imgFilePath);
            out.write(b);
            out.flush();
            out.close();
            return filename;
            }
        }
        catch (Exception e)
        {
            return "false";
        }
    }


    public static boolean GenerateImages(String imgStr, String imgFilePath) {// 对字节数组字符串进行Base64解码并生成图片
        if (imgStr == null) // 图像数据为空
            return false;
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            // Base64解码
            byte[] bytes = decoder.decodeBuffer(imgStr);
            for (int i = 0; i < bytes.length; ++i) {
                if (bytes[i] < 0) {// 调整异常数据
                    bytes[i] += 256;
                }
            }
            // 生成jpeg图片
            OutputStream out = new FileOutputStream(imgFilePath);
            out.write(bytes);
            out.flush();
            out.close();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static List<String> split(String str, String split){
        List<String> lisy = new ArrayList<String >();
        for (String ids : str.split(",")) {
            lisy.add(ids);
        }
        return lisy;
    }


    public  static  String ip() throws UnknownHostException {
        InetAddress address = InetAddress.getLocalHost();//获取的是本地的IP地址
        System.out.println(address);//PC-20140317PXKX/192.168.0.121
        System.out.println(address.getHostAddress());//192.168.0.121
        System.out.println("===============");

        return  "";
    }


    }
