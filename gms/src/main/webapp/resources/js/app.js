"use strict" //에러가 나면 보여주겠다.
var app = app || {};
var user = user || {};

app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x);	
			app.onCreate();
		},
		onCreate : ()=>{
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
				/*
				var form = document.getElementById('join-form');
				form.action = app.x() + "/member/add";
				form.method = "post";	
				form.submit();
				*/
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
		},
		setContentView : ()=>{
			console.log('step 4'+app.j());
		}
};
