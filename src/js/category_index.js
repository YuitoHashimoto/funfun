$(()=>{
    //体験一覧　カテゴリーの背景色
    var category = $(".categoryDate span,.categoryArea .name");
    console.log(category.text());

    for(let i=0;i<category.length;i++){
        if($(category[i]).text()=="アウトドア"){
            $(category[i]).css('background','#FF8896');
        }
        else if($(category[i]).text()=="自然"){
            $(category[i]).css('background','#7BEA9D');   
        }
        else if($(category[i]).text()=="工芸"){
            $(category[i]).css('background','#F73461');   
        }
        else if($(category[i]).text()=="職業体験"){
            $(category[i]).css('background','#D94428');   
        }
        else if($(category[i]).text()=="サイエンス"){
            $(category[i]).css('background','#D97BEA');   
        }
        else if($(category[i]).text()=="音楽"){
            $(category[i]).css('background','#E27430');   
        }
        else if($(category[i]).text()=="自然"){
            $(category[i]).css('background','#7BEA9D');   
        }
        else if($(category[i]).text()=="スポーツ"){
            $(category[i]).css('background','#7BAAEA');   
        }
        else if($(category[i]).text()=="料理"){
            $(category[i]).css('background','#F7A434');   
        }
        else if($(category[i]).text()=="自然体験"){
            $(category[i]).css('background','#7BAAEA');   
        }
    }
    // if(category.text())


    $(".funMain__category__categoryArea__experience").on("click",()=>{
        window.location.href="reservation.html";
    });
});