package com.gms.web.generic;

import java.util.Collections;

public class CarMain {
	public static void main(String[] args) {
		CarBox<BMW> bBox = new CarBox<>();
		CarBox<Genesis> gBox = new CarBox<>();
		CarBox<Car> cBox = new CarBox<>();
		gBox.add(new Genesis("제네시스A", 3200));
		gBox.add(new Genesis("제네시스B", 3800));
		gBox.add(new Genesis("제네시스C", 3500));
		bBox.add(new BMW("BMWA", 3000));
		bBox.add(new BMW("BMWB", 3500));
		bBox.add(new BMW("BMWC", 4500));
		cBox.add(new Genesis("제네시스A", 3200));
		cBox.add(new Genesis("제네시스B", 3800));
		cBox.add(new Genesis("제네시스C", 3500));
		cBox.add(new BMW("BMWA", 3000));
		cBox.add(new BMW("BMWB", 3500));
		cBox.add(new BMW("BMWC", 4500));
		Collections.sort(gBox.getList(), new CarOrder());
		Collections.sort(bBox.getList(), new CarOrder());
		Collections.sort(cBox.getList(), new CarOrder());
		System.out.println(bBox);
		System.out.println(gBox);
		System.out.println(cBox);
		
	}
}
