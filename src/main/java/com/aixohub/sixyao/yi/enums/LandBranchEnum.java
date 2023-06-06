package com.aixohub.sixyao.yi.enums;

/**
 * 地支
 * <pre>
 * 子午相冲，丑未相冲，
 *
 * 寅申相冲，卯酉相冲，
 *
 * 辰戌相冲，巳亥相冲。
 * </pre>
 */
public enum LandBranchEnum {

    zi("zi", "子", "水"),
    chou("chou", "丑", "土"),
    yin("yin", "寅", "木"),
    mou("zi", "卯", "木"),

    chen("zi", "辰", "土"),
    si("zi", "巳", "火"),
    wu("zi", "午", "火"),
    wei("zi", "未", "土"),

    shen("zi", "申", "金"),
    you("zi", "酉", "金"),
    xu("zi", "戌", "土"),
    hai("zi", "亥", "水"),
    ;

    private String code;
    private String name;

    private String FiveProperty;

    LandBranchEnum(String code, String name, String fiveProperty) {
        this.code = code;
        this.name = name;
        FiveProperty = fiveProperty;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getFiveProperty() {
        return FiveProperty;
    }
}
