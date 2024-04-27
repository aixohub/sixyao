package com.aixohub.sixyao.tools.func;

public class MathTools {

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
     *  直角坐标转球
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
}
