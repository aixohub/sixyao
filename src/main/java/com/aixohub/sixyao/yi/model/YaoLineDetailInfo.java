package com.aixohub.sixyao.yi.model;


public class YaoLineDetailInfo {
    /**
     * 六兽
     */
    private String sixGodBeast;

    /**
     * 伏神
     */
    private String fuShen;

    /**
     * 六亲
     */
    private String sixQinInfo;

    /**
     * 地支
     */
    private String branchInfo;

    /**
     * 地支所属的五行
     */
    private String branchFiveProperty;

    /**
     * 爻的象
     */
    private String yaoIcon;

    /**
     * 爻
     */
    private String yaoType;

    private Integer yaoNum;

    /**
     * 发动
     */
    private String launch;

    /**
     * 世、应
     */
    private String shiYing;


    public String getFuShen() {
        return fuShen;
    }

    public void setFuShen(String fuShen) {
        this.fuShen = fuShen;
    }

    public String getSixQinInfo() {
        return sixQinInfo;
    }

    public void setSixQinInfo(String sixQinInfo) {
        this.sixQinInfo = sixQinInfo;
    }

    public String getBranchInfo() {
        return branchInfo;
    }

    public void setBranchInfo(String branchInfo) {
        this.branchInfo = branchInfo;
    }

    public String getYaoIcon() {
        return yaoIcon;
    }

    public void setYaoIcon(String yaoIcon) {
        this.yaoIcon = yaoIcon;
    }

    public String getShiYing() {
        return shiYing;
    }

    public void setShiYing(String shiYing) {
        this.shiYing = shiYing;
    }

    public String getSixGodBeast() {
        return sixGodBeast;
    }

    public void setSixGodBeast(String sixGodBeast) {
        this.sixGodBeast = sixGodBeast;
    }

    public String getBranchFiveProperty() {
        return branchFiveProperty;
    }

    public void setBranchFiveProperty(String branchFiveProperty) {
        this.branchFiveProperty = branchFiveProperty;
    }

    public String getLaunch() {
        return launch;
    }

    public void setLaunch(String launch) {
        this.launch = launch;
    }

    public String getYaoType() {
        return yaoType;
    }

    public void setYaoType(String yaoType) {
        this.yaoType = yaoType;
    }

    public Integer getYaoNum() {
        return yaoNum;
    }

    public void setYaoNum(Integer yaoNum) {
        this.yaoNum = yaoNum;
    }
}
