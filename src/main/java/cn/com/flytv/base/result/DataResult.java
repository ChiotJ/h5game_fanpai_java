package cn.com.flytv.base.result;

import java.io.Serializable;

public class DataResult implements Serializable {

	private static final long serialVersionUID = -2958225513270579310L;

	public static DataResult buildSuccess() {
		return new DataResult("", "", true);
	}

	public static DataResult buildSuccess(
			String message) {
		return new DataResult("", message, true);
	}

	public static DataResult buildSuccessWithResult(
			Object result) {
		return new DataResult(result, "", true);
	}

	public static DataResult buildSuccessWithResult(
			Object result,
			String message) {
		return new DataResult(result, message, true);
	}

	public static DataResult buildError() {
		return new DataResult("", "", false);
	}

	public static DataResult buildError(
			String message) {
		return new DataResult("", message, false);
	}

	public static DataResult buildErrorWithResult(
			Object result) {
		return new DataResult(result, "", false);
	}

	public static DataResult buildErrorWithResult(
			Object result,
			String message) {
		return new DataResult(result, message, false);
	}

	public static DataResult build(
			Object result,
			String message,
			boolean success) {
		return new DataResult(result, message, success);
	}

	private DataResult(
			Object result,
			String message,
			boolean success) {
		this.message = message;
		this.result = result;
		this.success = success;
	}

	private String message = "";
	private Object result = "";
	private boolean success = true;

	public String getMessage() {
		return message;
	}

	public void setMessage(
			String message) {
		this.message = message;
	}

	public Object getResult() {
		return result;
	}

	/**
	 * @return the success
	 */
	public boolean isSuccess() {
		return success;
	}

}
