package com.aixohub.sixyao.tools.func;

public class Rad2Str {

    public static String rad2strE(double d, int tim, int ext) {
        // 将弧度转为字串,ext为小数保留位数
        // tim=0输出格式示例: -23°59' 48.23"
        // tim=1输出格式示例:  18h 29m 44.52s
        String s = " ";
        String w1 = "°", w2 = "'", w3 = "\"";
        if (d < 0) {
            d = -d;
            s = "-";
        }
        if (tim != 0) {
            d *= 12 / Math.PI;
            w1 = "h ";
            w2 = "m";
            w3 = "s";
        } else {
            d *= 180 / Math.PI;
        }
        int a = (int) d;
        d = (d - a) * 60;

        int b = (int) d;
        d = (d - b) * 60;

        int c = (int) d;

        double Q = Math.pow(10, ext);

        d = Math.floor((d - c) * Q + 0.5);
        if (d >= Q) {
            d -= Q;
            c++;
        }

        if (c >= 60) {
            c -= 60;
            b++;
        }

        if (b >= 60) {
            b -= 60;
            a++;
        }


        String aStr = "   " + a;
        String bStr = "0" + b;
        String cStr = "0" + c;
        String dStr = "00000" + (int) d;

        s += aStr.substring(aStr.length() - 3, aStr.length()) + w1;
        s += bStr.substring(bStr.length() - 2, bStr.length()) + w2;
        s += cStr.substring(cStr.length() - 2, cStr.length());

        if (ext > 0) {
            s += "." + dStr.substring(dStr.length() - ext, dStr.length()) + w3;
        }

        return s;
    }

    public static String rad2str(double d, int tim) {
        return rad2strE(d, tim, 2);
    }

    public static String rad2str2(double d) {
        // 将弧度转为字串,精确到分
        // 输出格式示例: -23°59'
        String s = "+";
        String w1 = "°", w2 = "'", w3 = "\"";
        if (d < 0) {
            d = -d;
            s = "-";
        }
        d *= 180 / Math.PI;
        int a = (int) d;
        int b = (int) ((d - a) * 60 + 0.5);
        if (b >= 60) {
            b -= 60;
        }

        String a1 = "   " + a;
        String b1 = "0" + b;
        s += a1.substring(a1.length() - 3, a1.length()) + w1;
        s += b1.substring(b1.length() - 2, b1.length()) + w2;
        return s;
    }

    public static String m2fm(double v, int fx, int fs) {
        // 秒转为分秒,fx为小数点位数,fs为1转为"分秒"格式否则转为"角度分秒"格式
        String gn = "";
        if (v < 0)
            v = -v;
        if (v < 0)
            gn = "-";
        int f = (int) (v / 60);
        double m = v - f * 60;
        if (fs == 0)
            return gn + f + "'" + m + '"';
        else if (fs == 1)
            return gn + f + "分" + m + "秒";
        else if (fs == 2)
            return gn + f + "m" + m + "s";
        return null;
    }

    public static double str2rad(String s, int f) {
        // 串转弧度, f=1表示输入的s为时分秒
        int fh = 1;
        f = (f != 0) ? 15 : 1;
        if (s.indexOf('-') != -1)
            fh = -1;
        s = s.replaceAll("h|m|s|(-)|(°)|\'|\"", " ");
        s = s.replaceAll(" +", " "); // 多个空格合并为1个空格
        s = s.replaceAll("(^\\s*)|(\\s*$)", ""); // 去除前后空格
        String[] ss = s.split(" ");
        double d = fh * (Integer.parseInt(ss[0]) * 3600 + Integer.parseInt(ss[1]) * 60 + Double.parseDouble(ss[2])) / Math.PI * f;
        return d;
    }

    public static void main(String[] args) {
        // 示例用法
        double radian = 12.5; // 弧度值
        int timeFormat = 0; // 时间格式，0为度分秒格式，1为时分秒格式
        int decimalPlaces = 2; // 小数保留位数
        String result1 = rad2strE(radian, timeFormat, decimalPlaces);
        String result2 = rad2str(radian, timeFormat);
        String result3 = rad2str2(radian);
        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
    }
}

