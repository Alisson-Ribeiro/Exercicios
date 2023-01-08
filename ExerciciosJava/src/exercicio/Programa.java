package exercicio;

import java.util.Scanner;

import entidade.Retangulo;

public class Programa {

	public static void main(String[] args) {
		
		System.out.println("Digite a altura do retângulo: ");
		Scanner sc = new Scanner(System.in);
		
		Retangulo retang = new Retangulo();
		
		retang.altura = sc.nextDouble();
		
		System.out.println("Digite a largura do retângulo: ");
		
		retang.largura = sc.nextDouble();
		
		System.out.printf("AREA = %.2f%n", retang.area());
		System.out.printf("PERIMETRO = %.2f%n", retang.perimetro());
		System.out.printf("DIAGONAL = %.2f%n", retang.diagonal());
		
		
		sc.close();

	}

}
