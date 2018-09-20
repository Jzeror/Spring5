create table board(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno)); //안보이니까 여기다 바보라고 적어놔도 못보시겠죠 에베베베베베베
    //가무잡잡해서 안보이네요 
    
   SELECT * FROM MEMBER;