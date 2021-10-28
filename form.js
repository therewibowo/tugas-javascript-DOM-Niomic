function buat_form(){
	var elem = document.getElementById("X");
	elem.parentElement.removeChild(elem);

	var p = document.createElement("P");
	p.className = "tulisan_login";
	p.innerHTML = "SILAHKAN MENDAFTAR";

	var element = document.getElementsByTagName("div")[0];
	element.appendChild(p);

	var form = document.createElement("FORM");
	element.appendChild(form);

	var label = document.createElement("label");
	label.innerHTML = "Nama User";
	form.appendChild(label);

	var input_username = document.createElement("input");
	input_username.type = "text";
	input_username.name = "username";
	input_username.placeholder = "Nama User..";
	input_username.className = "form_login";
	form.appendChild(input_username);

	var input_hp = document.createElement("input");
	input_hp.type = "number";
	input_hp.name = "username";
	input_hp.placeholder = "Nomor Handphone";
	input_hp.className = "form_login";
	form.appendChild(input_hp);
	
	var username = document.createElement("input");
	username.type = "text";
	username.name = "username";
	username.placeholder = "username atau email";
	username.className = "form_login";
	form.appendChild(username);
	
	var password = document.createElement("input");
	password.type = "password";
	password.name = "password";
	password.placeholder = "Password..";
	password.className = "form_login";
	form.appendChild(password);

	var tombol = document.createElement("input");
	tombol.type = "submit";
	tombol.className = "tombol_login";
	form.appendChild(tombol);

}