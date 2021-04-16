$(()=>{

    //カテゴリー　マップボタン
    var categoryBtn = $(".control .categoryTtl");
    var mapBtn = $(".control .mapTtl");

    //カテゴリー　マップエリア
    var categoryArea =$(".funMain__categorySearch__searchArea__category");
    var mapArea = $(".funMain__categorySearch__searchArea__map");


    mapBtn.on("click",()=>{
        categoryArea.css('display','none');
        categoryBtn.css('z-index','100');
        mapArea.css('display','block');
        mapBtn.css('z-index','200');
    });

    categoryBtn.on("click",()=>{
        categoryArea.css('display','block');
        mapBtn.css('z-index','100');
        mapArea.css('display','none');
        categoryBtn.css('z-index','200');
    });
});