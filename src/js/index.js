require(["config"], function(){
require(["load"], function(){
    require(["jquery", "template", "cookie", "xm_carousel", "load"], function($,template){
        $(function(){
            // banner轮播图
            $("#c-w-a").carousel({
                    duration:2000, 
                    imgs: [
                        {href:"#", src:"../img/banner_1.jpg"},
                        {href:"#", src:"../img/banner_2.jpg"},
                        {href:"#",src:"../img/banner_3.jpg"},
                       ],
                    height:353,
                    showBtn:false
            });
            //热销美妆
            $.getJSON('/mock/list.json', function(data) {
              const html = template("list_template",{list:data.res_body.list});
              $("#hot").prepend(html);
            });

            //脸部护理
            $.getJSON('/mock/face.json', function(data) {
              const html = template("list2_template",{list:data.res_body.list});
              $("#face_ul").prepend(html);
            });
            
            //身体护理
            $.getJSON('/mock/bodies.json', function(data){
                const html = template("list3_template",{list:data.res_body.list});
                $("#bodies_ul").prepend(html);
                //console.log(html);
            });

            //眼部护理
            $.getJSON('/mock/eyes.json',function(data){
                const html = template("list4_template",{list: data.res_body.list});
                $("#eyes_ul").prepend(html);
                //console.log(html);
            });

            //头部护理
            $.getJSON('/mock/tip.json',function(data){
                const html = template("list5_template",{list: data.res_body.list});
                $("#tip_ul").prepend(html);
                //console.log(html);
            });

            //脚部护理
            $.getJSON('/mock/fot.json',function(data){
                const html = template("list6_template",{list: data.res_body.list});
                $("#fot_ul").prepend(html);
                //console.log(html);
            });
    });
 });
});
});

