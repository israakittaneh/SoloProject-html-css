function makeuser(name , password ,age){
	var obj={};
	obj.name = name;
	obj.password =password;
	obj.age = age;
	return obj;
}
var user1 = makeuser("admin" , 123 ,25);
var user2 = makeuser("israa" , 1234 ,25);
var users = [user1 , user2];
var names = [];
for(var i = 0 ; i  <users.length ; i++){
	names.push(users[i].name);
}
var pass = [];
for(var i = 0 ; i  <users.length ; i++){
	pass.push(users[i].password);
}

function validate(){
	var username = $('#username').val();
	var password = $('#password').val();
	if(username === '' || password === '')
		{
			alert('user name  empty OR password empty');
		 }
		if (username === "admin"  ){
		 	window.location.replace("http://www.w3schools.com");
		 }
		
		
      
}