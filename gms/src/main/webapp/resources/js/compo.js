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
		},
		tbl : x=>{
/*<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <p>...</p>
  </div>

  <!-- Table -->
  <table class="table">
    ...
  </table>
</div>*/
			let d = $('<div class="panel panel-'+x.type+'" />');
			let ph = $('<div class="panel-heading" />');
			let pb = $('<div class="panel-body" />');
			let t = $('<table />');
			let thead = $('<thead/>');
			let tr = $('<tr/>');
			d.append(
					ph.html(x.head),
					pb.html(x.body),
					t.addClass(x.clazz)
					);
			/*ph.html(x.head).appendTo(d);
			pb.html(x.body).appendTo(d);
			t.addClass(x.clazz).appendTo(d);*/
			tr.appendTo(thead);
			$.each(x.list,(i,v)=>{
				$('<th/>').html(v).appendTo(tr);
			});
			thead.appendTo(t);
			$('<tbody/>').appendTo(t);
			return d;
		},
		page : x=>{
/*
 <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
 */		
			return $('<ul class="pagination">').attr({id:'ulCp'}).appendTo($('<nav aria-label="...">'));
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