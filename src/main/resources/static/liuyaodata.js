//八卦和64卦数据
/////////////////////////
//根据从低到高三个爻 0、1 数字求八卦序号
function SanYaoToBaGuaIndex(y0, y1, y2)
{
    var ix = Number(y0) * 1 + Number(y1) * 2 +  Number(y2) * 4;
    return ix;
}

//八卦排法，从上到下，高位到低位
var BaGua = [
  "坤", //000
  "震", //001 阳
  "坎", //010 阳
  "兑", //011
  "艮", //100 阳
  "离", //101
  "巽", //110
  "乾"  //111 阳
];
//八卦序号查数字
var BaGuaChaShuZi = [
  8,//坤八
  4,//震四 阳
  6,//坎六 阳
  2,//兑二
  7,//艮七 阳
  3,//离三
  5,//巽五
  1 //乾一 阳
];

//数字查八卦序号
var ShuZiChaBaGua = [
    0, //0就是8，坤卦
    7, //1是乾，111
    3, //2是兑，011
    5, //3是离，101
    1, //4是震，001
    6, //5是巽，110
    2, //6是坎，010
    4, //7是艮，100
    0  //8是坤，000
];

//五行排序 木0 火1 土2 金3 水4
//卦宫查五行
var BaGuaWuXing = [
  2,//坤为地，土
  0,//震为雷，木
  4,//坎为水，水
  3,//兑为泽，金
  2,//艮为山，土
  1,//离为火，火
  0,//巽为风，木
  3 //乾为天，金
];

//八卦纳甲装天干，从下面往上装天干
//甲0  乙1  丙2  丁3  戊4
//己5  庚6  辛7  壬8  癸9
var NaJiaTianGan = [
    [1,1,1,  9,9,9], //坤000 内乙，外癸
    [6,6,6,  6,6,6], //震001 庚
    [4,4,4,  4,4,4], //坎010 戊
    [3,3,3,  3,3,3], //兑011 丁
    [2,2,2,  2,2,2], //艮100 丙
    [5,5,5,  5,5,5], //离101 己
    [7,7,7,  7,7,7], //巽110 辛
    [0,0,0,  8,8,8]  //乾111 内甲，外壬
];

//八卦纳甲装地支，从下面往上装地支
//子0  丑1  寅2  卯3  辰4  巳5
//午6  未7  申8  酉9  戌10  亥11
var NaJiaDiZhi = [
    [7,5,3,   1,11,9], //坤000
  [0,2,4,  6,8,10], //震001
  [2,4,6,  8,10,0], //坎010
    [5,3,1,   11,9,7], //兑011
  [4,6,8,  10,0,2], //艮100
    [3,1,11,  9,7,5], //离101
    [1,11,9,  7,5,3], //巽110
  [0,2,4,  6,8,10]  //乾111
];

//地支速查五行
//五行排序 木0 火1 土2 金3 水4
var DiZhiChaWuXing = [
    4,//子水
    2,//丑土
    0,//寅木
    0,//卯木
    2,//辰土
    1,//巳火
    1,//午火
    2,//未土
    3,//申金
    3,//酉金
    2,//戌土
    4 //亥水
];

//六亲数组，本卦五行为我，六亲其实只有五行，按照 %5 运算
var LiuQinArray = [
  "兄弟",//+0，同我
  "子孙",//+1，我生
  "妻财",//+2，我克
  "官鬼",//+3，克我
  "父母" //+4，生我
];

//六神数组，按照 %6 运算
var LiuShenArray = [
  "青龙",//0
  "朱雀",//1
  "勾陈",//2
  "腾蛇",//3
  "白虎",//4
  "玄武" //5
];
//日干起六神
var RiGanQiLiuShen = [
    0,0, //甲乙起青龙
    1,1, //丙丁起朱雀
    2,   //戊起勾陈
    3,   //己起腾蛇
    4,4, //庚辛起白虎
    5,5  //壬癸起玄武
];
//六神动化应事
/**
虎爻动，叫白虎出动；蛇动叫蛇出洞；勾动叫北极星动；朱动叫凤飞；龙动叫龙舞，武动叫武起。
虎出动，主凶事不利。蛇动主心机。勾动主变化。凤动主离别。龙飞主吉利。武动主争斗。
认识六神五行：
蛇为火。龙为木。玄为水。凤为火。陈变化，属日辰。虎为金。
注意，勾陈的五行是由日支决定的。
 */
var LiuShenYingShi = [
  "青龙起舞：主吉利。卜筮歌诀：发动青龙附用通，进财进禄福无空，临仇遇忌都无益，酒色成灾在此中。",//0
  "朱雀惜飞：主离别。卜筮歌诀：朱雀交重文印旺，煞神相并漫劳功，是非口舌皆因此，动出生身却利公。",//1
  "勾陈星动：主变化。卜筮歌诀：勾陈发动忧田土，累岁迍邅为忌逢，生用有情方是吉，若然安静不迷蒙。",//2
  "腾蛇出洞：主心机。卜筮歌诀：螣蛇鬼克忧萦绊，怪梦阴魔暗里攻，持墓落空休道吉，逢冲之日莫逃凶。",//3
  "白虎出山：主凶事不利。卜筮歌诀：白虎交重丧恶事，官司病患必成凶，持金动克妨人口，遇火生身便不同。",//4
  "玄武起浪：主争斗。卜筮歌诀：玄武动摇多暗昧，若临官鬼贼交攻，有情生世邪无犯，仇忌临之奸盗凶。" //5
];

//////////////////////////////////////////////////////
//64卦
//根据爻的阴阳数组计算
function LiuYaoArrayToGuaIndex(arrYao)
{
    var ix = arrYao[0] * 1
            +arrYao[1] * 2
            +arrYao[2] * 4
            +arrYao[3] * 8
            +arrYao[4] * 16
            +arrYao[5] * 32;
    return ix;    
}

//先看卦象。再看应爻。再看世爻。最后用神。
////补充六神动化。
//卦宫内八个卦的汉字序号，七是游魂，八是归魂
var GongNeiXuHao = [
  "一", "二", "三", "四", "五", "六", "七", "八"
];
//宫内八个卦的称呼
var GongNeiBaGuaMingChen = [
  "纯卦", "初世", "二世", "三世", "四世", "五世", "游魂", "归魂"
];
//安世爻位置，序号从0到5
var AnShiYao = [
    5, //纯卦六世
    0, //一世
    1, //二世
    2, //三世
    
    3, //四世
    4, //五世
    3, //游魂 四世
    2  //归魂 三世
];
//宫序号
//  "坤", 0
//  "震", 1
//  "坎", 2
//  "兑", 3
//  "艮", 4
//  "离", 5
//  "巽", 6
//  "乾"  7
//第0列卦名，第1列卦宫序号，第2列宫内八个卦的序号
//第3列应爻世爻关系：生克、冲合、比
var Array64Gua = [
    //上坤八卦
    //000 000
    ["坤为地", 0, 0, "六冲克"],
    //000 001
    ["地雷复", 0, 1, "六合克"],
    //000 010
    ["地水师", 2, 7, "世克应"],
    //000 011
    ["地泽临", 0, 2, "应生世"],
    //000 100
    ["地山谦", 3, 5, "世克应"],
    //000 101
    ["地火明夷", 2, 6, "应克世"],
    //000 110
    ["地风升", 1, 4, "世应比"],
    //000 111
    ["地天泰", 0, 3, "六合生"],
    ///////////////////////////
    //上震八卦
    //001 000
    ["雷地豫", 1, 1, "六合生"],
    //001 001
    ["震为雷", 1, 0, "六冲比"],
    //001 010
    ["雷水解", 1, 2, "世生应"],
    //001 011
    ["雷泽归妹", 3, 7, "世应比"],
    //001 100
    ["雷山小过", 3, 6, "世生应"],
    //001 101
    ["雷火丰", 2, 5, "应生世"],
    //001 110
    ["雷风恒", 1, 3, "应生世"],
    //001 111
    ["雷天大壮", 0, 4, "六冲克"],
    //////////////////////////////
    //上坎八卦
    //010 000
    ["水地比", 0, 7, "应生世"],
    //010 001
    ["水雷屯", 2, 2, "世克应"],
    //010 010
    ["坎为水", 2, 0, "六冲克"],
    //010 011
    ["水泽节", 2, 1, "六合克"],
    //010 100
    ["水山蹇", 3, 4, "应生世"],
    //010 101
    ["水火既济", 2, 3, "世应比"],
    //010 110
    ["水风井", 1, 5, "世克应"],
    //010 111
    ["水天需", 0, 6, "世生应"],
    //////////////////////////////
    //上兑八卦
    //011 000
    ["泽地萃", 3, 2, "世克应"],
    //011 001
    ["泽雷随", 1, 7, "世应比"],
    //011 010
    ["泽水困", 3, 1, "六合生"],
    //011 011
    ["兑为泽", 3, 0, "六冲比"],
    //011 100
    ["泽山咸", 3, 3, "应生世"],
    //011 101
    ["泽火革", 2, 4, "世生应"],
    //011 110
    ["泽风大过", 1, 6, "应克世"],
    //011 111
    ["泽天夬", 0, 5, "世克应"],
    //////////////////////////////
    //上艮八卦
    //100 000
    ["山地剥", 7, 5, "世克应"],
    //100 001
    ["山雷颐", 6, 6, "世克应"],
    //100 010
    ["山水蒙", 5, 4, "应克世"],
    //100 011
    ["山泽损", 4, 3, "应克世"],
    //100 100
    ["艮为山", 4, 0, "六冲克"],
    //100 101
    ["山火贲", 4, 1, "六合克"],
    //100 110
    ["山风蛊", 6, 7, "世克应"],
    //100 111
    ["山天大畜", 4, 2, "应生世"],
    ////////////////////////////////
    //上离八卦
    //101 000
    ["火地晋", 7, 6, "应生世"],
    //101 001
    ["火雷噬嗑", 6, 5, "应克世"],
    //101 010
    ["火水未济", 5, 3, "世应比"],
    //101 011
    ["火泽睽", 4, 4, "应克世"],
    //101 100
    ["火山旅", 5, 1, "六合生"],
    //101 101
    ["离为火", 5, 0, "六冲克"],
    //101 110
    ["火风鼎", 5, 2, "应克世"],
    //101 111
    ["火天大有", 7, 7, "应生世"],
    ////////////////////////////////
    //上巽八卦
    //110 000
    ["风地观", 7, 4, "世应比"],
    //110 001
    ["风雷益", 6, 3, "应克世"],
    //110 010
    ["风水涣", 5, 5, "世生应"],
    //110 011
    ["风泽中孚", 4, 6, "应生世"],
    //110 100
    ["风山渐", 4, 7, "世克应"],
    //110 101
    ["风火家人", 6, 2, "应生世"],
    //110 110
    ["巽为风", 6, 0, "六冲克"],
    //110 111
    ["风天小畜", 6, 1, "应克世"],
    ////////////////////////////////
    //上乾八卦
    //111 000
    ["天地否", 7, 3, "六合克"],
    //111 001
    ["天雷无妄", 6, 4, "六冲克"],
    //111 010
    ["天水讼", 5, 6, "应生世"],
    //111 011
    ["天泽履", 4, 5, "世克应"],
    //111 100
    ["天山遁", 7, 2, "世克应"],
    //111 101
    ["天火同人", 5, 7, "应克世"],
    //111 110
    ["天风姤", 7, 1, "应生世"],
    //111 111
    ["乾为天", 7, 0, "六冲比"]
];

function Get64GuaMing(ix)
{
    if(ix<0 || ix>=64)
    {
        return "卦序号错误";
    }
    var str = Array64Gua[ix][0];
    //调整为五个汉字宽度
    if( str.length < 4)//三个字
    {
        str = "&emsp;" + str + "&emsp;";//补两个汉字宽度
    }
    else//四个字
    {
        str = "&emsp;" + str ;//补一个汉字宽度
    }
    return str;    
}

//64卦释义，加拼音、注解
var Array64GuaShiYi = [
    //上坤八卦
    //000 000
    "坤（kūn）为地：上地下地，纯阴六冲，互相排斥，勾心斗角。",
    //000 001
    "地雷复（fù）：上地下雷，雷藏在地下，早晚复出、声响震天。代表风雨前暂时的宁静。", 
    //000 010
    "地水师（shī）：地下有水，取之甘田，代表拜师学艺，学习技能。",
    //000 011
    "地泽临（lín）：上地下泽，临就是往自己脚下看的意思，需要水往自己脚下打井即可，化解危机靠自己就行了。", 
    //000 100
    "地山谦（qiān）：地下有山，山藏到地底下，代表谦逊（xùn）礼让，隐藏实力，扮猪吃老虎。", 
    //000 101
    "地火明夷（yí）：地下有火，明夷是太阳将出地平线、明于东方，代表事情已经败露或即将败露，不利。",
    //000 110
    "地风升：上地下风，风属木，地风其实是指树木拔地而起，升起之相，代表进步成长。",
    //000 111
    "地天泰（tài）：上地下天，泰是安定的意思，天地反了为什么还安定？比如邹忌讽齐王纳谏，老百姓可以随意在街头指责齐王错误来领赏，齐国反而更加强大，代表不平衡中的实际平衡。", 
    ///////////////////////////
    //上震八卦
    //001 000
    "雷地豫（yù）：上雷下地，看到上面打雷，停不敢停，走不敢走，犹豫不决之相，代表胆小纠结。",
    //001 001
    "震（zhèn）为雷：上下都在打雷，代表害怕、焦急、恐怖的事情。占此卦者，不利。", 
    //001 010
    "雷水解（jiě）：上雷下水，其实就是打雷、下雨、解渴，万物得以滋润生长，代表前程似锦。", 
    //001 011
    "雷泽归妹：上雷下泽，雷属木、泽属金，互相敌视，归妹出自典故“帝乙归妹”，商周两个仇家进行政治联姻，全是假话空话。此卦占事如放空炮，没戏。",
    //001 100
    "雷山小过：上雷下山，雷在山顶没落地，尚未成灾。小过指尚未形成大错，现在改变事情策略还来得及，可以亡羊补牢。此卦代表事物有大的转变，以避免不利。",
    //001 101
    "雷火丰：上雷下火，丰是更多更加的意思。火上浇油，代表凶事更加紧急。",
    //001 110
    "雷风恒（héng）：上雷下风，恒是持久的意思，雷助风势、风借雷威。代表长期的合作、苟且、奸情、狼狈为奸等。", 
    //001 111
    "雷天大壮：雷在天上，声势又大又壮，代表气势磅（páng）礴（bó），强硬壮大。", 
    //////////////////////////////
    //上坎八卦
    //010 000
    "水地比：水在地上，水归河流、路归陆地，各行其道，即为比，是种自然好事，代表自然亨（hēng）合。", 
    //010 001
    "水雷屯（zhūn）：上水下雷，屯就是困难的意思，水中闷雷，声名不响，代表起步艰难。",
    //010 010
    "坎（kǎn）为水：上水下水，六冲争斗，代表感情争执、纳妾、三角恋等感情泛滥之事。", 
    //010 011
    "水泽节：水流入泽中，被收纳节制，归入之相，就是按别人的意思办。",
    //010 100
    "水山蹇（jiǎn），上水下山，蹇是困苦不顺利的意思，水往低处流，但却跑到山顶找水，自然困难重重，代表不易达成的目标或不现实的举动。",
    //010 101
    "水火既济：水往下流浇灭了火，既济是胜出的意思。", 
    //010 110
    "水风井：上水下风，风从下面鼓动水，其实就是喷泉，不用自己打水，井水就自动往上喷，源源不断。代表凡事行运亨（hēng）通，好事自己冒出来。",
    //010 111
    "水天需（xū）：水在天上，需即雨而，等着下雨，代表等待时机，不可乱动。",
    //////////////////////////////
    //上兑八卦
    //011 000
    "泽地萃（cuì）：上泽下地，萃是水草茂盛的样子，欣欣向荣之意。代表利于生计大事，适合进取发展。",
    //011 001
    "泽雷随（suí）：上泽下雷，随是立即的意思，泽金克雷木，雷立即消失在水泽之中，代表灾难和危险都过去了。",
    //011 010
    "泽水困：上泽下水，水困于泽内不流通。代表有志难伸，困惑之相。（这是六合卦，占婚恋吉。）", 
    //011 011
    "兑（duì）为泽：上泽下泽，指多个湖泊连成一片，融汇贯通，扩大学识之相。", 
    //011 100
    "泽山咸（xián）：上泽下山，咸鱼一梦。咸是感应感觉，水泽在山顶，卦主感觉吉利，其实是做美梦而已。占得此卦，求事心理吉，事实则多如南柯一梦。", 
    //011 101
    "泽火革（gé）：上泽下火，革是除去的意思，火藏于水泽中，火被除灭，代表处境不利。",
    //011 110
    "泽风大过：上泽下风，大过是重大过错。向湖泽里鼓风，想吹干湖泽，竭泽而渔，倒行逆施，是严重错误。",
    //011 111
    "泽天夬（guài）：上泽下天，夬是分决、分水岭的意思。水泽比天还高，这其实是说天在湖面的倒影，是颠倒之相，代表天下吉换凶或者凶换吉。",
    //////////////////////////////
    //上艮八卦
    //100 000
    "山地剥（bō）：上山下地，山为高，地为低，比喻高位的人剥削低位的人，剥削压榨之意。",
    //100 001
    "山雷颐（yí）：山下有雷，颐是长脸、有面子的意思，雷声响彻山谷，声旺大振。",
    //100 010
    "山水蒙（mēng）：上山下水，水冲山脚，基础不牢，做事靠瞎蒙，代表经验不足，需要学习基础知识。",
    //100 011
    "山泽损（sǔn）：上山下泽，把山头立在烂泥上，兵败如山倒，损失之相。",
    //100 100
    "艮（gèn）为山：上山下山，一山还有一山高，代表压力重重。",
    //100 101
    "山火贲（fèn）：山下起火，贲通愤，怒气、不满。山下林子起火，一发不可收拾，代表怨气积累，强势爆发。",
    //100 110
    "山风蛊（gǔ）：山下起风，蛊是害人邪术，意思是即将来临的不吉邪气，代表危机快要到来。", 
    //100 111
    "山天大畜（xù）：上山下天，畜是畜牧，古代称君主为人牧，大畜是比喻君主顺应天道管理百姓，意为大吉之相。",
    ////////////////////////////////
    //上离八卦
    //101 000
    "火地晋（jìn）：火在地上，晋是火势上升之意，地上一堆人发火，马上要打起来。代表争斗之意已起，一言不合就是干。",
    //101 001
    "火雷噬嗑（shì hé）：上火下雷，噬是张嘴咬，嗑是闭合嘴，此卦象如同被无数虫子咬一样，煎熬受罪。",
    //101 010
    "火水未济：上火下水，火往上烧，水向下流，谁都没有灭掉谁，未济是失败的意思。", 
    //101 011
    "火泽睽（kuí）：上火下泽，睽是睁大眼睛看，火在水泽上烧不起来，看似危险其实没有危险，自己吓自己。",
    //101 100
    "火山旅（lǚ）：上火下山，旅是出行跑路的意思。现代取象如同火山爆发，建议赶紧离开之意。", 
    //101 101
    "离（lí）为火：上火下火全是火，发火发飙之相。", 
    //101 110
    "火风鼎（dǐng）：上火下风，从下面鼓风助火，鼎是鼎力相助，风亦属木，木助火势，越烧越旺。代表有贵人鼎力相助。",
    //101 111
    "火天大有：火在天上，代表其势极大，大到能突破天际。大有灾难或者大有财富之相。", 
    ////////////////////////////////
    //上巽八卦
    //110 000
    "风地观（guān）：风在地上，吉凶难定，观望一阵子再说，即围观。", 
    //110 001
    "风雷益（yì）：上风下雷，雷落地为灾，益是增加的意思，困难之上再加困难，雪上加霜。", 
    //110 010
    "风水涣（huàn）：上风下水，风生水起，焕然一新，事物开始发展之相。", 
    //110 011
    "风泽中孚（fú）：上风下泽，谁也不招惹谁，中孚是代表中立的意思。",
    //110 100
    "风山渐（jiàn）：上风下山，渐是慢慢地、逐渐，风属木，树木在山上慢慢生长，逐渐壮大。代表循序渐进，利于基业。",
    //110 101
    "风火家人：上风下火，风助火势，既烧了家，又烧了人，代表家和人都有灾难，大不利之相。", 
    //110 110
    "巽（xùn）为风：上风下风，双风皆动，代表事物发展双向变化之相。", 
    //110 111
    "风天小畜（xù）：天上起风，是快下雨或刮大风的征兆，风雨蓄力之意，代表将要出现危机的势头。", 
    ////////////////////////////////
    //上乾八卦
    //111 000
    "天地否（pǐ）：上天下地，否是坏、不利的意思，为什么天地看着正常反而不利？因为天欺负惯了地，地早晚逆天，代表合理中的严重不合理，比如贪官污吏欺压百姓惯了，早晚横死街头。",
    //111 001
    "天雷无妄（wàng）：上天下雷，就像被雷劈了，无妄之灾，代表遇到不测之灾。",
    //111 010
    "天水讼（sòng）：天下有水，庄稼可以生长，但是水太大反而成灾。讼是自我检讨反省，代表吉中想忧，居安思危。", 
    //111 011
    "天泽履（lǚ）：上天下泽，履是行走的足迹，在泥泽中循着前人的足迹行走，就不会掉坑里，代表学习前人经验就没有灾难。",
    //111 100
    "天山遁（dùn）：天下有山，山中有路，遁是道路的意思。山中有路可行，代表正确合理、一心一意或者固执（一条道走到黑）。",
    //111 101
    "天火同人：天下有火，可以为用，也可以为灾，同人就是众人同心协力，同甘共苦之意。",
    //111 110
    "天风姤（gòu）：天下有风，姤是遇到的意思。阳风起，遇到了好天气，代表可行的时机。", 
    //111 111
    "乾（qián）为天：上天下天，纯阳六冲，势均力敌，对冲争斗之相。"
];

//子0  丑1  寅2  卯3  辰4  巳5
//午6  未7  申8  酉9  戌10  亥11

//甲0  乙1  丙2  丁3  戊4
//己5  庚6  辛7  壬8  癸9
//天干查日禄
var TGLuStrs = [
    "寅", "卯", //甲乙
    "巳", "午", //丙丁
    "巳", "午", //戊己
    "申", "酉", //庚辛
    "亥", "子"  //壬癸
];
//日干查贵人
var TGGuiRenStrs = [
    "丑、未", //甲戊兼牛羊
    "子、申", //乙己鼠猴乡
    "亥、酉", //丙丁猪鸡位
    "亥、酉", //丁
    "丑、未", //戊
    "子、申", //己
    "午、寅", //庚辛逢马虎
    "午、寅", //辛
    "卯、巳", //壬癸兔蛇藏
    "卯、巳"  //癸
];

//日支查桃花，地支序号%4 余数来查
var DZTaoHuaStrs = [
    "酉", //余0，申子辰，见酉
    "午", //余1，巳酉丑，见午
    "卯", //余2，寅午戌，见卯
    "子"  //余3，亥卯未，见子
];

//日支查驿马，地支序号%4 余数来查
var DZYiMaStrs = [
  "寅", //申子辰，冲寅
  "亥", //巳酉丑，冲亥
  "申", //寅午戌，冲申
  "巳"  //亥卯未，冲巳
];

//起卦方式
var QiGuaFangShiStrs = [
    "手工摇卦", //0
    "时间起卦", //1
    "报数起卦", //2
    "汉字起卦"  //3
];
//
//根据八字对象、六爻基本对象计算排盘数据，生成完整六爻排盘信息
function GenFullLiuYaoPaiPan(bzpp, lypp)
{
    //////////////////////////////////
    //先排本卦
    //计算本卦上卦序号、下卦序号
    lypp.bgShangGuaIndex = SanYaoToBaGuaIndex(lypp.arrYinYang[3], lypp.arrYinYang[4], lypp.arrYinYang[5]);
    lypp.bgXiaGuaIndex = SanYaoToBaGuaIndex(lypp.arrYinYang[0], lypp.arrYinYang[1], lypp.arrYinYang[2]);
    //本卦总序、五行
    lypp.bgIndex = LiuYaoArrayToGuaIndex( lypp.arrYinYang );
    lypp.bgWuXing = BaGuaWuXing[ Array64Gua[lypp.bgIndex][1] ]; //先取卦宫，再取卦宫所属五行
    ///////////////
    //安置6个地支
    lypp.bgDiZhi = new Array(6);
    //上卦，3，4，5
    lypp.bgDiZhi[3] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][3];
    lypp.bgDiZhi[4] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][4];
    lypp.bgDiZhi[5] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][5];
    //下卦，0，1，2
    lypp.bgDiZhi[0] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][0];
    lypp.bgDiZhi[1] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][1];
    lypp.bgDiZhi[2] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][2];
    ////////////////////////
    //安置6个天干
    lypp.bgTianGan = new Array(6);
    //上卦，3，4，5
    lypp.bgTianGan[3] = NaJiaTianGan[ lypp.bgShangGuaIndex ][3];
    lypp.bgTianGan[4] = NaJiaTianGan[ lypp.bgShangGuaIndex ][4];
    lypp.bgTianGan[5] = NaJiaTianGan[ lypp.bgShangGuaIndex ][5];
    //下卦，0，1，2
    lypp.bgTianGan[0] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][0];
    lypp.bgTianGan[1] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][1];
    lypp.bgTianGan[2] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][2];
    ////////////////
    debugger;
    //本卦的地支五行、六亲序号
    lypp.bgDZWX = new Array(6); //木0 火1 土2 金3 水4
    lypp.bgLiuQin = new Array(6);//兄弟0 子孙1 妻财2 官鬼3 父母4
    for(var i=0; i<6; i++)
    {
        lypp.bgDZWX[i] = DiZhiChaWuXing[ lypp.bgDiZhi[i] ];//地支查五行
        //计算六亲
        lypp.bgLiuQin[i] = (lypp.bgDZWX[i] + 5 - lypp.bgWuXing) % 5;//六亲只有五个
    }
    ////////////////////
    //世爻应爻位置，先取卦在卦宫内的序号
    var bgGongNeiIndex = Array64Gua[lypp.bgIndex][2] ;
    lypp.bgShiYao = AnShiYao[bgGongNeiIndex];
    lypp.bgYingYao =  (lypp.bgShiYao + 3) % 6;
    //记录本卦世爻1、应爻2、普通爻0 的数组
    lypp.bgShiYingPu = new Array(6);
    for(var i=0; i<6; i++)//初始化为0
    {
        lypp.bgShiYingPu[i] = 0; 
    }
    lypp.bgShiYingPu[lypp.bgShiYao] = 1; //标记世爻
    lypp.bgShiYingPu[lypp.bgYingYao] = 2; //标记应爻
    //////////////////////////////////
    //再排之卦（变卦、后卦），根据本卦和动静计算之卦
    lypp.arrZGYinYang = new Array(6);
    for(var i=0; i<6; i++)
    {
        lypp.arrZGYinYang[i] = (lypp.arrYinYang[i] + lypp.arrDongJing[i])%2;
    }    
    //计算之卦的上下序号
    lypp.zgShangGuaIndex = SanYaoToBaGuaIndex(lypp.arrZGYinYang[3],lypp.arrZGYinYang[4],lypp.arrZGYinYang[5]);
    lypp.zgXiaGuaIndex = SanYaoToBaGuaIndex(lypp.arrZGYinYang[0],lypp.arrZGYinYang[1],lypp.arrZGYinYang[2]);
    //之卦的总序，不需要管之卦的五行
    lypp.zgIndex = LiuYaoArrayToGuaIndex( lypp.arrZGYinYang );
    //////////////////////
    //安置之卦六个地支
    lypp.zgDiZhi = new Array(6);
    //上卦 345
    lypp.zgDiZhi[3] = NaJiaDiZhi[lypp.zgShangGuaIndex][3];
    lypp.zgDiZhi[4] = NaJiaDiZhi[lypp.zgShangGuaIndex][4];
    lypp.zgDiZhi[5] = NaJiaDiZhi[lypp.zgShangGuaIndex][5];
    //下卦 012
    lypp.zgDiZhi[0] = NaJiaDiZhi[lypp.zgXiaGuaIndex][0];
    lypp.zgDiZhi[1] = NaJiaDiZhi[lypp.zgXiaGuaIndex][1];
    lypp.zgDiZhi[2] = NaJiaDiZhi[lypp.zgXiaGuaIndex][2];
    /////////////////////
    //安置六个天干
    lypp.zgTianGan = new Array(6);
    //上卦 345
    lypp.zgTianGan[3] = NaJiaTianGan[lypp.zgShangGuaIndex][3];
    lypp.zgTianGan[4] = NaJiaTianGan[lypp.zgShangGuaIndex][4];
    lypp.zgTianGan[5] = NaJiaTianGan[lypp.zgShangGuaIndex][5];
    //下卦 012
    lypp.zgTianGan[0] = NaJiaTianGan[lypp.zgXiaGuaIndex][0];
    lypp.zgTianGan[1] = NaJiaTianGan[lypp.zgXiaGuaIndex][1];
    lypp.zgTianGan[2] = NaJiaTianGan[lypp.zgXiaGuaIndex][2];
    ///////////////////////
    //之卦的地支五行、六亲序号
    lypp.zgDZWX = new Array(6); //木0 火1 土2 金3 水4
    lypp.zgLiuQin = new Array(6);   //兄弟0 子孙1 妻财2 官鬼3 父母4
    for(var i=0; i<6; i++)
    {
        lypp.zgDZWX[i] = DiZhiChaWuXing[ lypp.zgDiZhi[i] ]; //地支查五行
        //计算六亲
        lypp.zgLiuQin[i] = (lypp.zgDZWX[i] + 5 - lypp.bgWuXing) % 5;//六亲只有五种
    }
    ////////////////////
    //世爻应爻位置，先取卦在卦宫内的序号
    var zgGongNeiIndex = Array64Gua[lypp.zgIndex][2] ;
    lypp.zgShiYao = AnShiYao[ zgGongNeiIndex ];//世爻
    lypp.zgYingYao =  (lypp.zgShiYao + 3)%6;    //应爻
    //记录之卦世爻1、应爻2、普通爻0 的数组
    lypp.zgShiYingPu = new Array(6);
    for(var i=0; i<6; i++)//初始化为0
    {
        lypp.zgShiYingPu[i] = 0; 
    }
    lypp.zgShiYingPu[lypp.zgShiYao] = 1; //标记世爻
    lypp.zgShiYingPu[lypp.zgYingYao] = 2; //标记应爻    
    
    /////////////////////////////////////
    //安置六神、明动暗动
    //八字日干
    var nRiGan = bzpp.iRiJZ % 10;
    var lsStart = RiGanQiLiuShen[nRiGan]; //最下面起始的六神
    lypp.arrLiuShen = new Array(6);
    for(var i=0; i<6; i++)
    {
        lypp.arrLiuShen[i] = (lsStart+i) % 6;//六神是六个
    }
    //明动1、暗动2，不动0
    lypp.arrMingAnDong = new Array(6);
    for(var i=0; i<6; i++)
    {
        //判断动静爻
        if( lypp.arrDongJing[i] > 0)
        {
            lypp.arrMingAnDong[i] = 1; //明动
        }
        else
        {
            //静爻，再分暗动和全静
            if(   (lypp.bgTianGan[i] != lypp.zgTianGan[i])
                ||(lypp.bgDiZhi[i] != lypp.zgDiZhi[i]) )//前后爻的干支有不同，就是暗动
            {
                lypp.arrMingAnDong[i] = 2; //暗动
            }
            else
            {
                lypp.arrMingAnDong[i] = 0; //不动
            }
        }
    }    
    ///////////////////////////////////
    //计算本卦没有的五行，木0 火1 土2 金3 水4
    var awxCount = new Array(5);
    for(var k=0; k<5; k++)//初始化为0
    {
        awxCount[k] = 0;
    }
    //本卦六个爻，看看五行是否上卦
    for(var i=0; i<6; i++)
    {
        awxCount[ lypp.bgDZWX[i] ]++;
    }//计数为0的五行序号是没上卦的
    
    //计算伏神，直接写成字符串数组
    lypp.FuShenStrs = new Array(6);
    for(var i=0; i<6; i++)//从下往上排
    {
        lypp.FuShenStrs[i] = GetNSpace(5); //初始化为5汉字空格
    }
    //本卦的卦宫纯卦序号
    var bgGuaGongIndex =  Array64Gua[lypp.bgIndex][1] ;
    //伏神的地支、天干
    var fsDiZhi = NaJiaDiZhi[bgGuaGongIndex] ;//卦宫纯卦的6个直接全部复制
    var fsTianGan = NaJiaTianGan[bgGuaGongIndex] ;//纯卦天干
    //纯卦的六个地支五行
    var fsDZWX = new Array(6);
    for(var i=0; i<6; i++)
    {
        fsDZWX[i] = DiZhiChaWuXing[ fsDiZhi[i] ]; //这一行的五行
        //判断有无上卦
        if( awxCount[ fsDZWX[i] ] < 1 )//没有上卦
        {
            //填充伏神字符串
            lypp.FuShenStrs[i] = LiuQinArray[ (fsDZWX[i]+5 - lypp.bgWuXing) % 5 ]
                + TianGan[ fsTianGan[i] ]
                + DiZhi[ fsDiZhi[i] ]
                + WuXing[ fsDZWX[i] ];
        }//默认已经填了五个汉字空格，上卦的六亲五行不管
    } 
    /////////////////////////////////
    //动化计算：化进化退，化反吟 化伏吟，判断明动和暗动
    lypp.arrHuaShenStr = new Array(6);
    //判断
    for(var i=0; i<6; i++)
    {
        if( lypp.arrMingAnDong[i] < 1 )//全静爻
        {
            lypp.arrHuaShenStr[i] = GetNSpace(2);//填充双空格
        }
        else//动爻，明动暗动都算
        {
            //判断反吟伏吟
            if( lypp.bgDiZhi[i] === lypp.zgDiZhi[i] )//化伏吟
            {
                lypp.arrHuaShenStr[i] = "→伏";
            }
            else if( lypp.bgDiZhi[i] === (lypp.zgDiZhi[i]+6)%12 )
            {
                //化六冲地支，反吟
                lypp.arrHuaShenStr[i] = "→反";
            }
            else if(lypp.bgDZWX[i] !== lypp.zgDZWX[i]  ) //除去伏吟反吟，如果地支五行不一样，说明没有化进化退
            {
                lypp.arrHuaShenStr[i] = "→" + GetNSpace(1);
            }
            else//前后五行一样，但不是伏吟、反吟
            {                
                //进神判断
                if( JinShenArray[ lypp.bgDiZhi[i] ] === lypp.zgDiZhi[i] )
                {
                    lypp.arrHuaShenStr[i] = "→进" ;
                }
                //退神判断
                else if( TuiShenArray[ lypp.bgDiZhi[i] ] === lypp.zgDiZhi[i] )                 
                {
                    lypp.arrHuaShenStr[i] = "→退" ;
                }
                else
                {
                    lypp.arrHuaShenStr[i] = "→" + GetNSpace(1);//没查到
                }//end 进神退神
            }//end 伏反进退
        }//end 动爻
    }//end for     
    
    //////////////////////////////////
    //判断全静卦
    var sum = 0;
    for(var i=0; i<6; i++)
    {
        sum += lypp.arrDongJing[i];
    }
    lypp.bQuanJingGua = false; //默认不是全静
    if( sum < 1 )//没有动爻
    {
        lypp.bQuanJingGua = true; //没有动爻是全静
        //alert("全静！");
    }    
    //返回完整的六爻排盘
    return lypp;
}


//进神判断
var JinShenArray = [
    -1, //0子没有
    4,  //1丑化辰
    3,  //2寅化卯
    -1, //3卯没有
    7,  //4辰化未
    6,  //5巳化午
    -1, //6午没有
    10, //7未化戌
    9,  //8申化酉
    -1, //9酉没有
    1,  //10戌化丑
    0   //11亥化子
];
//子0  丑1  寅2  卯3  辰4  巳5
//午6  未7  申8  酉9  戌10  亥11
//退神判断
var TuiShenArray = [
    11, //0子退亥
    10, //1丑退戌
    -2, //2寅没有
    2,  //3卯退寅
    1,  //4辰退丑
    -2, //5巳没有
    5,  //6午退巳
    4,  //7未退辰
    -2, //8申没有
    8,  //9酉退申
    7,  //10戌退未
    -2  //11亥没有
];



//手工爻的数组，少阴0，少阳1，老阴2，老阳3
//手工爻对应的字符串
var ShouGongYaoStrs = [
  "▅▅&emsp;▅▅&emsp;",//少阴
  "▅▅▅▅▅&emsp;",    //少阳
  "▅▅&emsp;▅▅╳",    //老阴
  "▅▅▅▅▅〇"   //老阳
];
//var SpaceEN2 = "&emsp;";//双英空格
function GetLiuYaoHTML(bzpp, lypp)
{
    //排盘的HTML字符串
    var strResult =  "<div align='left' style='line-height: 18pt; font-family: 宋体;'>"; 
    var strTemp = "";
    //不换行标记开始
    strResult += "<span style='white-space: nowrap;'>";
    //打印起卦占事、起卦方式、性别、生年
    strTemp = "所占事情：" + lypp.strZhanShi + CheckLiuNianGua(lypp.strZhanShi) + "<br>";
    
    strResult += strTemp;
    strTemp = "起卦方式：" +  lypp.strQiGuaFangShi + "<br>"
        + "卦主性别：" + GetBoldText( lypp.strGender ) + "，"
        + "出生年份：" + lypp.strShengNian + "<br>";
    strResult += strTemp;
    //公历和农历时间
    strResult += GetGGTimeStr(bzpp.JDBirth) + "<br>";
    strResult += GetNNTimeStr(bzpp.JDBirth) + "<br>";
    //日柱干支，查神煞
    var riGan = bzpp.iRiJZ % 10;
    var riZhi = bzpp.iRiJZ % 12;
    strTemp = "神煞：贵人→" + TGGuiRenStrs[riGan]
        + "，驿马→" + DZYiMaStrs[riZhi%4]
        + "，桃花→" + DZTaoHuaStrs[riZhi%4]
        + "，日禄→" + TGLuStrs[riGan] +  "<br>";
    strResult += strTemp;    
    //干支计时
    strTemp = "干支：" + GetBoldText( GetBlueText( JiaZi[bzpp.iNianJZ] ) ) + "年"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iYueJZ] ) ) + "月"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iRiJZ] ) ) + "日"
        + SpaceEN2 + GetBoldText(  JiaZi[bzpp.iShiJZ] ) + "时 "
        +  GetBoldText( GetFuchsiaText( GetRiKongWang( bzpp.iRiJZ ) ))
        + "<br>" ;
    strResult += strTemp; 
    strResult += "<br>";
    ///////////////////////////
    //排卦名
    strTemp = GetNSpace(9) 
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.bgIndex )))//对齐六个阴阳爻
        + GetNSpace(1) //对齐OX
        + "（" + Array64Gua[ lypp.bgIndex ][3] + "）" //对齐六亲
        + GetNSpace(1) + GetNSpace(1) //对齐世应
        + GetBlackText("之" + GetNSpace(1) ) +  GetNSpace(1) //对齐之化
        //再加后卦
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.zgIndex )))//对齐六个阴阳爻
        + GetNSpace(1) //对齐空格
        + "（" + Array64Gua[ lypp.zgIndex ][3] + "）" //对齐六亲
    ;       
    strResult += strTemp + "<br>";
    //排卦宫
    strTemp = "六神" + GetNSpace(2) + "伏"+ GetNSpace(1) + "神" + GetNSpace(2) 
        + "&emsp;" + BaGua[ Array64Gua[lypp.bgIndex][1] ] + "宫" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.bgIndex][2] ]  //对齐爻
        + GetNSpace(1) //对齐OX
        + GetNSpace(5)  //对齐六亲
        + GetNSpace(1) + GetNSpace(1) //对齐世应
        + GetBlackText( GetNSpace(2) ) +  GetNSpace(1) //对齐之化
        //再加后卦
        + "&emsp;" + BaGua[ Array64Gua[lypp.zgIndex][1] ] + "宫" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.zgIndex][2] ]  //对齐爻
        + GetNSpace(1) //对齐OX
        + GetNSpace(5) //对齐后卦六亲
    ; 
    strResult += strTemp + "<br>";
    
    //排六行
    for(var i=5; i>=0; i--)
    {
        strTemp = LiuShenArray[ lypp.arrLiuShen[i] ] + GetNSpace(1) //六神
            + lypp.FuShenStrs[i] + GetNSpace(1)  //伏神
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrShouGongYao[i] ], lypp.arrMingAnDong[i] )
            //六亲干支五行，用世应普配色
            +  PackShiYingPuColor( (LiuQinArray[ lypp.bgLiuQin[i] ] + TianGan[ lypp.bgTianGan[i] ] 
                + DiZhi[ lypp.bgDiZhi[i] ] + WuXing[ lypp.bgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.bgShiYingPu[i] ]) , lypp.bgShiYingPu[i])
            //化进化退配色，同明暗动爻
            + PackMingAnColor( lypp.arrHuaShenStr[i], lypp.arrMingAnDong[i] ) + GetNSpace(1)
            //之卦的阴阳爻
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrZGYinYang[i] ], lypp.arrMingAnDong[i] )
            //六亲干支五行，用世应普配色
            +  PackShiYingPuColor( (LiuQinArray[ lypp.zgLiuQin[i] ] + TianGan[ lypp.zgTianGan[i] ] 
                + DiZhi[ lypp.zgDiZhi[i] ] + WuXing[ lypp.zgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.zgShiYingPu[i] ]) , lypp.zgShiYingPu[i] )
        ;
        //追加一行
        strResult += strTemp + "<br>";
    }
    strResult += "<br>";
    strResult += "</span>"; //不换行标记的末尾
    //添加看卦提示信息
    strResult += GetKanGuaTiShiInfo(bzpp, lypp);
    strResult += "<br>";
    //补上末尾的标签
    strResult += "<br></div>";
    //替换中文空格，适应部分手机浏览器字体
    strResult = strResult.replace(/&emsp;/g, "　");
    
    //返回
    return strResult;
}

//检查是否为流年卦
function CheckLiuNianGua( strZhanShi )
{
    var year = parseInt(strZhanShi);
    var strRet = "";
    if( (year >= gStartYear) && (year <= gEndYear) )
    {
        var njz = GetNianJiaZiShu(year);
        strRet =  "流年卦 " +  JiaZi[njz]  + WuXing[ DiZhiChaWuXing[njz%12] ]  ;
        strRet = "（" + GetBoldText( GetFuchsiaText(strRet) ) + "）";
    };
    return strRet;
}


//获取看卦的提示信息
function GetKanGuaTiShiInfo(bzpp, lypp)
{
    var strResult = "";
    var strTemp = "";
    strResult += "<br>";
    strResult += "<hr>";
    //看卦第一步：卦象
    strTemp = "<b>1、看卦象</b><br>本卦" + Array64GuaShiYi[ lypp.bgIndex ] + "<br>";
    if( ! lypp.bQuanJingGua )//不是全静卦，有变卦
    {
        strTemp += "变卦" + Array64GuaShiYi[ lypp.zgIndex ] +  "<br>"; 
    }
    strResult += strTemp;
    //第二步，看应爻
    strTemp = "<b>2、看应爻</b><br>本卦应爻和世爻关系：" + Array64Gua[ lypp.bgIndex ][3] + "<br>"
        + "卜筮歌诀：世应相生则吉，世应相克则凶，世应比合事却中，作事谋为可用。应动他人反变，应空他意难同，世空世动我心慵，只恐自家懒动。"
        + "<br>";
    strResult += strTemp;
    //第三步，看世爻
    strTemp = "<b>3、看世爻</b><br>本卦" +  LiuQinChiShiStrs[lypp.bgLiuQin[lypp.bgShiYao]] + "<br>" ;
    strResult += strTemp;
    //第四步看用神
     strTemp = "<b>4、看用神和卦时</b>（由解卦人定）<br>" 
            + "<a href=\"liuyaoinfo.htm#quyongshen\" target=\"new\">点击查看取用神提示 </a><br> "
            + "<a href=\"liuyaoinfo.htm#quguashi\" target=\"new\">点击查看取卦时提示 </a>（取卦时以定占事的用神旺衰）"
            + "<br>"  ;
    strResult += strTemp;
    //附加步骤，六神动提示
    strTemp = "<b>5、六神出动提示</b><br>";
    if( lypp.bQuanJingGua )//全静卦无动
    {
        strTemp += "无<br>";
    }
    else//存在动爻
    {
        for(var i=5; i>=0; i--) //LiuShenYingShi为六神主事数组
        {
            if( lypp.arrMingAnDong[i] > 0 )//明动暗动都算
            {
                strTemp += LiuShenYingShi[ lypp.arrLiuShen[i] ] + "<br>" ;
            }
        }
    }
    strResult += strTemp;
    return strResult;
}

//六亲持世爻的判断
var LiuQinChiShiStrs = [
   //+0，同我
  "兄弟持世：测买房、获奖、信件等为吉；测买卖、财运、男子婚姻等为凶。<br>\
        卜筮歌诀：兄弟持世莫求财，官兴须虑祸将来，朱雀并临防口舌，如摇必定损妻财，父母相生身有寿，化官化鬼有奇灾。",
   //+1，我生
  "子孙持世：测买卖、出行、烦恼等为吉；测升学、考试、官职、女子婚姻等不吉。<br>\
        卜筮歌诀：子孙持世事无忧，求名切忌坐当头，避乱许安失可得，官讼从此便了休，有生无克诸般吉，有克无生反见愁。",
  //+2，我克
  "妻财持世：测买卖、男子婚姻、财运、失物等为吉；测长辈、父母等则不吉。<br>\
        卜筮歌诀：财爻持世宜财荣，兄若交重不可逢，更遇子孙明暗动，利身克父丧文风，求官问讼宜财托，动变兄官万事凶。",
  //+3，克我
  "官鬼持世：测官位、升迁、调工作、女子婚姻、考试升学为吉；测兄弟安危、自己疾病等不吉。<br>\
        卜筮歌诀：鬼爻持世事难安，占身不病也遭官，财物时时忧失脱，功名最喜世当权，入墓愁疑无散日，逢冲转祸化为安。",
  //+4，生我
  "父母持世：测升学、考试、信件、文书、契约等为吉；测子女疾病、生育等为不吉。<br>\
        卜筮歌诀：父母持世主身劳，求嗣妾众也难招，官动财旺宜赴试，财摇谋利莫心焦，占身财动无贤妇，有恐区区寿不高。" 
];
//

//根据儒略日生成公历时间字符串
function GetGGTimeStr(curJD)
{
    var myDD = JD.DD(curJD);
    var strTemp = "公历时间：" + String(myDD.Y) + "年" 
        + String(myDD.M) + "月"
        + String(myDD.D) + "日"
        + String(myDD.h) + "时"
        + String(myDD.m) + "分"
        + "， " + WeekDays[ GetiDayOfWeek(curJD) ] ;
    //返回
    return strTemp;
}
//根据儒略日生成农历时间字符串
function GetNNTimeStr(curJD)
{
    var myDD = JD.DD(curJD);//公历的
    //农历，0点是今天的子时，23点后是明天的子时，要区分
    var theOB;
    if(myDD.h >= 23)//农历时间
    {
        theOB = GetJDtoNongLiOB(curJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(curJD);
    }
    var strTemp = "农历时间：" + theOB.Lyear3 + "年 "
              + theOB.Lleap + theOB.Lmc + "月 "
              + theOB.Ldc + "日 "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "时"
              + " （黄帝" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "年）";//黄帝纪年比网上多56年
    //返回
    return strTemp;
}

function GetNSpace(n)
{
    var count = Number(n);
    if(count < 1)
    {
        return "";
    }
    //构造
    var strRet = "";
    for(var i=0; i<count; i++)
    {
        strRet += SpaceEN2;
    }
    return strRet;
}
//红色明动，紫色暗动
var ColorMingAn = [
    "black",
    "red",
    "#800080"
];
//根据不动、明动、暗动，进行爻的配色
function PackMingAnColor(text, ix)
{
    var clr = "black";
    if( ix>=0 && ix <=2 )
    {
        clr = ColorMingAn[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
//世 应 普的文字
var ShiYingPuStrs = [
    "&emsp;",
    "世",
    "应"
];
//根据世爻、应爻、普通，封装六亲文字
var ColorShiYingPu = [
    "black",
    "#000080",
    "#4B0082"
];


function PackShiYingPuColor(text, ix)
{
    var clr = "black";
    if( ix>=0 && ix <=2 )
    {
        clr = ColorShiYingPu[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
//补充全静卦的排版，只需要排本卦
function GetLiuYaoHTMLQuanJingGua(bzpp, lypp)
{
    //排盘的HTML字符串
    var strResult =  "<div align='left' style='line-height: 18pt; font-family: 宋体;'>"; 
    var strTemp = "";
    //不换行标记开始
    strResult += "<span style='white-space: nowrap;'>";
    //打印起卦占事、起卦方式、性别、生年
    strTemp = "所占事情：" + lypp.strZhanShi + CheckLiuNianGua(lypp.strZhanShi) + "<br>";
    
    strResult += strTemp;
    strTemp = "起卦方式：" +  lypp.strQiGuaFangShi + "<br>"
        + "卦主性别：" + GetBoldText( lypp.strGender ) + "，"
        + "出生年份：" + lypp.strShengNian + "<br>";
    strResult += strTemp;
    //公历和农历时间
    strResult += GetGGTimeStr(bzpp.JDBirth) + "<br>";
    strResult += GetNNTimeStr(bzpp.JDBirth) + "<br>";
    //日柱干支，查神煞
    var riGan = bzpp.iRiJZ % 10;
    var riZhi = bzpp.iRiJZ % 12;
    strTemp = "神煞：贵人→" + TGGuiRenStrs[riGan]
        + "，驿马→" + DZYiMaStrs[riZhi%4]
        + "，桃花→" + DZTaoHuaStrs[riZhi%4]
        + "，日禄→" + TGLuStrs[riGan] +  "<br>";
    strResult += strTemp;    
    //干支计时
    strTemp = "干支：" + GetBoldText( GetBlueText( JiaZi[bzpp.iNianJZ] ) ) + "年"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iYueJZ] ) ) + "月"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iRiJZ] ) ) + "日"
        + SpaceEN2 + GetBoldText(  JiaZi[bzpp.iShiJZ] ) + "时 "
        +  GetBoldText( GetFuchsiaText( GetRiKongWang( bzpp.iRiJZ ) ))
        + "<br>" ;
    strResult += strTemp; 
    strResult += "<br>";
    ///////////////////////////
    //排卦名
    strTemp = GetNSpace(9) 
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.bgIndex )))//对齐六个阴阳爻
        + GetNSpace(1) //对齐OX
        + "（" + Array64Gua[ lypp.bgIndex ][3] + "）"//对齐六亲
        + GetNSpace(1) + GetNSpace(1) //对齐世应
    ;
    strResult += strTemp + "<br>";
    //排卦宫
    strTemp = "六神" + GetNSpace(2) + "伏"+ GetNSpace(1) + "神" + GetNSpace(2) 
        + "&emsp;" + BaGua[ Array64Gua[lypp.bgIndex][1] ] + "宫" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.bgIndex][2] ]  //对齐爻
        + GetNSpace(1) //对齐OX
        + GetNSpace(5) //对齐六亲
        + GetNSpace(1) + GetNSpace(1) //对齐世应
    ;   
    strResult += strTemp + "<br>";
    
    //排六行
    for(var i=5; i>=0; i--)
    {
        strTemp = LiuShenArray[ lypp.arrLiuShen[i] ] + GetNSpace(1) //六神
            + lypp.FuShenStrs[i] + GetNSpace(1)  //伏神
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrShouGongYao[i] ], lypp.arrMingAnDong[i] )
            //六亲干支五行，用世应普配色
            +  PackShiYingPuColor( (LiuQinArray[ lypp.bgLiuQin[i] ] + TianGan[ lypp.bgTianGan[i] ] 
                + DiZhi[ lypp.bgDiZhi[i] ] + WuXing[ lypp.bgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.bgShiYingPu[i] ]) , lypp.bgShiYingPu[i])
        ;
        //追加一行
        strResult += strTemp + "<br>";
    }
    strResult += "<br>";
    strResult += "</span>"; //不换行标记的末尾
    //添加看卦提示信息
    strResult += GetKanGuaTiShiInfo(bzpp, lypp);
    strResult += "<br>";
    //补上末尾的标签
    strResult += "<br></div>";
    //替换中文空格，适应部分手机浏览器字体
    strResult = strResult.replace(/&emsp;/g, "　");
    //返回
    return strResult;
}

///////////////////////////////////////////////
//加几个测试函数
//64卦一览，按照卦宫排序
function Get64GuaHTML()
{
    var strRet = "";
    var strTemp = "";
    //纳甲天干、地支、五行、应世普
    var curTianGan = new Array(6);
    var curDiZhi = new Array(6);
    var curDZWX = new Array(6);
    var curLiuQin = new Array(6);
    var curShiYingPu = new Array(6);
    //
    for(var k=1; k<=8; k++)//数字查八卦 乾一兑二离三震四巽五坎六艮七坤八
    {
        var gix = ShuZiChaBaGua[k]; //卦宫编号
        //卦宫五行，为我
        var gWX = BaGuaWuXing[gix];
        //依次查询宫内八个卦
        for(var nix=0; nix<8; nix++)
        {
            //根据卦宫序号、宫内序号查询64卦总卦序
            var ixAll = Find64IndexByGixAndNix(gix, nix);
            //根据总序号转换为阴阳数组
            var yy = Change64IndexToArray(ixAll);
            //上卦编号
            var shangGua = SanYaoToBaGuaIndex(yy[3], yy[4], yy[5]);
            //下卦编号
            var xiaGua = SanYaoToBaGuaIndex(yy[0], yy[1], yy[2]);
            //纳甲天干，上卦
            curTianGan[3] = NaJiaTianGan[shangGua][3];
            curTianGan[4] = NaJiaTianGan[shangGua][4];
            curTianGan[5] = NaJiaTianGan[shangGua][5];
            //天干下卦
            curTianGan[0] = NaJiaTianGan[xiaGua][0];
            curTianGan[1] = NaJiaTianGan[xiaGua][1];
            curTianGan[2] = NaJiaTianGan[xiaGua][2];
            //纳甲地支，上卦
            curDiZhi[3] = NaJiaDiZhi[shangGua][3];
            curDiZhi[4] = NaJiaDiZhi[shangGua][4];
            curDiZhi[5] = NaJiaDiZhi[shangGua][5];
            //地支下卦
            curDiZhi[0] = NaJiaDiZhi[xiaGua][0];
            curDiZhi[1] = NaJiaDiZhi[xiaGua][1];
            curDiZhi[2] = NaJiaDiZhi[xiaGua][2];
            //世爻序号，应爻序号
            var shiYao = AnShiYao[nix];
            var yingYao = (shiYao+3)%6;
            //循环计算地支五行、六亲、世应普
            for(var j=0; j<6; j++)
            {
                curDZWX[j] = DiZhiChaWuXing[ curDiZhi[j] ]; //地支查五行
                curLiuQin[j] = (curDZWX[j]+5 - gWX) % 5;    //六亲只有五行
                curShiYingPu[j] = 0;//默认设零，等会填充世爻、应爻
            }
            //填充世爻位置填1，应爻位置填2
            curShiYingPu[shiYao] = 1;
            curShiYingPu[yingYao] = 2;
            
            //先生成卦宫的一行字符串
            strTemp = GetBoldText(GetFuchsiaText( Get64GuaMing(ixAll) ));
            strRet += strTemp + "<br>" ;
            //卦名一行的字符串
            strTemp =  "&ensp;" + BaGua[gix] + "宫" + GongNeiBaGuaMingChen[nix] + "&ensp;"//对齐爻
                + GetNSpace(1) + "（" + Array64Gua[ixAll][3] +"）"  //对齐六亲干支五行
                + GetNSpace(2); //对齐世应普
            strRet += strTemp + "<br>" ;
            //构造字符串，从上到下，5到0
            for(var i=5; i>=0; i--)
            {
                strTemp = PackYinYangColor( ShouGongYaoStrs[ yy[i] ] , yy[i]) //阴阳爻
                    + PackShiYingPuColor(
                    LiuQinArray[ curLiuQin[i] ] + TianGan[ curTianGan[i] ] + DiZhi[ curDiZhi[i] ]
                    + WuXing[ curDZWX[i] ] + GetNSpace(1) + ShiYingPuStrs[ curShiYingPu[i] ],
                      curShiYingPu[i]  ) ;
                    strRet += strTemp + "<br>" ;
            }           
           
           //补上该卦的卦象
            strTemp = Array64GuaShiYi[ixAll];
            strRet += strTemp + "<br><br>" ;
        }
        //加入分隔符和换行
        strRet += "<br><hr><br>";        
    }
    //补上六冲卦说明和六合卦说明
    strTemp = "六冲卦统计10个：八宫纯卦、天雷无妄、雷天大壮。<br>" 
        + "六合卦统计8个：天地否、地天泰，泽水困、水泽节，火山旅、山火贲，雷地豫、地雷复。"
    strRet += strTemp + "<br><br>" ;
    return strRet;
}

//根据卦宫编号gix、宫内序号nix查找对应的数组序号
function Find64IndexByGixAndNix(gix, nix)
{
    var ixAll = 0;//如果查不到，默认返回0
    //遍历数组查找 Array64Gua，0列是卦名，1列是宫编号，2列是宫内序号
    for(var i=0; i<64; i++)
    {
        if( (Array64Gua[i][1] != gix) || (Array64Gua[i][2] != nix) )
        {
            continue;
        }
        else//两个都相等，找到了
        {
            ixAll = i;
            break;
        }
    }    
    //返回
    return ixAll;    
}

//根据64卦总序号，拆解为阴阳爻的数组，从下到上装，yy0 到 yy5
function Change64IndexToArray(ix)
{
    //数组6个元素，阴阳爻，只有0和1
    var yy = new Array(6);
    var vTemp = Number(ix);//临时存数
    //循环提取末尾的二进制比特
    for(var i=0; i<6; i++)
    {
        yy[i] = vTemp % 2;
        vTemp = Math.floor( vTemp/2 );
    }
    return yy;//返回阴阳数组
}

//蓝色阴，红色阳
var ColorYinYang = [
    "#1E90FF",
    "red"
];
//进行阴阳爻的配色
function PackYinYangColor(text, ix)
{
    var clr = "#1E90FF";
    if( ix>=0 && ix <=1 )
    {
        clr = ColorYinYang[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
