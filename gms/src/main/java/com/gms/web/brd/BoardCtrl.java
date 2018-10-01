package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@Autowired HashMap<String, Object> map;
	
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String pageNo){
		logger.info("\n BoardCtrl :::: {} ","list");
		map.clear();
		map.put("pageNumber", pageNo);
		map.put("rowCount", brdMap.countAll());
		PageProxy pxy = new PageProxy();
		pxy.carryOut(map);
		Pagination page = pxy.getPagination();
		// 화면에 rowCount, existPrev , prevBlock, beginPage, endPage, existNext, nextBlock 가 필요. 프록시에서 넘어왔는지 확인.
		map.clear(); //맵을 청소해야하는지 아닌지를 고민하는게 키~~~포인트
		map.put("list", brdMap.getAll(page));
		Util.log.accept("리스트 :: "+brdMap.getAll(page));
		map.put("page", page);
		return map;
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String, Object> myList(@PathVariable String id,@PathVariable String pageNo){
		logger.info("\n BoardCtrl :::: {} ","myList");
		map.clear();
		map.put("pageNumber", pageNo);
		map.put("writer", id);
		map.put("rowCount", brdMap.countMy(map));
		PageProxy pxy = new PageProxy();
		pxy.carryOut(map);
		page = pxy.getPagination();
		map.clear(); //맵을 청소해야하는지 아닌지를 고민하는게 키~~~포인트
		Util.log.accept("아이디디디트 ::"+id);
		map.put("writer", id);
		map.put("beginRow", page.getBeginRow());
		map.put("endRow", page.getEndRow());
		map.put("list", brdMap.getMy(map));
		Util.log.accept("ㄹ;ㅣ스트 ::"+map.get("list"));
		map.put("page", page);
		return map;
	}
	@PostMapping("/boards/add")
	public void addBoard(@RequestBody Board prm){
		logger.info("\n BoardCtrl :::: {} ","addBoard");
		brdMap.post(prm);
	}
	@RequestMapping("/boards/get/{bno}")
	public @ResponseBody Board getCnt(@PathVariable String bno){
		logger.info("\n BoardCtrl :::: {} ","getCnt");		
		Util.log.accept(bno);
		brd.setBno(Integer.parseInt(bno));
		brd=brdMap.get(brd);
		return brd;
	}
}