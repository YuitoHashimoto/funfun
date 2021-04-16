$(()=>{
    
    //チャット窓の出るところ
    var _chart = $(".chart");
    var _chart_window = $(".chartWindow");

    _chart.on("click",(event)=>{
        _chart.css("display","none");
        _chart_window.css("animation","chartAniOpen 0.6s ease-in-out forwards");
        var _chart_prev = $(".chartWindow__chartPrev");
        _chart_prev.on("click",(event)=>{
            _chart.css("display","block");
            _chart_window.css("animation","chartAniClose 0.6s ease-in-out forwards");
        });
    });

    //メッセージ送信
    _chart_window.on("keydown",(event)=>{
        var keyCode = event.which ;
        if(keyCode == 13){
            var userWriteData = $(".userWriteData").val();
            _userWriteData=`<p><span class="mymess">${userWriteData}</span><img src="img/chart/userIconB.jpg"></p>`;
            $(".chartWindow__chartArea").append(_userWriteData);

            if(userWriteData == "こんにちは"){
                var teacherWriteData = "こんにちは。<br>何かお手伝いところありますか。";
                _teacherWriteData = `<p><img src="img/chart/userIconA.jpg"><span>${teacherWriteData}</span></p>`;
                setTimeout(() => {
                    $(".chartWindow__chartArea").append(_teacherWriteData);
                }, 1500);
            }
        }
    });
});