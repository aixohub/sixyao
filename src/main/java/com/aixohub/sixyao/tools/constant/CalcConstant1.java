package com.aixohub.sixyao.tools.constant;

public class CalcConstant1 {


    /**
     * 8行星星历数据表,及数据表的计算
     **/
    public static double[][] XL0() {
        return mergeArrays(StarConstant1.XL0_1, StarConstant1.XL0_2
                , StarConstant2.XL0_3, StarConstant2.XL0_4
                , StarConstant3.XL0_5, StarConstant4.XL0_6
                , StarConstant5.XL0_7, StarConstant5.XL0_8);

    }

    public static double[][] mergeArrays(double[]... arrays) {
        // 确定合并后的二维数组的行数和列数
        int rows = arrays.length;
        int maxColumns = 0;
        for (double[] array : arrays) {
            maxColumns = Math.max(maxColumns, array.length);
        }

        // 创建合并后的二维数组
        double[][] mergedArray = new double[rows][maxColumns];

        // 复制数组元素到合并后的二维数组中
        for (int i = 0; i < rows; i++) {
            System.arraycopy(arrays[i], 0, mergedArray[i], 0, arrays[i].length);
        }

        return mergedArray;
    }
}
