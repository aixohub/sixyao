package com.aixohub.sixyao.yi.enums;

/**
 * 卦象
 */
public enum TrigramEnum {

    less_yin("Ⅱ", "少阴", "阴", 0, "少阴", "▅▅　▅▅"),
    less_yang("Ⅰ", "少阳", "阳", 1, "少阳", "▅▅▅▅▅"),
    old_yin("Ⅹ", "老阴", "阴", 2, "老阴", "▅▅　▅▅"),
    old_yang("〇", "老阳", "阳", 3, "老阳", "▅▅▅▅▅"),
    ;

    private String code;
    private String name;
    private String type;
    private Integer number;
    private String desc;
    private String icon;

    public static TrigramEnum findByNum(String num) {
        if (num == null) {
            return null;
        }
        return findByNum(Integer.valueOf(num));
    }

    public static TrigramEnum findByNum(Integer num) {
        for (TrigramEnum info : values()) {
            Integer number = info.getNumber();
            if (num.equals(number)) {
                return info;
            }
        }
        return null;
    }

    TrigramEnum(String code, String name, String type, Integer number, String desc, String icon) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.number = number;
        this.desc = desc;
        this.icon = icon;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public Integer getNumber() {
        return number;
    }

    public String getDesc() {
        return desc;
    }

    public String getIcon() {
        return icon;
    }

    public String getType() {
        return type;
    }
}
