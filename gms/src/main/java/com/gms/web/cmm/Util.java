package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;

public class Util {
	public static Consumer<Integer> Logi = System.out :: println;
	public static Consumer<String> Log = System.out :: println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Predicate<String> empty = s -> s.equals("");
	public static Predicate<String> notEmpty = empty.negate();
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
}
