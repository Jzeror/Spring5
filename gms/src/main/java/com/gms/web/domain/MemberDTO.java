package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class MemberDTO {
	private String memId, teamId, name, ssn, roll, password, age, gender, subject;
}