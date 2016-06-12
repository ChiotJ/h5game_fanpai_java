package cn.com.flytv.fanpai.controller;

import cn.com.flytv.base.result.DataResult;
import cn.com.flytv.fanpai.bean.GameRecordBean;
import cn.com.flytv.fanpai.service.GRService;
import cn.com.flytv.utils.IpUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;

/**
 * Created by jian_ on 2016/6/7.
 */
@Controller
@RequestMapping("game")
public class GRController {
    /**
     * 日志实例
     */
    private static final Logger logger = LogManager.getLogger(GRController.class);

    @Autowired
    GRService grService;

    @RequestMapping(value = "save", method = RequestMethod.POST)
    @ResponseBody
    public DataResult save(HttpServletRequest request,
                           @RequestParam String name,
                           @RequestParam String phone,
                           @RequestParam long time) throws Exception {
        logger.info("save");
        DataResult dataResult;
        String startTimeStr = request.getHeader("start-time");
        if (StringUtils.isEmpty(startTimeStr)) {
            dataResult = DataResult.buildError("Error Request");
        } else {
            Long now = new Date().getTime();
            Long startTime = Long.parseLong(startTimeStr);

            if (now - startTime < (10 * 1000 + time) || time < 5 * 1000) {
                dataResult = DataResult.buildError("Error Request");
            } else {
                String ip = IpUtil.getIpAddr(request);
                grService.save(name, phone, time, ip);
                dataResult = DataResult.buildSuccess();
            }
        }
        return dataResult;
    }


    @RequestMapping(value = "getGameRecord")
    @ResponseBody
    public DataResult getGameRecord(HttpServletRequest request,
                                    @RequestParam(defaultValue = "30") int size,
                                    @RequestParam(defaultValue = "true") boolean secret) throws Exception {
        logger.info("getGameRecord");
        List<GameRecordBean> grbList = grService.getGameRecord(size);
        return DataResult.buildSuccessWithResult(grbList);
    }


    @RequestMapping(value = "getTime")
    @ResponseBody
    public DataResult getTime(HttpServletRequest request) throws Exception {
        logger.info("getTime");
        return DataResult.buildSuccessWithResult(new Date().getTime());
    }


    @RequestMapping(value = "index")
    public ModelAndView index(HttpServletRequest request) throws Exception {
        String ip = IpUtil.getIpAddr(request);
        String userAgent = request.getHeader("user-agent");

        if (userAgent.indexOf("MicroMessenger") < 0) {
            ModelAndView mav = new ModelAndView("error_weixin");
            return mav;
        }

        /*
        Enumeration e = request.getHeaderNames();
        while (e.hasMoreElements()) {
            String key = (String) e.nextElement();
            logger.info(key + ":" + request.getHeader(key));
        }
        */

        logger.info("ip:" + ip);
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }
}
