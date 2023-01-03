package entities;

public class Product {
	
	public String name;
	public double price;
	public int quantity;
	
	public double totalValueInStock() {
		return price * quantity;
	}
	
	public void addProducts(int quantity) {
		this.quantity += quantity;
	}
	
	public void removeProducts(int quantity) {
		this.quantity -= quantity;
	}
	
	public String toString() { // sobrescrevendo método nativo do toString para um retorno formatado
		return name
			+ ", $"
			+ String.format("%.2f", price ) // retorno do atributo preco formatado para 2 casas decimais
			+ ", "
			+ quantity
			+ " units, Total: $ "
			+ String.format("%.2f", totalValueInStock()); // retorno do método totalValueInStock formatado para 2 casas decimais
	}
	
}
