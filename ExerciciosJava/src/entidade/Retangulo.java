package entidade;


public class Retangulo {
	
	public double largura;
	public double altura;
	
	public double area() {
		return largura * altura;
	}
	
	public double perimetro() {
		return (largura + altura)*2;
	}
	
	public double diagonal() { 
		return Math.sqrt(largura * largura + altura * altura);
	}
	
}
