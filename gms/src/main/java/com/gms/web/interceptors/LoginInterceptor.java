package com.gms.web.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
@Aspect
@SessionAttributes("memId")
public class LoginInterceptor extends HandlerInterceptorAdapter {

 private static final String LOGIN = "login";
 private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
 @Autowired Member mbr;
 @Autowired MemberMapper mbrMapper;


 public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    logger.info("인터셉터 성공!@");
    boolean result = false;
    String webRoot = request.getContextPath();
    try {
        String id = (String) request.getSession().getAttribute("memId");
        if(id == null) {
            /*if(isAjaxRequest(request)) {
                logger.info("인터셉터 1 !!");
                response.sendError(400);
                return false;
            }else {*/
                logger.info("인터셉터 내부로 들어옴 !!");
                HttpSession session = request.getSession();
                session.setAttribute("loginUser", "8");
                response.sendRedirect(webRoot+"/mbr/auth");
                result = false;
            /*}*/
        }else {
            result = true;
        }
    } catch(Exception e) {
        e.printStackTrace();
        System.out.println(e.getMessage());
        return false;
    }
   return result;
 }
}