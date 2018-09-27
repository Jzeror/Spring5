package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.cmm.Util2;
import com.gms.web.page.PageProxy;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired	BoardMapper brdMap;
	@Autowired	Board brd;
	@Autowired Util2 util;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> list(@PathVariable String pageNo){
		Map<String,Object> param = new HashMap<>(); 
		param.put("pageNumber",  Integer.parseInt(pageNo));
		PageProxy pxy = new PageProxy();
		pxy.carryOut(param);
		Pagination page = pxy.getPagination();
		logger.info("\n BoardCtrl :::: {} ","list");
		List<Board> ls = brdMap.getAll(page);
		Util.log.accept("게시글 리스트  : "+ls);
		return ls;
	}
}