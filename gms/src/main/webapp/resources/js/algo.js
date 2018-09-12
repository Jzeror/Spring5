var algo = algo || {};
algo = {
		init : x=>{
			alert('step1 :: ' +x);
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
			alert('step4 :: ');
			algo.main.setContentView();
		},
		setContentView : ()=>{
			alert('step5 :: ');
			$('#wrapper').html('<h1>ALGORITHM</h1><h3>수 열</h3><div id="ctn"><table id="tbl" style="width:800px;height:300px; border-collapse: collapse; border: 1px solid black; margin:0 auto"> <tr style="border: 1px solid black;"> <td id="t__1" style="width: 50%;border: 1px solid black;"></td><td id="t__r" style="width: 50%;border: 1px solid black;"></td></tr></table></div>');
			$('#t__1').append('<h3><a id="arith__seq">등차수열</a></h3>');
			$('#arith__seq').click(e=>{ //이벤트 주자
				alert("등차수열 선택");
			});
			$('#t__1').append('<h3><a id="fibo__seq">피보나치수열</a></h3>');
			$('#fibo__seq').click(e=>{
				alert("피보나치 수열");
			});
			$("#t__1").append('<h3><a id="swit__seq">스위치수열</a></h3>');
			$('#swit__seq').click(e=>{
				alert('스위치수열');
			});
			$('#t__1').append('<h3><a id="fact__seq">팩토리얼수열</a></h3>');
			$('#fact__seq').click(e=>{
				alert('팩토리얼수열');
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
		alert('step2 :: ' +x);
		$.getScript(x+'/resources/js/router.js',
				()=>{    //이게 온클릭?
					alert('step3 :: ' +x);
					$.extend(new Session(x));
					algo.main.onCreate();
				}
			);
	}
};