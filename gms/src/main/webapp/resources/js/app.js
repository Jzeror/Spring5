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
        $.when(
            $.getScript(header),
            $.getScript(content),
            $.getScript(footer),
            $.Deferred(y=>{
                $(y.resolve);
            })
        ).done(z=>{
        	w.html(
        			headerUI()
        			+contentUI()
        			+footerUI()
        			);
        	$('#login_btn').click(e=>{
                app.permission.login();
        	});
        	/*$('#board').click(e=>{
                app.board.init();
        	});*/
        }).fail(x=>{
        	console.log('로드실패');
        });
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
		alert('Login');
		$('#content').empty();
		$.getScript($.script()+'/login.js',
				()=>{
					$('#content').html(loginUI());
				}
		);
	};
	return {login : login};
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
	}
};