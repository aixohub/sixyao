package com.aixohub.sixyao.yi.enums;

/**
 * 六亲
 */
public enum SixQinEnum {
    brother("brother", "兄弟"),
    mother("mother", "父母"),
    wife("wife", "妻财"),
    gov("gov", "官鬼"),
    son("son", "子孙"),


    ;

    private String code;
    private String name;

    SixQinEnum(String code, String name) {
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
