package com.aixohub.sixyao.yi.enums;

/**
 * 八卦
 */
public enum EightGuaEnum {
    qian("☰", "乾", 1, "金"),
    dui("☱", "兑", 2, "金"),
    li("☲", "离", 3, "火"),
    zhen("☳", "震", 4, "木"),
    xun("☴", "巽", 5, "木"),
    kan("☵", "坎", 6, "水"),
    gen("☶", "艮", 7, "土"),
    kun("☷", "坤", 8, "土"),
    ;

    EightGuaEnum(String code, String name, Integer index, String fiveProperty) {
        this.code = code;
        this.name = name;
        this.index = index;
        this.fiveProperty = fiveProperty;
    }

    private String code;
    private String name;
    private Integer index;
    private String fiveProperty;


    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public Integer getIndex() {
        return index;
    }

    public String getFiveProperty() {
        return fiveProperty;
    }
}
