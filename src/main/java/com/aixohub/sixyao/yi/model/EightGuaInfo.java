package com.aixohub.sixyao.yi.model;

public class EightGuaInfo {
    private String code;
    private String name;
    private Integer orderNum;
    /**
     * 五行属性
     */
    private String fiveProperty;
    /**
     * 生肖
     */
    private String chineseZodiac;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Integer orderNum) {
        this.orderNum = orderNum;
    }

    public String getFiveProperty() {
        return fiveProperty;
    }

    public void setFiveProperty(String fiveProperty) {
        this.fiveProperty = fiveProperty;
    }

    public String getChineseZodiac() {
        return chineseZodiac;
    }

    public void setChineseZodiac(String chineseZodiac) {
        this.chineseZodiac = chineseZodiac;
    }
}
