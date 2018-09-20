package com.gms.web.msg;

import org.springframework.stereotype.Repository;

@Repository
public interface MessageMapper {

  public void create(Message vo) throws Exception;

  public Message readMessage(Integer mid) throws Exception;

  public void updateState(Integer mid) throws Exception;

}
