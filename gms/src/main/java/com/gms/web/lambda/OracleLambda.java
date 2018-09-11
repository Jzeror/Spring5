package com.gms.web.lambda;

import java.util.function.Predicate;

/*
 Consumer<T>		void accept(T t)
 Function<T,R>		R apply(T t)  R은 당연히 리턴타입
 Predicate<T>		boolean test(T t)
 Supplier<T>		T get()
 UnaryOperator<T>	static <T> UnaryOperator<T> identity() 단항연산자
 **/

public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(x))? "NULL" : "NOT NULL";
		System.out.println(r);
	}
}



