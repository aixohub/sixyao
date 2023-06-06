//程序理论适用时间段 1583 年 到 3199 年，即格里高利历后一年到3200前一年，3200年是否为闰年待定。

//十天干
var TianGan = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//十二地支
var DiZhi = new Array(
        "子",
        "丑",
        "寅",
        "卯",
        "辰",
        "巳",
        "午",
        "未",
        "申",
        "酉",
        "戌",
        "亥"    
        );
//地支藏干表 0是甲，，，，9是癸
var DiZhiCangGan =
[//本气放第一个，中气余气后两个，没有的写成 -1
    [9, -1, -1],  //子藏癸
    [5,  9,  7],  //丑藏己癸辛
    [0,  2,  4],  //寅藏甲丙戊
    [1, -1, -1],  //卯藏乙
    [4,  1,  9],  //辰藏戊乙癸
    [2,  6,  4],  //巳藏丙庚戊
    [3,  5, -1],  //午藏丁己
    [5,  3,  1],  //未藏己丁乙
    [6,  8,  4],  //申藏庚壬戊
    [7, -1, -1],  //酉藏辛
    [4,  7,  3],  //戌藏戊辛丁
    [8,  0, -1]   //亥藏壬甲
];
//地支生肖表
var DZShengXiao =
[
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪"
];
//天干五合直接用数字计算甲木0，己土5，数字加5就是干合
//地支六合，没有数字规律
//子0 丑1 寅2 卯3 辰4 巳5
//午6 未7 申8 酉9 戌10 亥11
var DZLiuHe = 
[
    1, //子0 丑1 合
    0, //丑1 子0 合
    11,//寅2 亥11合
    10,//卯3 戌10合
    9, //辰4 酉9 合
    8, //巳5 申8 合
    7, //午6 未7 合
    6, //未7 午6 合
    5, //申8 巳5 合
    4, //酉9 辰4 合
    3, //戌10 卯3 合
    2  //亥11 寅2 合
];

//五行列表
var WuXing = new Array(
        "木",  //0
        "火",  //1
        "土",  //2
        "金",  //3
        "水"   //4
        );
//五行方位
var WXFangWei  = new Array
(
    "东",
    "南",
    "中央",
    "西",
    "北"
);
//60甲子
var JiaZi  = new Array(
"甲子",
"乙丑",
"丙寅",
"丁卯",
"戊辰",
"己巳",
"庚午",
"辛未",
"壬申",
"癸酉",
"甲戌",
"乙亥",
"丙子",
"丁丑",
"戊寅",
"己卯",
"庚辰",
"辛巳",
"壬午",
"癸未",
"甲申",
"乙酉",
"丙戌",
"丁亥",
"戊子",
"己丑",
"庚寅",
"辛卯",
"壬辰",
"癸巳",
"甲午",
"乙未",
"丙申",
"丁酉",
"戊戌",
"己亥",
"庚子",
"辛丑",
"壬寅",
"癸卯",
"甲辰",
"乙巳",
"丙午",
"丁未",
"戊申",
"己酉",
"庚戌",
"辛亥",
"壬子",
"癸丑",
"甲寅",
"乙卯",
"丙辰",
"丁巳",
"戊午",
"己未",
"庚申",
"辛酉",
"壬戌",
"癸亥"
 );
 //纳音
 var NaYin = new Array(
"海中金",//甲子
"海中金",//乙丑
"炉中火",//丙寅
"炉中火",//丁卯
"大林木",//戊辰
"大林木",//己巳
"路旁土",//庚午
"路旁土",//辛未
"剑风金",//壬申
"剑风金",//癸酉
"山头火",//甲戌
"山头火",//乙亥
"洞下水",//丙子
"洞下水",//丁丑
"城墙土",//戊寅
"城墙土",//己卯
"白腊金",//庚辰
"白腊金",//辛巳
"杨柳木",//壬午
"杨柳木",//癸未
"泉中水",//甲申
"泉中水",//乙酉
"屋上土",//丙戌
"屋上土",//丁亥
"霹雷火",//戊子
"霹雷火",//己丑
"松柏木",//庚寅
"松柏木",//辛卯
"长流水",//壬辰
"长流水",//癸巳
"沙中金",//甲午
"沙中金",//乙未
"山下火",//丙申
"山下火",//丁酉
"平地木",//戊戌
"平地木",//己亥
"壁上土",//庚子
"壁上土",//辛丑
"金箔金",//壬寅
"金箔金",//癸卯
"覆灯火",//甲辰
"覆灯火",//乙巳
"天河水",//丙午
"天河水",//丁未
"大泽土",//戊申
"大泽土",//己酉
"钗钏金",//庚戌
"钗钏金",//辛亥
"桑松木",//壬子
"桑松木",//癸丑
"大溪水",//甲寅
"大溪水",//乙卯
"沙中土",//丙辰
"沙中土",//丁巳
"天上火",//戊午
"天上火",//己未
"石榴木",//庚申
"石榴木",//辛酉
"大海水",//壬戌
"大海水" //癸亥
);
//纳音吉凶方位，0是吉位，1是凶位
var NYJXFangWei = 
[
    ["西"  , "南（含偏位）"],//甲子
    ["西北", "南（含偏位）"],//乙丑
    ["中央", "北（含偏位）"],//丙寅
    ["东"  , "北（含偏位）"],//丁卯
    ["北"  , "西（含偏位）"],//戊辰
    ["东北", "西（含偏位）"],//己巳
    ["中央", "东（含偏位）"],//庚午
    ["中央", "东（含偏位）"],//辛未
    ["中央", "南（含偏位）"],//壬申
    ["西"  , "南（含偏位）"],//癸酉
    ["东"  , "北（含偏位）"],//甲戌
    ["中央", "北（含偏位）"],//乙亥
    ["西"  , "中央"],//丙子
    ["西北", "中央"],//丁丑
    ["南"  , "东（含偏位）"],//戊寅
    ["中央", "东（含偏位）"],//己卯
    ["中央", "南（含偏位）"],//庚辰
    ["中央", "南（含偏位）"],//辛巳
    ["北"  , "西（含偏位）"],//壬午
    ["东北", "西（含偏位）"],//癸未
    ["西"  , "中央"],//甲申
    ["西北", "中央"],//乙酉
    ["南"  , "东（含偏位）"],//丙戌
    ["中央", "东（含偏位）"],//丁亥
    ["南"  , "北（含偏位）"],//戊子
    ["东南", "北（含偏位）"],//己丑
    ["北"  , "西（含偏位）"],//庚寅
    ["东北", "西（含偏位）"],//辛卯
    ["西"  , "中央"],//壬辰
    ["西北", "中央"],//癸巳
    ["中央", "南（含偏位）"],//甲午
    ["中央", "南（含偏位）"],//乙未
    ["东"  , "北（含偏位）"],//丙申
    ["中央", "北（含偏位）"],//丁酉
    ["北"  , "西（含偏位）"],//戊戌
    ["东北", "西（含偏位）"],//己亥
    ["南"  , "东（含偏位）"],//庚子
    ["南"  , "东（含偏位）"],//辛丑
    ["西"  , "南（含偏位）"],//壬寅
    ["中央", "南（含偏位）"],//癸卯
    ["东"  , "北（含偏位）"],//甲辰
    ["中央", "北（含偏位）"],//乙巳
    ["西"  , "中央"],//丙午
    ["西"  , "中央"],//丁未
    ["南"  , "东（含偏位）"],//戊申
    ["南"  , "东（含偏位）"],//己酉
    ["中央", "南（含偏位）"],//庚戌
    ["中央", "南（含偏位）"],//辛亥
    ["北"  , "西（含偏位）"],//壬子
    ["东北", "西（含偏位）"],//癸丑
    ["西"  , "中央"],//甲寅
    ["西北", "中央"],//乙卯
    ["南"  , "东（含偏位）"],//丙辰
    ["中央", "东（含偏位）"],//丁巳
    ["中央", "北（含偏位）"],//戊午
    ["中央", "北（含偏位）"],//己未
    ["东"  , "西（含偏位）"],//庚申
    ["东北", "西（含偏位）"],//辛酉
    ["东"  , "中央"],//壬戌
    ["东"  , "中央"]//癸亥
];

//甲乙丙丁戊己庚辛壬癸
//纳音五行属性：木=0；火=1；土=2；金=3；水=4。
//30个纳音五行
var NaYinWuXing  = new Array
(	
    3,	//海中金
    1,	//炉中火
    0,	//大林木
    2,	//路旁土
    3,	//剑风金
    1,	//山头火
    4,	//洞下水
    2,	//城墙土
    3,	//白腊金
    0,	//杨柳木
    4,	//泉中水
    2,	//屋上土
    1,	//霹雷火
    0,	//松柏木
    4,	//长流水

    3,	//沙中金
    1,	//山下火
    0,	//平地木
    2,	//壁上土
    3,	//金箔金
    1,	//覆灯火
    4,	//天河水
    2,	//大泽土
    3,	//钗钏金
    0,	//桑松木
    4,	//大溪水
    2,	//沙中土
    1,	//天上火
    0,	//石榴木
    4	//大海水
);

//农历月名
var NLMonthName =
[
    "正",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
];
var NLRunYue ="闰";
//农历日子名称
var NLDayName =
[
    "初一",
    "初二",
    "初三",
    "初四",
    "初五",
    "初六",
    "初七",
    "初八",
    "初九",
    "初十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十",
    "廿一",
    "廿二",
    "廿三",
    "廿四",
    "廿五",
    "廿六",
    "廿七",
    "廿八",
    "廿九",
    "三十",
    "卅一"
];
//五虎遁年表
var ArrayDunNian =
[
	2,		//甲己之年丙寅月开始
	14,		//乙庚之年戊寅月开始
	26,		//丙辛之年庚寅月开始
	38,		//丁壬之年壬寅月开始
	50		//戊癸之年甲寅月开始
];

//五鼠遁日表
var ArrayDunRi =
[
	0,		//甲己之日甲子时开始
	12,		//乙庚之日丙子时开始
	24,		//丙辛之日戊子时开始
	36,		//丁壬之日庚子时开始
	48		//戊癸之日壬子时开始
];



//周一到周日
var WeekDays =
[
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六",
    "周日"
];
//根据儒略日计算星期几序号，从0 到 6
//2000年1月1号12点是周六，序号5
function GetiDayOfWeek(curJD)
{
    //加一个大整数，保证是正的，大整数是7的倍数
    var delta = Math.floor(curJD - J2000 + 0.5) + 7000000;
    var dw = ((delta % 7) + 5 ) % 7;
    return dw;
}


 ///////////////////////////////////////////////////////
 //颜色封装函数和字体加粗 
 //五行配色
var ColorWuXing = new Array(
"green",    //木
"red",      //火
"#444444",  //土
"orange",     //金
"deepskyblue"  //水
);
//根据五行封装文本颜色，自动加粗
function PackWuXingColorText(text, wx)
{
    var idWX = WuXing.indexOf(wx);
    var clr = "black";  //如果查不到五行序号就用黑色
    if( (idWX >= 0) && (idWX <= 4 ))
    {
        clr = ColorWuXing[idWX];
    };
    //
    var strResult =  "<b><span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span></b>";
    return strResult;
};

////把文字颜色标成黑色
function GetBlackText(text)
{
    var resultText = "<span style=\"color: black\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//把文字颜色标成红色
function GetRedText(text)
{
    var resultText = "<span style=\"color: red\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//把文字颜色标成绿色
function GetGreenText(text)
{
    var resultText = "<span style=\"color: green\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//把文字颜色标成蓝色
function GetBlueText(text)
{
    var resultText = "<span style=\"color: blue\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//把文字颜色标成天蓝色
function GetSkyBlueText(text)
{
    var resultText = "<span style=\"color: deepskyblue\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//fuchsia紫红色
function GetFuchsiaText(text)
{
    var resultText = "<span style=\"color: fuchsia\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//紫色
function GetDarkOrchidText(text)
{
    var resultText = "<span style=\"color: darkorchid\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//粗体
function GetBoldText(text)
{
    var resultText = "<b>";
    resultText += text;
    resultText += "</b>";
    return resultText;  
}
///////////////////////////////////////////////
//空格
var SpaceZH = "&nbsp;"; //汉字空格
var SpaceZHN = "　";    //空字符空格
var SpaceEN1 = "&ensp;";//单英空格
var SpaceEN2 = "&emsp;";//双英空格

//快捷函数，根据年数字获取甲子数
function GetNianJiaZiShu(yy)
{
    //1504年在程序有效范围之前
    var iJZ = (yy - 1984 + 6000000) % 60;
    return iJZ;
}
//根据儒略日排盘，返回 bzpp 对象
//八字计算后的对象，时间都是儒略日
//bzpp.JDBirth 普通出生时间
//bzpp.JDBirthZTY 出生时间真太阳时
//bzpp.Gender  性别，男或女
//bzpp.JingDuBirth  出生地经度
//bzpp.IsUseZTY       使用真太阳时排盘

//bzpp.iNianJZ  //八字年柱甲子序号
//bzpp.iYueJZ  //八字月柱甲子序号
//bzpp.iRiJZ  //八字日柱甲子序号
//bzpp.iShiJZ  //八字时柱甲子序号

//bzpp.iTaiYuan 胎元
//bzpp.iMingGong 命宫

//bzpp.JQMing0  //前一个节气名称
//bzpp.JQJD0    //前一个节气儒略日
//bzpp.JQMing1  //后一个节气名称
//bzpp.JQJD1    //后一个节气儒略日
//bzpp.DaYunJD  //大运起运的儒略日
//bzpp.isNiDaYun //是否大运逆序排列
//
//通用排盘函数，参数是出生的普通时间儒略日、性别、出生地经度
//返回 bzpp 对象
function CalcBaZiObject(jdBirth, gender, jingduBirth, isUseZTY)
{
    var bzpp = new Object();
    //保存已有的对象属性
    bzpp.JDBirth = jdBirth; //北京时间，不考虑真太阳
    bzpp.Gender = gender;
    bzpp.JingDuBirth = jingduBirth;
    bzpp.IsUseZTY  = isUseZTY;
    ///////////////////////////////////////
    ////减去东八区的加时，经度按120度
    ////原本调用方式 obb.mingLiBaZi( jd+ (-8.0)/24 - J2000, 120.0/radd, ob ); //八字计算
    //两个参数
    var jd = jdBirth - (8.0/24) - J2000;   //转为UTC的J2000数
    var J = jingduBirth/radd; //经度的弧度
    /////////////////
    var v;//临时变量
    var jd2 = jd+dt_T(jd); //力学时
    var w = XL.S_aLon( jd2/36525, -1 ); //此刻太阳视黄经
    var k = int2( (w/pi2*360+45+15*360)/30 ); //1984年立春起算的节气数(不含中气)
    jd += pty_zty2(jd2/36525)+J/Math.PI/2; //本地真太阳时(使用低精度算法计算时差)
    bzpp.JDBirthZTY = jd + J2000;//补上J2000儒略日

     var curDD; //排盘的公历时间
     var curJD; //排盘的儒略日时间
    //如果不用真太阳时，直接用北京时间
    if( 0 == isUseZTY )
    {
        //不用真太阳
        jd  = jdBirth - J2000;
        curDD = JD.DD(jdBirth);//公历对象
        curJD = jdBirth;//儒略日
    }
    else
    {
        //使用真太阳
        curDD = JD.DD(bzpp.JDBirthZTY);
        curJD = bzpp.JDBirthZTY;
    }
    
    jd += 13/24; //转为前一日23点起算(原jd为本日中午12点起算)
    var D = Math.floor(jd), SC = int2( (jd-D)*12 ); //日数与时辰

    v = int2(k/12+6000000);  bzpp.iNianJZ = v % 60; //年柱甲子序号
    v = k+2+60000000;        bzpp.iYueJZ = v % 60;
    v = D - 6 + 9000000;     bzpp.iRiJZ = v % 60;
    v = (D-1)*12+90000000+SC;bzpp.iShiJZ = v % 60;
    
    //////////////////////////////////////
    //节气列表
    //判断应该获取今年节气表还是去年节气表 
    //八字的甲子数不等于阳历年甲子数，说明出生在立春之前
    var arrayJieQi;
    if( bzpp.iNianJZ != GetNianJiaZiShu(curDD.Y) )
    {
        arrayJieQi = GetJieQiArray( curDD.Y - 1 );//立春前用去年节气表
    }
    else
    {
        arrayJieQi = GetJieQiArray( curDD.Y );//立春后用今年节气表
    }
     ///////////////////////////////////
    //bzpp.JQMing0  //前一个节气名称
    //bzpp.JQJD0    //前一个节气儒略日
    //bzpp.JQMing1  //后一个节气名称
    //bzpp.JQJD1    //后一个节气儒略日
    //bzpp.DaYunJD  //大运起运的儒略日
    //bzpp.isNiDaYun //是否大运逆序排列
    //   
    //bzpp.iYueJZ 月柱甲子数计算月支，月支从 子丑寅卯辰。。。。
    //寅月序号从2，加10，模12等于0，就是节气的序号
    var jqYueOrder =  (bzpp.iYueJZ % 12 + 10) % 12;
    //12个大节，变成24节气中气，要乘以2
    bzpp.JQMing0 = JieQiMing[ jqYueOrder*2 ];
    bzpp.JQJD0 = arrayJieQi[ jqYueOrder*2 ];
    //后一个节气
    bzpp.JQMing1 = JieQiMing[ jqYueOrder*2 + 2 ];//下一个大节是加2，加1的是中气
    bzpp.JQJD1 = arrayJieQi[ jqYueOrder*2 + 2 ];
    //判断大运顺逆
    //年份阴阳
    if( bzpp.iNianJZ % 2 == 0) //甲子0，阳年
    {
        //阳年，男顺，女逆
        if( "女" == gender ) //女
        {
            bzpp.isNiDaYun = 1; //女逆
        }
        else
        {
            bzpp.isNiDaYun = 0; //男顺
        }
    }
    else
    {
        //阴年，男逆，女顺
        if( "女" == gender ) //女
        {
            bzpp.isNiDaYun = 0; //女顺
        }
        else
        {
            bzpp.isNiDaYun = 1;
        }
    }
    //顺逆
    if( 0 == bzpp.isNiDaYun )
    {
        //顺行计算起运，一年 365.2422 天，大运是三天一年
        //顺行计算差值是后面节气减出生时间
        var deltaShun = bzpp.JQJD1 - curJD; //差值天数
        //console.log("顺行数：" + deltaShun);
        //转为起运天数
        var qiyunShun = (deltaShun / 3.0) *  365.2422 ;
        bzpp.DaYunJD = curJD + qiyunShun;
    }
    else
    {
        //逆行计算起运
        var deltaNi = curJD - bzpp.JQJD0 ;  //逆行大运节气差值天数
        //console.log("逆行数：" + deltaNi);
        //转为起运天数
        var qiyunNi = (deltaNi / 3.0) * 365.2422 ;
        bzpp.DaYunJD = curJD + qiyunNi;        
    }
    /////////////////////////////////////////////
    //胎元，月令甲子数减9，倒数前面第十个月
    bzpp.iTaiYuan = ( bzpp.iYueJZ - 9 + 60 ) % 60;
    
    //命宫1，数字速查法，不考虑中气
    // 寅1，卯2，，，，，子11，丑12，先计算月份的
    var nMCount = (bzpp.iYueJZ % 12) - 1; //原本子为0，丑为1，寅为2，都少1
    if( nMCount <= 0 )
    {
        nMCount += 12;  //子11，丑是12
    }
    //再计算时辰的
    var nHCount = (bzpp.iShiJZ % 12) - 1;
    if( nHCount <= 0 )
    {
        nHCount += 12;
    }
    
    //计算命宫地支数，1到12
    var nMGDZ = 14 - ( nMCount + nHCount );
    if( nMGDZ < 1)
    {
        nMGDZ += 12;    //小于1的变成1到12月
    }
    //五虎遁年，查月干
    var nYearOrder = (bzpp.iNianJZ) % 5;
    var nMG = ArrayDunNian[nYearOrder] + (nMGDZ-1);
    bzpp.iMingGong = (nMG % 60);    //60范围之内
    
    //返回
    return bzpp;
}
//计算日柱的空亡地支，返回字符串
function GetRiKongWang(iRiJZ)
{
    //计算起始甲子旬
    var nStartJZXun = iRiJZ - (iRiJZ % 10);
    var iKong1 = ((nStartJZXun + 10) % 60) % 12;
    var iKong2 = (iKong1+1)%12;
    var strRet = "（日空：" + DiZhi[iKong1] + "、"
                    + DiZhi[iKong2] + "）";
    return strRet;
}
//根据地支，返回地支藏干字符串
function GetDiZhiCangGan(iDiZhi)
{
    var strRet = "";
    //本气
    strRet += GetBoldText( GetDarkOrchidText( TianGan[ DiZhiCangGan[iDiZhi][0] ] ) );
    //是否有中气
    if( DiZhiCangGan[iDiZhi][1] >= 0)
    {
        strRet += TianGan[ DiZhiCangGan[iDiZhi][1] ];
    }
    else
    {
        strRet += SpaceEN2;
    }
    //是否有余气
    if( DiZhiCangGan[iDiZhi][2] >= 0 )
    {
        strRet += TianGan[ DiZhiCangGan[iDiZhi][2] ];
    }
    else
    {
        strRet += SpaceEN2;
    }
    return strRet;
}

//
//获取普通岁运排盘
function GetPuTongSuiYun(bzpp)
{
    //字符串
    var strRet = "";
    var strTemp = "";
    //岁运并临的记录，存储公历年份如 2008
    var syblArray = new Array();
    var syblCount = 0;
    //生日的公历结构体
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//不用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //起运时间
    var qiyunDD = JD.DD( bzpp.DaYunJD );
    var qiyunZhouSui =  qiyunDD.Y - birthDD.Y ;
    strTemp = "起运周岁：" + String( qiyunZhouSui )
        + SpaceEN2   + "起运公历：" 
        + String(qiyunDD.Y) + "年"
        + String(qiyunDD.M) + "月"
        + String(qiyunDD.D) + "日"
        + "（每过十年走下一个大运）" ;
    strRet += strTemp;
    strRet += "<br>";
    strRet += "<br>";
    //计算起运甲子序号
    var iQiYunJZ;
    var iYunDelta = 0;  //大运顺行是 +1，逆行是 -1
    if( 0 == bzpp.isNiDaYun )//顺行
    {
        iQiYunJZ = (bzpp.iYueJZ + 1 + 60) % 60;
        iYunDelta = 1;
    }
    else//逆行
    {
        iQiYunJZ = (bzpp.iYueJZ - 1 + 60) % 60;
        iYunDelta = -1;
    }
    //起年公历年、起年甲子数
    var qiyunGLNian = qiyunDD.Y ;
    var iQiYunGLNianJZ = GetNianJiaZiShu(qiyunGLNian);
    //开始排大运
    var strDaYunJiaZi = "大运" + SpaceEN2;
    var strDaYunNaYin = "纳音" + SpaceEN2 ;
    var strDaYunZhouSui = "周岁" + SpaceEN2 + SpaceEN2;
    var strDaYunQiNian = "起年" + SpaceEN2 ;
    var strDaYunZhiNian = "止年" + SpaceEN2 ;
    var arrayDaYunJiaZi = new Array(8); //八步大运的甲子数
    for(var i=0; i<8; i++)//计算大运信息字符串
    {
        arrayDaYunJiaZi[i] = (iQiYunJZ + i*iYunDelta + 60) % 60;
        strDaYunJiaZi += JiaZi[ arrayDaYunJiaZi[i] ] + SpaceEN2 + SpaceEN2;
        strDaYunNaYin += NaYin[ arrayDaYunJiaZi[i] ] + SpaceEN2;
        strDaYunZhouSui += PackSmallNumber(String(qiyunZhouSui + i * 10)) + SpaceEN2 + SpaceEN2 + SpaceEN2;
        strDaYunQiNian += PackSmallNumber(String( qiyunGLNian + i * 10)) + SpaceEN2 + SpaceEN2;
        strDaYunZhiNian += PackSmallNumber(String( qiyunGLNian + 9 + i * 10)) + SpaceEN2 + SpaceEN2;
    }
    //添加到结果串
    strRet += GetRedText(strDaYunJiaZi) + "<br>" ;
    strRet += strDaYunNaYin + "<br>" ;
    strRet += strDaYunZhouSui + "<br>" ;
    strRet += strDaYunQiNian + "<br>" ;
    strRet += "流年<br>" ;

    //两重for循环遍历八步大运的流年
    for(var j=0; j<10; j++) //共十行
    {
        var strCurLine = "+" + String(j) + SpaceEN2 + SpaceEN2;
        for(var i=0; i<8; i++)//共八列
        {
            //当前年份甲子数
            var curYJZ = (iQiYunGLNianJZ + j + i*10) % 60;
            strCurLine += JiaZi[curYJZ] + SpaceEN2 + SpaceEN2;
            //是否岁运并临
            if( curYJZ == arrayDaYunJiaZi[i]) //岁运并临
            {
                syblArray[ syblCount ] = qiyunGLNian + j + i*10;
                syblCount++;
            }
        }
        strRet +=  strCurLine + "<br>";        
    }
    //补上止年
    strRet += strDaYunZhiNian + "<br>" ;
    strRet += "<br>" ;
    //补上岁运并临判断
    strTemp = "";
    if( syblCount > 0 )
    {
        for(var k=0; k<syblCount; k++)
        {
            strTemp += String( syblArray[k] ) + JiaZi[ GetNianJiaZiShu(syblArray[k]) ];
            strTemp += SpaceEN2;
            strTemp = GetBoldText(strTemp);
        }
    }
    strRet += "岁运并临：" + strTemp;
    strRet += "<br>" ;    
    return strRet;
}
//判断手机系统
var gIsPhone = false;
CheckIsPhone(); //判断一下是否为手机浏览器
function CheckIsPhone()
{
    //只判断windows系统，其他都当作是手机的
    if( navigator.platform == "Win32" || navigator.platform == "Windows" )
    {
        gIsPhone = false;
    }
    else
    {
        gIsPhone = true;
    }
    //alert(navigator.platform);
}
function PackSmallNumber(text) //适应手机排版，数字显示小一些
{
    var strRet = "";
    if(gIsPhone)//手机排盘缩小数字
    {
        if(text.length >= 4)
        {
            strRet += "<span style='margin-left:-3.5px;'>";
        }
        else
        {
            strRet += "<span style='margin-left:-2px;'>";
        }
    }
    else //普通电脑排盘
    {
        strRet += "<span style='font-size: 100%;'>";
    }

    strRet += text;
    strRet += "</span>";
    return strRet;
}

//bzpp.iNianJZ  //八字年柱甲子序号
//bzpp.iYueJZ  //八字月柱甲子序号
//bzpp.iRiJZ  //八字日柱甲子序号
//bzpp.iShiJZ  //八字时柱甲子序号

//bzpp.JQMing0  //前一个节气名称
//bzpp.JQJD0    //前一个节气儒略日
//bzpp.JQMing1  //后一个节气名称
//bzpp.JQJD1    //后一个节气儒略日
//bzpp.DaYunJD  //大运起运的儒略日
//bzpp.isNiDaYun //是否大运逆序排列
//获取高级岁运排盘
function GetGaoJiSuiYun(bzpp)
{
    //字符串
    var strRet = "";
    var strTemp = "";
    //岁运并临的记录，存储公历年份如 2008
    var syblArray = new Array();
    var syblCount = 0;
    //生日的公历结构体
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//不用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //高级盘不管节气和起运岁数
    strTemp = "起运周岁：0" + SpaceEN2 
        + "起运时间：即命主出生时间" + "<br>"
        + "（甲子高级排盘出生后就行大运，每十二年换大运，五个大运后从头轮回）";
    strRet += strTemp;
    strRet += "<br>" ;
    strRet += "<br>" ;
    //计算起运甲子序号
    var iQiYunJZ;
    var iYunDelta = 0;  //大运顺行是 +1，逆行是 -1
    if( 0 == bzpp.isNiDaYun )//顺行
    {
        iQiYunJZ = (bzpp.iYueJZ + 1 + 60) % 60;
        iYunDelta = 1;
    }
    else//逆行
    {
        iQiYunJZ = (bzpp.iYueJZ - 1 + 60) % 60;
        iYunDelta = -1;
    }
    //起年公历年、起年甲子数
    var qiyunGLNian = birthDD.Y ;
    var iQiYunGLNianJZ = GetNianJiaZiShu(qiyunGLNian);
    //开始排大运
    var strDaYunJiaZi = "大运" + SpaceEN2;
    var strDaYunNaYin = "纳音" + SpaceEN2 ;
    var strDaYunZhouSui = "周岁" + SpaceEN2 + SpaceEN2;
    var strDaYunQiNian = "起年" + SpaceEN2 ;
    var strDaYunZhiNian = "止年" + SpaceEN2 ;
    var arrayDaYunJiaZi = new Array(8); //八步大运的甲子数，5步循环
    for(var i=0; i<8; i++)//计算大运信息字符串
    {
        //5 步 大运循环，12年换大运
        arrayDaYunJiaZi[i] = (iQiYunJZ + (i%5)*iYunDelta + 60) % 60;
        strDaYunJiaZi += JiaZi[ arrayDaYunJiaZi[i] ] + SpaceEN2 + SpaceEN2;
        strDaYunNaYin += NaYin[ arrayDaYunJiaZi[i] ] + SpaceEN2;
        strDaYunZhouSui += PackSmallNumber(String( 0 + i * 12)) + SpaceEN2 + SpaceEN2 + SpaceEN2;
        strDaYunQiNian += PackSmallNumber(String( qiyunGLNian + i * 12)) + SpaceEN2 + SpaceEN2;
        strDaYunZhiNian += PackSmallNumber(String( qiyunGLNian + 11 + i * 12)) + SpaceEN2 + SpaceEN2;
    }
    //添加到结果串
    strRet += GetRedText(strDaYunJiaZi) + "<br>" ;
    strRet += strDaYunNaYin + "<br>" ;
    strRet += strDaYunZhouSui + "<br>" ;
    strRet += strDaYunQiNian + "<br>" ;
    strRet += "流年<br>" ;
    
    //两重for循环遍历八步大运的流年
    for(var j=0; j<12; j++) //共12行
    {
        var strCurLine = "+" + String(j);
        if( 10 == j)//两位数字，方便对齐
        {
            strCurLine = "10" ;
        }
        if( 11 == j)//两位数字，方便对齐
        {
            strCurLine = "11";
        }
        strCurLine += SpaceEN2 + SpaceEN2;
        for(var i=0; i<8; i++)//共八列
        {
            //当前年份甲子数
            var curYJZ = (iQiYunGLNianJZ + j + i*12) % 60;
            strCurLine += JiaZi[curYJZ] + SpaceEN2 + SpaceEN2;
            //是否岁运并临
            if( curYJZ == arrayDaYunJiaZi[i]) //岁运并临
            {
                syblArray[ syblCount ] = qiyunGLNian + j + i*12;
                syblCount++;
            }
        }
        strRet +=  strCurLine + "<br>";        
    }
    //补上止年
    strRet += strDaYunZhiNian + "<br>" ;
    strRet += "<br>" ;
    //补上岁运并临判断
    strTemp = "";
    if( syblCount > 0 )
    {
        for(var k=0; k<syblCount; k++)
        {
            strTemp += String( syblArray[k] ) + JiaZi[ GetNianJiaZiShu(syblArray[k]) ];
            strTemp += SpaceEN2;
            strTemp = GetBoldText(strTemp);
        }
    }
    strRet += "岁运并临：" + strTemp;
    strRet += "<br>" ;    
    
    return strRet;
}
//获取纳音吉凶方位字符串
function GetNaYinFangWei(bzpp)
{
    var strRet = "纳音论方位：（<b>以出生地为中央，某方位都是指出生地的某方位</b>）<br>";
    var strTemp = "";
    //年柱，事业吉位
    var iYYJZ = bzpp.iNianJZ;
    strTemp = "事业吉位：<b>" + NYJXFangWei[iYYJZ][0] + "</b><br>";
    strRet += strTemp;
    //日柱，适合职业以及养元方位
    var iDDJZ = bzpp.iRiJZ; //方位表是60行，纳音五行表 30行
    var iDDWuXing = NaYinWuXing[ Math.floor(iDDJZ/2) ];
    strTemp = "适合职业：<b>五行属" + WuXing[ (iDDWuXing+4)%5 ]
            + "或" + WuXing[ iDDWuXing ] + "</b>（如果取名，也建议补这两个五行）<br>" ;
    strRet += strTemp;
    strTemp = "养元吉位：<b>" + NYJXFangWei[iDDJZ][0] + "</b><br>";
    strRet += strTemp;
    
    //时柱
    var iHHJZ = bzpp.iShiJZ;
    var iHHWuXing = NaYinWuXing[ Math.floor(iHHJZ/2) ];
    //判断日时回头克
    if( (iDDWuXing+3)%5 == iHHWuXing )//木火土金水
    {
        strTemp = "大凶方位：" +  NYJXFangWei[iDDJZ][1] + "。存在日时回头克，大凶方位不能去，最好在上面养元吉位定居。<br>" ;
        strRet += GetBoldText( GetRedText(strTemp) );
    }
    
    return strRet;
}

//计算原局的单柱 对 日柱的分值
function CalcYuanJuDanZhuPoints(nDstZhuJZ, nRiZhuJZ)
{
    var dblRet = 0;
    //目标柱的五行
    var nDstWX = NaYinWuXing[ Math.floor(nDstZhuJZ / 2) ];
    //日柱的五行
    var nRiWX = NaYinWuXing[ Math.floor(nRiZhuJZ / 2) ];
    //计算五行之差
    var nCha = ((nDstWX - nRiWX) + 5) % 5;
    
    //目标柱的阴阳
    var nDstYinYang = nDstZhuJZ % 2;
    //日子阴阳
    var nRiYinYang = nRiZhuJZ % 2;
    
    //根据五行差 进行判断
    switch ( nCha ) {
    case 0: //同五行
        if( nDstYinYang != nRiYinYang )    //阴阳合
        {
            dblRet = 8;
        }
        else
        {
            dblRet = 7;
        }
        break;
    case 1: //我生
        if( nDstYinYang != nRiYinYang ) //阴阳泄
        {
            dblRet = 3;
        }
        else
        {
            dblRet = 4;
        }
        break;
    case 2: //我克
        if( nDstYinYang != nRiYinYang ) //阴阳克
        {
            dblRet = 6;
        }
        else
        {
            dblRet = 5;
        }
        break;
    case 3: //克我
        if( nDstYinYang != nRiYinYang ) //阴阳受克
        {
            dblRet = 2;
        }
        else
        {
            dblRet = 1;
        }
        break;
    case 4: //生我
        if( nDstYinYang != nRiYinYang ) //阴阳生
        {
            dblRet = 10;
        }
        else
        {
            dblRet = 9;
        }
        break;
    default:
        break;
    }
    //返回
    return dblRet;
}

//获取原局元神分数，自动判断 三强局和四强局、天之骄子
function CalcYuanShenQiangDuObject(bzpp)
{
    var aYuanShen = new Object();
    aYuanShen.yuanshen = -1;    //元神分数
    aYuanShen.n3QiangJu = -1;   //三强局
    aYuanShen.n4QiangJu = -1;   //四强局
    aYuanShen.nTianZhiJiaoZi = -1; //天之骄子
     /**计算三个单柱的分值**********************************************/
    //年 0.10
    var dblYearP = CalcYuanJuDanZhuPoints(bzpp.iNianJZ, bzpp.iRiJZ);
    //月 0.35
    var dblMonthP = CalcYuanJuDanZhuPoints(bzpp.iYueJZ, bzpp.iRiJZ);
    //时 0.55
    var dblHourP = CalcYuanJuDanZhuPoints(bzpp.iShiJZ, bzpp.iRiJZ);
    //三柱综合分 1~10
    var dblSanZhuP = dblYearP*0.10 + dblMonthP*0.35 + dblHourP*0.55;
    
    //先计算纳音五行个数，进行三强局和四强局判断
    //木火土金水
    var aWuXingCount = [0, 0, 0, 0, 0];
    //年纳音五行
    var nYearWX = NaYinWuXing[ Math.floor(bzpp.iNianJZ/2) ];
    aWuXingCount[nYearWX] += 1;
    //月纳音五行
    var nMonthWX = NaYinWuXing[ Math.floor(bzpp.iYueJZ/2) ];
    aWuXingCount[nMonthWX] += 1;
    //日纳音五行
    var nDayWX =  NaYinWuXing[ Math.floor(bzpp.iRiJZ/2) ];
    aWuXingCount[nDayWX] += 1;
    //时纳音五行
    var nHourWX = NaYinWuXing[ Math.floor(bzpp.iShiJZ/2) ];
    aWuXingCount[nHourWX] += 1;
    
    //判断五行个数
    for(var i=0; i<5; i++)
    {
        if( aWuXingCount[i] >= 3)//三强局
        {
            aYuanShen.n3QiangJu = i;    //i就是三强的五行
            //是否为四强局
            if( aWuXingCount[i] >= 4 )
            {
                aYuanShen.n4QiangJu = i;
            };
            if( (aYuanShen.n3QiangJu+1)%5 == nDayWX) //日纳音五行如果是 三强五行加1.日柱受生，是天之骄子
            {
                 aYuanShen.nTianZhiJiaoZi = nDayWX; //记录天之骄子日柱五行，其他三柱五行都是 aYuanShen.n3QiangJu
            };
            //已找到三强局，退出循环
            break;
        }
        else
        {
            continue;
        }
    }
    //判断是三强局还是普通局
    if( aYuanShen.n3QiangJu >= 0 )//强局
    {
        aYuanShen.yuanshen = Math.floor(70 + 3.0 * dblSanZhuP + 0.5); //四舍五入
        //强局的年月、月日回头克影响不太大，不做修正了。
    }
    else//普通局
    {
        //对年月日顺生的进行修正
        var dblPlus = 0.0;
        //判断
        if(   (nYearWX+1)%5 == nMonthWX
           && (nMonthWX+1)%5 == nDayWX)
        {
            //dblSanZhuP分值越高，加的越少。分值越低加的越多，最多加6.2*1.6 = 10分
            dblPlus = (10.0 - dblSanZhuP) * 1.6;
        };
        //计算
        aYuanShen.yuanshen = Math.floor( 10.0 * dblSanZhuP + dblPlus + 0.5);  //四舍五入
        //以上计算仅仅考虑到了时柱克日柱的回头克(给的最低分，不用再减)，月克年和日克月的减分没计算在内
        //对年柱、月柱受克的弱局进行修正，年根伤扣 9 到 10 分， 月柱伤扣 9 到 10 分
        //对普通局回头克修正
        if( (nYearWX+3)%5 == nMonthWX )    //年根伤
        {
            if( (bzpp.iNianJZ)%2 == (bzpp.iYueJZ)%2 )  //同性克
            {
                aYuanShen.yuanshen -= 10;
            }
            else
            {
                aYuanShen.yuanshen -= 9;
            }
        };
        if( (nMonthWX+3)%5 == nDayWX ) //月柱伤
        {
            if( (bzpp.iYueJZ)%2 == (bzpp.iRiJZ)%2 )  //同性克
            {
                aYuanShen.yuanshen -= 10;
            }
            else
            {
                aYuanShen.yuanshen -= 9;
            }
        };
        //低于10分的都按10分来算//最低分10分
        if(aYuanShen.yuanshen < 10)
        {
            aYuanShen.yuanshen = 10;
        };
    }//普通局计算结束
    
    //返回元神对象
    return aYuanShen;
}
/*
    aYuanShen.yuanshen    //元神分数
    aYuanShen.n3QiangJu  //三强局
    aYuanShen.n4QiangJu  //四强局
    aYuanShen.nTianZhiJiaoZi //天之骄子
*/
//元神强弱的字符串
var strQiangRuo =
[
    "很弱",// <=30
    "较弱",// 31 -- 48
    "中等",// 49 -- 66
    "较强",// 65 -- 84
    "很强" // >= 85 
];
//根据元神对象，构造元神描述字符串
function GetYuanShenString(aYuanShen)
{
    var strRet = "元神强度：";
    var strTemp = String( aYuanShen.yuanshen ) + SpaceEN2+ SpaceEN2;
    var strqr = "";    //描述强弱的字符串
    //先判断普通局
    if(aYuanShen.yuanshen <= 30)
    {
        strqr = strQiangRuo[0];
    }
    else if(aYuanShen.yuanshen <= 48)
    {
        strqr = strQiangRuo[1];
    }
    else if(aYuanShen.yuanshen <= 66)
    {
        strqr = strQiangRuo[2];
    }
    else if(aYuanShen.yuanshen <= 84)
    {
        strqr = strQiangRuo[3];
    }
    else // >=85
    {
        strqr = strQiangRuo[4];
    }
    //强局判断
    if( aYuanShen.n4QiangJu >=0 )   //四强局
    {
        strqr = "雄霸一方";
    }
    else if( aYuanShen.n3QiangJu >=0 )  //三强局和天之骄子
    {
        strqr = "三" + WuXing[aYuanShen.n3QiangJu] + "强局" ;
        if( aYuanShen.nTianZhiJiaoZi >=0 ) //三强生元神//天之骄子
        {
            strqr = "天之骄子";
        }
    };
    //补上强弱分类
    strTemp += strqr;
    strRet += GetBoldText( GetRedText(strTemp) );
    strRet += "<br>注：元神的强弱影响人的精气神状态，这里计算的是先天数值，后天修行可以加强自己能力。元神越强，人的魄力、活力和韧性等越大。<br>";
    //返回
    return strRet;
}

//公历排盘函数
//参数为 出生儒略日、性别、省份、市县、是否真太阳、是否高级盘，出生的经度//最后两个个参数是绘图参数
function  GetGLPaiPanHTML(birthJD, strGender, strBirthShengFen, strBirthShiXian, useZTY, useJZGaoJi, jingdu, bDraw, syCanvas)
{
    if(  birthJD < 0)
    {
        return "<br>时间段不对，无法进行八字排盘。<br>";
    }
    //排盘的HTML字符串
    var strResult =  "<div align='left' style='font-family: 宋体;'>"; 
    var strTemp = "";
    //不能用 JD 对象存东西，要用 DD，JD对象会在其他计算中被修改，DD是新对象，不会被改
    var myDD = JD.DD(birthJD);
    //console.log("birthJD: " + birthJD);
    //console.log( myJD.JD2str(birthJD) );
    //进行八字排盘
    var bzpp = CalcBaZiObject(birthJD, strGender, jingdu, useZTY);
    
    //不换行标记开始
    strResult += "<span style='white-space: nowrap;'>";
    //开始填充排盘字符串
    strTemp = "命主：某人， 性别：<b>" + strGender 
            + "</b>， 真生肖：<b>" + DZShengXiao[bzpp.iNianJZ%12]
            + "</b>， 出生地：" + strBirthShengFen + strBirthShiXian;
    strResult += strTemp;
    strResult += "<br>";
    //出生公历和是否真太阳时
    strTemp = "出生公历：" + String(myDD.Y) + "年" 
        + String(myDD.M) + "月"
        + String(myDD.D) + "日"
        + String(myDD.h) + "时"
        + String(myDD.m) + "分"
        + "， " + WeekDays[ GetiDayOfWeek(birthJD) ]  ;
    //console.log( GetiDayOfWeek(birthJD) );
    strResult += strTemp;
    strResult += "<br>";
    if( 0 != useZTY )//判断真太阳时，如果使用了真太阳时，后面代码都跟着真太阳时走
    {
        var glZTY = JD.DD( bzpp.JDBirthZTY ); //儒略日转为公历
        strTemp = "真太阳时：" + glZTY.Y + "年" 
            + glZTY.M + "月"
            + glZTY.D + "日"
            + glZTY.h + "时"
            + glZTY.m + "分"  ;
        strResult += strTemp;
        strResult += "<br>";
        //把出生时间对象改为真太阳的对象
        myDD = glZTY;   //方便下面农历查询
        birthJD = bzpp.JDBirthZTY;  //改成真太阳的
    }

    //出生农历，0点是今天的子时，23点后是明天的子时，要区分
    var theOB;
    if(myDD.h >= 23)//农历时间，myDD和birthJD都修改了，自动跟着是否用真太阳时走
    {
        theOB = GetJDtoNongLiOB(birthJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(birthJD);
    }
    strTemp = "出生农历：" + theOB.Lyear3 + "年 "
              + theOB.Lleap + theOB.Lmc + "月 "
              + theOB.Ldc + "日 "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "时"
              + " （黄帝" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "年）";//黄帝纪年比网上多56年
    //console.log( myDD.h );
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //八字    
    if( "女" ==  bzpp.Gender)
    {
        strTemp = "坤造" + SpaceEN2;
        strTemp += GetBoldText(GetFuchsiaText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iYueJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iRiJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iShiJZ])) ;
    }
    else
    {
        strTemp = "乾造" + SpaceEN2;
        strTemp += GetBoldText(GetBlueText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iYueJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iRiJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iShiJZ])) ;
    }
    strTemp += SpaceEN2 + GetRiKongWang( bzpp.iRiJZ );
    strResult += strTemp;
    strResult += "<br>";
    //地支藏干
    strTemp = "藏干" + SpaceEN2;
    strTemp +=  SpaceEN2 + GetDiZhiCangGan( bzpp.iNianJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iYueJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iRiJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iShiJZ % 12);
    strResult += strTemp;
    strResult += "<br>";
    //纳音
    strTemp = "纳音" + SpaceEN2;
    strTemp +=  GetBlackText( NaYin[bzpp.iNianJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iYueJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iRiJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iShiJZ] ) ;
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //胎元和命宫
    strTemp = "胎元：" + JiaZi[ bzpp.iTaiYuan ] + "（" + NaYin[ bzpp.iTaiYuan ] + "）"
        + SpaceEN2 
        + "命宫：" + JiaZi[ bzpp.iMingGong ] + "（" + NaYin[ bzpp.iMingGong ] + "）" ;
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //节气
    strTemp = "公历节气：" + bzpp.JQMing0 + JD.JD2str(bzpp.JQJD0)
        +  SpaceEN2 + SpaceEN2
        + bzpp.JQMing1 + JD.JD2str(bzpp.JQJD1);
    strResult += strTemp;
    strResult += "<br>";
    //排大运字符串
    //区分普通排盘和高级排盘
    if( 0 == useJZGaoJi)
    {
        //普通盘，获取普通岁运排盘，10年* 8步
        strTemp = GetPuTongSuiYun(bzpp);
    }
    else
    {
        //高级盘，获取高级岁运排盘，12年*5步
        strTemp = GetGaoJiSuiYun(bzpp);
    }
    strResult += strTemp;
    strResult += "<br>";
    
    //纳音吉凶方位
    strResult += GetNaYinFangWei(bzpp);
    strResult += "<br>";
    
    strResult += "</span>"; //不换行标记的末尾
    
    //先计算元神对象
    var aYuanShen = CalcYuanShenQiangDuObject(bzpp);
    
    strResult += GetYuanShenString(aYuanShen);    
    
    strResult += "<br>";
    //补上末尾的标签
    strResult += "</div>";
    //替换中文空格，适应部分手机浏览器字体
    strResult = strResult.replace(/&emsp;/g, "　");
     
    //绘图
    var painter = syCanvas.getContext("2d");
    //console.log(painter);
    if( (1==bDraw) && painter ) //判断是否绘图、有无画布
    {
        syCanvas.width = 640;   //扩大画布
        syCanvas.height = 600;
        if( 0 == useJZGaoJi )
        {
            //普通排盘绘图
            DrawPuTongSuiYun(bzpp, aYuanShen, painter);
        }
        else
        {
            //高级排盘绘图
            DrawGaoJiSuiYun(bzpp, aYuanShen, painter);
        }
    }
    
    //返回
    return strResult;
}
//选用八种颜色画大运，红蓝交替
var DaYunColors = [
    "#FF4500",
    "#00FA9A",
    "#E9967A",
    "#00FFFF",
    "#FF8C00",   
    "#7FFF00",
    "#D02090",
    "#32CD32"
];

//普通岁运绘图函数，参数是八字排盘、元神对象、画图板
function DrawPuTongSuiYun(bzpp, aYuanShen, painter)
{
    //尺寸
    var Width = 640;
    var Height = 600;
    //定义原点
    var originX = 40; //每年宽度6 ，6*100年 = 600，多余40画刻度和文本
    var originY = 480;//元神每分值4 ，4*120分 = 480
    //步进
    var xStep = 6;
    var yStep = 4;
    /////////////////////////////
    // 八字排盘信息提取
    //生日的公历结构体
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//不用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //起运时间
    var qiyunDD = JD.DD( bzpp.DaYunJD );
    //起运周岁
    var qiyunZhouSui =  qiyunDD.Y - birthDD.Y ;
    //起运流年的甲子
    var qiyunJiaZiNian =  GetNianJiaZiShu(qiyunDD.Y);
    //计算八部大运
    var arrayDaYun = new Array(8);
    for(var k=0; k<8; k++)
    {
        //普通排盘的大运
        if( 0 == bzpp.isNiDaYun ) //不是逆行，顺大运
        {
            arrayDaYun[k] = (bzpp.iYueJZ + k + 1)%60;
        }
        else
        {
            arrayDaYun[k] = (bzpp.iYueJZ - k - 1 + 60)%60;
        }
        //
        //console.log( JiaZi[ arrayDaYun[k] ] );
    }
    ////////////////////////////////////
    //元神分值 10 到 100，岁运对人影响程序 +-20 到 +-40
    //计算影响程度
    var multi = 20 + ((100-aYuanShen.yuanshen)/90.0) * 20;
    //计算倍率 +-5 放大到 +-20或40
    multi = 2 * multi / 10.0;    //岁运打分是+-5分制，下面计算时乘以倍率，得到实际影响分数
    //岁运画图
    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.lineWidth = 3;
    //保存上年元神分值
    var lastYearScore = 150;
    //当前年份分值
    var curYS = 150;
    for(var i=0; i<8; i++) //8步大运*10年
    {
        //填充颜色
        painter.fillStyle = DaYunColors[i];
        //当前大运
        var curDaYunJZ = arrayDaYun[i];
        //大运对元神分值，占七成
        var scoreDaYun = GetSuiYunDanYS(curDaYunJZ, bzpp.iRiJZ) * 0.7;
        
        //计算每个流年情况并画图
        for(var j=0; j<10; j++)
        {
            lastYearScore = curYS;
            //当前流年甲子数
            var curYearJZ = (qiyunJiaZiNian +i*10+j) % 60;            
            //当前周岁
            var curYearOld = qiyunZhouSui +i*10+j ;
            //当前岁运变化分数
            var curChangeScore = GetSuiYunDanYS(curYearJZ, bzpp.iRiJZ)*0.3 + scoreDaYun;
            //当前元神分值
            curYS = aYuanShen.yuanshen + multi * curChangeScore;
            //四舍五入
            curYS = Math.floor( curYS + 0.5 );
            if(curYS > 120 )//上限120
            {
                curYS = 120;
            }
            if(curYS < -30)//下限-30
            {
                curYS = -30;
            }
            //判断分数的正负
            if( curYS >=0  )
            {
                painter.fillRect( originX + curYearOld*xStep, (120-curYS)*yStep, xStep, curYS*yStep );
            }
            else//元神是负数
            {
                painter.fillRect( originX + curYearOld*xStep, originY, xStep, -curYS*yStep );
            }

            //画线段 
            if( (i!=0) || (j!=0) )  //i==0且j==0是起运第0年，不算
            {
                painter.moveTo( originX+ curYearOld*xStep - xStep/2, (120-lastYearScore)*yStep );
                painter.lineTo(originX+ curYearOld*xStep + xStep/2, (120-curYS)*yStep );
            }
            //console.log( curYS );
        }//inner for        
    }//outer for
    painter.stroke();

    ///////////////////////////
    //画坐标轴和刻度
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = "black";
    painter.fillStyle = "black";
    painter.moveTo(0, originY);
    painter.lineTo(Width, originY);
    painter.moveTo(1, 0);
    painter.lineTo(1, Height);
    //Y轴刻度
    for(var k=0; k<=150; k+=10)//-30分到120分，总共150分
    {
        painter.moveTo(0, k*yStep);
        painter.lineTo(10, k*yStep);
        //画文字
        painter.fillText( String(120 - k), 14, k*yStep);
    }
    //X轴刻度
    for(var k=0; k<=100; k+=10)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 10 );
        //画文字
        painter.fillText( String(k), originX + k*xStep, originY + 24 );
    }
    //图标题文字
    painter.fillText("流年运势图（仅供娱乐，切勿执着）", Width/2 -100, Height - 12);
    //绘制路径
    painter.stroke();
    ////////////////////////////
    painter.beginPath();
    //元神基线
    painter.strokeStyle = "red";
    var count = Width/xStep;
    for(var k=0; k<count; k++)
    {
        if( 1 == k%2 )
        {
            continue;
        }
        //画虚线线段
        painter.moveTo(k*xStep, originY - aYuanShen.yuanshen*yStep);
        painter.lineTo(k*xStep+xStep, originY - aYuanShen.yuanshen*yStep);
    }
    painter.stroke();
    //边框
    painter.lineWidth = 1;
    painter.strokeStyle = "green";
    painter.strokeRect(0,0,Width,Height);
}

//甲子高级岁运绘图函数，参数是八字排盘、元神对象、画图板
function DrawGaoJiSuiYun(bzpp, aYuanShen, painter)
{
    //尺寸
    var Width = 640;
    var Height = 600;
    //定义原点
    var originX = 40;//40+ 100年*6步进
    var originY = 480;//上限 120分*4步进
    //步进
    var xStep = 6;
    var yStep = 4;
    ////////////////////////////////////////////
    //八字排盘信息提取
    //生日的公历结构体
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//不用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//用真太阳
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //起运周岁是 0
    var qiyunZhouSui = 0;
    //起运流年甲子
    var qiyunJiaZiNian = GetNianJiaZiShu( birthDD.Y);
    //计算八步大运
    var arrayDaYun = new Array(8);
    for(var k=0; k<8; k++) //五个大运循环
    {
        //高级排盘的大运
        if( 0 == bzpp.isNiDaYun ) //不是逆行，顺大运
        {
            arrayDaYun[k] = (bzpp.iYueJZ + k%5 + 1)%60;
        }
        else
        {
            arrayDaYun[k] = (bzpp.iYueJZ - k%5 - 1 + 60)%60;
        }
        //console.log( JiaZi[ arrayDaYun[k] ] );
    }
    /////////////////////////////////
    //元神越弱，岁运影响程度越大
    //计算影响程度 20到40
    var multi = 20 + ((100-aYuanShen.yuanshen)/90.0) * 20;
    //计算倍率 +-5 放大到 +-20或40
    multi = 2 * multi / 10.0;    //岁运打分是+-5分制，下面计算时乘以倍率，得到实际影响分数
    //岁运画图
    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.lineWidth = 3;
    //保存上年元神分值
    var lastYearScore = 150;
    //当前年份分值
    var curYS = 150;
    for(var i=0; i<8; i++)  //8步*12年
    {
        //填充颜色
        painter.fillStyle = DaYunColors[i];
        //当前大运甲子序
        var curDaYunJZ = arrayDaYun[i];
        //大运对元神单算得分，占七成
        var scoreDaYun = GetSuiYunDanYS(curDaYunJZ, bzpp.iRiJZ) * 0.7;
        
        //计算每个流年情况并画图
        for(var j=0; j<12; j++)
        {
            lastYearScore = curYS;  //上年元神分
            //当前流年甲子数
            var curYearJZ = (qiyunJiaZiNian +i*12+j) % 60;  
            //当前周岁
            var curYearOld = qiyunZhouSui +i*12+j ;
            //当前岁运变化分数
            var curChangeScore = GetSuiYunDanYS(curYearJZ, bzpp.iRiJZ)*0.3 + scoreDaYun;
            //当前元神分值
            curYS = aYuanShen.yuanshen + multi * curChangeScore;
            //四舍五入
            curYS = Math.floor( curYS + 0.5 );
            if(curYS > 120 )//上限120
            {
                curYS = 120;
            }
            if(curYS < -30)//下限-30
            {
                curYS = -30;
            }
            //判断分数的正负
            if( curYS >=0  )
            {
                painter.fillRect( originX + curYearOld*xStep, (120-curYS)*yStep, xStep, curYS*yStep );
            }
            else//元神是负数
            {
                painter.fillRect( originX + curYearOld*xStep, originY, xStep, -curYS*yStep );
            }
            //画线段 
            if( (i!=0) || (j!=0) )  //i==0且j==0是起运第0年，不算
            {
                painter.moveTo( originX+ curYearOld*xStep - xStep/2, (120-lastYearScore)*yStep );
                painter.lineTo(originX+ curYearOld*xStep + xStep/2, (120-curYS)*yStep );
            }
            //console.log( curYS );
        }//inner for 
    }//outer for    
    painter.stroke();
    
    //////////////////////////////////////////////
    //画坐标轴和刻度
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = "black";
    painter.fillStyle = "black";
    painter.moveTo(0, originY);
    painter.lineTo(Width, originY);
    painter.moveTo(1, 0);
    painter.lineTo(1, Height);
    //Y轴刻度
    for(var k=0; k<=150; k+=10)//-30分到120分，共150分
    {
        painter.moveTo(0, k*yStep);
        painter.lineTo(10, k*yStep);
        //画文字
        painter.fillText( String(120 - k), 14, k*yStep);
    }
    //X轴刻度
    for(var k=0; k<=100; k+=12)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 10 );
        //画文字
        painter.fillText( String(k), originX + k*xStep, originY + 24 );
    }
    //图标题文字
    painter.fillText("流年运势图（仅供娱乐，切勿执着）", Width/2 -100, Height - 12);
    //绘制路径  
    painter.stroke();
    ////////////////////////////
    painter.beginPath();
    //元神基线
    painter.strokeStyle = "red";
    var count = Width/xStep;
    for(var k=0; k<count; k++)
    {
        if( 1 == k%2 )
        {
            continue;
        }
        //画虚线线段
        painter.moveTo(k*xStep, originY - aYuanShen.yuanshen*yStep);
        painter.lineTo(k*xStep+xStep, originY - aYuanShen.yuanshen*yStep);
    }
    painter.stroke();
    //边框
    painter.lineWidth = 1;
    painter.strokeStyle = "green";
    painter.strokeRect(0,0,Width,Height);
}

//纳音岁运表，行为元神，列为大运或流年，计算同性生克，异性的直接加差值
//范围 1分 到 10分

//克我 1到2
//我生 3到4，阴阳生3分，同性生4分
//我克 5到6
//同我 7到8
//生我 9到10

//邻生：顺1位加分。隔生：顺2位加分。除了水，其他遇雷火、天火扣分
var NaYinSuiYunBiao  = 
[	    //海中金 炉中火 大林木 路旁土 剑风金 山头火 洞下水 城墙土 白腊金 杨柳木 泉中水 屋上土 霹雷火 松柏木 长流水 沙中金 山下火 平地木 壁上土 金箔金 覆灯火 天河水 大泽土 钗钏金 桑松木 大溪水 沙中土 天上火 石榴木 大海水
/*海中金*/ [7,     2,     6,     9,    7,      1,     4,    9,      7,     5,     4,     9,     1,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      1,     5,    4],
/*炉中火*/ [5,     7,     10,    5,    5,      7,     3,    4,      5,     9,     3,     4,     6,     9,     0,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     3,     4,      6,     9,    1],
/*大林木*/ [2,     4,     7,     6,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     5,     1,     4,     9,     5,     0,     7,     9,     5,      3,     7,    9],
/*路旁土*/ [4,     9,     1,     7,    5,     10,     5,    7,      4,     2,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*剑风金*/ [7,     1,     5,     9,    7,      2,     5,    9,      7,     5,     4,     9,     0,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*山头火*/ [5,     7,     9,     4,    5,      7,     2,    5,      5,     9,     1,     4,     6,     9,     1,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     0,     4,      6,     9,    1],
/*洞下水*/ [9,     5,     4,     1,    9,      5,     7,    2,      10,    4,     7,     1,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     1,     9,     4,     7,     1,      5,     4,    8],
/*城墙土*/ [4,     9,     1,     7,    4,      9,     5,    7,      5,     2,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*白腊金*/ [7,     1,     5,     9,    3,      1,     4,    9,      7,     6,     5,     9,     0,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*杨柳木*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     10,    6,     3,     7,     9,     1,      4,    7,     5,     0,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*泉中水*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     2,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     0,     9,     4,     7,     1,      5,     4,    8],
/*屋上土*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     0,     5,     7,     8,     2,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*霹雷火*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     7,     10,    2,     5,      7,    9,     4,     5,     7,     0,     4,     5,     9,     1,     4,      7,     9,    1],
/*松柏木*/ [2,     4,     7,     5,    0,      4,     9,    5,      1,     7,     9,     5,     3,     7,     10,    2,      4,    7,     5,     1,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*长流水*/ [5,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     1,     5,     4,     7,     10,     6,    4,     1,     9,     5,     7,     1,     9,     4,     7,     1,      5,     4,    8],

/*沙中金*/ [7,     1,     5,     9,    3,      1,     4,    9,      7,     5,     4,     9,     0,     5,     4,     7,      2,    6,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*山下火*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     6,     9,     1,     5,      7,    10,    5,     5,     7,     1,     4,     5,     9,     1,     4,      6,     9,    1],
/*平地木*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     6,     2,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*壁上土*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     8,     0,     5,     4,      9,    1,     7,     5,     10,    5,     7,     4,     1,     5,     7,      8,     1,    5],
/*金箔金*/ [7,     1,     5,     9,    7,      1,     4,    9,      7,     5,     4,     9,     0,     5,     4,     7,      1,    5,     9,     7,     2,     5,     9,     7,     7,     4,     9,      0,     5,    4],
/*覆灯火*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     0,     4,     6,     9,     1,     5,      7,    9,     4,     5,     7,     2,     5,     5,     9,     1,     4,      6,     9,    1],
/*天河水*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     1,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     0,     10,    4,     7,     1,      5,     4,    8],
/*大泽土*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     9,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     5,     2,     5,     7,      9,     1,    5],
/*钗钏金*/ [7,     1,     5,     9,    7,      1,     4,    9,      7,     5,     4,     9,     0,     5,     2,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     5,     9,      0,     5,    4],
/*桑松木*/ [2,     4,     7,     5,    2,      4,     9,    5,      2,     7,     9,     5,     3,     7,     9,     2,      4,    7,     5,     2,     4,     9,     5,     2,     7,     10,    6,      2,     7,    9],
/*大溪水*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     0,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     1,     9,     4,     7,     2,      5,     4,    8],
/*沙中土*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     0,    5],
/*天上火*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     7,     9,     1,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     1,     4,      7,     10,   2],
/*石榴木*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     5,     1,     4,     9,     5,     1,     7,     9,     5,      2,     7,   10],
/*大海水*/ [10,    6,     4,     1,    9,      5,     8,    1,      9,     4,     8,     1,     5,     4,     8,     9,      5,    4,     1,     9,     1,     7,     1,     9,     4,     8,     1,      5,     4,    7]
];

//获取岁运单柱对元神的分值，第一个是岁运甲子序，第二个是元神甲子序
function GetSuiYunDanYS(syJZ, ysJZ)
{
    //纳音
    var syNaYin = Math.floor( syJZ/2 );
    var ysNaYin = Math.floor( ysJZ/2 );

   //是否相同阴阳
   var bTongYinYang = 0;
   if( (syJZ%2) == (ysJZ%2) )
   {
       bTongYinYang = 1;
   };
   //分值减5，把分数调整到 -5 到 +5
   if( 1 == bTongYinYang )   //同阴阳，直接返回岁运表里的数字
   {
       return NaYinSuiYunBiao[ysNaYin][syNaYin] - 5;    //行为元神纳音，列为岁运纳音
   }
   else
   {
        //五行
        var syWX =  NaYinWuXing[syNaYin];
        var ysWX = NaYinWuXing[ysNaYin];
       //计算delta
       var delta = 1;   //1分
       if( (ysWX+1)%5 == syWX ) //元神生岁运，泄的分值delta是 -1
       {
           delta = -1;
       };
       //返回
       return NaYinSuiYunBiao[ysNaYin][syNaYin] - 5 + delta;
   }  
   //
}







/*
 
//寿星天文历原版函数
 mingLiBaZi:function(jd,J,ob){ //命理八字计算。jd为格林尼治UT(J2000起算),J为本地经度弧度,返回在物件ob中
  var i, c, v;
  var jd2 = jd+dt_T(jd); //力学时
  var w = XL.S_aLon( jd2/36525, -1 ); //此刻太阳视黄经
  var k = int2( (w/pi2*360+45+15*360)/30 ); //1984年立春起算的节气数(不含中气)
  jd += pty_zty2(jd2/36525)+J/Math.PI/2; //本地真太阳时(使用低精度算法计算时差)
  ob.bz_zty = JD.timeStr(jd);

  jd += 13/24; //转为前一日23点起算(原jd为本日中午12点起算)
  var D = Math.floor(jd), SC = int2( (jd-D)*12 ); //日数与时辰

  v = int2(k/12+6000000);  ob.bz_jn = this.Gan[v%10]+this.Zhi[v%12];
  v = k+2+60000000;        ob.bz_jy = this.Gan[v%10]+this.Zhi[v%12];
  v = D - 6 + 9000000;     ob.bz_jr = this.Gan[v%10]+this.Zhi[v%12];
  v = (D-1)*12+90000000+SC;ob.bz_js = this.Gan[v%10]+this.Zhi[v%12];

  v-= SC, ob.bz_JS = ''; //全天纪时表
  for(i=0; i<13; i++){ //一天中包含有13个纪时
    c = this.Gan[(v+i)%10]+this.Zhi[(v+i)%12]; //各时辰的八字
    if(SC==i) ob.bz_js=c, c = '<font color=red>'+c+'</font>'; //红色显示这时辰
    ob.bz_JS += (i?' ':'') + c;
  }
 },


 */
//公历与儒略日互相转换使用 全局的 JD 类即可，参见 eph0.js 中定义。

//
//下面编写农历与儒略日互转
//儒略日转农历算法，返回 lunar.js 中的 日对象 ob
function GetJDtoNongLiOB(curJD)
{
    //公历月历对象
    var glYueLi = new Lunar();
    //获取公历的年月
    var MyJD = JD;
    var rGongLi =  MyJD.DD(curJD);
    //计算公历的月历信息
    glYueLi.yueLiCalc( rGongLi.Y, rGongLi.M);
    //gGLYueLi 最多保存31天，我们找到 curJD 那一天的对象返回即可。
    var theOB =  glYueLi.lun[ rGongLi.D - 1 ] ;    //数组序号从0开始的
    return theOB;
}

//节气名称，按照八字月柱，从立春开始
var JieQiMing = new Array(
'立春','雨水',
'惊蛰','春分',
'清明','谷雨',
'立夏','小满',
'芒种','夏至',
'小暑','大暑',
'立秋','处暑',
'白露','秋分',
'寒露','霜降',
'立冬','小雪',
'大雪','冬至',
'小寒','大寒',
'立春');
//根据公历年份返回24节气，节气从每年立春开始，这是八字月柱的排法
//共25个节气，今年立春到明年立春，北京时间
function GetJieQiArray(y)
{
    var arrayJQ = new Array(25);
    SSQ.calcY( int2((y-2000)*365.2422+180) );
    //SSQ.ZQ[] 数组就是从冬至开始的所有节气，我们提取立春开始的元素
    //时间要加上 J2000
    //冬至序号0，小寒1，大寒2，立春3，....，24还是冬至
    var i;
    //SSQ.ZQ[i] 是取整的节气日子，节气日子的12整点
    for(i=3; i<24; i++)//立春到大雪，21个
    {
        //obb.qi_accurate2(?) 计算精确的节气时间
        arrayJQ[i-3] = obb.qi_accurate2(SSQ.ZQ[i]) + J2000;
    }
    //计算下一年的节气表，提取冬至到立春 4 个
    SSQ.calcY( int2((y+1-2000)*365.2422+180) );
    //SSQ.ZQ[] 数组就是从冬至开始的所有节气
    //冬至序号0，小寒1，大寒2，立春3
    for(i=0; i<4; i++)
    {
        //obb.qi_accurate2(?) 计算精确的节气时间
        arrayJQ[21+i] =  obb.qi_accurate2(SSQ.ZQ[i]) + J2000;
    }
    /*
    //测试
    for(var j=0; j<25; j++)
    {
        //console.log( JieQiMing[j%24] + ": " + JD.JD2str( arrayJQ[j] ) );
    }
    */
    //返回   
    return arrayJQ;
};

//获取某年的农历月表，存储13个月，平年12个月，闰年13个月
//nongliYB 对象，包含数组
//nongliYB.arrayJDS[13]，每个月的儒略日期，调整到 0 点开始
//nongliYB.arrayNames[13]，13个月的名称，正、二、三，闰月为 闰五、闰六之类的
//nongliYB.arrayDaysCount[13]，每个月的天数，大月30，小月29
//nongliYB.iRunYue，闰月的序号，序号从0开始数，如果是负数，说明当年无闰月
//nongliYB.yueCount ，当年农历月总数，平年12个，闰年13个
function GetNongLiYueBiao(y)   //参数是数字年份，如2008
{
    var nongliYB = new Object();
    //新建属性
    nongliYB.arrayJDS = new Array(13);  //北京时间，-1 点子时开始
    nongliYB.arrayNames = new Array(13);
    nongliYB.arrayDaysCount = new Array(13);
    //闰月序号、当前农历月计数
    nongliYB.iRunYue = -1;
    nongliYB.yueCount = 0;
    
    //计算，从冬至开始的农历十一月
    SSQ.calcY( int2((y-2000)*365.2422+180) );
    //求出正月的序号
    var ixZhengYue = 0;
    for(var i=0;i<14;i++)
    {
       if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //已包含下一年的冬至
       if( "正" == SSQ.ym[i])
       {
           ixZhengYue = i;
           break;
       }
    }
    //console.log(ixZhengYue);
    var s1 = "";    //月名字符串
    for(var i=ixZhengYue; i<14; i++)
    {
        if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //已包含下一年的冬至
        if(SSQ.leap && i==SSQ.leap)     //闰月处理
        {
            s1='闰';
            nongliYB.iRunYue = i - ixZhengYue;//就是加1之前的 nongliYB.yueCount
        }
        else
        { 
            s1='';
        }
        s1 += SSQ.ym[i]; 
        nongliYB.arrayNames[ nongliYB.yueCount ] = s1; //月名，带闰字
        nongliYB.arrayDaysCount[ nongliYB.yueCount ] = SSQ.dx[i]; //大小月天数
        //存储儒略日，合朔数组 SSQ.HS[i] 是中午12点的，转换到 0 点
        nongliYB.arrayJDS[ nongliYB.yueCount ] = (SSQ.HS[i]+J2000) - 0.5;
        //计数增加
        nongliYB.yueCount += 1;
    }
    
    //计算下一年的，然后提取十一月、十二月，直到下年正月停止
    SSQ.calcY( int2((y+1-2000)*365.2422+180) );
    var ixEnd = 0;  //下一年正月的序号
    for(var i=0;i<14;i++)
    {
       if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //已包含下一年的冬至
       if( "正" == SSQ.ym[i])
       {
           ixEnd = i;
           break;
       }
    }
    //提取年尾的几个月份
    for(var i=0; i<ixEnd; i++)//提取下年正月之前的农历月
    {
        if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //已包含下一年的冬至
        //判断闰月
        if(SSQ.leap && i==SSQ.leap) 
        {
            s1='闰';
            nongliYB.iRunYue = nongliYB.yueCount;//yueCount 在加1之前是序号
        } 
        else 
        {
            s1='';
        }
        s1 += SSQ.ym[i]; 
        nongliYB.arrayNames[ nongliYB.yueCount ] = s1; //月名，带闰字
        nongliYB.arrayDaysCount[ nongliYB.yueCount ] = SSQ.dx[i]; //大小月天数
        //存储儒略日，合朔数组 SSQ.HS[i] 是中午12点的，转换到 0 点
        nongliYB.arrayJDS[ nongliYB.yueCount ] = (SSQ.HS[i]+J2000) - 0.5 ;
        //计数增加
        nongliYB.yueCount += 1;
    }
    
    //返回
    return nongliYB;
}
//根据农历月表和农历日子返回儒略日
//参数是该年农历月表、农历月序号、农历日序号，小时、分钟、秒钟
//小时数从 -1 到 22
function NongLiDayToJD(nongliYB, ixYue, ixRi, hh, mm, ss)
{
    var jdDay = nongliYB.arrayJDS[ ixYue ]     //该月起始日子
        + ixRi                 //加上天数
        + hh / 24.0           //小时
        + mm / (60*24.0)      //分钟
        + ss / (60*60*24.0) ; //秒
    return jdDay;   //返回儒略日
}

////////////////////////////////////////////////////////////
//根据起始年份和四柱，反推60年内日子，ftStartYear必须是甲子年
function GetFanTuiJD(ftStartYear, jzYear, ixMonth, jzDay, ixHour)
{
    //计算当前年份
    var curYear = ftStartYear + jzYear;
    //获取该年节气列表，当年立春到下年立春，25个节气
    var arrayJQ =  GetJieQiArray(curYear);
    //月份就是 ixMonth，节气范围是 ixMonth*2 到 ixMonth*2 + 2
    var nStartDay = Math.floor(arrayJQ[ixMonth*2] + 0.5);   //转到整数儒略日，节气日的中午12点
    var nEndDay = Math.floor(arrayJQ[ixMonth*2 + 2] + 0.5); //整数儒略日
    //计算起始节气的日子甲子序号
    var jzStartDay = (nStartDay -J2000 - 6 + 9000000)%60;
    //查找该月有无 jzDay 这天
    var theIndex = -1;
    var dCount = nEndDay - nStartDay;
    for(var i=0; i<=dCount; i++)
    {
        var curJiaZi = (jzStartDay+i) % 60;
        if( curJiaZi ==  jzDay)
        {
            theIndex = i;
            break;  //找到了
        }
    }
    //判断
    if( theIndex < 0 )
    {
        return -1;  //没找到
    }
    //假定找到了
    //如果该八字在节气当天，月份可能对，也可能错，不管对错，都当找到了
    var jdRet = (nStartDay - 0.5) + theIndex + (ixHour+ (1.0/3600)) * 2 / 24 ;  //返回偶数小时的当天，补了2秒，避免浮点数少了一丁点
    return jdRet;
}


