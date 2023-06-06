<html>
<head>
    <title>index</title>
</head>
<body>


<style>
    .table {
        display: table;
    }

    .table-row {
        display: table-row;
    }

    .table-cell {
        display: table-cell;
        padding: 7px;
        border: 0px solid black;
    }
</style>

<div>

</div>

<hr>

<div class="table">

    <div class="table-row">
        <span class="table-cell">占事分类：</span>
        <span class="table-cell">${yaoRequest.askInfoType}</span>
    </div>
    <div class="table-row">
        <span class="table-cell">所占事情：</span>
        <span class="table-cell">${yaoRequest.askInfo}</span>
    </div>
    <div class="table-row">
        <span class="table-cell">起卦方式</span>
        <span class="table-cell">手工钱币摇卦</span>
    </div>
    <div class="table-row">
        <span class="table-cell">公历时间：</span>
        <span class="table-cell">${yaoRequest.gregorianCalendar}</span>
    </div>
    <div class="table-row">
        <span class="table-cell">农历时间：</span>
        <span class="table-cell">${yaoRequest.lunarCalendar}</span>
    </div>
    <div class="table-row">
        <span class="table-cell"> 干支：</span>
        <span class="table-cell"><b><span style="color: blue">${YaoGuaInfo.year!""}</span></b>年<b>
                <span style="color: fuchsia">${YaoGuaInfo.month!""}</span></b>月<b>
                <span style="color: fuchsia">${YaoGuaInfo.day!""}</span></b>日<b>
                ${YaoGuaInfo.hour!""}</b>时 <b>
                <span style="color: fuchsia">${YaoGuaInfo.dayNull!""}</span></b><br><br>
        </span>
    </div>
</div>

<div class="table">
    <div class="table-row">
        <span class="table-cell"></span>
        <span class="table-cell"></span>
        <span class="table-cell" style="color: fuchsia">${YaoGuaInfo.main.name}</span>
        <span class="table-cell">（${YaoGuaInfo.main.desc}）</span>
        <span class="table-cell"></span>
        <span class="table-cell">之</span>
        <span class="table-cell"></span>
        <span class="table-cell" style="color: fuchsia">${YaoGuaInfo.bian.name}</span>
        <span class="table-cell">（${YaoGuaInfo.bian.desc}）</span>
    </div>
    <div class="table-row">
        <span class="table-cell"> 六  神 </span>
        <span class="table-cell">&emsp;伏　神 </span>
        <span class="table-cell">${YaoGuaInfo.main.belong}</span>
        <span class="table-cell"></span>
        <span class="table-cell"></span>
        <span class="table-cell"></span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.belong}</span>
        <span class="table-cell"></span>
    </div>
    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.sixYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.sixYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.sixYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.sixYao.sixQinInfo!""}${YaoGuaInfo.main.sixYao.branchInfo!""}${YaoGuaInfo.main.sixYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.sixYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.sixYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.sixYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.sixYao.sixQinInfo!""}${YaoGuaInfo.bian.sixYao.branchInfo!""}${YaoGuaInfo.bian.sixYao.branchFiveProperty!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.sixYao.shiYing!""}</span>
    </div>

    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.fiveYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.fiveYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.fiveYao.yaoIcon!""}</span>

        <span class="table-cell">${YaoGuaInfo.main.fiveYao.sixQinInfo!""}${YaoGuaInfo.main.fiveYao.branchInfo!""}${YaoGuaInfo.main.fiveYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.fiveYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.fiveYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.fiveYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.fiveYao.sixQinInfo!""}${YaoGuaInfo.bian.fiveYao.branchInfo!""}${YaoGuaInfo.bian.fiveYao.branchFiveProperty!""}　</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.fiveYao.shiYing!""}</span>
    </div>

    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.fourYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.fourYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.fourYao.yaoIcon!""}</span>

        <span class="table-cell">${YaoGuaInfo.main.fourYao.sixQinInfo!""}${YaoGuaInfo.main.fourYao.branchInfo!""}${YaoGuaInfo.main.fourYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.fourYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.fourYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.fourYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.fourYao.sixQinInfo!""}${YaoGuaInfo.bian.fourYao.branchInfo!""}${YaoGuaInfo.bian.fourYao.branchFiveProperty!""}　</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.fourYao.shiYing!""}</span>
    </div>

    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.threeYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.threeYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.threeYao.yaoIcon!""}</span>

        <span class="table-cell">${YaoGuaInfo.main.threeYao.sixQinInfo!""}${YaoGuaInfo.main.threeYao.branchInfo!""}${YaoGuaInfo.main.threeYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.threeYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.threeYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.threeYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.threeYao.sixQinInfo!""}${YaoGuaInfo.bian.threeYao.branchInfo!""}${YaoGuaInfo.bian.threeYao.branchFiveProperty!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.threeYao.shiYing!""}</span>
    </div>

    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.twoYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.twoYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.twoYao.yaoIcon!""}</span>

        <span class="table-cell">${YaoGuaInfo.main.twoYao.sixQinInfo!""}${YaoGuaInfo.main.twoYao.branchInfo!""}${YaoGuaInfo.main.twoYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.twoYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.twoYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.twoYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.twoYao.sixQinInfo!""}${YaoGuaInfo.bian.twoYao.branchInfo!""}${YaoGuaInfo.bian.twoYao.branchFiveProperty!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.twoYao.shiYing!""}</span>
    </div>

    <div class="table-row">
        <span class="table-cell">${YaoGuaInfo.main.oneYao.sixGodBeast!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.oneYao.fuShen!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.oneYao.yaoIcon!""}</span>

        <span class="table-cell">${YaoGuaInfo.main.oneYao.sixQinInfo!""}${YaoGuaInfo.main.oneYao.branchInfo!""}${YaoGuaInfo.main.oneYao.branchFiveProperty!""}　</span>
        <span class="table-cell">${YaoGuaInfo.main.oneYao.launch!""}</span>
        <span class="table-cell">${YaoGuaInfo.main.oneYao.shiYing!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.oneYao.yaoIcon!""}</span>
        <span class="table-cell">${YaoGuaInfo.bian.oneYao.sixQinInfo!""}${YaoGuaInfo.bian.oneYao.branchInfo!""}${YaoGuaInfo.bian.oneYao.branchFiveProperty!""}</span>
        <span class="table-cell"></span>
        <span class="table-cell">${YaoGuaInfo.bian.oneYao.shiYing!""}</span>
    </div>

</div>
<hr>
<div>

</div>

</body>
</html>