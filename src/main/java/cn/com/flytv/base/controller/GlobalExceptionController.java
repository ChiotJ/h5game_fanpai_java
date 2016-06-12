package cn.com.flytv.base.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.flytv.base.result.DataResult;

/**
 * @author jianyingshuo
 */
@Controller
@RequestMapping("exception")
public class GlobalExceptionController extends BaseController {
    /**
     * 日志实例
     */
    private static final Logger logger = LogManager.getLogger(GlobalExceptionController.class);

    /*
     * 捕获未找到的请求地址
     */
    @RequestMapping(value = "404")
    @ResponseBody
    public DataResult login() {
        return DataResult.buildErrorWithResult("The requested URL was not found", "LINK-ERROR");
    }

}
