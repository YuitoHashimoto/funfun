$(()=>{
    var _area = $(".areaPref");
    _area.on("change",(event)=>{
        var _area_num = $(event.target).val();
        console.log(_area_num);

        $.ajax({
            url :'http://www.land.mlit.go.jp/webland/api/CitySearch',
            method: 'GET',
            data:{
                area: _area_num
            },
            dataType : 'json',
            timeout: 3000
        })
        .done((response)=>{
            console.log(response["data"]);
            var _city = response["data"] ;
            $(".cityArea").html("<option vlaue='====' selected=''>====</option>");
            
            if(_area_num!=13){
                console.log(_area_num);
                for(let i=0;i<_city.length;i++){
                    if(!(_city[i]["name"].match(/区$/))){
                        var _city_select = `<option value='${_city[i]["name"]}'>${_city[i]["name"]}</option>`;
                        $(".cityArea").append(_city_select);
                    }
                }
            }else{
                for(let i=0;i<_city.length;i++){
                    var _city_select = `<option value='${_city[i]["name"]}'>${_city[i]["name"]}</option>`;
                    $(".cityArea").append(_city_select);
                }
            }
        })
        .fail((error)=>{
            console.log(error);
        });

    });
});