package cn.com.flytv.utils;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * 网站启动时的Listener，让其它实例可以获取ServletContext,WebApplicationContext
 * 
 * @author jianyingshuo
 * @version 1.0
 * @since 2014年08月
 */
// @Component
public class WebStartInit implements ServletContextListener {
	@SuppressWarnings("unused")
	private static final Logger logger = LogManager.getLogger(WebStartInit.class);

	private static WebApplicationContext webApplicationContext;
	private static ServletContext servletContext;

	public void contextDestroyed(
			ServletContextEvent arg0) {
		// TODO Auto-generated method stub
	}

	public void contextInitialized(
			ServletContextEvent event) {
		servletContext = event.getServletContext();
		webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
		// 有些其它想在启动时加载的，也可放在这里

	}

	public static WebApplicationContext getWebApplicationContext() {
		return webApplicationContext;
	}

	public static ServletContext getServletContext() {
		return servletContext;
	}

}
