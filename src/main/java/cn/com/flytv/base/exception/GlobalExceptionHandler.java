package cn.com.flytv.base.exception;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.flytv.base.result.DataResult;

/**
 * 全局异常捕获
 * 
 * @author jianyingshuo
 * 
 */

@ControllerAdvice
public class GlobalExceptionHandler {

	/** 日志实例 */
	private static final Logger logger = LogManager.getLogger(GlobalExceptionHandler.class);

	@ExceptionHandler(Exception.class)
	public @ResponseBody DataResult handleException(
			HttpServletRequest request,
			Exception e) {
		String requestURL = request.getRequestURL().toString();
		logger.error("Error_URL{url=[" + requestURL + "[}", e);
		return DataResult.buildError("SERVER-EXCEPTION");
	}

}
