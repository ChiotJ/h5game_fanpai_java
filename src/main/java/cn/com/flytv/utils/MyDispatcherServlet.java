package cn.com.flytv.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.servlet.DispatcherServlet;

/**
 * @author jianyingshuo
 * 
 */

public class MyDispatcherServlet extends DispatcherServlet {
	private static final long serialVersionUID = -6090339662815173817L;

	/** 日志实例 */
	@SuppressWarnings("unused")
	private static final Logger logger = LogManager.getLogger(MyDispatcherServlet.class);

	/**
	 * 捕获未找到的连接
	 */
	@Override
	protected void noHandlerFound(
			HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.sendRedirect(request.getContextPath() + "/exception/404");
		return;
	}

}
