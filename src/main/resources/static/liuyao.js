//程序理论适用时间段 1583 年 到 3199 年，即格里高利历后一年到3200前一年，3200年是否为闰年待定。
//全局变量，把起始时间和结束时间改一下就可以更换排盘的年份范围，这里为最近的240年时间段。
var gStartYear = 1970;
var gEndYear = 2164;
//全局变量，保存出生地的经度、纬度
var gBirthJingDu = 120.0;  
var gBirthWeiDu = 38.0;
//当前是否使用农历时间
var gbUseNongLi = false;

//公历控件
var sGGYear = document.getElementById("sGGYear");
var sGGMonth = document.getElementById("sGGMonth");
var sGGDay = document.getElementById("sGGDay");
var sGGHour = document.getElementById("sGGHour");
var sGGMinute = document.getElementById("sGGMinute");

//农历控件
var sNNYear = document.getElementById("sNNYear");
//农历的月份、日子都是序号，从 0 开始计算
var sNNMonth = document.getElementById("sNNMonth");
var sNNDay = document.getElementById("sNNDay");
//小时是从 -1 到 22 点
var sNNHour = document.getElementById("sNNHour");
var sNNMinute = document.getElementById("sNNMinute");

/////////////////////////////////////////////////////////////////
//公历和农历控件切换
var rdTimeGG = document.getElementById("rdTimeGG");//公历单选按钮
var rdTimeNN = document.getElementById("rdTimeNN");//农历单选按钮
function OnGLNLChanged()
{
    if( rdTimeGG.checked )//使用公历
    {
        gbUseNongLi = false;
        //启用公历控件
        sGGYear.disabled = false;
        sGGMonth.disabled = false;
        sGGDay.disabled = false;
        sGGHour.disabled = false;
        sGGMinute.disabled = false;
        
        //禁用农历控件
        sNNYear.disabled = true;
        sNNMonth.disabled = true;
        sNNDay.disabled = true;
        sNNHour.disabled = true;
        sNNMinute.disabled = true;
    }
    else //使用农历
    {
        gbUseNongLi = true;
        //禁用公历控件
        sGGYear.disabled = true;
        sGGMonth.disabled = true;
        sGGDay.disabled = true;
        sGGHour.disabled = true;
        sGGMinute.disabled = true;
        
        //启用农历控件
        sNNYear.disabled = false;
        sNNMonth.disabled = false;
        sNNDay.disabled = false;
        sNNHour.disabled = false;
        sNNMinute.disabled = false;
    }
}


/////////////////////////////////////////////////////////////////
//公历时间动态更新
//function addOp(sel,value,text)  //给select对象加入option
//初始化用2000年12月12日
function InitGGYears()    //初始化时一次性调用
{
    //清空旧的选项
    sGGYear.length = 0; 
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        addOp(sGGYear, i, String(i) );
    }
    //默认选择2000年
    sGGYear.selectedIndex = 2000 - gStartYear;
}
//初始是2000年12月份
function InitGGDays() //初始化时一次性调用
{
    //清空旧的一个选项
    sGGDay.length = 0;
    //添加，2000年12月
    var nCount = 31;
    for(var i=1; i<=nCount; i++)
    {
        addOp(sGGDay, i, String(i) );
    }
    sGGDay.selectedIndex = 12 - 1 ;//12月12号
}

//公历平年每月天数
var gGLDaysInMonth = new Array
   (31, 28, 31, 30,
    31, 30, 31, 31,
    30, 31, 30, 31);
//根据公历年份、月份获知该月的天数 
function GetGLDaysCountByYearAndMonth(year, month)
{
    if(month != 2)
    {
        //不是2月，不管闰年
        return gGLDaysInMonth[month - 1];        
    };
    //下面是2月，判断是否闰月
    if( IsGLRunNian(year) )
    {
        return 29;
    }
    else
    {
        return 28;
    }
}//
//判断公历闰年，格里高利历
function IsGLRunNian(year)
{
    if( (year % 4) != 0 )
    {
        //非闰年
        return false;
    };
    //被4整除的
    if( (year % 100) == 0 )//被100整除
    {
        if( (year%400) == 0 )//被400整除
        {
            return true;
        }
        else//不被400整除
        {
            return false;
        }
    }
    else//不被100整除，被4整除
    {
        return true;
    }
}

//根据年份变化，考虑是否更新日期
function OnGGYearChanged()
{
    //年份变化只影响2月
    var curYear = sGGYear.value;
    var curMonth = sGGMonth.value;
    if(curMonth != 2)
    {
        return; //不是2月
    }
    //是2月
    var oldDaysCount = sGGDay.length;
    var newDaysCount = GetGLDaysCountByYearAndMonth(curYear, curMonth);
    if( oldDaysCount == newDaysCount )
    {
        //旧的天数和新的天数没变，不需要改动
        return;
    }
    //天数有变化
    if( oldDaysCount > newDaysCount )//旧的是29天，新的是28天
    {
        sGGDay.remove(29 - 1);    //移除末尾的29号
    }
    else//旧的28天，新的29天
    {        
        addOp(sGGDay, 29, "29" );//数字29是value， "29" 是text
    }
}
//根据月份变化，考虑是否更新日期
function OnGGMonthChanged()
{
    var curYear = sGGYear.value;
    var curMonth = sGGMonth.value;
    //根据年月设置天数
    //旧的天数，全部移除掉
    var oldCount = sGGDay.length;
    var newCount =  GetGLDaysCountByYearAndMonth(curYear, curMonth);
    //如果天数一样不用变化
    if( oldCount == newCount )
    {
        return;
    }
    //新旧天数不一样，多退少补
    if( oldCount > newCount )
    {
        //多了的删掉
        for(var i=oldCount; i>newCount; i--)
        {
            sGGDay.remove( i-1 );
        }
    }
    else
    {
        //少了补齐
        for(var i=oldCount+1; i<=newCount; i++)
        {
            addOp(sGGDay, i, String(i) );
        }
    }
}

/////////////////////////////////////////////////////////////////
//农历时间动态更新，农历的月份、日子都用序号
//当前农历年
var gCurNLYear = 2000;  //保存当前的农历年份
var gCurNongLiYueBiao; //保存当前的农历月表
//公历2000年 12 月 12 号，对应农历 十一月大 十七
function InitNNYears() //填写年份和甲子名称
{
    sNNYear.length = 0;   //清空旧列表
    var strTemp = "";
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        strTemp = String(i) + JiaZi[ GetNianJiaZiShu(i) ];
        addOp(sNNYear, i, strTemp);
    }
    sNNYear.selectedIndex = 2000 - gStartYear;
    //初始化
    gCurNLYear = 2000;
    gCurNongLiYueBiao = GetNongLiYueBiao( gCurNLYear );
    //更新月份
    sNNMonth.length = 0;  //清空旧列表
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sNNMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    //设置农历十一月，2000年农历不闰月
    sNNMonth.selectedIndex = 11 - 1 ; //农历十一月
}

function InitNNDays()     //加载日子，初始时2000年十一月大，三十天
{
    sNNDay.length = 0;    //清除旧的列表
    //addOp(sel,value,text)
    for(var i=0; i<30; i++)
    {
        addOp(sNNDay, i, NLDayName[i]);
    }
    sNNDay.selectedIndex = 17 - 1 ; //农历十七
}
//年份变化，更新月份、日子，全部变化
function OnNNYearChanged()
{
    gCurNLYear = Number( sNNYear.options[ sNNYear.selectedIndex ].value );
    gCurNongLiYueBiao =  GetNongLiYueBiao( gCurNLYear );
    //清空旧的月份列表
    sNNMonth.length = 0;
    //添加新的
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sNNMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    sNNMonth.selectedIndex = 0;
    OnNNMonthChanged(); //月份带动日子列表变化
}
//月份变化，更新日子，29天或30天，多退少补
function OnNNMonthChanged()
{
    //旧的计数
    var oldCount = sNNDay.length;
    //新的计数
    var newCount =  gCurNongLiYueBiao.arrayDaysCount[ sNNMonth.selectedIndex ];
    //如果新旧相等
    if( oldCount == newCount )
    {
        return;
    }
    //如果不相等
    if( 29 < newCount ) //旧的29天，新的30天
    {
        addOp(sNNDay, 30-1, NLDayName[30-1]); //加上 三十
        return;
    };
    if( oldCount > 29 )//旧的30天，新的29天
    {
        sNNDay.remove( 30-1 );//去掉多的
        return;
    } 
}

//////////////////////
//出生年份
var sShengNian = document.getElementById("sShengNian");
function InitChuShengNianFen()
{
    //清空旧的选项
    sShengNian.length = 0; 
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        addOp(sShengNian, i, String(i) + JiaZi[ GetNianJiaZiShu(i) ] );
    }
    //默认选择1990年
    sShengNian.selectedIndex = 1990 - gStartYear;
}
///////////////////////
 function FillCurTime() //自动填充当前时间，公历的更新。农历一般只用于出生时间起终身卦，其他不用。
 {
    var curTime = new Date();
    var year = curTime.getFullYear();
    var month = curTime.getMonth(); //JS月份是0到11
    var day = curTime.getDate();    //getDate是日子，getDay是星期几
    var hour = curTime.getHours();
    var minute = curTime.getMinutes();
    //设置控件
    sGGYear.selectedIndex = year - gStartYear;
    //年份变化
    OnGGYearChanged();    
    sGGMonth.selectedIndex = month;
    //月份变化
    OnGGMonthChanged();
    //设置日子和小时
    sGGDay.selectedIndex = day - 1;
    sGGHour.selectedIndex = hour;
    sGGMinute.selectedIndex = minute;
 }
/////////////////////////////////////////////////////////////////
//整个排盘文本
var AllText = document.getElementById("AllText");
//排盘
function CalcLiuYaoPanPai()
{
    //根据时间进行排八字
    var bzpp;
    if(gbUseNongLi)
    {
        //使用农历时间排盘
        bzpp = GetNNTimeBZPP();
    }
    else
    {
        //使用公历时间进行排盘
        bzpp = GetGGTimeBZPP();
    }
    //生成基本的六爻对象，阴阳数组、动静数组，从下往上，序号0到5
    var lyBasic = GetLiuYaoBasicObjectSGYG();//手工摇卦
    //填充起卦占事、性别、出生年份
    lyBasic.strZhanShi = document.getElementById("tZhanShi").value;
    lyBasic.strGender = document.getElementById("sGender").value;
    lyBasic.strShengNian = sShengNian.options[sShengNian.selectedIndex].text;
    //起卦方式
    lyBasic.strQiGuaFangShi = "手工钱币摇卦";//手工摇卦
    
    //根据八字对象、六爻基本对象，生成完整六爻对象
    var lypp = GenFullLiuYaoPaiPan(bzpp, lyBasic);
    //生成排盘字符串    
    if( lypp.bQuanJingGua )
    {
        //全静卦
        AllText.innerHTML = GetLiuYaoHTMLQuanJingGua(bzpp, lypp);
        //AllText.innerHTML = Get64GuaHTML();//64卦一览
    }
    else
    {
        //正常本卦和变卦排版
        AllText.innerHTML = GetLiuYaoHTML(bzpp, lypp);
    }
    
    //执行自动复制到剪贴板，IE9和Chrome支持，火狐测试不行。
    document.execCommand("selectAll");  //全选
    document.execCommand("copy");       //复制
    document.execCommand("unselect");   //不选中 
}

//公历时间排盘
function GetGGTimeBZPP()
{    
    var myJD = JD;
    myJD.Y = Number(sGGYear.value);
    myJD.M = Number(sGGMonth.value);
    myJD.D = Number(sGGDay.value);
    myJD.h = Number(sGGHour.value);
    myJD.m = Number(sGGMinute.value);
    myJD.s = 30;  //默认是30秒的排盘
    //儒略日
    var birthTime = myJD.toJD();
    var bzpp =  CalcBaZiObject(birthTime, "男", 120, 0);//男女排盘没区别，只要四柱
    return bzpp;
}

//农历时间排盘
function GetNNTimeBZPP()
{
    //提取农历时间信息
   var ixYue = Number( sNNMonth.selectedIndex ); //月序
   var ixRi = Number( sNNDay.selectedIndex );    //日序
   var hh = Number( sNNHour.options[ sNNHour.selectedIndex ].value );//小时 -1 到 22
   var mm = Number( sNNMinute.selectedIndex ); //分钟 0 到 59
   var ss = 30;  //默认按30秒
   //计算儒略日
   var birthTime = NongLiDayToJD(gCurNongLiYueBiao, ixYue, ixRi, hh, mm, ss);
   var bzpp =  CalcBaZiObject(birthTime, "男", 120, 0);//男女排盘没区别，只要四柱
   return bzpp;
}

//lyBasic.arrYinYang 阴阳数组6个元素
//lyBasic.arrDongJing 动静数组6个元素
//        手工爻的数组，少阴0，少阳1，老阴2，老阳3
//lyBasic.arrShouGongYao 6个元素
//根据手动摇的六次，生成基本六爻对象
 function GetLiuYaoBasicObjectSGYG()
 {
    //基本对象
    var lyBasic = new Object();
    //阴阳数组
    lyBasic.arrYinYang = new Array(6);
    //动静数组
    lyBasic.arrDongJing = new Array(6);
    //手工爻的数组，少阴0，少阳1，老阴2，老阳3
    lyBasic.arrShouGongYao = new Array(6);
    //初始化为0
    for(var i=0; i<6; i++)
    {
        lyBasic.arrYinYang[i] = 0;
        lyBasic.arrDongJing[i] = 0;
        lyBasic.arrShouGongYao[i] = 0;
    }
    //获取6个手工爻
    lyBasic.arrShouGongYao[0] = document.getElementById("sLY1").value ;
    lyBasic.arrShouGongYao[1] = document.getElementById("sLY2").value ;
    lyBasic.arrShouGongYao[2] = document.getElementById("sLY3").value ;
    lyBasic.arrShouGongYao[3] = document.getElementById("sLY4").value ;
    lyBasic.arrShouGongYao[4] = document.getElementById("sLY5").value ;
    lyBasic.arrShouGongYao[5] = document.getElementById("sLY6").value ;
    //手工爻生成阴阳数组、动静数组
    for(var i=0; i<6; i++)
    {
        //0是阴，1是阳
        lyBasic.arrYinYang[i] = lyBasic.arrShouGongYao[i] % 2;
        lyBasic.arrDongJing[i] = Math.floor(lyBasic.arrShouGongYao[i] / 2);
    }
    //返回
     return lyBasic;
 }
 
 