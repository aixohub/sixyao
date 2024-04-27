package com.aixohub.sixyao.yi.model;

public class YaoGuaInfo {

    private String year;

    private String month;

    private String day;

    private String hour;

    /**
     * 日空
     */
    private String dayNull;

    /**
     * 农历
     */
    private String lunarCalendar;

    /**
     * 阳历
     */
    private String gregorianCalendar;

    private String askInfo;
    private String askInfoType;

    private YaoLineInfo main;

    private YaoLineInfo bian;

    public String getLunarCalendar() {
        return lunarCalendar;
    }

    public void setLunarCalendar(String lunarCalendar) {
        this.lunarCalendar = lunarCalendar;
    }

    public String getGregorianCalendar() {
        return gregorianCalendar;
    }

    public void setGregorianCalendar(String gregorianCalendar) {
        this.gregorianCalendar = gregorianCalendar;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getDayNull() {
        return dayNull;
    }

    public void setDayNull(String dayNull) {
        this.dayNull = dayNull;
    }

    public YaoLineInfo getMain() {
        return main;
    }

    public void setMain(YaoLineInfo main) {
        this.main = main;
    }

    public YaoLineInfo getBian() {
        return bian;
    }

    public void setBian(YaoLineInfo bian) {
        this.bian = bian;
    }

    public String getAskInfo() {
        return askInfo;
    }

    public void setAskInfo(String askInfo) {
        this.askInfo = askInfo;
    }

    public String getAskInfoType() {
        return askInfoType;
    }

    public void setAskInfoType(String askInfoType) {
        this.askInfoType = askInfoType;
    }
}
