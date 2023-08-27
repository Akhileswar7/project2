import mysql from 'mysql';
var mysql = require('mysql');
function akkhil(){
	alert("akhi;");
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
}
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//     import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
//     import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
//     import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// function valid()
// {
// 	var password = document.getElementById("password").value;
// 	var uname = document.getElementById("name").value;
// 	var email=document.getElementById("email").value;
// 	if(allLetter(uname))
// 	{
// 		if(validateEmail(email))
// 		   {
// 				if(passid_validation(password))
// 				{
//     // Import the functions you need from the SDKs you need

//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries
  
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//       apiKey: "AIzaSyDHc7fWyTq9exW_K3Kvlz2oNRwmmbaObmQ",
//       authDomain: "website-15f54.firebaseapp.com",
//       databaseURL: "https://website-15f54-default-rtdb.firebaseio.com",
//       projectId: "website-15f54",
//       storageBucket: "website-15f54.appspot.com",
//       messagingSenderId: "780036673799",
//       appId: "1:780036673799:web:936cfb1963236e1e99b5a2",
//       measurementId: "G-DDEFBNKJR8"
//     };
  
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
//     const database=getDatabase(app);
//     const auth = getAuth();
// 	register.addEventeListener('click',(e)=>{
// 		createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
// 	alert("Registered Succussfully");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// 	alert(errorCode+errorMessage);
//     // ..
//   });
// 	});
// 				}
// 			}
// 		}
// 	return false;
// }

// function passid_validation(password)
// {
// 	var pass_id="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
// 	if(password.value.match(pass_id))
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		alert("Give strong Password");
// 		password.focus();
// 		return false;
// 	}
// }
// function allLetter(uname)
// {
//     var letters = /^[A-Za-z' ']+$/;
// 	if(uname.value.match(letters))
// 	{
// 	    return true;
//     }
// 	else
// 	{
// 	    alert("please input alphabet characters only as name");
// 		uname.focus();
// 		return false;
// 	}
// }
// function validateEmail(email)
// {
//    	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	if(email.value.match(mailformat))
// 	{
// 		return true;
//     	}
// 	else
// 	{
// 	   alert("you have entered an inavlid email address!");
// 	   email.focus();
// 	   return false;
// 	}
// }