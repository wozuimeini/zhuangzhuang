require (["config"],function(){
	require(["jquery","cookie"],function($){
		$(function (){
			$("#userName").on("blur", function () {
            const username_val = $(this).val();
            if (this.value==="" || !/^.[a-zA-Z0-9_-]{3,}$/.test(username_val)) {
            	$(this).val("");
                $(".message").show();
            }
            else{
                $(".message").hide();
            }
        });
		$("#passWord").on("blur", function () {
			const password_val = $(this).val();
            if (password_val==="" || !/^.{6,20}$/.test(password_val)) {
				$(this).val("");
				 $(".message_2").show();
			}
			else{
				  $(".message_2").hide();
			}
		});
		$("#btn-reg").on("click",function(){
			//console.log("---------------");
			$.post("http://localhost/api/login.php",$("#login_form").serialize(),function(d){
				if(d.res_code===1){
					location.href="/index.html";
				}
				else{
					  $(".message").show();
				}
			},"json");
		});
		
		});
	});
});


