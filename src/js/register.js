require (["config"],function(){
	require(["jquery"],function($){
		$(function () {

			var a=0,b=0,c=0; 
		$("#userName").on("blur", function (){
            const username_val = $(this).val();
            if (this.value==="" || !/^.[a-zA-Z0-9_-]{4,}$/.test(username_val)) {
                $(".message").show();
				a=0;
				$(this).val("");
            } else{
                 $(".message").hide();
            	a=1;
            }
         });
		
				
		
		$("#passWord").on("blur", function () {
			const password_val = $(this).val();
			if (password_val==="" || !/^.{6,20}$/.test(password_val)) {
				   $(".message_2").show();
				b=0;
				$(this).val("");
			}else{
                 $(".message_2").hide();
            	b=1;
            }
		});
		$("#Repassword").on("blur", function () {
			const Repassword_val = $(this).val();
			if (Repassword_val !== $("#passWord").val()){
			      $(".message_3").show();
				c=0;
				$(this).val("");
			}else{
                 $(".message_3").hide();
            	c=1;
            }
		});
		     //console.log($("#btn-reg"));
			$("#btn-reg").on("click",function(){
            //console.log("------------------");
			console.log("aaaaaaaaaaaaaaaa"+$("#register_form").serialize());
			if(a+b+c===3){
				$.post("http://localhost/api/register.php",$("#register_form").serialize(),function(data){
					console.log("aaaaaaaaaaaaaaaa"+data.res_message);
					if(data.res_code===1){
						location.href="/html/login.html";
					}
					else{
						alert("用户名已存在");
					}
				},"json");
			}
		});		
		
       });
			
	});
});
	




	
	
	
	
	

		
		
		