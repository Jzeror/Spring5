var algo = algo || {};
algo = {
		init : x=>{
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
	}; //여기 막아줘야함.
algo.main = {
		onCreate : ()=>{
			algo.main.setContentView();
		},
		setContentView : ()=>{
			$('#wrapper').html('<h1>ALGORITHM</h1><h3>수 열</h3><div id="ctn"><table id="tbl" style="width:800px;height:300px; border-collapse: collapse; border: 1px solid black; margin:0 auto"> <tr style="border: 1px solid black;"> <td id="t__l" style="width: 50%;border: 1px solid black;"></td><td id="t__r" style="width: 50%;border: 1px solid black;"></td></tr></table></div>');
			
			/*	$('#t__l').append('<h3><a id="arith__seq">등차수열</a></h3>');
			$('#arith__seq').click(e=>{ //이벤트 주자
				let ques = '<h4> 시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.</h4>'+
					'	<label for="시작값">시작값</label><input type="text" id="start" value=""><br/>'+
					'	<label for="마지막값">마지막값</label><input type="text" id="end" value=""><br/>'+
					'	<label for="공차">공차</label><input type="text" id="diff" value=""><br/>'+
					'	<button id="bt">결과보기</button>'+
					'	<h4 id="rs">결과보기</h4>';
				$('#t__r').html('<h3>'+ques+'</h3>');
				let ans = "답: ";
				$('#bt').click(()=>{
					let rs = ($.fn.nullChecker(
							[$('#start').val(),$('#end').val(),$('#diff').val()]
							))?'빈칸 채우세요':'완성';
					$('#rs').empty().text(rs);
					if(rs==='완성'){
						let start = $('#start').val()*1;
						let end = $('#end').val()*1;
						let diff = $('#diff').val()*1;
						let i = start;
						let sum = 0;
						while(i<=end){
							sum += i;
							i = i + diff;
						}
						$('#rs').html('<p>'+ans+sum+'</p>');	
					}		
				});
			});
			$('#t__l').append('<h3><a id="fibo__seq">피보나치수열</a></h3>');
			$('#fibo__seq').click(e=>{
				let ques = '<h4> 피보나치 수열의 n항부터 m항 까지의 합을 구하시오.</h4>'+
					'	<label for="n">n</label><input type="text" id="n" value=""><br/>'+
					'	<label for="m">m</label><input type="text" id="m" value=""><br/>'+
					'	<button id="bt">결과보기</button>';
				let ans = "답 : ";
				$('#t__r').html('<h3>'+ques+'</h3>')
				$('#bt').click(()=>{
					let a = 0;
					let b = 1;
					let i = 1;
					let n = $('#n').val()*1;
					let m = $('#m').val()*1;
					let sum = 0;
					let sum2 = 0;
					console.log(n+','+m);
					let temp=0;
					while(i<=n-1){
						sum += a + b;
						temp=a;
						a = b;
						b = temp+b;
						i++;
					}
					i=1;
					a=0;
					b=1;
					while(i<=m){
						sum2 += a + b;
						temp=a;
						a = b;
						b = temp+b;
						i++;
					}
					$('#bt').html('<p>'+ans+(sum2-sum)+'</p>');
				});
			});
			$("#t__l").append('<h3><a id="swit__seq">스위치수열</a></h3>');
			$('#swit__seq').click(e=>{
				let ques = '<h4> 첫째 항의 값이 a이며, 공차가 d 인 스위치수열의 n항까지의 합을 구하시오.</h4>'+
					'	<label for="시작값">시작값</label><input type="text" id="start" value=""><br/>'+
					'	<label for="n항">n항</label><input type="text" id="n" value=""><br/>'+
					'	<label for="공차">공차</label><input type="text" id="diff" value=""><br/>'+
					'	<button id="bt">결과보기</button>';
				$('#t__r').html('<h3>'+ques+'</h3>')
				$('#bt').click(()=>{
					let ans = "답 : ";
				let a = $('#start').val()*1;
				let b = $('#n').val()*1;
				let d = $('#diff').val()*1;
				let i = 1;
				let sum = 0;
				console.log(a+' , '+b+' , '+d+' , '+sum);
				while(i<=b){
					sum += a
					a=-(a+d);
					i++;
				}
				$('#bt').html('<p>'+ans+sum+'</p>');
				});
			});
			$('#t__l').append('<h3><a id="fact__seq">팩토리얼수열</a></h3>');
			$('#fact__seq').click(e=>{
				let ques = '<h4> 값 a의 팩토리얼 합을 구하시오.</h4>'+
					'	<label for="a값">a값</label><input type="text" id="a" value=""><br/>'+
					'	<button id="bt">결과보기</button>';
					$('#t__r').html('<h3>'+ques+'</h3>');
					$('#bt').click(()=>{
						let ans = "답 : ";
						let a = $('#a').val()*1;
						let i = 1;
						let m = 0;
						let sum = 1;
						while(i<=a){
							sum=sum*i;
							i++;
						}
						$('#bt').html(ans+sum);
					});
			});*/
			let $t__l = $('#t__l');
			let $t__r = $('#t__r');
			$("<ur />").attr({id : 'side__menu'}).addClass('list-group').appendTo($t__l);
			$('<li />').attr({id : 'arith'}).addClass('list-group-item').appendTo($('#side__menu'));
			$('<a/>').attr({href : '#'}).html('등차수열의 합').appendTo($('#arith'))			
				.click(e=>{
					$t__l.empty();					
					$('<div/>').attr({id:'ques'}).appendTo($t__r);
					$('<h4/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
					//let arr = { html:['시작값','마지막값','공차'],id:['start','end','diff'] };
					let arr = [{html:'시작값' , id:'start'}, {html:'마지막값', id:'end'}, {html:'공차', id:'diff'}];
				
					$(arr).each(function(i){
						$('<label/>').html(this.html).appendTo($('#ques')); //지금 상황에서는text랑 똑같은 의미이다. text써도 됨
						$('<input/>').attr({id:this.id,type:'text'}).appendTo($('#ques'));
						$('<br/>').appendTo($('#ques'));
					});
					$('<button/>').addClass('btn btn-primary').attr({type:'button'}).html('결과보기')
						.appendTo($('#ques')).click(e=>{
							$('#h4').remove();
							let a = ($.fn.nullChecker(
									[$('#start').val(),$('#end').val(),$('#diff').val()]
							))?'빈칸 채우세요':'완성';
							let ans = "답: ";
							if(a==='완성'){
								let start = $('#start').val()*1;
								let end = $('#end').val()*1;
								let diff = $('#diff').val()*1;
								let i = start;
								let sum = 0;
								while(i<=end){
									sum += i;
									i = i + diff;
								}
								ans = ans + sum;
							}else{
								ans="빈칸 채워주세요";
							}
							$('<h4/>').attr({id : 'h4'}).text(ans).appendTo($('#ques'));	
							
							
						});
					
			});
			$('<br/>').appendTo($('#arith'));
			$('<a/>').attr({href : '#'}).html('피보나치수열').appendTo($('#arith'))
				.click(e=>{
					$t__l.empty();		
					
				});
			$('<br/>').appendTo($('#arith'));
			$('<a/>').attr({href : '#'}).html('스위치수열').appendTo($('#arith'))
				.click(e=>{
					$t__l.empty();		
					
				});
			
		}
};
algo.series = {
		arith : x =>{},
		fibonacci : x=>{},
		swit : x => {},
		factorial : x=>{}
};
algo.array = {
		bubble : x => {},
		insert : x => {},
		select : x => {},
		ranking : x=> {}
};
algo.matrix = {
		fiveBy5 : x => {},
		sandGlass : x => {},
		snail : x=> {},
		diamond : x=>{},
		zigzag : x=> {}
};
algo.math = {
		
};
algo.appl ={};

algo.router = {
	onCreate :x=>{
		$.getScript(x+'/resources/js/router.js',
				()=>{    //이게 온클릭?
					$.extend(new Session(x));
					$.getScript($.ctx()+'/resources/js/util.js').done(x=>{console.log('실행');}).fail(x=>{console.log('실패')});
					algo.main.onCreate();
					//algo.main.onCreate(); util도 확장시켜야하니까 여기서 oncreate하지말고 다시 util을 부른다.
				}
			);
	}
};