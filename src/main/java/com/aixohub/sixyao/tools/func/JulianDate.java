package com.aixohub.sixyao.tools.func;

import java.util.Arrays;

public class JulianDate {

    public static double JD(int y, int m, double d) {
        int n = 0, G = 0;
        if (y * 372 + m * 31 + (int) d >= 588829) G = 1; // 判断是否为格里高利历日1582*372+10*31+15
        if (m <= 2) {
            m += 12;
            y--;
        }
        if (G != 0) n = (int) (y / 100);
        n = 2 - n + (int) (n / 4); // 加百年闰
        return (int) (365.25 * (y + 4716)) + (int) (30.6001 * (m + 1)) + d + n - 1524.5;
    }

    public static JulianDateStruct DD(double jd) {
        JulianDateStruct r = new JulianDateStruct();
        int D = (int) (jd + 0.5);
        double F = jd + 0.5 - D;
        int c;
        if (D >= 2299161) {
            c = (int) ((D - 1867216.25) / 36524.25);
            D += 1 + c - (int) (c / 4);
        }
        D += 1524;
        r.Y = (int) ((D - 122.1) / 365.25); // 年数
        D -= (int) (365.25 * r.Y);
        r.M = (int) (D / 30.601); // 月数
        D -= (int) (30.601 * r.M);
        r.D = D; // 日数
        if (r.M > 13) {
            r.M -= 13;
            r.Y -= 4715;
        } else {
            r.M -= 1;
            r.Y -= 4716;
        }
        F *= 24;
        r.h = (int) F;
        F -= r.h;
        F *= 60;
        r.m = (int) F;
        F -= r.m;
        F *= 60;
        r.s = F;
        return r;
    }

    public static String DD2str(JulianDateStruct r) {
        String Y = "     " + r.Y, M = "0" + r.M, D = "0" + r.D;
        int h = r.h, m = r.m, s = (int) (r.s + 0.5);
        if (s >= 60) {
            s -= 60;
            m++;
        }
        if (m >= 60) {
            m -= 60;
            h++;
        }
        String hh = "0" + h, mm = "0" + m, ss = "0" + s;
        return Y.substring(Y.length() - 5) + "-" + M.substring(M.length() - 2) + "-" + D.substring(D.length() - 2) + " " +
                hh.substring(hh.length() - 2) + ":" + mm.substring(mm.length() - 2) + ":" + ss.substring(ss.length() - 2);
    }

    public static String JD2str(double jd) {
        JulianDateStruct r = DD(jd);
        return DD2str(r);
    }

    public static int Y = 2000, M = 1, D = 1, h = 12, m = 0;
    public static double s = 0;

    public static double toJD() {
        return JD(Y, M, D + ((s / 60 + m) / 60 + h) / 24);
    }

    public static void setFromJD(double jd) {
        JulianDateStruct r = DD(jd);
        Y = r.Y;
        M = r.M;
        D = r.D;
        m = r.m;
        h = r.h;
        s = r.s;
    }

    public static String timeStr(double jd) {
        jd += 0.5;
        jd = (jd - (int) jd);
        int s = (int) (jd * 86400 + 0.5);
        int hh = s / 3600;
        s -= hh * 3600;
        int mm = s / 60;
        s -= mm * 60;
        return String.format("%02d:%02d:%02d", hh, mm, s);
    }

    public static final String[] Weeks = {"日", "一", "二", "三", "四", "五", "六", "七"};

    public static int getWeek(double jd) {
        return (int) (jd + 1.5 + 7000000) % 7;
    }

    public static double nnweek(int y, int m, int n, int w) {
        double jd = JD(y, m, 1.5); // 月首儒略日
        int w0 = (int) (jd + 1 + 7000000) % 7; // 月首的星期
        double r = jd - w0 + 7 * n + w; // jd-w0+7*n是和n个星期0,起算下本月第一行的星期日(可能落在上一月)。加w后为第n个星期w
        if (w >= w0) r -= 7; // 第1个星期w可能落在上个月,造成多算1周,所以考虑减1周
        if (n == 5) {
            m++;
            if (m > 12) {
                m = 1;
                y++;
            } // 下个月
            if (r >= JD(y, m, 1.5)) r -= 7; // r跑到下个月则减1周
        }
        return r;
    }

    public static class JulianDateStruct {
        public int Y;
        public int M;
        public int D;
        public int h;
        public int m;
        public double s;
    }
}
