require (["config"],function(){
	require(["jquery","cookie"],function($){
		$(function (){
			 $("#userName").on("blur", function () {
            if (this.value==="") {
            	$(this).val("");
                $(".message").show();
            }
            else{
                $(".message").hide();
            }
        });
		$("#passWord").on("blur", function () {
			if (this.value==="") {
				$(this).val("");
				 $(".message").show();
			}
			else{
				  $(".message").hide();
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


