package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.cmm.Util2;

@RestController
@RequestMapping("/mbr")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired	MemberMapper mbrMapper;
	@Autowired	Member mbr;
	@Autowired Util2 util;
	@PostMapping("/add")
	public @ResponseBody Map<String, Member> add(@RequestBody Member member ) {
		Map<String, Member> rmap = new HashMap<>();
		Util.log.accept("들어온 값은 두구두구 ::: "+member.getMemId());
		Util.log.accept("들어온 값은 두구두구 ::: "+member.getTeamId());
		Util.log.accept("들어온 값은 두구두구 ::: "+member.getSubject());
		return rmap;
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
		return "";
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(Model model, @ModelAttribute("member") Member member) {
		logger.info("Member Controller :: modify()");
		member.setMemId(((Member) model.asMap().get("user")).getMemId());
		return "";
	}

	@RequestMapping("/remove")
	public String remove(@ModelAttribute Member member, Model model) {
		logger.info("Member Controller :: remove()");
		member.setMemId(((Member) model.asMap().get("user")).getMemId()); 
		return "redirect:/";
	}

	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member param) {
		Map<String, Object> rmap = new HashMap<>();
		String pwValid = "WRONG";
		String idValid = "WORNG";
		if (mbrMapper.count(param)!=0) {
			idValid = "CORRECT";
			Function<Member,Member> f = (t)->{
				return mbrMapper.get(t);
			}; //지금 얘는 토스만 하고 있다 안써도 무방.
			mbr = f.apply(param);
			pwValid= (mbr != null)?"CORRECT":"WRONG";
			mbr = (mbr != null) ?mbr:new Member();
		}
		rmap.put("ID", idValid);
		rmap.put("PW", pwValid);
		rmap.put("MBR", mbr);
		return rmap;
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("Member Controller :: logout()");
		session.removeAttribute("user");
		return "redirect:/";
	}
}
