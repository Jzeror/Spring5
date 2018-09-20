package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardMapper {
	public void insert(Board p);
	public List<?> selectList(Map<?, ?> p);
	public List<?> selectSome(Map<?, ?> p);
	public Board selectOne(Board p);
	public int count(Map<?, ?> p);
	public void update(Board p);
	public void delete(Board p);
	
	public Board listPage();
	public Board listCriteria();
	public int countPaging();
	public Board listSearch();
	public int listSearchCount();
}
