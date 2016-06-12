package cn.com.flytv.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public final class TimerUtil {
	public static final synchronized String parseDate(
			Date date)

	{
		String format = "yyyy-MM-dd";
		return new SimpleDateFormat(format).format(date);
	}

	public static final synchronized String parseDateFen(
			Date date)

	{
		String format = "HH:mm";
		return new SimpleDateFormat(format).format(date);
	}

	public static final synchronized String parseDateTime(
			Date date)

	{
		String format = "yyyy-MM-dd HH:mm:ss";
		return new SimpleDateFormat(format).format(date);
	}
	
	public static final synchronized String parseDateTime2(
			Date date)

	{
		String format = "yyyyMMddHHmmss";
		return new SimpleDateFormat(format).format(date);
	}

	public static final synchronized Date parseStringToDate(
			String date,
			String format) throws ParseException {
		return new SimpleDateFormat(format).parse(date);
	}

	public static final synchronized Date addDay(
			Date date,
			int day) {
		date = date == null ? new Date() : date;
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(5, day);
		return cal.getTime();
	}

	public static final synchronized Date addMinute(
			Date date,
			int minute) {
		date = date == null ? new Date() : date;
		Long time = date.getTime();
		return new Date(time + (minute * 1000 * 60));
	}

	public static final synchronized String parseDateTimeForSMP() {
		String format = "yyyyMMddHHmmss";
		return new SimpleDateFormat(format).format(new Date());
	}

	public static final synchronized String parseDateTimeForSMPRegister() {
		Calendar curr = Calendar.getInstance();
		curr.set(Calendar.YEAR,curr.get(Calendar.YEAR)+5);
		Date date=curr.getTime();
		String format = "yyyyMMddHHmmss";
		return new SimpleDateFormat(format).format(date);
	}
	
	
	public static final synchronized String parseDate2(
			Date date)

	{
		String format = "MM-dd HH:mm";
		return new SimpleDateFormat(format).format(date);
	}
}