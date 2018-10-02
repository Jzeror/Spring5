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
app.board = (()=>{
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
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView=()=>{
		$('#content').empty();
		app.service.boards();
	};
	return {init:init};
})();
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
								if(d.ID==="WRONG"){
									alert('아이디를 확인해주세요.');
								}else if(d.PW==="WRONG"){
									alert('비밀번호를 확인해주세요.');
								}else{
									$.getScript($.script()+'/header.js',()=>{
										$('#header').html(headerUI);
										$.getScript($.script()+'/content.js',()=>{
											$.cookie("memId", d.MBR.memId);
											$('#content').html(contentUI());
											$('#mySidenav').empty();
											$('<a />').attr("href","javascript:void(0)").addClass("closebtn").html('&times;').appendTo($('#mySidenav'))
											.click(e=>{ });
											$('<a />').attr("id","logout_btn").html('Logout').appendTo($('#mySidenav'))
											.click(e=>{	
												app.router.home();
											});
											$('<a />').attr("id","myBoard").html('게시판').appendTo($('#mySidenav'))
											.click(e=>{
												app.service.myBoard({
													pageNo:'1'
													});
											});
										});
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
app.service = {
		boards : x=>{
			if(x==undefined)x='1';
			$.getJSON($.ctx()+'/boards/'+x,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					$('#content').empty();
					let x = {
							type : 'default',
							id : 'table',
							head : '게시판',
							body : '오픈 게시판',
							list : ['No','제목','글쓴이','작성일','조회수'],
							clazz : 'table table-bordered'
					};
					(ui.tbl(x)).appendTo($('#content'));
					$.each(d.list,(i,j)=>{
						$('<tr />').append(
						$('<td />').attr('width','5%').html(j.bno),
						$('<td />').attr('width','60%').html($('<a/>')).html(j.title).click(e=>{
							app.service.getCnt({bno : j.bno});
						}),
						$('<td />').attr('width','10%').html(j.writer),
						$('<td />').attr('width','10%').html(j.regdate),
						$('<td />').attr('width','5%').html(j.viewcnt)
						).appendTo($('tbody')); // tbody를 어떻게 인식하지?
					});
					(ui.page()).appendTo($('#content'));
					let ul = $('.pagination');
					for(let i=d.page.beginPage ; i<=d.page.endPage ; i++){
						let ac=(i==d.page.pageNumber)? "active" : ""; // 함수 안에 있기 때문에 cc를 쓰던 말던 성능 차이가 거의 없다.
						$('<li />').addClass("page-item "+ac).append($('<a />').addClass("page-link").html(i)).appendTo(ul).click(e=>{
							e.preventDefault();
							app.service.boards(i);
						});
					}
					let disp = (d.page.existPrev)? "": "disabled" ;
					let disn = (d.page.existNext)? "": "disabled" ;
					$('<li id="epo" />').addClass("page-item "+disp).append($("<span />").addClass("page-link").html("Previous")).prependTo(ul);
					$('<li id="eno" />').addClass("page-item "+disn).append($("<span />").addClass("page-link").html("Next")).appendTo(ul);
					if(d.page.existPrev){$('#epo').click(e=>{app.service.boards(parseInt(d.page.beginPage-1));});}
					if(d.page.existNext){$('#eno').click(e=>{app.service.boards(parseInt(d.page.endPage+1));});}
				});
			});
		},
		myBoard : x=>{
			//if(x==undefined)x='1';
			$.getJSON($.ctx()+'/boards/'+$.cookie("memId")+'/'+x.pageNo,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					$('#content').empty();
					let s = {
							type : 'default',
							id : 'table',
							head : '마이 게시판',
							body : '사용자만 이용할 수 있는 개인 게시판',
							list : ['No','제목','내용','글쓴이','작성일','조회수'],
							clazz : 'table table-bordered'
					};
					(ui.tbl(s)).appendTo($('#content'));
					$.each(d.list,(i,j)=>{
						$('<tr />').append(
						$('<td />').attr('width','5%').html(j.bno),
						$('<td />').attr('width','10%').html(j.title),
						$('<td />').attr('width','50%').html(j.content),
						$('<td />').attr('width','10%').html(j.writer),
						$('<td />').attr('width','10%').html(j.regdate),
						$('<td />').attr('width','5%').html(j.viewcnt)
						).appendTo($('tbody'));
					});
					(ui.page()).appendTo($('#content'));
					let ul = $('.pagination');
					for(let i=d.page.beginPage ; i<=d.page.endPage ; i++){
						let ac=(i==d.page.pageNumber)? "active" : ""; // 함수 안에 있기 때문에 cc를 쓰던 말던 성능 차이가 거의 없다.
						$('<li />').addClass("page-item "+ac).append($('<a />').addClass("page-link").html(i)).appendTo(ul).click(e=>{
							e.preventDefault();
							app.service.myBoard({id:d.writer , pageNo:i});
						});
					}
					let disp = (d.page.existPrev)? "": "disabled" ;
					let disn = (d.page.existNext)? "": "disabled" ;
					$('<li id="epo" />').addClass("page-item "+disp).append($("<span />").addClass("page-link").html("Previous")).prependTo(ul);
					$('<li id="eno" />').addClass("page-item "+disn).append($("<span />").addClass("page-link").html("Next")).appendTo(ul);
					if(d.page.existPrev){$('#epo').click(e=>{app.service.myBoard({id:d.writer , pageNo:parseInt(d.page.beginPage-1)});});}
					if(d.page.existNext){$('#eno').click(e=>{app.service.myBoard({id:d.writer , pageNo:parseInt(d.page.endPage+1)});});}
					$('<div/>')
					.attr({id : 'btn-wrt'})
					.appendTo($('#content .panel-foot'));
					$('<button/>')
					.addClass('btn btn-secondary')
					.html('새글')
					.appendTo($('#btn-wrt'))
					.click(e=>{
						app.service.write(x);
					});
				});
			});
		},
		write:x=>{
			$.getScript($.script()+'/writer.js',()=>{
				$('.pagination').remove();
				$('.panel-body').html('글쓰기');
				$('.panel-foot').html(writerUI());
				$('#writer').html($.cookie('memId'));
				$('<button/>')
				.addClass('btn btn-primary')
				.html('확인')
				.appendTo($('.panel-foot'))
				.click(e=>{
					$.ajax({
						url : $.ctx()+'/boards/add',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify({
							title : $('#title').val(),
							content : $('#ctn').val(),
							writer : $.cookie("memId")
						}),
						success : d=>{
							app.service.boards();
						},
						error : (x,y,z)=>{}
					});
				}); // 확인버튼 END - 복잡해지면 구분하기 위해 써주자.
				$('<button/>')
				.addClass('btn btn-warning')
				.html('취소')
				.appendTo($('.panel-foot'))
				.click(e=>{
					app.service.myBoard(x);
				});
				$('<form id="frm" action="uploadForm" method="post" enctype="multipart/form-data" />'
						+'<input type = "file" name="file">'
						+'<input type = "submit">'
						+'</form>'
				)
				.html('사진 업로드')
				.appendTo($('.panel-foot'))
				.click(e=>{
				    var fileData = new FormData($('#frm'));
				    // ajax
				    $.ajax({
				        url: $.ctx()+'/boards/fileupload',
				        type:'POST',
				        data:fileData,
				        async:false,
				        cache:false,
				        contentType:false,
				        processData:false
				    }).done(function(response){
				        alert(response);
				    });

				});
			});
		},
		getCnt:x=>{			
			$.getJSON($.ctx()+'/boards/get/'+x.bno ,d=>{
				$.getScript($.script()+'/reader.js',()=>{
					$('.pagination').remove();
					$('.panel-body').html('게시글');
					$('.panel-foot').html(readerUI());
					$('#title').html(d.title);
					$('#cnt').html(d.content);
					$('#writer').html(d.writer);
					$('<button/>')
					.addClass('btn btn-primary')
					.html('수정')
					.appendTo($('.panel-foot'))
					.click(e=>{
						app.service.modifyBrd(x);
					});
					$('<button/>')
					.addClass('btn btn-primary')
					.html('삭제')
					.appendTo($('.panel-foot'))
					.click(e=>{
						let conf = confirm("게시글을 삭제합니다.");
						if(conf == true){
							alert(x.bno);
							$.getJSON($.ctx()+'/boards/dltB/'+x.bno);
							app.service.boards();
						}
					});
					
				});
			});
		},
		modifyBrd:x=>{
			$.getJSON($.ctx()+'/boards/get/'+x.bno ,d=>{
				$.getScript($.script()+'/modifyBrd.js',()=>{
					$('.pagination').remove();
					$('.panel-body').html('게시글');
					$('.panel-foot').html(modifyBrdUI());
					$('#titleM').html(d.title);
					$('#cntM').html(d.content);
					$('#writerM').html(d.writer);
				
					$('<button/>')
					.addClass('btn btn-primary')
					.html('확인')
					.appendTo($('.panel-foot'))
					.click(e=>{
						$.ajax({
							url : $.ctx()+'/boards/mdfB',
							method : 'POST',
							contentType : 'application/json',
							data : JSON.stringify({
								title : $('#titleM').val(),
								content : $('#cntM').val(),
								writer : $.cookie("memId")
							}),
							success : d=>{
								app.service.boards();
							},
							error : (x,y,z)=>{}
						});
					});
					$('<button/>')
					.addClass('btn btn-primary')
					.html('취소')
					.appendTo($('.panel-foot'))
					.click(e=>{
						app.service.getCnt(x);
					});
					
				});
			});
		}
};
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
	        	$('#board').click(e=>{
	                app.board.init();
	        	});
	        	$('#drag_btn').click(e=>{
	        		$('#content').html(
	        				'<h3>AJAX FILE UPLOAD</h3>'
	        				+'<div class="fileDrop" ></div>'
	        				+'<div class="uploadedList"></div>'
	        		);
	        		$('.fileDrop')
	        		.attr('style','width:100%; height:200px; border:1px dotted blue ')
	        		.on('dragenter dragover' ,e=>{
	        			e.preventDefault();
	        		});
	        		$('.fileDrop')
	        		.on('drop' ,e=>{
	        			e.preventDefault();
	        		var files = e.originalEvent.dataTransfer.files;
	        		var file = files[0];
	        		//console.log(file);
	        		var formData  = new FormData();
	        		formData.append("file",file);
	        		$.ajax({
	        			url : $.ctx()+'/uploadAjax',
	        			data:formData,
	        			dataType : 'text',
	        			processData : false,
	        			contentType : false,
	        			type : 'POST',
	        			success : d=>{
	        				alert('파일업로드 성공!! '+d);
	        			}
	        		});
	        		});
	        	});
	        }).fail(x=>{
	        	console.log('로드실패');
	        });
	}
};