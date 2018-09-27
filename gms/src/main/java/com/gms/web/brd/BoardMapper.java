package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.page.Pagination;

@Repository
public interface BoardMapper {
	public void post(Board p);
	public List<?> list(Map<?, ?> p);
	public Board get(Board p);
	public List<Board> getAll(Pagination p);
	public Integer count(Map<?, ?> p);
	public void put(Board p);
	public void delete(Board p);
}
