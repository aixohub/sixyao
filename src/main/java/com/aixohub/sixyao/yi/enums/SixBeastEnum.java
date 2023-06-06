package com.aixohub.sixyao.yi.enums;

/**
 * 六兽
 */
public enum SixBeastEnum {

    QING_LONG("qing_long", "青龙", 1),
    ZHU_QUE("zhu_que", "朱雀", 2),
    GOU_CHEN("gou_chen", "勾陈", 3),
    TENG_SHE("teng_she", "腾蛇", 4),
    BAI_HU("bai_hu", "白虎", 5),
    XUAN_WU("xuan_wu", "玄武", 6),

    ;

    SixBeastEnum(String code, String name, Integer index) {
        this.code = code;
        this.name = name;
        this.index = index;
    }

    private String code;
    private String name;
    private Integer index;

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public Integer getIndex() {
        return index;
    }
}
