$(()=>{
    var _zipcodebtn = $(".zipcodeBtn");
    _zipcodebtn.on("click",(event)=>{
        var _zipcode_num = $(".zipcode").val();
        console.log(_zipcode_num);
        console.log("aaa");
        $.ajax({
            url :'https://api.zipaddress.net/',
            method: 'GET',
            data:{
                zipcode: _zipcode_num
            },
            // dataType : 'json',
            timeout: 3000
        })
        .done((response)=>{
            console.log(response["data"]);
            
            var pref_name = $(".prefName");

            console.log(pref_name)
            var city_name = $(".cityName");

            _pref = response["data"]["pref"];
            _city = response["data"]["city"];
            console.log(_city);
            pref_name.val(_pref);
            city_name.val(_city);

        })
        .fail((error)=>{
            console.log(error);
        });

    });
});