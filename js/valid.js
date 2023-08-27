function verify(){
	var c_email=document.getElementById("email").value;
	var c_pwd=document.getElementById("pwd").value;
	if(email_check(c_email)){
		if(pwd_check(c_pwd)){
			}
	}
}
function email_check(c_email){
	if(c_email==""){
		alert("Email do not be Empty");
		c_email.focus();
		return false;
	}else{
		return true;
	}
}
function pwd_check(c_pwd){
	if(c_pwd==""){
		alert("must password be entered");
		c_pwd.focus();
		return false;
	}else{
		return true;
	}
}