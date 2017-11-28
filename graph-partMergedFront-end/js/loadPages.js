$( document ).ready( function (){
	$.ajax({
		type:'GET',
		url:"https://someleltest.herokuapp.com/api/users/checkPermision?SID="+JSON.parse(localStorage.getItem("SID")),
		success:function(response){console.log(response);}
	})
	/*var permision=localStorage.getItem("SID");
	if(!localStorage.getItem("permission")){location.replace("index.html");}*/
	var fileName=location.pathname.match(/[^\/]+$/)[0];
	var permission=JSON.parse(localStorage.getItem("permission"));
	console.log(permission);
})
pages={
	"admin":["index.html","log-in.html","order.html","planets.html","register_order.html","ships.html","sing-up.html","tfa.html","users.html"],
	"operator":["index.html","log-in.html","order.html","planets.html","register_order.html","ships.html","sing-up.html","tfa.html"],
	default:["index.html","log-in.html","order.html","planets.html","register_order.html","sing-up.html","tfa.html"],
	unauthorized:["index.html","log-in.html","order.html","planets.html","register_order.html","sing-up.html"]
}