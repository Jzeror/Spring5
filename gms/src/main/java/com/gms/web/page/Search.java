package com.gms.web.page;

import java.util.HashMap;
import java.util.Map;

public class Search {
	public void test() { //아무의미 없어서 보이드에 테스트 라고 함.
		String pageNumber = "pageNum";
		Map<String,Object> param = new HashMap<>(); 
		param.put("pageNumber", (pageNumber==null)? 1 : Integer.parseInt(pageNumber));
		
		PageProxy pxy = new PageProxy();
		pxy.carryOut(param);
		Pagination page = pxy.getPagination();
		/*for(int i=0 ; i<arr1.length ; i++) {
			param.put(arr1[i], arr2[i]);
		}		*/								//row setting
	}
}
