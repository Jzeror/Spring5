"use strict" //에러가 나면 보여주겠다.
var app = app || {};
var user = user || {};
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
		$.getScript($.script()+'/nav.js',()=>{
			$('#header').html(navUI);
		//$('#content').empty(); 밑에 html 쓰고 있으니까 안써도 됨.
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/login.js',
					()=>{
						$('#content').html(loginUI());
						ui.anchor({id:'login_form_btn', txt:'Login'})
							.css({'width':'300px'})
							.addClass('btn btn-primary')
							.appendTo($('#login-form'))
						//$('<input/>').attr({id:'login_form_btn', type:'button', value:'LOGIN'}).appendTo($('#login-form'))
						.click(e=>{
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
		});
	});
		
	};
	var add=()=>{
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/add.js',()=>{
				$('#content').html(addUI());
				//$('#add_form_btn').click(e=>{
				/*$("[name=subjectSelector]")
				.change(function (){
					alert($(this).val());
//이벤트 줄때 아주좋음	});*/
				/*let checkArr = [];
				$('input[name="subjectSelector"]:checked').each(function(i){
					checkArr.push($(this).val());
				});*/
				ui.anchor({id:'add_form_btn',txt:'회원가입'})
				.css({'width':'300px'}).addClass('btn btn-primary')
				.appendTo($('#add-box')).click(e=>{
					e.preventDefault();
					var arr='';//new Array도 맞음.
					var sub =$("[name=subjectSelector]");
					let i;
					for (i of sub){
						if(i.checked){
							alert(i.value);
							arr+=i.value+",";
						}
					}
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
						roll:$('#rollAdd').val(),
						subject: arr
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
	        	$('#add_btn').on('click',e=>{ //이게 오리지날. 내식이가 바꾼게 편해서 그걸 많이 씀.
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