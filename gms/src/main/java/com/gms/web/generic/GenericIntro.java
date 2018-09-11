package com.gms.web.generic;

import java.util.Arrays;
import java.util.List;

/**
	Generic은 타입을 생성하는데
	class Member{}의 행위는 Member타입을 생성한 것이다. static 상태로 Member 타입을 생성.
	List<Member> 이렇게 주는 걸 static으로 준다고 한다.
	이에 대응하는 방식이 Dynamic한 타입 생성.
	왜 쓰나?
	- 캐스팅 안 할라고... 자바스크립트에서도 var만 썼다. 타입은 없었따. 내부적으로만 존재할 뿐. 할당할때 타입이 결정된다. 그떄! 창조된다.
		타입의 안정성 제공, 형변환 생략.
		
 * */

public class GenericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("========[1]=========");
		Item<String> itName = new Item<>();
		itName.setOne("갤노트");
		Item<Integer> itVers =  new Item<>();
		itVers.setOne(9);
		System.out.println("삼성 신제품 폰 이름은 :: \n" + itName.getOne()+itVers.getOne());
		System.out.println("========[2]=========");
		Item<List<String>> it = new Item<>();
		it.setSome(Arrays.asList(new String[] {"Hello ","World ", "Generic "} ));
		System.out.println(it.getSome());
		System.out.println("========[3]=========");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}	
}
