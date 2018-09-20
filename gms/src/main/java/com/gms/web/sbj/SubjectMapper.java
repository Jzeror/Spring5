package com.gms.web.sbj;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface SubjectMapper {
	public void post(Subject p); 
	public List<?> list(Map<?, ?> p);
	public Subject get(Subject p);
	public Integer count(Subject p);
	public void put(Subject p);
	public void delete(Subject p);
}
