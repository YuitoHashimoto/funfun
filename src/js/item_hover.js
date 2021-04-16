$(()=>{
    //３ステップ
    var _step = $(".funMain__howtouse__stepArea__useStep");
    var _step_child = $(".stepNum,.categoryPhoto,.userConBtn img,.funMain__howtouse__stepArea__useStep>img,.stepName,.stepDesc");

    _step
    .on('mouseenter',(event)=>{
        console.log(event.target);
        $(event.target).removeClass("item_hover_out");
        $(event.target).addClass("item_hover_in");
    })
    .on('mouseout',(event)=>{
        console.log(event.target);
        $(event.target).removeClass("item_hover_in");
        $(event.target).addClass("item_hover_out");
    });

    _step_child
    .on('mouseenter',(event)=>{
        $(event.target).parent().removeClass("item_hover_out");
        $(event.target).parent().addClass("item_hover_in");
    }).on('mouseout',(event)=>{
        $(event.target).parent().removeClass("item_hover_in");
        $(event.target).parent().addClass("item_hover_out");
    });


    $(".searchSpace").on("change",()=>{
        console.log("aaa");
    });
});