package permissaoSenha;

import java.util.Scanner;

public class PermissaoSenha {

	public static void main(String[] args) {
		
		int senha = 1234;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a senha de acesso: ");
		
		int senhaDigitada = sc.nextInt();
		
		if(senha == senhaDigitada) {
			
			System.out.println("Acesso permitido");
		} else {
			System.out.println("Acesso negado");
		}
		sc.close();
	
	}
}
