function Veiculo (marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
}

function Carro (marca, modelo, ano, cor, valor) {
    Veiculo.call(this, marca, modelo, ano, cor, valor)

    this.valor = valor;
}

function Moto (marca, modelo, ano, cor, valor) {
    Veiculo.call(this, marca, modelo, ano, cor, valor)

    this.valor = valor;
}

const carro1 = new Carro("Honda", "Civic", "2024", "branco", 150000);
const carro2 = new Carro("Toyota", "Corolla", "2025", "branco", 180000);
const moto1 = new Moto("Honda", "CG-150", "2024", "azul", 23000);
const moto2 = new Moto("Yamaha", "YZF-R3", "2023", "azul", 20000);



console.log(carro1);
console.log(moto1);
console.log(carro2);
console.log(moto2);