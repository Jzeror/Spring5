package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

@Component
public class Util2 {
	public Function<Member, Member> getAgeAndGender = (Member mbr) -> {
		String ssn = mbr.getSsn();
		mbr.setAge(String.valueOf(
				Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()).substring(2)) + 1
				- Integer.parseInt(((Integer.parseInt(ssn.substring(0, 2)) > Integer
						.parseInt(new SimpleDateFormat("yyyy").format(new Date()).substring(2))) ? "19" : "20")
						+ ssn.substring(0, 2))));
		mbr.setGender((ssn.split("-")[1].equals("1") || ssn.split("-")[1].equals("3")) ? "남성" : "여성");
		return mbr;
	};
}
