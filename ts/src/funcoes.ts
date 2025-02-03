function multiplicacao (a: number, b: number): string {
        return `O resultado da multiplicação é ${a * b}!`;
}

function saudar (nome: string): string{
    return `Olá, ${nome}!`;
}

const multiplicar = multiplicacao(2,2);
console.log(multiplicar)

const dizOla = saudar("Gustavo");
console.log(dizOla)

