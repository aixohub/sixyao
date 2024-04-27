package com.aixohub.sixyao.yi.service;

import com.aixohub.sixyao.yi.model.SixFourGuaInfo;
import com.aixohub.sixyao.yi.model.YaoGuaInfo;
import com.aixohub.sixyao.yi.model.YaoRequest;

public interface IGuaExecService {

    SixFourGuaInfo calcInf(YaoGuaInfo yaoGuaInfo);


    YaoGuaInfo queryGua(YaoRequest yaoRequest);

}
