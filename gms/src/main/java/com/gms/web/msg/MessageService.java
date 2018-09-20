package com.gms.web.msg;

import org.springframework.stereotype.Component;

@Component
public interface MessageService {

  public void addMessage(Message vo) throws Exception;

  public Message readMessage(String uid, Integer mno) throws Exception;
}
