package com.gms.web.tx;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.brd.Board;
import com.gms.web.brd.BoardMapper;
import com.gms.web.cmm.Util;
import com.gms.web.point.PointMapper;

@Service

public class TxService {
	@Autowired BoardMapper brdMapper;
	@Autowired PointMapper poMapper;
	@Autowired Board brd;
	@Autowired HashMap<String, Object> map;
	@Transactional
	public Map<?,?> point(Map<?,?> p){		
		brdMapper.post((Board)p.get("prm"));
		poMapper.update(p);
		map.clear();
		return map;
	}
	@Transactional
	public Map<?,?> delete(Map<?,?> p){
		brd.setBno(Integer.parseInt(p.get("bno").toString()));
		brdMapper.put(brd);
		poMapper.update(map);
		map.clear();
		return map;
	}
}
