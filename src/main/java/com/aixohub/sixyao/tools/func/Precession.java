package com.aixohub.sixyao.tools.func;

public class Precession {

    private static final double rad = Math.PI / 180.0;

    private static final double[][] preceTab_IAU1976 = {
            {0, 5038.7784, -1.07259, -0.001147}, // fi
            {84381.448, 0, 0.05127, -0.007726}, // w
            {0, 4.1976, 0.19447, -0.000179}, // P
            {0, -46.8150, 0.05059, 0.000344}, // Q
            {84381.448, -46.8150, -0.00059, 0.001813}, // E
            {0, 10.5526, -2.38064, -0.001125}, // x
            {0, 47.0028, -0.03301, 0.000057}, // pi
            {629554.886, -869.8192, 0.03666, -0.001504}, // II
            {0, 5029.0966, 1.11113, 0.000006}, // p
            {0, 2004.3109, -0.42665, -0.041833}, // th
            {0, 2306.2181, 0.30188, 0.017998}, // Z
            {0, 2306.2181, 1.09468, 0.018203} // z
    };

    private static final double[][] preceTab_IAU2000 = {
            {0, 5038.478750, -1.07259, -0.001147, 0, 0}, // fi
            {84381.448, -0.025240, 0.05127, -0.007726, 0, 0}, // w
            {0, 4.1976, 0.19447, -0.000179, 0, 0}, // P
            {0, -46.8150, 0.05059, 0.000344, 0, 0}, // Q
            {84381.448, -46.84024, -0.00059, 0.001813, 0, 0}, // E
            {0, 10.5526, -2.38064, -0.001125, 0, 0}, // x
            {0, 47.0028, -0.03301, 0.000057, 0, 0}, // pi
            {629554.886, -869.8192, 0.03666, -0.001504, 0, 0}, // II
            {0, 5028.79695, 1.11113, 0.000006, 0, 0}, // p
            {0, 2004.1917476, -0.4269353, -0.0418251, -0.0000601, -0.0000001}, // th
            {2.5976176, 2306.0809506, 0.3019015, 0.0179663, -0.0000327, -0.0000002}, // Z
            {-2.5976176, 2306.0803226, 1.0947790, 0.0182273, 0.0000470, -0.0000003} // z
    };

    private static final double[][] preceTab_P03 = {
            {0, 5038.481507, -1.0790069, -0.00114045, 0.000132851, -9.51e-8}, // fi
            {84381.406000, -0.025754, 0.0512623, -0.00772503, -4.67e-7, 3.337e-7}, // w
            {0, 4.199094, 0.1939873, -0.00022466, -9.12e-7, 1.20e-8}, // P
            {0, -46.811015, 0.0510283, 0.00052413, -6.46e-7, -1.72e-8}, // Q
            {84381.406000, -46.836769, -0.0001831, 0.00200340, -5.76e-7, -4.34e-8}, // E
            {0, 10.556403, -2.3814292, -0.00121197, 0.000170663, -5.60e-8}, // x
            {0, 46.998973, -0.0334926, -0.00012559, 1.13e-7, -2.2e-9}, // pi
            {629546.7936, -867.95758, 0.157992, -0.0005371, -0.00004797, 7.2e-8}, // II
            {0, 5028.796195, 1.1054348, 0.00007964, -0.000023857, 3.83e-8}, // p
            {0, 2004.191903, -0.4294934, -0.04182264, -7.089e-6, -1.274e-7}, // th
            {2.650545, 2306.083227, 0.2988499, 0.01801828, -5.971e-6, -3.173e-7}, // Z
            {-2.650545, 2306.077181, 1.0927348, 0.01826837, -0.000028596, -2.904e-7} // z
    };

    /**
     * t是儒略世纪数,sc是岁差量名称,mx是模型
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
            p = preceTab_IAU1976;
        }
        if (mx.equals("IAU2000")) {
            n = 6;
            p = preceTab_IAU2000;
        }
        if (mx.equals("P03")) {
            n = 6;
            p = preceTab_P03;
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
     * @param t
     * @return
     */
    public static double hcjj(double t) {
        double t2 = t * t, t3 = t2 * t, t4 = t3 * t, t5 = t4 * t;
        return (84381.4060 - 46.836769 * t - 0.0001831 * t2 + 0.00200340 * t3 - 5.76e-7 * t4 - 4.34e-8 * t5) / rad;
    }

    /**
     * 岁差旋转
     *
     * J2000赤道转Date赤道
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
     *  J2000黄道旋转到Date黄道(球面对球面),也可直接由利用球面旋转函数计算,但交角接近为0时精度很低
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

    private static double rad2mrad(double v) {
        return MathTools.rad2mrad(v);
    }

    private static double[] llrConv(double[] r, double a) {
        return MathTools.llrConv(r, a);
    }
}
