function handleLiuYaoPanPai() {

    var form = document.getElementById("liuYaoHandShake");
    var reqResult = document.getElementById("liuyaoResult");

    //根据时间进行排八字
    var bzpp;
    if (gbUseNongLi) {
        //使用农历时间排盘
        bzpp = GetNNTimeBZPP();
    } else {
        //使用公历时间进行排盘
        bzpp = GetGGTimeBZPP();
    }
    console.log(bzpp)

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/liuyao-hand-calc", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            reqResult.innerHTML = xhr.responseText
        }
    };
    var formData = new FormData(form)
    formData.append('calendarType', gbUseNongLi)
    formData.append('yearNum', bzpp.myJD.Y)
    formData.append('monthNum', bzpp.myJD.M)
    formData.append('dayNum', bzpp.myJD.D)
    formData.append('hourNum', bzpp.myJD.h)
    formData.append('minuteNum', bzpp.myJD.m)

    formData.append('JDBirth', bzpp.myJD.m)
    formData.append('iRiJZ', bzpp.iRiJZ)
    formData.append('year', JiaZi[bzpp.iNianJZ])
    formData.append('month', JiaZi[bzpp.iYueJZ])
    formData.append('day', JiaZi[bzpp.iRiJZ])
    formData.append('hour', JiaZi[bzpp.iShiJZ])
    formData.append('dayNull', GetRiKongWang(bzpp.iRiJZ))

    formData.append('lunarCalendar', GetNNTimeStr(bzpp.JDBirth) )
    formData.append('gregorianCalendar', GetGGTimeStr(bzpp.JDBirth))
    console.log(formData.values())
    debugger;
    xhr.send(formData);
}