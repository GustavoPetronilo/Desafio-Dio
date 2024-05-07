// Suponha que o nome do herói seja "Superman" e a XP seja 8000
const nomeHeroi = "Superman";
const xpHeroi = 8000;

// Usando uma estrutura de decisão (if-else if-else) para determinar a categoria com base na XP
if (xpHeroi < 1000) {
    console.log(`${nomeHeroi} é de categoria Ferro.`);
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log(`${nomeHeroi} é de categoria Bronze.`);
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log(`${nomeHeroi} é de categoria Prata.`);
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log(`${nomeHeroi} é de categoria Ouro.`);
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log(`${nomeHeroi} é de categoria Platina.`);
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log(`${nomeHeroi} é de categoria Ascendente.`);
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log(`${nomeHeroi} é de categoria Imortal.`);
} else {
    console.log(`${nomeHeroi} é de categoria Radiante.`);
}

