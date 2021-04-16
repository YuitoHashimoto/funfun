$(()=>{
    var _slide = $(".bgContent img");
    console.log(_slide);

    //次と前
    var _prev = $(".bgContent .prev");
    var _next = $(".bgContent .next");

    //今の写真番号
    var now_num=0 ;

    setInterval(() => {
        $(_slide[now_num]).css("animation","img_switch_off 0.6s ease-in-out forwards");
        now_num++;
        if(now_num>_slide.length-1){
            now_num=0 ;
        }
        $(_slide[now_num]).css("animation","img_switch_on 0.6s ease-in-out forwards");
    }, 6000);

    _prev.on("click",()=>{
        $(_slide[now_num]).css("animation","img_switch_off 0.6s ease-in-out forwards");
        now_num--;
        console.log(now_num);
        if(now_num<0){
            now_num = _slide.length-1 ;
        }
        $(_slide[now_num]).css("animation","img_switch_on 0.6s ease-in-out forwards");
    });

    _next.on("click",()=>{
        $(_slide[now_num]).css("animation","img_switch_off 0.6s ease-in-out forwards");
        now_num++;
        if(now_num>_slide.length-1){
            now_num = 0 ;
        }
        $(_slide[now_num]).css("animation","img_switch_on 0.6s ease-in-out forwards");
    });
});