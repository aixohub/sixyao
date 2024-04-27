package com.aixohub.sixyao.tools.func;

public class MathFunctions {

    public static int int2(double v) {
        return (int) Math.floor(v);
    }

    public static double mod2(double v, double n) {
        return (v % n + n) % n;
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
}

