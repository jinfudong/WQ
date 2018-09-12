$().ready(function () {
    var $slides = $(".slide,.slide_hidden");
    var curpos = $slides.length / 2 - 1;
    $(".slide_prev").bind("click",function (){
        if ((curpos - 1) >= 0){
            curpos--;
        }else{
        	curpos = $slides.length - 1;
        }
        switch_slide(curpos);
    });
    $(".slide_next").bind("click",function (){
        if ((curpos + 1) < $slides.length){
            curpos++;
        }else{
        	curpos = 0;
        }
        switch_slide(curpos);
    });
    function switch_slide(index) {
        if (index === 0){
            rm_class();
            $($slides.get(index)).toggleClass("slide_m");
            $($slides.get(index + 1)).toggleClass("slide_r1");
            $($slides.get(index + 2)).toggleClass("slide_r2");
            $($slides.get($slides.length - 1)).toggleClass("slide_l1");
            $($slides.get($slides.length - 2)).toggleClass("slide_l2");
        }else if(index === 1){
            rm_class();
            $($slides.get(index)).toggleClass("slide_m");
            $($slides.get(index + 1)).toggleClass("slide_r1");
            $($slides.get(index + 2)).toggleClass("slide_r2");
            $($slides.get(index - 1)).toggleClass("slide_l1");
            $($slides.get($slides.length - 1)).toggleClass("slide_l2");
        }else if(index === ($slides.length - 2)){
            rm_class();
            $($slides.get(index)).toggleClass("slide_m");
            $($slides.get(index + 1)).toggleClass("slide_r1");
            $($slides.get(0)).toggleClass("slide_r2");
            $($slides.get(index - 1)).toggleClass("slide_l1");
            $($slides.get(index - 2)).toggleClass("slide_l2");
        }else if(index === ($slides.length - 1)){
            rm_class();
            $($slides.get(index)).toggleClass("slide_m");
            $($slides.get(0)).toggleClass("slide_r1");
            $($slides.get(1)).toggleClass("slide_r2");
            $($slides.get(index - 1)).toggleClass("slide_l1");
            $($slides.get(index - 2)).toggleClass("slide_l2");
        }else{
            rm_class();
            $($slides.get(index)).addClass("slide_m");
            $($slides.get(index + 1)).addClass("slide_r1");
            $($slides.get(index + 2)).addClass("slide_r2");
            $($slides.get(index - 1)).addClass("slide_l1");
            $($slides.get(index - 2)).addClass("slide_l2");
        }
    }
    function rm_class(){
        $(".slide_l2").toggleClass("slide_l2");
        $(".slide_l1").toggleClass("slide_l1");
        $(".slide_m").toggleClass("slide_m");
        $(".slide_r1").toggleClass("slide_r1");
        $(".slide_r2").toggleClass("slide_r2");
    }
    window.setInterval(function (){
        if ((curpos + 1) < $slides.length){
            curpos++;
        }else{
        	curpos = 0;
        }
        switch_slide(curpos);}
        ,2000);
});
