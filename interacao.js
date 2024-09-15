// QUESTÃO 1

function questao1() {
    const answer1 = document.querySelector(".answer1")

    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) { 
        k++; 
        soma = soma + k; 
    }
    answer1.innerHTML += "<br>A soma será " + soma;
}
questao1()

// QUESTÃO 2

function fib(n) {
    if (n == 1) return 0
    if (n == 2 || n == 3) return 1
    return fib(n-1)+fib(n-2)
}
function questao2() {
    const answer2 = document.querySelector(".answer2")

    const number = 13
    let n1 = 0
    let i = 1
    while(n1 < number) {
        n1 = fib(i);
        i++;
    }
    if (n1 == number) {
        answer2.innerHTML += "<br>O número " + number + " faz parte da sequência de Fibonacci"
    } else 
        answer2.innerHTML += " O número " + number + " não faz parte da sequência de Fibonacci" 
}
questao2()

// QUESTÃO 3

function questao3() {
    const answer3 = document.querySelector(".answer3")

    const faturamentoMensal = [800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200]

    const media = faturamentoMensal.reduce((total, valor, índice, array) => {
        total += valor;
        if( índice === array.length-1) { 
          return total/array.length;
        } else { 
          return total;
        }
    },0);

    const acimaDaMedia = faturamentoMensal.filter((valor)=>valor>media).length

    let menorFaturamento = Math.min(...faturamentoMensal)
    let maiorFaturamento = Math.max(...faturamentoMensal)

    answer3.innerHTML += 
    "<br>O menor valor de faturamento ocorrido em um dia do mês: R$ " + menorFaturamento + ",00.<br>" + 
    "O maior valor de faturamento ocorrido em um dia do mês: R$ " + maiorFaturamento + ",00.<br>" +
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + acimaDaMedia + " dias."
}
questao3()

// QUESTÃO 4

function questao4() {
    const answer4 = document.querySelector(".answer4")

    const sp = 67836.43
    const rj = 36678.66
    const mg = 29229.88
    const es = 27165.48
    const others = 19849.53
    const soma = sp + rj + mg + es + others

    const spPC = sp /soma * 100
    const rjPC = rj / soma * 100
    const mgPC = mg / soma * 100
    const esPC = es / soma * 100
    const othersPC = others / soma * 100

    answer4.innerHTML += 
    "<br>O faturamento mensal de SP equivale a " + spPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal do RJ equivale a " + rjPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de MG equivale a " + mgPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de ES equivale a " + esPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal dos estados restantes equivale a " + othersPC.toFixed() + "% do faturamento mensal total."
}
questao4()

// QUESTÃO 5

function questao5() {
    const answer5 = document.querySelector(".answer5")

    let palavra = "CALEBE"
    let palavraInversa = ""

    for (let i = palavra.length - 1; i >= 0; i --) {
        palavraInversa += palavra[i]
    }
    answer5.innerHTML += "<br>" + palavraInversa + " é o inverso de " + palavra
}
questao5()