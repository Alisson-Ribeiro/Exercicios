package salarioMinimo;

import java.util.Scanner;

public class SalarioMinimo {

public static void main(String[] args) {
    
	Scanner sc = new Scanner(System.in);
    
	double salarioMinimo = 788.00;
    double salarioUsuario, quantidadeSalario;
    
    System.out.println("Digite o seu salário: ");
    
    salarioUsuario = sc.nextDouble();
    quantidadeSalario = salarioUsuario / salarioMinimo;
    
    System.out.printf("Você recebe %.2f", quantidadeSalario); 
    System.out.println(" salários.");
	
    sc.close();
    
	}
}