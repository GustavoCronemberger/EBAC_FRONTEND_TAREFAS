const alunos = [
    { nome:'Alirio', nota: 5},
    { nome:'Rafael', nota: 4},
    { nome:'Ana', nota: 6},
    { nome:'Beatriz', nota: 8},
    { nome:'Carlos', nota: 7},
    { nome:'Diana', nota: 9},
];

const filtrarAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >=6)
};

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);