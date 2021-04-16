$(()=>{
    //保護者情報の次へボタン
    var parentMessNext = $(".registerArea__registerBox__button");

    //子供情報の次へ
    var childMessNext = $(".childRegisterArea__registerBox__button");

    //登録確定ボタン
    var confirmComplete = $(".registerAll__button__correction");

    //修正ボタン
    var correction  = $(".registerAll__button__confirm");
 
    //保護者情報のエリア
    var parentArea = $(".registerArea");

    //子供情報のエリア
    var childArea = $(".childRegisterArea");
    console.log(childArea);

    //確認するエリア
    var allArea = $(".registerAll");

    //フッターエリア
    var footerArea = $(".footer");

    //登録完了ポップ
    var confirmArea = $(".registerFlex");

    //保護者情報取得
    var parentData = $(".userName,.userAddress,.userPassword,.userConPassword,.prefName,.cityName")
    //var parentData = $(".registerForm__input input");
    var name = $(".userName");
    var address = $(".userAddress");
    var password = $(".userPassword");
    var conPassword = $(".userConPassword");
    var prefName = $(".prefName");
    var cityName = $(".cityName");
    var agreement = $(".userAgreement");
    var check_address = new RegExp(/^(\w+\.\w+)|\w+\@\w+\.\w+/);



    parentMessNext.on("click",()=>{
        for(let i=0;i<parentData.length-1;i++){
            console.log($(parentData[i]).val());
            if($(parentData[i]).val() == ""){
                event.preventDefault();
                alert("項目がが未入力です。");
                return false ;
            }
        }

        if(check_address.test(address.val())==false){
            event.preventDefault();
            alert("メールアドレスの入力形式が違います。")
            return false ;
        }

        if(password.val() !== conPassword.val()){
            event.preventDefault();
            alert("確認パスワードが一致しません。")
            return false ;
        }

        var passwordCount = password.val();
        passwordCount = passwordCount.length;

        if( passwordCount < 6 ){
            event.preventDefault();
            alert("パスワードは6文字以上入力してください。");
            return false ;
        }

        if(agreement.val() == "0"){
            event.preventDefault();
            alert("利用規約を確認して、同意してください。");
            return false ;
        }
        parentArea.css("display","none");
        childArea.css("display","block");
        
    });

    childMessNext.on("click",()=>{
        //子供情報取得
        var cData = $(".cName,.cRuby,.cDate");
        var cName = $(".cName");
        var cRuby = $(".cRuby");
        var cSex = $(".sexSelect input[name='sex']:checked").val();
        var cDate = $(".cDate");
        var cNotes = $(".cNotes");
        console.log(cSex);
        for(let i=0;i<cData.length;i++){
            console.log(cData[i]);
            if($(cData[i]).val() == ""){
                event.preventDefault();
                alert("項目がが未入力です。");
                return false ;
            }
        }




        childArea.css("display","none");
        allArea.css("display","block");
        footerArea.css("display","none");

        //保護者情報セット
        $(".registerCon__content__text .name span").text(name.val());
        $(".registerCon__content__text .id span").text(address.val());
        $(".registerCon__content__text .password span").text(password.val());
        $(".registerCon__content__text .stAddress span").text(prefName.val()+"　"+cityName.val());


        var cSexData ;
        if(cSex == 1){
            cSexData = "男の子";
            }
            else{
                cSexData = "女の子";
            }

        //子供情報セット
        $(".childRegisterCon__content__text .childName span").text(cName.val());
        $(".childRegisterCon__content__text .childRuby span").text(cRuby.val());
        $(".childRegisterCon__content__text .childSex span").text(cSexData);
        $(".childRegisterCon__content__text .childAge span").text(cDate.val());

        // //$(".childRegisterCon__content__text .childAge span").text(jsDate.getFullYear()+"年"+jsDate.getMonth()+"月"+jsDate.getDate()+"日");
        // var jsDate = $(cDate).datepicker('getDate');
        // if(jsDate !== null){
        //     jsDate instanceof Date ;
        //     console.log(jsDate);
        //     // jsDate.getDate();
        //     // jsDate.getMonth();
        //     // jsDate.getFullYear();
        //     $(".childRegisterCon__content__text .childAge span").text(jsDate.getFullYear()+"年"+jsDate.getMonth()+"月"+jsDate.getDate()+"日");
        // }

    });

    confirmComplete.on("click",()=>{
        confirmArea.css("display","flex");
    });

    correction.on("click",()=>{
        console.log("aaa");
        allArea.css("display","none");
        parentArea.css("display","block");

    });

});