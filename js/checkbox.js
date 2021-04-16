$(()=>{
 
    var agreement = $(".agreement label");

    agreement.on("click",(event)=>{
        console.log($(event.target).text());
        if($(event.target).text()==""){
            $(event.target).text("✔︎");
            $(event.target).parent().children('input').val(1);
        }else{
            $(event.target).text("");
            $(event.target).parent().children('input').val(0);
        }
    });

});