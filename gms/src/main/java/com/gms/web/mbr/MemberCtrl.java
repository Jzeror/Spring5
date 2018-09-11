package com.gms.web.mbr;

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

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("Member Controller :: add()");
		memberService.add(member);
		return "auth:member/login.tiles";
	}
/*	
	@RequestMapping("/list")
	public void list() {
		
	}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
*/
	@RequestMapping("/retrieve")
	public String retrieve() {
		return "login:member/retrieve.tiles";
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(Model model, @ModelAttribute("member") Member member) {
		logger.info("Member Controller :: modify()");
		member.setMemId(((Member)model.asMap().get("user")).getMemId());
		memberService.modify(member);
		model.addAttribute("user",  memberService.retrieve((Member)model.asMap().get("user")));
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute Member member, Model model) {
		logger.info("Member Controller :: remove()");
		member.setMemId(((Member)model.asMap().get("user")).getMemId());
		memberService.remove(member);
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model, @ModelAttribute("member") Member member) {
		logger.info("Member Controller :: login()");
		if(memberService.login(member)) {
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			return "auth:member/login.tiles" ;
		}
		return "login_success";
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("Member Controller :: logout()");
		session.removeAttribute("user");
		
		return "redirect:/";
	}
}
