package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

public class LambdaMethod {
	public static void main(String[] args) {
		Function<String, Integer> f = Integer::parseInt;
		int a =f.apply("4");
		System.out.println(a);
		Consumer<String> c =System.out::println;
		c.accept("Baaaaaaaaam!!");
	}
}
