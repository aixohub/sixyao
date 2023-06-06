package com.aixohub.sixyao.yi.enums;

/**
 * 阴阳爻
 */
public enum YaoTypeEnum {
    yin("▅▅　▅▅", "阴"),
    yang("▅▅▅▅▅", "阳");

    private String code;
    private String name;

    YaoTypeEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }
}
