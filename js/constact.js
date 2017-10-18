var host = window.location.host;
document.write("<link rel=\"stylesheet\" href=\"http:\/\/"+host+"\/kefu\/css\/constact\.css\" \/>");
/*jQuery.post('/kefu/server.php?'+new Date().getTime(),{id:1},function(data){
	jQuery("body").append(data);
});*/
console.log(1);
jQuery.ajax({
	url:'/kefu/server.php?number='+new Date().getTime(),
	type:"POST",
	dataType:'json',
	data:{"id":"1"},
	success:function(data){
		console.log(data);
		jQuery("body").append(data.html);
	},
	error: function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
});