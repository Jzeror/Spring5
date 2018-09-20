package com.gms.web.sbj;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Lazy @Data
public class Subject {
	String seq, sbjName;
}
