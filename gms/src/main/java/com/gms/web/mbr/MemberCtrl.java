package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Util;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired
	MemberService memberService;
	@Autowired
	MemberMapper mbrMapper;
	@Autowired
	Member mbr;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("Member Controller :: add()");
		memberService.add(member);
		return "auth:member/login.tiles";
	}

	/*
	 * @RequestMapping("/list") public void list() {
	 * 
	 * }
	 * 
	 * @RequestMapping("/search") public void search() {
	 * 
	 * }
	 * 
	 * @RequestMapping("/count") public void count() {
	 * 
	 * }
	 * 
	 * @RequestMapping("/fileupload") public void fileupload() {
	 * 
	 * }
	 */
	@RequestMapping("/retrieve")
	public String retrieve() {
		return "login:member/retrieve.tiles";
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(Model model, @ModelAttribute("member") Member member) {
		logger.info("Member Controller :: modify()");
		member.setMemId(((Member) model.asMap().get("user")).getMemId());
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve((Member) model.asMap().get("user")));
		return "login:member/retrieve.tiles";
	}

	@RequestMapping("/remove")
	public String remove(@ModelAttribute Member member, Model model) {
		logger.info("Member Controller :: remove()");
		member.setMemId(((Member) model.asMap().get("user")).getMemId());
		memberService.remove(member);
		return "redirect:/";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(Model model, @ModelAttribute("member") Member param) {
		logger.info("Member Controller :: login()");
		/*
		 * Predicate<String> p = s -> !s.equals(""); String r =
		 * mbrMapper.exist(param.getMemId()); boolean b = p.test(r);
		 */
		String view = "";
		if (Util.notEmpty.test(mbrMapper.exist(param.getMemId()))) {
			Predicate<Member> f = s -> mbrMapper.login(s); //얘는 한번만 쓰는 거라 util에 안넣을 것.
			view = (f.test(param)) ? "login_success" : "login_fail";
		}
		mbr = (Predicate.isEqual("login_success").test(view)) ? mbrMapper.selectOne(param) : new Member();
		Util.Log.accept(mbr.toString());
		return view;

	}

	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("Member Controller :: logout()");
		session.removeAttribute("user");

		return "redirect:/";
	}
}
