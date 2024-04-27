package com.aixohub.sixyao.tools.func;

public class DeltaT {

    private static final double[][] dt_at = {
            {-4000, 108371.7, -13036.80, 392.000, 0.0000},
            {-500, 17201.0, -627.82, 16.170, -0.3413},
            {-150, 12200.6, -346.41, 5.403, -0.1593},
            {150, 9113.8, -328.13, -1.647, 0.0377},
            {500, 5707.5, -391.41, 0.915, 0.3145},
            {900, 2203.4, -283.45, 13.034, -0.1778},
            {1300, 490.1, -57.35, 2.085, -0.0072},
            {1600, 120.0, -9.81, -1.532, 0.1403},
            {1700, 10.2, -0.91, 0.510, -0.0370},
            {1800, 13.4, -0.72, 0.202, -0.0193},
            {1830, 7.8, -1.81, 0.416, -0.0247},
            {1860, 8.3, -0.13, -0.406, 0.0292},
            {1880, -5.4, 0.32, -0.183, 0.0173},
            {1900, -2.3, 2.06, 0.169, -0.0135},
            {1920, 21.2, 1.69, -0.304, 0.0167},
            {1940, 24.2, 1.22, -0.064, 0.0031},
            {1960, 33.2, 0.51, 0.231, -0.0109},
            {1980, 51.0, 1.29, -0.026, 0.0032},
            {2000, 63.87, 0.1, 0, 0},
            {2005, 64.7, 0.4, 0, 0},
            {2015, 69}
    };

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
}
