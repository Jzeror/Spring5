function modifyBrdUI(){
	return '<div id="content_box" style="width: 90%; margin:auto">'
	+'<section class="content">'
	+'<div class="row">'
	+'<div class="col-md-12">'
		+'<div class="box box-primary">'
			+'<div class="box-body">'
				+'<div class="form-group">'
					+'<label for="exampleInputEmail1">작성자 :</label>'
					+'<p id="writerM" class="form-control"><p/>'
				+'</div>'
				+'<br />'
				+'<div class="form-group">'
					+'<label for="exampleInputEmail1">제목 :</label>'
					+'<textarea class="form-control" id="titleM" ></textarea>'
				+'</div>'
				+'<br />'
				+'<div class="form-group">'
					+'<label for="exampleInputPassword1">내용 :</label>'
					+'<textarea class="form-control" id="cntM" rows="3" ></textarea>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'
	+'</div>'
	+'</section>'
+'</div>';
}