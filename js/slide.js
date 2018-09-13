$(function () {
    const $slides = $(".slide,.slide_hidden");
    let curpos = $slides.length / 2 - 1;
    $(".slide_prev").on("click",function (){
        curpos = prev_slide(1);
        switch_slide();
    });
    $(".slide_next").on("click",function (){
        curpos = next_slide(1);
        switch_slide();
    });
    function prev_slide(n){
        if ((curpos - n) >= 0){
            return curpos - n;
        }else{
            return ($slides.length + curpos - n);
        }
    }
    function next_slide(n){
        if ((curpos + n) < $slides.length){
            return curpos + n;
        }else{
            return (curpos + n - $slides.length);
        }
    }
    function switch_slide() {
        rm_class();
        let l2 = prev_slide(2);
        let l1 = prev_slide(1);
        let r1 = next_slide(1);
        let r2 = next_slide(2);
        $slides.each(function (i,$thisDiv){
            switch (i) {
                case l2:
                    $($thisDiv).toggleClass("slide_l2");
                    break;
                case l1:
                    $($thisDiv).toggleClass("slide_l1");
                    break;
                case curpos:
                    $($thisDiv).toggleClass("slide_m");
                    break;
                case r1:
                    $($thisDiv).toggleClass("slide_r1");
                    break;
                case r2:
                    $($thisDiv).toggleClass("slide_r2");
                    break;
            }
        })
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
