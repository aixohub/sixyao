package com.aixohub.sixyao.tools.func;

public class JulianDateTools {

    private int Y;
    private int M;
    private int D;
    private int h;
    private int m;
    private double s;

    public JulianDateTools() {
    }

    public JulianDateTools(double jd) {
        JulianDateTools dd = DD(jd);
        this.Y = dd.Y;
        this.M = dd.M;
        this.D = dd.D;
        this.h = dd.h;
        this.m = dd.m;
        this.s = dd.s;
    }

    public JulianDateTools(int y, int m, int d, int h, int m1) {
        Y = y;
        M = m;
        D = d;
        this.h = h;
        this.m = m1;
        this.s = 30;
    }

    public JulianDateTools(int y, int m, int d, int h, int m1, double s) {
        Y = y;
        M = m;
        D = d;
        this.h = h;
        this.m = m1;
        this.s = s;
    }

    public int getY() {
        return Y;
    }

    public void setY(int y) {
        Y = y;
    }

    public int getM() {
        return M;
    }

    public void setM(int m) {
        M = m;
    }

    public double getS() {
        return s;
    }

    public void setS(double s) {
        this.s = s;
    }

    public int getD() {
        return D;
    }

    public void setD(int d) {
        D = d;
    }

    public int getH() {
        return h;
    }

    public void setH(int h) {
        this.h = h;
    }

    /**
     * 公历转儒略日
     * @param y
     * @param m
     * @param d
     * @return
     */
    public double JD(int y, int m, double d) {
        int n = 0, G = 0;
        // 判断是否为格里高利历日1582*372+10*31+15
        if (y * 372 + m * 31 + MathTools.int2(d) >= 588829) {
            G = 1;
        }
        if (m <= 2) {
            m += 12;
            y--;
        }
        if (G != 0) {
            n = MathTools.int2(y / 100);
        }
        n = 2 - n + MathTools.int2(n / 4); // 加百年闰
        return MathTools.int2(365.25 * (y + 4716)) + MathTools.int2(30.6001 * (m + 1)) + d + n - 1524.5;
    }

    public double toJD() {
        return JD(Y, M, D + ((s / 60 + m) / 60 + h) / 24);
    }

    public void setFromJD(double jd) {
        JulianDateTools r = DD(jd);
        Y = r.Y;
        M = r.M;
        D = r.D;
        m = r.m;
        h = r.h;
        s = r.s;
    }


    /**
     * 儒略日数转公历
     * @param jd
     * @return
     */
    public JulianDateTools DD(double jd) {
        JulianDateTools r = new JulianDateTools();
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

    public String DD2str(JulianDateTools r) {
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

    public String JD2str(double jd) {
        JulianDateTools r = DD(jd);
        return DD2str(r);
    }


    public String timeStr(double jd) {
        jd += 0.5;
        jd = (jd - (int) jd);
        int s = (int) (jd * 86400 + 0.5);
        int hh = s / 3600;
        s -= hh * 3600;
        int mm = s / 60;
        s -= mm * 60;
        return String.format("%02d:%02d:%02d", hh, mm, s);
    }

    public final String[] Weeks = {"日", "一", "二", "三", "四", "五", "六", "七"};

    public int getWeek(double jd) {
        return (int) (jd + 1.5 + 7000000) % 7;
    }

    public double nnweek(int y, int m, int n, int w) {
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


}
