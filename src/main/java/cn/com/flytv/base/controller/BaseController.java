package cn.com.flytv.base.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.util.Assert;

/**
 * @author jianyingshuo
 * 
 */

public class BaseController {
	/** 日志实例 */
	private static final Logger logger = LogManager.getLogger(BaseController.class);

	/**
	 * 获取基于应用程序的url绝对路径
	 * 
	 * @param request
	 * @param url
	 *            以"/"打头的URL地址
	 * @return 基于应用程序的url绝对路径
	 */
	public final String getAppbaseUrl(
			HttpServletRequest request,
			String url) {
		Assert.hasLength(url, "url不能为空");
		Assert.isTrue(url.startsWith("/"), "必须以/打头");
		logger.trace("");
		return request.getContextPath() + url;
	}

}
