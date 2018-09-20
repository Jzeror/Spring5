package com.gms.web.reply;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.cmm.Criteria;


@Component
public interface ReplyService {

  public void addReply(Reply vo) throws Exception;

  public List<Reply> listReply(Integer bno) throws Exception;

  public void modifyReply(Reply vo) throws Exception;

  public void removeReply(Integer rno) throws Exception;

  public List<Reply> listReplyPage(Integer bno, Criteria cri) 
      throws Exception;

  public int count(Integer bno) throws Exception;
}
