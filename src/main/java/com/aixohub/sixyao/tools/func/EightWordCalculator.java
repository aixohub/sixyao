package com.aixohub.sixyao.tools.func;


import com.aixohub.sixyao.tools.constant.CalcConstant;
import com.aixohub.sixyao.tools.constant.LunaConstant;

import java.util.HashMap;


public class EightWordCalculator {


    public static HashMap<String, Object> calcEightWord(double jdBirth, int gender, double jingduBirth, int isUseZTY) {
        HashMap<String, Object> bzpp = new HashMap<>();

        bzpp.put("JDBirth", jdBirth);
        bzpp.put("Gender", gender);
        bzpp.put("JingDuBirth", jingduBirth);
        bzpp.put("IsUseZTY", isUseZTY);

        double jd = jdBirth - (8.0 / 24) - CalcConstant.J2000;
        double J = jingduBirth / CalcConstant.radd;

        double jd2 = jd + MathTools.dt_T(jd);
        double w = MathTools.S_aLon(jd2 / 36525, -1);
        int k = (int) ((w / CalcConstant.pi2 * 360 + 45 + 15 * 360) / 30);

        jd += MathTools.pty_zty2(jd2 / 36525) + J / Math.PI / 2;
        double JDBirthZTY = jd + CalcConstant.J2000;
        bzpp.put("JDBirthZTY", jd + CalcConstant.J2000);

        JulianDateTools curDD;
        double curJD;

        if (isUseZTY == 0) {
            jd = jdBirth - CalcConstant.J2000;
            curDD = new JulianDateTools(jdBirth);
            curJD = jdBirth;
        } else {
            curDD = new JulianDateTools(jdBirth);
            curJD = JDBirthZTY;
        }
        bzpp.put("curJD", curDD);

        jd += 13 / 24;
        int D = (int) Math.floor(jd);
        int SC = MathTools.int2((jd - D) * 12);

        int v = (int) (k / 12 + 6000000);
        // year
        int year = v % 60;
        bzpp.put("JZYear", v % 60);
        v = k + 2 + 60000000;
        // month
        int month = v % 60;
        bzpp.put("JZMonth", v % 60);
        v = D - 6 + 9000000;
        // day
        int day = v % 60;
        bzpp.put("JZDay", v % 60);
        v = (D - 1) * 12 + 90000000 + SC;
        // hour
        int hour = v % 60;
        bzpp.put("JZHour", v % 60);
        String yearStr = LunaConstant.JIA_ZI[year];
        String monthStr = LunaConstant.JIA_ZI[month];
        String dayStr = LunaConstant.JIA_ZI[day];
        String hourStr = LunaConstant.JIA_ZI[hour];
        bzpp.put("yearStr", yearStr);
        bzpp.put("monthStr", monthStr);
        bzpp.put("dayStr", dayStr);
        bzpp.put("hourStr", hourStr);


        return bzpp;
    }


}
