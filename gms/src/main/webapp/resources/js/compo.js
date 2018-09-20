"use strict";
var ui = {
		div : x=>{return $('<div />').attr(x);},
		anchor : x=>{ //ui.anchor({id:'TEST',txt:'TEST'});
			return $('<a/>').attr({href : '#',id:x.id}).html(x.txt); }
		,
		ul : x =>{ //ui.ul({id:'' , len:''});
			let y = $('<ul/>');
			for(var i=0 ; i<x.len;i++){
				$('<li/>').attr({
					id : x.id+'-'+i
				}).appendTo(y);
			}
			return y;
		},
		
						
			/**/
			
		label : x=>{
			return $('<label />')
						.attr('for',x.id).text(x.txt)
		},
		input : x=>{ // id,val
			let p = ui.div({}).addClass("input-group mb-3");
			(ui.div({id:'input-group-prepend'})
					.addClass("input-group-prepend"))
					.html('<span class="input-group-text" id="basic-addon1">'
							+ x.txt
							+'</span>').appendTo(p);
			/*ui.span({
				id: "basic-addon1",
				value: x.div__val
			}).appendTo($('#input-group-prepend'));*/
			$("<input/>").attr({
				id : x.id,
				type: 'text',
				placeholder:"입금액" ,
				"aria-label":"Username", 
				"aria-describedby":"basic-addon1"
			}).addClass("form-control").appendTo(p);
			return p;
		},
		btn : x=>{
			let y = $('<button>');
			y.attr('type','button').addClass('btn btn-'+x.clazz).html(x.txt);
			/*************************************************************
			<button type="button" class="btn btn-primary">Primary</button>
			primary (blue)
			secondary (gray)
			success (green)
			danger (red)
			warning(yellow)
			info(dark green)
			light(white)
			link(trans))
			*******************************************************************/
			return y;
		}
}
/*input : x=>{    이건 안된다 왜? test가 만들어지지가 않음.
let p = ui.div({}).addClass("input-group mb-3");
ui.div({id:'test'}).addClass("input-group-prepend").appendTo(p);
$('#test').html('<span class="input-group-text" id="basic-addon1">@</span>');
$("<input/>").attr({
	id : x.input__id,
	type: 'text',
	placeholder:"입금액" ,
	"aria-label":"Username", 
	"aria-describedby":"basic-addon1"
}).addClass("form-control").appendTo(res);
return p;
}*/
/*inputGroupPrepend : x=>{ 시간 없을땐 이렇게
return '<div class="input-group mb-3">'
+'<div class="input-group-prepend">'
+'<span class="input-group-text" id="basic-addon1">@</span>'
+'</div>'
+'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
+'</div>' ;
}*/