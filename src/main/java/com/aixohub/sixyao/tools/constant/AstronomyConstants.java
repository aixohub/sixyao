package com.aixohub.sixyao.tools.constant;

public class AstronomyConstants {

    public static final double cs_rEar = 6378.1366; // 地球赤道半径(千米)
    public static final double cs_rEarA = 0.99834 * cs_rEar; // 平均半径
    public static final double cs_ba = 0.99664719; // 地球极赤半径比
    public static final double cs_ba2 = cs_ba * cs_ba; // 地球极赤半径比的平方
    public static final double cs_AU = 1.49597870691e8; // 天文单位长度(千米)
    public static final double cs_sinP = cs_rEar / cs_AU; // sin(太阳视差)
    public static final double cs_PI = Math.asin(cs_sinP); // 太阳视差
    public static final double cs_GS = 299792.458; // 光速(行米/秒)
    public static final double cs_Agx = cs_AU / cs_GS / 86400 / 36525; // 每天文单位的光行时间(儒略世纪)
    public static final int[] cs_xxHH = {116, 584, 780, 399, 378, 370, 367, 367}; // 行星会合周期
    public static final String[] xxName = {"地球", "水星", "金星", "火星", "木星", "土星", "天王星", "海王星", "冥王星"};
    public static final double rad = 180 * 3600 / Math.PI; // 每弧度的角秒数
    public static final double radd = 180 / Math.PI; // 每弧度的度数
    public static final double pi2 = Math.PI * 2;
    public static final double pi_2 = Math.PI / 2;
    public static final int J2000 = 2451545;

    public static final double cs_k = 0.2725076; // 月亮与地球的半径比(用于半影计算)
    public static final double cs_k2 = 0.2722810; // 月亮与地球的半径比(用于本影计算)
    public static final double cs_k0 = 109.1222; // 太阳与地球的半径比(对应959.64)
    public static final double cs_sMoon = cs_k * cs_rEar * 1.0000036 * rad; // 用于月亮视半径计算
    public static final double cs_sMoon2 = cs_k2 * cs_rEar * 1.0000036 * rad; // 用于月亮视半径计算
    public static final double cs_sSun = 959.64; // 用于太阳视半径计算

}
