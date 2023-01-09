package entidade;

public class Funcionario {

	public String nome;
	public double SalarioBruto;
	public double imposto;

	public double SalarioLiquido() {
		return this.SalarioBruto - this.imposto;
	}

	public void AumentoDeSalario(double porcentagem) {
		SalarioBruto += SalarioBruto * porcentagem / 100.0;
	}

	public String toString() {
		return nome + ", $ " + String.format("%.2f", SalarioLiquido());
	}

}
