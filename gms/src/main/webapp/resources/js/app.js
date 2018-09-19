"use strict" //에러가 나면 보여주겠다.
var app = app || {};
var user = user || {};

/*app=(()=>{
	var init = x=>{
		console.log('step 1');
		app.session.context(x);	
		app.onCreate();
	};
	var onCreate = ()=>{
		console.log('step 3');
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href = app.x()+"/move/auth/member/login";
		});
		$('#add_btn').click(()=>{
			location.href = app.x()+"/move/auth/member/add";
		});
		$('#login_form_btn').click(()=>{
			$('#login-form')
				.attr({ action : app.x()+"/member/login",
						method : "POST"})
				.submit();
		});
		$('#add_form_btn').click(()=>{
			
			var form = document.getElementById('join-form');
			form.action = app.x() + "/member/add";
			form.method = "post";	
			form.submit();
			
			$('#join-form')
				.attr({	action : app.x() + "/member/add",
						method : "POST"	})
				.submit(); // 메소드체이닝
		});
		$('#logout_btn').click(()=>{
			location.href = app.x()+"/member/logout";
		});
		$('#retrieve_move').click(()=>{
			location.href = app.x()+"/member/retrieve/"+app.session.getItem('memId');
		});
		$('#update_move').click(()=>{
			location.href = app.x()+"/move/login/member/modify";
		});
		$('#delete_move').click(()=>{
			location.href = app.x()+"/move/login/member/remove";
		});
		$('#update_btn').click(()=>{
			let id = $('<input type="hidden" name="memId" value="'+$('#memId').text()+'"/>');
			$('#update-form')
				.append(id)
				.attr({ action : app.x() + "/member/modify",
						method : "POST"})
				.submit();
		});
		$('#delete_btn').click(()=>{
			let id = $('<input type="hidden" name="memId" value="'+$('#memId').text()+'"/>');
			$('#update-form')
				.append(id)
				.attr({ action : app.x() + "/member/remove",
						method : "POST"})
				.submit();
		});
	};
	var setContentView = ()=>{
		console.log('step 4'+app.j());
	}
})();*/
app = (()=>{
	var init =x=>{
		app.router.init(x);
	};
	return{init:init};
})();
app.main = (()=>{
	var w,header, footer, content, img, ctx,script,style,login ;
	var init =()=>{
		script = $.script();
		ctx = $.ctx();
		img = $.img();
		style = $.style();
		w= $('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		footer = script+'/footer.js'; 
		login = script+'/login.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
        //// 자스 Promise 비동기 로직 다루기
	      app.router.home();
	};
	return{init:init};
})();
/*app.board = (()=>{
	var w,header, footer, content, img, ctx,script,style,login ;
	var init = ()=>{};
	var onCreate = ()=>{};
	var setContentView=()=>{
		alert('Board');
		$('#content').empty();
	};
	return {init:init};
})();*/
app.permission = (()=>{
	var login =()=>{
		//$('#content').empty(); 밑에 html 쓰고 있으니까 안써도 됨.
		$.getScript($.script()+'/login.js',
				()=>{
					$('#content').html(loginUI());
					$('#login_form_btn').click(e=>{
						$.ajax({
							url : $.ctx()+'/mbr/login',
							method : 'post',
							contentType : 'application/json',
							data : JSON.stringify({memId:$('#memIdLog').val(),password:$('#memPassLog').val()}),
							success : d=>{
								alert('ID 판단 ::: '+d.ID);
								alert('PW 판단 ::: '+d.PW);
								alert('MBR 판단 ::: '+d.MBR);
								if(d.ID==="WRONG"){
									
								}else if(d.PW==="WRONG"){
									
								}else{
									$.getScript($.script()+'/content.js',()=>{
										$('#content').html(contentUI());
										$('#mySidenav').empty();
										$('<a />').attr("href","javascript:void(0)").addClass("closebtn").html('&times;').appendTo($('#mySidenav'))
										.click(e=>{ });
										$('<a />').attr("id","logout_btn").html('Logout').appendTo($('#mySidenav'))
										.click(e=>{	
											app.router.home();
										});
										$('<a />').attr("id","board_write").html('게시물쓰기').appendTo($('#mySidenav'))
										.click(e=>{	});
										$('<a />').attr("id","board_list").html('게시물목록').appendTo($('#mySidenav'))
										.click(e=>{	});
									});
									
								}
							},
							error : (m1,m2,m3)=>{
								
							}
						});
					});					
				}
		);
	};
	var add=()=>{
		$.getScript($.script()+'/add.js',()=>{
			$('#content').html(addUI());
			$('#add_form_btn').click(e=>{
				var checkArr = [];
				$('input[name="subjectSelector"]:checked').each(function(i){
					checkArr.push($(this).val());
				});
				$.ajax({
					url:$.ctx()+'/mbr/add',
					method:'post',
					contentType:'application/json',
					data : JSON.stringify({ 
						memId:$('#memIdAdd').val(),
						password:$('#pwAdd').val(),
						name:$('#nameAdd').val(),
						ssn:$('#ssnAdd').val(),
						teamId:$('input[name=teamIdSelector]:checked').val(),
						roll:$('#rollAdd').val()
						//,subject: JSON.stringify(checkArr)
					}),
					success :d=>{
						alert("ID 체크 ::: "+d.ID);
						alert("PW 체크 ::: "+d.PW);
						alert("MBR 체크 ::: "+d.MBR.memId);
						if(d.ID==="WRONG"){
							
						}else if(d.PW==="WRONG"){
							
						}else{
							
						}
					},
					error:(m1,m2,m3)=>{
						
					}
				});
			});
		});
	};
	return {login : login,
		add : add};
})();
app.router = {
	init :x=>{
		$.getScript(x+'/resources/js/router.js',
				()=>{    //이게 온클릭?
					$.extend(new Session(x));
					$.getScript($.script()+'/util.js').done(x=>{console.log('실행');}).fail(x=>{console.log('실패')});
					app.main.init();
					//algo.main.onCreate(); util도 확장시켜야하니까 여기서 oncreate하지말고 다시 util을 부른다.
				}
			);
	},
	home : ()=>{
		$.when(
	            $.getScript($.script()+'/header.js'),
	            $.getScript($.script()+'/footer.js'),
	            $.getScript($.script()+'/content.js'),
	            $.Deferred(y=>{
	                $(y.resolve);
	            })
	        ).done(z=>{
	        	$('#wrapper').html(
	        			headerUI()
	        			+contentUI()
	        			+footerUI()
	        	);
	        	$('#add_btn').click(e=>{
	        		app.permission.add();
	        	});
	        	$('#login_btn').click(e=>{
	                app.permission.login();
	        	});
	        	/*$('#board').click(e=>{
	                app.board.init();
	        	});*/
	        }).fail(x=>{
	        	console.log('로드실패');
	        });
	}
};