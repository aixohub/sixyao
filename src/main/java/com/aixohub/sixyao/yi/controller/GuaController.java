package com.aixohub.sixyao.yi.controller;

import com.aixohub.sixyao.yi.model.SixFourGuaInfo;
import com.aixohub.sixyao.yi.model.YaoGuaInfo;
import com.aixohub.sixyao.yi.model.YaoRequest;
import com.aixohub.sixyao.yi.service.IGuaExecService;
import com.aixohub.sixyao.yi.utils.JsonUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class GuaController {

    @Resource
    private IGuaExecService guaExecService;


    @ResponseBody
    @RequestMapping("/query")
    public SixFourGuaInfo getGua() {
        return new SixFourGuaInfo();
    }


    @RequestMapping("/liuyao")
    public String liuyao(Model model) {
        return "liuyao_req";
    }

    @RequestMapping("/liuyao-hand")
    public String liuyaoHand(Model model) {
        return "liuyao/liuyao-hand";
    }

    @RequestMapping(value = "/liuyao-hand-calc", method = RequestMethod.POST)
    public String liuyaoHandShake(Model model, YaoRequest yaoRequest) {

        YaoGuaInfo yaoGuaInfo = guaExecService.queryGua(yaoRequest);
        guaExecService.calcInf(yaoGuaInfo);
        model.addAttribute("YaoGuaInfo", yaoGuaInfo);
        model.addAttribute("yaoRequest", yaoRequest);
        return "index";
    }

}
