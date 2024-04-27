package com.aixohub.sixyao.yi.service.impl;

import com.aixohub.sixyao.yi.model.YaoCalcInfo;
import com.aixohub.sixyao.yi.model.YaoGuaInfo;
import com.aixohub.sixyao.yi.service.IUseGodService;
import org.springframework.stereotype.Service;

@Service
public class UseGodServiceImpl implements IUseGodService {

    static final String mother = "父母，伯，shu";

    /**
     * 计算用神
     *
     * @param calcInfo
     * @return
     */
    @Override
    public YaoCalcInfo calcUseGod(YaoCalcInfo calcInfo) {
        YaoGuaInfo yaoGua = calcInfo.getYaoGuaInfo();
        String askInfo = yaoGua.getAskInfo();
        String askInfoType = yaoGua.getAskInfoType();

        return calcInfo;
    }
}
