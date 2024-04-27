package com.aixohub.sixyao.tools.func;

import com.aixohub.sixyao.tools.constant.CalcConstant;

import static com.aixohub.sixyao.tools.constant.CalcConstant.*;


public class MathTools {

    public static int int2(double v) {
        return (int) Math.floor(v);
    }


    public static double sqrt(double x) {
        return Math.sqrt(x);
    }

    public static double floor(double x) {
        return Math.floor(x);
    }

    public static double abs(double x) {
        return Math.abs(x);
    }

    public static double sin(double x) {
        return Math.sin(x);
    }

    public static double cos(double x) {
        return Math.cos(x);
    }

    public static double tan(double x) {
        return Math.tan(x);
    }

    public static double asin(double x) {
        return Math.asin(x);
    }

    public static double acos(double x) {
        return Math.acos(x);
    }

    public static double atan(double x) {
        return Math.atan(x);
    }

    public static double atan2(double y, double x) {
        return Math.atan2(y, x);
    }

    public static double rad2mrad(double v) {
        // 对超过0-2PI的角度转为0-2PI
        v = v % (2 * Math.PI);
        if (v < 0) {
            return v + 2 * Math.PI;
        }
        return v;
    }

    public static double rad2rrad(double v) {
        // 对超过-PI到PI的角度转为-PI到PI
        v = v % (2 * Math.PI);
        if (v <= -Math.PI)
            return v + 2 * Math.PI;
        if (v > Math.PI)
            return v - 2 * Math.PI;
        return v;
    }

    /**
     * 临界余数(a与最近的整倍数b相差的距离)
     *
     * @param a
     * @param b
     * @return
     */
    public static double mod2(double a, double b) {
        // 临界余数(a与最近的整倍数b相差的距离)
        double c = a / b;
        c -= Math.floor(c);
        if (c > 0.5) {
            c -= 1;
        }

        return c * b;
    }

    /**
     * 球面转直角坐标
     *
     * @param JW
     * @return
     */
    public static double[] llr2xyz(double[] JW) {
        // 球面转直角坐标
        double[] r = new double[3];
        double J = JW[0], W = JW[1], R = JW[2];
        r[0] = R * Math.cos(W) * Math.cos(J);
        r[1] = R * Math.cos(W) * Math.sin(J);
        r[2] = R * Math.sin(W);
        return r;
    }

    /**
     * 直角坐标转球
     *
     * @param xyz
     * @return
     */
    public static double[] xyz2llr(double[] xyz) {
        // 直角坐标转球
        double[] r = new double[3];
        double x = xyz[0], y = xyz[1], z = xyz[2];
        r[2] = Math.sqrt(x * x + y * y + z * z);
        r[1] = Math.asin(z / r[2]);
        r[0] = rad2mrad(Math.atan2(y, x));
        return r;
    }

    public static double[] llrConv(double[] JW, double E) {
        // 球面坐标旋转
        // 黄道赤道坐标变换,赤到黄E取负
        double[] r = new double[3];
        double J = JW[0], W = JW[1];
        r[0] = Math.atan2(Math.sin(J) * Math.cos(E) - Math.tan(W) * Math.sin(E), Math.cos(J));
        r[1] = Math.asin(Math.cos(E) * Math.sin(W) + Math.sin(E) * Math.cos(W) * Math.sin(J));
        r[2] = JW[2];
        r[0] = rad2mrad(r[0]);
        return r;
    }

    public static double[] CD2DP(double[] z, double L, double fa, double gst) {
        // 赤道坐标转为地平坐标
        double[] a = new double[]{z[0] + Math.PI / 2 - gst - L, z[1], z[2]};  // 转到相对于地平赤道分点的赤道坐标
        a = llrConv(a, Math.PI / 2 - fa);
        a[0] = rad2mrad(Math.PI / 2 - a[0]);
        return a;
    }

    public static double j1_j2(double J1, double W1, double J2, double W2) {
        // 求角度差
        double dJ = rad2rrad(J1 - J2), dW = W1 - W2;
        if (Math.abs(dJ) < 1 / 1000 && Math.abs(dW) < 1 / 1000) {
            dJ *= Math.cos((W1 + W2) / 2);
            return Math.sqrt(dJ * dJ + dW * dW);
        }
        return Math.acos(Math.sin(W1) * Math.sin(W2) + Math.cos(W1) * Math.cos(W2) * Math.cos(dJ));
    }

    public static double[] h2g(double[] z, double[] a) {
        // 日心球面转地心球面,Z星体球面坐标,A地球球面坐标
        // 本含数是通用的球面坐标中心平移函数,行星计算中将反复使用
        a = llr2xyz(a); // 地球
        z = llr2xyz(z); // 星体
        z[0] -= a[0];
        z[1] -= a[1];
        z[2] -= a[2];
        return xyz2llr(z);
    }

    public static double shiChaJ(double gst, double L, double fa, double J, double W) {
        // 视差角(不是视差)
        double H = gst + L - J; // 天体的时角
        return rad2mrad(Math.atan2(Math.sin(H), Math.tan(fa) * Math.cos(W) - Math.sin(W) * Math.cos(H)));
    }

    //=================================蒙气改正=========================================

    /**
     * 大气折射,h是真高度
     *
     * @param h
     * @return
     */
    public static double MQC(double h) {
        return 0.0002967 / Math.tan(h + 0.003138 / (h + 0.08919));
    }

    /**
     * 大气折射,ho是视高度
     *
     * @param ho
     * @return
     */
    public static double MQC2(double ho) {
        return -0.0002909 / Math.tan(ho + 0.002227 / (ho + 0.07679));
    }


    /**
     * 视差修正
     * z赤道坐标,fa地理纬度,H时角,high海拔(千米)
     *
     * @param z
     * @param H
     * @param fa
     * @param high
     */
    public static void parallax(double[] z, double H, double fa, double high) {
        // z赤道坐标, fa地理纬度, H时角, high海拔(千米)
        double dw = 1;
        if (z[2] < 500)
            dw = CalcConstant.cs_AU;
        z[2] *= dw;
        double r0, x0, y0, z0, f = CalcConstant.cs_ba, u = Math.atan(f * Math.tan(fa)), g = z[0] + H;
        r0 = CalcConstant.cs_rEar * Math.cos(u) + high * Math.cos(fa); // 站点与地地心向径的赤道投影长度
        z0 = CalcConstant.cs_rEar * Math.sin(u) * f + high * Math.sin(fa); // 站点与地地心向径的轴向投影长度
        x0 = r0 * Math.cos(g);
        y0 = r0 * Math.sin(g);

        double[] s = llr2xyz(z);
        s[0] -= x0;
        s[1] -= y0;
        s[2] -= z0;
        s = xyz2llr(s);
        z[0] = s[0];
        z[1] = s[1];
        z[2] = s[2] / dw;
    }


    // ===================================================

    /**
     * t是儒略世纪数,sc是岁差量名称,mx是模型
     *
     * @param t
     * @param sc
     * @param mx
     * @return
     */
    public static double prece(double t, String sc, String mx) {
        double c = 0;
        int n = 0;
        double[][] p = null;
        if (mx.equals("IAU1976")) {
            n = 4;
            p = CalcConstant.preceTab_IAU1976;
        }
        if (mx.equals("IAU2000")) {
            n = 6;
            p = CalcConstant.preceTab_IAU2000;
        }
        if (mx.equals("P03")) {
            n = 6;
            p = CalcConstant.preceTab_P03;
        }
        int index = "fi w  P  Q  E  x  pi II p  th Z  z ".indexOf(sc + ' ') / 3;
        double tn = 1;
        for (int i = 0; i < n; i++) {
            int mm = index * n + i;
            double[] doubles = p[mm];
            for (int i1 = 0; i1 < doubles.length; i1++) {
                c += p[mm][i1] * tn;
            }

            tn *= t;
        }
        return c / rad;
    }

    /**
     * 返回P03黄赤交角,t是世纪数
     *
     * @param t
     * @return
     */
    public static double hcjj(double t) {
        double t2 = t * t, t3 = t2 * t, t4 = t3 * t, t5 = t4 * t;
        return (84381.4060 - 46.836769 * t - 0.0001831 * t2 + 0.00200340 * t3 - 5.76e-7 * t4 - 4.34e-8 * t5) / rad;
    }

    /**
     * 岁差旋转
     * <p>
     * J2000赤道转Date赤道
     *
     * @param t
     * @param llr
     * @param mx
     * @return
     */
    public static double[] CDllr_J2D(double t, double[] llr, String mx) {
        double Z = prece(t, "Z", mx) + llr[0];
        double z = prece(t, "z", mx);
        double th = prece(t, "th", mx);
        return calcDoubles(llr, Z, z, th);
    }


    /**
     * Date赤道转J2000赤道
     *
     * @param t
     * @param llr
     * @param mx
     * @return
     */
    public static double[] CDllr_D2J(double t, double[] llr, String mx) {
        double Z = -prece(t, "z", mx) + llr[0];
        double z = -prece(t, "Z", mx);
        double th = -prece(t, "th", mx);
        return calcDoubles(llr, Z, z, th);
    }

    private static double[] calcDoubles(double[] llr, double z, double z2, double th) {
        double cosW = Math.cos(llr[1]), cosH = Math.cos(th);
        double sinW = Math.sin(llr[1]), sinH = Math.sin(th);
        double A = cosW * Math.sin(z);
        double B = cosH * cosW * Math.cos(z) - sinH * sinW;
        double C = sinH * cosW * Math.cos(z) + cosH * sinW;
        return new double[]{rad2mrad(Math.atan2(A, B) + z2), Math.asin(C), llr[2]};
    }


    /**
     * //黄道球面坐标_J2000转Date分点,t为儒略世纪数
     * J2000黄道旋转到Date黄道(球面对球面),也可直接由利用球面旋转函数计算,但交角接近为0时精度很低
     *
     * @param t
     * @param llr
     * @param mx
     * @return
     */
    public static double[] HDllr_J2D(double t, double[] llr, String mx) {
        double[] r = {llr[0], llr[1], llr[2]};
        r[0] += prece(t, "fi", mx);
        r = llrConv(r, prece(t, "w", mx));
        r[0] -= prece(t, "x", mx);
        r = llrConv(r, -prece(t, "E", mx));
        return r;
    }

    /**
     * 黄道球面坐标_Date分点转J2000,t为儒略世纪数
     *
     * @param t
     * @param llr
     * @param mx
     * @return
     */
    public static double[] HDllr_D2J(double t, double[] llr, String mx) {
        double[] r = {llr[0], llr[1], llr[2]};
        r = llrConv(r, prece(t, "E", mx));
        r[0] += prece(t, "x", mx);
        r = llrConv(r, -prece(t, "w", mx));
        r[0] -= prece(t, "fi", mx);
        r[0] = rad2mrad(r[0]);
        return r;
    }

    // ===================================================
    public static double dt_ext(double y, double jsd) {
        double dy = (y - 1820) / 100;
        return -20 + jsd * dy * dy;
    }

    public static double dt_calc(double y) {
        double y0 = dt_at[dt_at.length - 2][0]; // 表中最后一年
        double t0 = dt_at[dt_at.length - 1][0]; // 表中最后一年的deltatT
        if (y >= y0) {
            double jsd = 31; // sjd是y1年之后的加速度估计。瑞士星历表jsd=31,NASA网站jsd=32,skmap的jsd=29
            if (y > y0 + 100) {
                return dt_ext(y, jsd);
            }
            double v = dt_ext(y, jsd);       // 二次曲线外推
            double dv = dt_ext(y0, jsd) - t0;  // ye年的二次外推与te的差
            return v - dv * (y0 + 100 - y) / 100;
        }
        int i;
        for (i = 0; i < dt_at.length; i++) {
            if (y < dt_at[i][0]) {
                break;
            }
        }
        double t1 = (y - dt_at[i - 1][0]) / (dt_at[i][0] - dt_at[i - 1][0]) * 10;
        double t2 = t1 * t1;
        double t3 = t2 * t1;
        return dt_at[i - 1][1] + dt_at[i - 1][2] * t1 + dt_at[i - 1][3] * t2 + dt_at[i - 1][4] * t3;
    }

    public static double dt_T(double t) {
        return dt_calc(t / 365.2425 + 2000) / 86400.0; // 传入儒略日(J2000起算),计算TD-UT(单位:日)
    }


    //=============================章动计算=====================================

    /**
     * 章动计算,t是J2000.0起算的儒略世纪数,zq表示只计算周期大于zq(天)的项
     *
     * @param t
     * @param zq
     * @return
     */
    public static double[] nutation(double t, double zq) {
        double t2 = t * t, t3 = t2 * t, t4 = t3 * t;
        double l = 485868.249036 + 1717915923.2178 * t + 31.8792 * t2 + 0.051635 * t3 - 0.00024470 * t4;
        double l1 = 1287104.79305 + 129596581.0481 * t - 0.5532 * t2 - 0.000136 * t3 - 0.00001149 * t4;
        double F = 335779.526232 + 1739527262.8478 * t - 12.7512 * t2 - 0.001037 * t3 + 0.00000417 * t4;
        double D = 1072260.70369 + 1602961601.2090 * t - 6.3706 * t2 + 0.006593 * t3 - 0.00003169 * t4;
        double Om = 450160.398036 - 6962890.5431 * t + 7.4722 * t2 + 0.007702 * t3 - 0.00005939 * t4;
        double dL = 0, dE = 0;
        for (int i = 0; i < nuTab.length; i += 11) {
            double c = (nuTab[i] * l + nuTab[i + 1] * l1 + nuTab[i + 2] * F + nuTab[i + 3] * D + nuTab[i + 4] * Om) / rad;
            if (zq != 0) {
                double q = 36526 * 2 * Math.PI * rad / (1717915923.2178 * nuTab[i] + 129596581.0481 * nuTab[i + 1] + 1739527262.8478 * nuTab[i + 2] + 1602961601.2090 * nuTab[i + 3] + 6962890.5431 * nuTab[i + 4]);
                if (q < zq) continue;
            }
            dL += (nuTab[i + 5] + nuTab[i + 6] * t) * Math.sin(c) + nuTab[i + 7] * Math.cos(c);
            dE += (nuTab[i + 8] + nuTab[i + 9] * t) * Math.cos(c) + nuTab[i + 10] * Math.sin(c);
        }
        // 返回IAU2000B章动值, dL是黄经章动,dE是交角章动
        return new double[]{dL / (10000000 * rad), dE / (10000000 * rad)};
    }

    /**
     * 本函数计算赤经章动及赤纬章动
     *
     * @param z
     * @param E
     * @param dL
     * @param dE
     * @return
     */
    public static double[] CDnutation(double[] z, double E, double dL, double dE) {
        double[] r = {z[0], z[1], z[2]};
        r[0] += (Math.cos(E) + Math.sin(E) * Math.sin(z[0]) * Math.tan(z[1])) * dL - Math.cos(z[0]) * Math.tan(z[1]) * dE; // 赤经章动
        r[1] += Math.sin(E) * Math.cos(z[0]) * dL + Math.sin(z[0]) * dE; // 赤纬章动
        r[0] = MathTools.rad2mrad(r[0]);
        return r;
    }

    /**
     * 中精度章动计算,t是世纪数
     */
    public static double[] nutation2(double t) {
        double t2 = t * t, dL = 0, dE = 0;
        for (int i = 0; i < nutB.length; i += 5) {
            double c = nutB[i] + nutB[i + 1] * t + nutB[i + 2] * t2;
            double a = (i == 0) ? -1.742 * t : 0;
            dL += (nutB[i + 3] + a) * Math.sin(c);
            dE += nutB[i + 4] * Math.cos(c);
        }
        //黄经章动,交角章动
        return new double[]{dL / 100 / rad, dE / 100 / rad};
    }

    public static double nutationLon2(double t) {
        double t2 = t * t, dL = 0;
        for (int i = 0; i < nutB.length; i += 5) {
            double a = (i == 0) ? -1.742 * t : 0;
            dL += (nutB[i + 3] + a) * Math.sin(nutB[i] + nutB[i + 1] * t + nutB[i + 2] * t2);
        }
        return dL / 100 / rad;
    }

    //=============================一些天文基本问题=====================================
    public static int suoN(double jd) {
        return (int) Math.floor((jd + 8) / 29.5306); // 返回朔日的编号，jd应在朔日附近，允许误差数天
    }

    public static double gxc_sunLon(double t) {
        double v = -0.043126 + 628.301955 * t - 0.000002732 * t * t; // 平近点角
        double e = 0.016708634 - 0.000042037 * t - 0.0000001267 * t * t;
        return (-20.49552 * (1 + e * Math.cos(v))) / CalcConstant.rad; // 黄经光行差
    }

    public static double gxc_sunLat(double t) {
        return 0; // 黄纬光行差
    }

    public static double gxc_moonLon(double t) {
        return -3.4E-6; // 月球经度光行差，误差0.07"
    }

    public static double gxc_moonLat(double t) {
        return 0.063 * Math.sin(0.057 + 8433.4662 * t + 0.000064 * t * t) / CalcConstant.rad; // 月球纬度光行差，误差0.006"
    }

    public static double pGST(double T, double dt) {
        // 返回格林尼治平恒星时(不含赤经章动及非多项式部分)，即格林尼治子午圈的平春风点起算的赤经
        double t = (T + dt) / 36525, t2 = t * t, t3 = t2 * t, t4 = t3 * t;
        return CalcConstant.pi2 * (0.7790572732640 + 1.00273781191135448 * T) // T是UT，下一行的t是力学时(世纪数)
                + (0.014506 + 4612.15739966 * t + 1.39667721 * t2 - 0.00009344 * t3 + 0.00001882 * t4) / CalcConstant.rad;
    }

    public static double pGST2(double jd) {
        // 传入力学时J2000起算日数，返回平恒星时
        double dt = dt_T(jd);
        return pGST(jd - dt, dt);
    }


    public static double XL0_calc(int xt, int zn, double t, int n) {
        t /= 10; // 转为儒略千年数
        int i, j;
        double v = 0, tn = 1, c;
        double[] F = CalcConstant.XL0[xt];
        int n1, n2, N;
        int n0, pn = zn * 6 + 1, N0 = (int) (F[pn + 1] - F[pn]); // N0序列总数
        for (i = 0; i < 6; i++, tn *= t) {
            n1 = (int) F[pn + i];
            n2 = (int) F[pn + 1 + i];
            n0 = n2 - n1;
            if (n0 == 0) continue;
            if (n < 0) N = n2; // 确定项数
            else {
                N = (int) (3 * n * n0 / N0 + 0.5) + n1;
                if (i != 0) N += 3;
                if (N > n2) N = n2;
            }
            for (j = n1, c = 0; j < N; j += 3)
                c += F[j] * Math.cos(F[j + 1] + t * F[j + 2]);
            v += c * tn;
        }
        v /= F[0];
        if (xt == 0) { // 地球
            double t2 = t * t, t3 = t2 * t; // 千年数的各次方
            if (zn == 0) v += (-0.0728 - 2.7702 * t - 1.1019 * t2 - 0.0996 * t3) / CalcConstant.rad;
            if (zn == 1) v += (0.0000 + 0.0004 * t + 0.0004 * t2 - 0.0026 * t3) / CalcConstant.rad;
            if (zn == 2) v += (-0.0020 + 0.0044 * t + 0.0213 * t2 - 0.0250 * t3) / 1000000;
        } else { // 其它行星
            double[] dv = CalcConstant.XL0_xzb[(xt - 1) * 3 + zn];
            if (zn == 0) v += -3 * t / CalcConstant.rad;
            if (zn == 2) v += dv[0] / 1000000;
            else v += dv[0] / CalcConstant.rad;
        }
        return v;
    }

    //=================================月亮星历--=======================================

    /**
     * 计算月亮
     *
     * @param zn
     * @param t
     * @param n
     * @return
     */
    public static double XL1_calc(int zn, double t, int n) {
        double[][] ob = XL1[zn];
        double v = 0, tn = 1, c;
        double t2 = t * t, t3 = t2 * t, t4 = t3 * t, t5 = t4 * t, tx = t - 10;
        if (zn == 0) {
            v += (3.81034409 + 8399.684730072 * t - 3.319e-05 * t2 + 3.11e-08 * t3 - 2.033e-10 * t4) * rad; // 月球平黄经(弧度)
            v += 5028.792262 * t + 1.1124406 * t2 + 0.00007699 * t3 - 0.000023479 * t4 - 0.0000000178 * t5; // 岁差(角秒)
            if (tx > 0) {
                // 对公元3000年至公元5000年的拟合，最大误差小于10角秒
                v += -0.866 + 1.43 * tx + 0.054 * tx * tx;
            }
        }
        t2 /= 1e4;
        t3 /= 1e8;
        t4 /= 1e8;
        n *= 6;
        if (n < 0) n = ob[0].length;
        for (int i = 0; i < ob.length; i++, tn *= t) {
            double[] F = ob[i];
            int N = (int) (n * F.length / ob[0].length + 0.5);
            if (i != 0) N += 6;
            if (N >= F.length) N = F.length;
            c = 0;
            for (int j = 0; j < N; j += 6) {
                c += F[j] * Math.cos(F[j + 1] + t * F[j + 2] + t2 * F[j + 3] + t3 * F[j + 4] + t4 * F[j + 5]);
            }
            v += c * tn;
        }
        if (zn != 2) v /= rad;
        return v;
    }

    public static double[] m_coord(double t, int n1, int n2, int n3) {
        double[] re = new double[3];
        re[0] = XL1_calc(0, t, n1);
        re[1] = XL1_calc(1, t, n2);
        re[2] = XL1_calc(2, t, n3);
        return re;
    }

    // 物件XL : 日月黄道平分点坐标、视坐标、速度、已知经度反求时间等方面的计算

    /**
     * 星历函数(日月球面坐标计算)
     * <p>
     * 地球经度计算,返回Date分点黄经,传入世纪数、取项数
     *
     * @param t
     * @param n
     * @return
     */
    public static double E_Lon(double t, int n) {
        return XL0_calc(0, 0, t, n); // 地球经度计算
    }

    /**
     * 月球经度计算,返回Date分点黄经,传入世纪数,n是项数比例
     *
     * @param t
     * @param n
     * @return
     */
    public static double M_Lon(double t, int n) {
        return XL1_calc(0, t, n); // 月球经度计算
    }

    /**
     * 地球速度,t是世纪数,误差小于万分3
     *
     * @param t
     * @return
     */
    public static double E_v(double t) {
        double f = 628.307585 * t;
        return 628.332 + 21 * Math.sin(1.527 + f) + 0.44 * Math.sin(1.48 + f * 2)
                + 0.129 * Math.sin(5.82 + f) * t + 0.00055 * Math.sin(4.21 + f) * t * t;
    }

    /**
     * 月球速度计算,传入世经数
     *
     * @param t
     * @return
     */
    public static double M_v(double t) {
        double v = 8399.71 - 914 * Math.sin(0.7848 + 8328.691425 * t + 0.0001523 * t * t);
        v -= 179 * Math.sin(2.543 + 15542.7543 * t)
                + 160 * Math.sin(0.1874 + 7214.0629 * t)
                + 62 * Math.sin(3.14 + 16657.3828 * t)
                + 34 * Math.sin(4.827 + 16866.9323 * t)
                + 22 * Math.sin(4.9 + 23871.4457 * t)
                + 12 * Math.sin(2.59 + 14914.4523 * t)
                + 7 * Math.sin(0.23 + 6585.7609 * t)
                + 5 * Math.sin(0.9 + 25195.624 * t)
                + 5 * Math.sin(2.32 - 7700.3895 * t)
                + 5 * Math.sin(3.88 + 8956.9934 * t)
                + 5 * Math.sin(0.49 + 7771.3771 * t);
        return v;
    }


    /**
     * 月日视黄经的差值
     */
    public static double MS_aLon(double t, int Mn, int Sn) {
        return M_Lon(t, Mn) + gxc_moonLon(t) - (E_Lon(t, Sn) + gxc_sunLon(t) + Math.PI);
    }

    /**
     * 太阳视黄经
     **/
    public static double S_aLon(double t, int n) {
        return E_Lon(t, n) + nutationLon2(t) + gxc_sunLon(t) + Math.PI;
    }


    /**
     * 已知地球真黄经求时间
     *
     * @param W
     * @return
     */
    public static double E_Lon_t(double W) { // 已知地球真黄经求时间
        double t, v = 628.3319653318;
        t = (W - 1.75347) / v;
        v = E_v(t); // v的精度0.03%，详见原文
        t += (W - E_Lon(t, 10)) / v;
        v = E_v(t); // 再算一次v有助于提高精度，不算也可以
        t += (W - E_Lon(t, -1)) / v;
        return t;
    }

    /**
     * 已知真月球黄经求时间
     *
     * @param W
     * @return
     */
    public static double M_Lon_t(double W) { // 已知真月球黄经求时间
        double t, v = 8399.70911033384;
        t = (W - 3.81034) / v;
        t += (W - M_Lon(t, 3)) / v;
        v = M_v(t); // v的精度0.5%，详见原文
        t += (W - M_Lon(t, 20)) / v;
        t += (W - M_Lon(t, -1)) / v;
        return t;
    }

    /**
     * 已知月日视黄经差求时间
     *
     * @param W
     * @return
     */
    public static double MS_aLon_t(double W) { // 已知月日视黄经差求时间
        double t, v = 7771.37714500204;
        t = (W + 1.08472) / v;
        t += (W - MS_aLon(t, 3, 3)) / v;
        v = M_v(t) - E_v(t); // v的精度0.5%，详见原文
        t += (W - MS_aLon(t, 20, 10)) / v;
        t += (W - MS_aLon(t, -1, 60)) / v;
        return t;
    }

    /**
     * 已知太阳视黄经反求时间
     *
     * @param W
     * @return
     */
    public static double S_aLon_t(double W) { // 已知太阳视黄经反求时间
        double t, v = 628.3319653318;
        t = (W - 1.75347 - Math.PI) / v;
        v = E_v(t); // v的精度0.03%，详见原文
        t += (W - S_aLon(t, 10)) / v;
        v = E_v(t); // 再算一次v有助于提高精度，不算也可以
        t += (W - S_aLon(t, -1)) / v;
        return t;
    }


    public static double MS_aLon_t2(double W) { // 已知月日视黄经差求时间,高速低精度,误差不超过600秒(只验算了几千年)
        double t, v = 7771.37714500204;
        t = (W + 1.08472) / v;
        double L, t2 = t * t;
        t -= (-0.00003309 * t2 + 0.10976 * Math.cos(0.784758 + 8328.6914246 * t + 0.000152292 * t2) + 0.02224 * Math.cos(0.18740 + 7214.0628654 * t - 0.00021848 * t2) - 0.03342 * Math.cos(4.669257 + 628.307585 * t)) / v;
        L = M_Lon(t, 20) - (4.8950632 + 628.3319653318 * t + 0.000005297 * t * t + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 0.0002061 * Math.cos(2.67823 + 628.307585 * t) * t + 0.000349 * Math.cos(4.6261 + 1256.61517 * t) - 20.5 / rad);
        v = 7771.38 - 914 * Math.sin(0.7848 + 8328.691425 * t + 0.0001523 * t * t) - 179 * Math.sin(2.543 + 15542.7543 * t) - 160 * Math.sin(0.1874 + 7214.0629 * t);
        t += (W - L) / v;
        return t;
    }

    public static double S_aLon_t2(double W) { // 已知太阳视黄经反求时间,高速低精度,最大误差不超过600秒
        double t, L, v = 628.3319653318;
        t = (W - 1.75347 - Math.PI) / v;
        t -= (0.000005297 * t * t + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 0.0002061 * Math.cos(2.67823 + 628.307585 * t) * t) / v;
        t += (W - E_Lon(t, 8) - Math.PI + (20.5 + 17.2 * Math.sin(2.1824 - 33.75705 * t)) / rad) / v;
        return t;
    }

    public static double moonIll(double t) { // 月亮被照亮部分的比例
        double t2 = t * t, t3 = t2 * t, t4 = t3 * t;
        double D, M, m, a, dm = Math.PI / 180;
        D = (297.8502042 + 445267.1115168 * t - 0.0016300 * t2 + t3 / 545868 - t4 / 113065000) * dm; // 日月平距角
        M = (357.5291092 + 35999.0502909 * t - 0.0001536 * t2 + t3 / 24490000) * dm; // 太阳平近点
        m = (134.9634114 + 477198.8676313 * t + 0.0089970 * t2 + t3 / 69699 - t4 / 14712000) * dm; // 月亮平近点
        a = Math.PI - D + (-6.289 * Math.sin(m) + 2.100 * Math.sin(M) - 1.274 * Math.sin(D * 2 - m) - 0.658 * Math.sin(D * 2) - 0.214 * Math.sin(m * 2) - 0.110 * Math.sin(D)) * dm;
        return (1 + Math.cos(a)) / 2;
    }

    public static double moonRad(double r, double h) { // 转入地平纬度及地月质心距离,返回站心视半径(角秒)
        return cs_sMoon / r * (1 + Math.sin(h) * cs_rEar / r);
    }

    public static double[] moonMinR(double t, boolean min) { // 求月亮近点时间和距离,t为儒略世纪数力学时
        double a = 27.55454988 / 36525, b;
        if (min) b = -10.3302 / 36525;
        else b = 3.4471 / 36525;
        t = b + a * Math.round((t - b) / a); // 平近(远)点时间
        double r1, r2, r3, dt;
        // 初算二次
        dt = 1 / 36525;
        r1 = XL1_calc(2, t - dt, 10);
        r2 = XL1_calc(2, t, 10);
        r3 = XL1_calc(2, t + dt, 10);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2;
        dt = 0.5 / 36525;
        r1 = XL1_calc(2, t - dt, 20);
        r2 = XL1_calc(2, t, 20);
        r3 = XL1_calc(2, t + dt, 20);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2;
        // 精算
        dt = 1200 / 86400 / 36525;
        r1 = XL1_calc(2, t - dt, -1);
        r2 = XL1_calc(2, t, -1);
        r3 = XL1_calc(2, t + dt, -1);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2;
        r2 += (r1 - r3) / (r1 + r3 - 2 * r2) * (r3 - r1) / 8;
        return new double[]{t, r2};
    }

    public static double[] moonNode(double t, boolean asc) { // 月亮升交点
        double a = 27.21222082 / 36525, b;
        if (asc) b = 21 / 36525;
        else b = 35 / 36525;
        t = b + a * Math.round((t - b) / a); // 平升(降)交点时间
        double w, v, w2, dt;
        dt = 0.5 / 36525;
        w = XL1_calc(1, t, 10);
        w2 = XL1_calc(1, t + dt, 10);
        v = (w2 - w) / dt;
        t -= w / v;
        dt = 0.05 / 36525;
        w = XL1_calc(1, t, 40);
        w2 = XL1_calc(1, t + dt, 40);
        v = (w2 - w) / dt;
        t -= w / v;
        w = XL1_calc(1, t, -1);
        t -= w / v;
        return new double[]{t, XL1_calc(0, t, -1)};
    }

    public static double[] earthMinR(double t, boolean min) { // 地球近远点
        double a = 365.25963586 / 36525, b;
        if (min) b = 1.7 / 36525;
        else b = 184.5 / 36525;
        t = b + a * Math.round((t - b) / a); // 平近(远)点时间
        double r1, r2, r3, dt;
        // 初算二次
        dt = 3 / 36525;
        r1 = XL0_calc(0, 2, t - dt, 10);
        r2 = XL0_calc(0, 2, t, 10);
        r3 = XL0_calc(0, 2, t + dt, 10);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2; // 误差几个小时
        dt = 0.2 / 36525;
        r1 = XL0_calc(0, 2, t - dt, 80);
        r2 = XL0_calc(0, 2, t, 80);
        r3 = XL0_calc(0, 2, t + dt, 80);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2; // 误差几分钟
        // 精算
        dt = 0.01 / 36525;
        r1 = XL0_calc(0, 2, t - dt, -1);
        r2 = XL0_calc(0, 2, t, -1);
        r3 = XL0_calc(0, 2, t + dt, -1);
        t += (r1 - r3) / (r1 + r3 - 2 * r2) * dt / 2; // 误差小于秒
        r2 += (r1 - r3) / (r1 + r3 - 2 * r2) * (r3 - r1) / 8;
        return new double[]{t, r2};
    }


}
