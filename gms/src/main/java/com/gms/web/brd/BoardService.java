package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface BoardService {
	public void post(Board p);
	public List<?> list(Map<?, ?> p);
	public Board get(Map<?, ?> p);
	public Integer count(Board p);
	public void put(Board p);
	public void delete(Board p);
}
