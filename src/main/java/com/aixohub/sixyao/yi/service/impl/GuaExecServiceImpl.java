package com.aixohub.sixyao.yi.service.impl;

import com.aixohub.sixyao.yi.enums.*;
import com.aixohub.sixyao.yi.model.*;
import com.aixohub.sixyao.yi.service.IGuaExecService;
import com.aixohub.sixyao.yi.service.IUseGodService;
import com.aixohub.sixyao.yi.utils.JsonUtil;
import com.aixohub.sixyao.yi.utils.YaoUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class GuaExecServiceImpl implements IGuaExecService {

    private static final Logger logger = LoggerFactory.getLogger(GuaExecServiceImpl.class);

    @Resource
    private IUseGodService useGodService;

    @Override
    public SixFourGuaInfo calcInf(YaoGuaInfo yaoGuaInfo) {
        logger.info("calcInf param : " + JsonUtil.toJson(yaoGuaInfo));
        YaoCalcInfo yaoCalcInfo = new YaoCalcInfo();
        yaoCalcInfo.setYaoGuaInfo(yaoGuaInfo);
        yaoCalcInfo = useGodService.calcUseGod(yaoCalcInfo);
        String askInfo = yaoGuaInfo.getAskInfo();

        return null;
    }

    @Override
    public YaoGuaInfo queryGua(YaoRequest yaoRequest) {
        logger.info("queryGua: " + JsonUtil.toJson(yaoRequest));
        YaoGuaInfo info = new YaoGuaInfo();
        BeanUtils.copyProperties(yaoRequest, info);

        List<String> lineList = new ArrayList<>();
        lineList.add(yaoRequest.getOneYao());
        lineList.add(yaoRequest.getTwoYao());
        lineList.add(yaoRequest.getThreeYao());
        lineList.add(yaoRequest.getFourYao());
        lineList.add(yaoRequest.getFiveYao());
        lineList.add(yaoRequest.getSixYao());
        List<YaoLineDetailInfo> mainDetailList = new ArrayList<>();
        List<Integer> mainNumList = new ArrayList<>();
        for (String yao : lineList) {
            YaoLineDetailInfo yaoLine = new YaoLineDetailInfo();
            // 处理本卦的六爻信息
            setYaoInfo(mainNumList, yaoLine, yao);
            mainDetailList.add(yaoLine);
        }

        logger.info("mainDetailList: " + JsonUtil.toJson(mainDetailList));

        List<YaoLineDetailInfo> changeDetailList = new ArrayList<>();
        List<Integer> changeNumList = new ArrayList<>();
        for (YaoLineDetailInfo lineInfo : mainDetailList) {
            // 根据本卦获取变卦
            YaoLineDetailInfo changeYaoInfo = getChangeYaoInfo(changeNumList, lineInfo);
            changeDetailList.add(changeYaoInfo);
        }

        // 本卦
        YaoLineInfo main = genFullLiuYaoPaiPan(mainNumList, mainDetailList, yaoRequest.getiRiJZ());
        info.setMain(main);

        // 变卦
        YaoLineInfo change = genFullLiuYaoPaiPan(changeNumList, changeDetailList, yaoRequest.getiRiJZ());
        info.setBian(change);

        return info;
    }


    /**
     * 六爻排盘
     * @param mainNumList
     * @param detailList
     * @param iRiJZ
     * @return
     */
    private YaoLineInfo genFullLiuYaoPaiPan(List<Integer> mainNumList,
                                            List<YaoLineDetailInfo> detailList,
                                            String iRiJZ) {
        int bgShangGuaIndex = YaoUtil.sanYaoToBaGuaIndex(mainNumList.get(3), mainNumList.get(4), mainNumList.get(5));
        int bgXiaGuaIndex = YaoUtil.sanYaoToBaGuaIndex(mainNumList.get(0), mainNumList.get(1), mainNumList.get(2));
        int[] arr = new int[mainNumList.size()];
        for (int i = 0; i < mainNumList.size(); i++) {
            arr[i] = mainNumList.get(i);
        }
        int bgIndex = YaoUtil.liuYaoArrayToGuaIndex(arr);
        String guaIndex = YaoUtil.Array64Gua[bgIndex][1];
        int bgWuXing = YaoUtil.BaGuaWuXing[Integer.parseInt(guaIndex)];

        int[] bgDiZhi = new int[6];

        bgDiZhi[3] = YaoUtil.naJiaDiZhi[bgShangGuaIndex][3];
        bgDiZhi[4] = YaoUtil.naJiaDiZhi[bgShangGuaIndex][4];
        bgDiZhi[5] = YaoUtil.naJiaDiZhi[bgShangGuaIndex][5];
        //下卦，0，1，2
        bgDiZhi[0] = YaoUtil.naJiaDiZhi[bgXiaGuaIndex][0];
        bgDiZhi[1] = YaoUtil.naJiaDiZhi[bgXiaGuaIndex][1];
        bgDiZhi[2] = YaoUtil.naJiaDiZhi[bgXiaGuaIndex][2];

        //本卦的地支五行、六亲序号
        int[] bgDZWX = new int[6]; //木0 火1 土2 金3 水4
        int[] bgLiuQin = new int[6];//兄弟0 子孙1 妻财2 官鬼3 父母4
        for (int i = 0; i < 6; i++) {
            bgDZWX[i] = YaoUtil.diZhiChaWuXing[bgDiZhi[i]];//地支查五行
            //计算六亲
            bgLiuQin[i] = (bgDZWX[i] + 5 - bgWuXing) % 5;//六亲只有五个
        }

        //世爻应爻位置，先取卦在卦宫内的序号
        int bgGongNeiIndex = Integer.parseInt(YaoUtil.Array64Gua[bgIndex][2]);
        int bgShiYao = YaoUtil.AnShiYao[bgGongNeiIndex];
        int bgYingYao = (bgShiYao + 3) % 6;
        //记录本卦世爻1、应爻2、普通爻0 的数组
        int[] bgShiYingPu = new int[6];
        //初始化为0
        for (int i = 0; i < 6; i++) {
            bgShiYingPu[i] = 0;
        }
        bgShiYingPu[bgShiYao] = 1; //标记世爻
        bgShiYingPu[bgYingYao] = 2; //标记应爻

        //安置六神、明动暗动
        //八字日干
        int[] arrLiuShen = {0, 0, 0, 0, 0, 0};
        if (StringUtils.hasLength(iRiJZ)) {
            int nRiGan = Integer.parseInt(iRiJZ) % 10;
            int lsStart = YaoUtil.RiGanQiLiuShen[nRiGan]; //最下面起始的六神
            for (int i = 0; i < 6; i++) {
                arrLiuShen[i] = (lsStart + i) % 6;//六神是六个
            }
        }

        //计算伏神，直接写成字符串数组
        String[] FuShenStrs = new String[6];
        for (int i = 0; i < 6; i++)//从下往上排
        {
            FuShenStrs[i] = ""; //初始化为5汉字空格
        }
        //本卦的卦宫纯卦序号
        int bgGuaGongIndex = Integer.parseInt(YaoUtil.Array64Gua[bgIndex][1]);
        //伏神的地支、天干
        int[] fsDiZhi = YaoUtil.naJiaDiZhi[bgGuaGongIndex];//卦宫纯卦的6个直接全部复制
        int[] fsTianGan = YaoUtil.NaJiaTianGan[bgGuaGongIndex];//纯卦天干
        //纯卦的六个地支五行
        int[] fsDZWX = new int[6];
        int[] awxCount = YaoUtil.awxCount(bgDZWX);
        for (int i = 0; i < 6; i++) {
            fsDZWX[i] = YaoUtil.diZhiChaWuXing[fsDiZhi[i]]; //这一行的五行
            //判断有无上卦
            if (awxCount[fsDZWX[i]] < 1) {
                //没有上卦
                //填充伏神字符串
                FuShenStrs[i] = YaoUtil.LiuQinArray[(fsDZWX[i] + 5 - bgWuXing) % 5]
                        + YaoUtil.TianGan[fsTianGan[i]]
                        + YaoUtil.DiZhi[fsDiZhi[i]]
                        + YaoUtil.WuXing[fsDZWX[i]];
            }//默认已经填了五个汉字空格，上卦的六亲五行不管
        }


        for (int i = 0; i < detailList.size(); i++) {
            YaoLineDetailInfo yaoLineDetailInfo = detailList.get(i);
            String s = YaoUtil.LiuQinArray[bgLiuQin[i]];
            String s1 = YaoUtil.DiZhi[bgDiZhi[i]];
            String s2 = YaoUtil.WuXing[bgDZWX[i]];
            yaoLineDetailInfo.setSixQinInfo(s);
            yaoLineDetailInfo.setBranchInfo(s1);
            yaoLineDetailInfo.setBranchFiveProperty(s2);

            String shiYingPuStr = YaoUtil.shiYingPuStrs[bgShiYingPu[i]];
            yaoLineDetailInfo.setShiYing(shiYingPuStr);

            yaoLineDetailInfo.setFuShen(FuShenStrs[i]);

            yaoLineDetailInfo.setSixGodBeast(YaoUtil.LiuShenArray[arrLiuShen[i]]);
        }

        YaoLineInfo main = new YaoLineInfo();
        main.setOneYao(detailList.get(0));
        main.setTwoYao(detailList.get(1));
        main.setThreeYao(detailList.get(2));
        main.setFourYao(detailList.get(3));
        main.setFiveYao(detailList.get(4));
        main.setSixYao(detailList.get(5));
        main.setName(YaoUtil.Array64Gua[bgIndex][0]);
        main.setDesc(YaoUtil.Array64Gua[bgIndex][3]);

        String belong = YaoUtil.BaGua[Integer.parseInt(YaoUtil.Array64Gua[bgIndex][1])] + "宫"
                + YaoUtil.GongNeiBaGuaMingChen[Integer.parseInt(YaoUtil.Array64Gua[bgIndex][2])];
        main.setBelong(belong);
        return main;
    }


    /**
     * 主卦信息
     *
     * @param detailLine
     * @param yaoLine
     */
    private void setYaoInfo(List<Integer> mainNumList,
                            YaoLineDetailInfo detailLine,
                            String yaoLine) {
        TrigramEnum yaoInfo = TrigramEnum.findByNum(yaoLine);
        detailLine.setYaoIcon(yaoInfo.getIcon());
        detailLine.setYaoType(yaoInfo.getType());
        String code = yaoInfo.getCode();
        if (TrigramEnum.old_yang.getCode().equals(code) ||
                TrigramEnum.old_yin.getCode().equals(code)) {
            detailLine.setLaunch(code);
        }
        Integer number = yaoInfo.getNumber();
        int iYao = number % 2;
        detailLine.setYaoNum(iYao);
        mainNumList.add(iYao);
    }


    /**
     * 变卦信息
     *
     * @param source
     * @return
     */
    private YaoLineDetailInfo getChangeYaoInfo(List<Integer> changeNumList,
                                               YaoLineDetailInfo source) {
        YaoLineDetailInfo target = new YaoLineDetailInfo();
        target.setYaoIcon(source.getYaoIcon());
        target.setYaoNum(source.getYaoNum());
        target.setYaoType(source.getYaoType());
        String launch = source.getLaunch();
        if (TrigramEnum.old_yang.getCode().equals(launch) ||
                TrigramEnum.old_yin.getCode().equals(launch)) {
            String yaoType = source.getYaoType();
            if (yaoType.equals(YaoTypeEnum.yang.getName())) {
                target.setYaoType(YaoTypeEnum.yin.getName());
                target.setYaoIcon(YaoTypeEnum.yin.getCode());
                target.setYaoNum(0);
            } else {
                target.setYaoType(YaoTypeEnum.yang.getName());
                target.setYaoIcon(YaoTypeEnum.yang.getCode());
                target.setYaoNum(1);
            }
        }
        changeNumList.add(target.getYaoNum());
        return target;
    }
}
