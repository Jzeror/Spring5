"use strict";
function navUI(){
	return '<div id="header">'
		+	'  <section id="banner-nav">'
		+'      <div class="bg-color-nav">'
		+'        <header id="header">'
		+'            <div id="mySidenav" class="sidenav">'
		+'              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times; </a>'
		+'              <a id="login_btn">Login</a>'
		+'              <a id="add_btn">Join</a>'
        +'				<a id="board">게시판</a>'
		+'            </div>'
		+'            <!-- Use any element to open the sidenav -->'
		+'            <span onclick="openNav()" class="pull-right menu-icon">☰</span>'
		+'        </header>'
		+'      </div>'
		+'    </section>'
		+'	</div>';
}