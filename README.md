### QUESTÃO 01 (função: `questao1`)

#### Descrição:
A função `questao1` realiza uma soma cumulativa de números inteiros de 1 a 13 e exibe o resultado na página da web. Ela atualiza o conteúdo de um elemento HTML com a classe `.answer1`, mostrando a soma total após a execução.

#### Código:
```javascript
function questao1() {
    const answer1 = document.querySelector(".answer1");

    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) { 
        k++; 
        soma = soma + k; 
    }
    answer1.innerHTML += "<br>A soma será " + soma;
}
questao1();
```

#### Explicação do código:

1. **Seleção do Elemento HTML**:
    ```javascript
    const answer1 = document.querySelector(".answer1");
    ```
    - Seleciona o primeiro elemento no documento com a classe `.answer1` e o armazena na constante `answer1`. Este elemento será usado para exibir o resultado da soma.

2. **Inicialização de Variáveis**:
    ```javascript
    let indice = 13;
    let soma = 0;
    let k = 0;
    ```
    - `indice`: Define o valor final para o loop, neste caso, 13.
    - `soma`: Inicializa a variável que armazenará a soma cumulativa dos números.
    - `k`: Inicializa a variável de controle do loop.

3. **Loop `while` para a Soma**:
    ```javascript
    while (k < indice) { 
        k++; 
        soma = soma + k; 
    }
    ```
    - Executa um loop `while` até que `k` seja menor que `indice` (13).
    - Em cada iteração:
      - Incrementa `k` em 1 (`k++`).
      - Adiciona o valor de `k` à variável `soma`.

4. **Exibição do Resultado**:
    ```javascript
    answer1.innerHTML += "<br>A soma será " + soma;
    ```
    - Atualiza o conteúdo HTML do elemento selecionado com a classe `.answer1`, adicionando uma nova linha com o texto "A soma será " seguido do valor de `soma`.

5. **Chamada da Função**:
    ```javascript
    questao1();
    ```
    - Invoca a função `questao1` para que o cálculo seja executado e o resultado seja exibido na página.

#### Resultado:
Após a execução da função, o resultado da soma dos números de 1 a 13 é 91, e será exibido na página no elemento com a classe `.answer1`.

#### Observações:
- A soma dos números de 1 a 13 é calculada usando a fórmula da soma aritmética, mas aqui é implementada com um loop.
- A função manipula diretamente o DOM para exibir o resultado, assumindo que um elemento com a classe `.answer1` está presente no HTML.

--------------------------------------------

### QUESTÃO 02 (funções: `fib` e `questao2`)

#### Descrição Geral:
O código define duas funções: `fib` e `questao2`. A função `fib` calcula o n-ésimo número da sequência de Fibonacci de forma recursiva. A função `questao2` verifica se um número específico (13, neste caso) faz parte da sequência de Fibonacci e exibe o resultado na página web.

#### Código:
```javascript
function fib(n) {
    if (n == 1) return 0;
    if (n == 2 || n == 3) return 1;
    return fib(n - 1) + fib(n - 2);
}

function questao2() {
    const answer2 = document.querySelector(".answer2");

    const number = 13;
    let n1 = 0;
    let i = 1;
    while (n1 < number) {
        n1 = fib(i);
        i++;
    }
    if (n1 == number) {
        answer2.innerHTML += "<br>O número " + number + " faz parte da sequência de Fibonacci";
    } else {
        answer2.innerHTML += " O número " + number + " não faz parte da sequência de Fibonacci";
    }
}

questao2();
```

### Função: `fib`

#### Descrição:
Calcula o n-ésimo número da sequência de Fibonacci usando recursão.

#### Parâmetros:
- `n`: Um número inteiro que representa a posição na sequência de Fibonacci.

#### Retorno:
- Retorna o n-ésimo número da sequência de Fibonacci.

#### Explicação do Código:
1. **Condições Base**:
   ```javascript
   if (n == 1) return 0;
   if (n == 2 || n == 3) return 1;
   ```
   - Se `n` é 1, retorna 0 (primeiro número da sequência).
   - Se `n` é 2 ou 3, retorna 1 (segundo e terceiro números da sequência).
   
2. **Recursão**:
   ```javascript
   return fib(n - 1) + fib(n - 2);
   ```
   - Retorna a soma dos dois números anteriores na sequência, calculando recursivamente `fib(n - 1)` e `fib(n - 2)`.

### Função: `questao2`

#### Descrição:
Verifica se o número 13 faz parte da sequência de Fibonacci e exibe o resultado em um elemento da página web com a classe `.answer2`.

#### Explicação do Código:
1. **Seleção do Elemento HTML**:
   ```javascript
   const answer2 = document.querySelector(".answer2");
   ```
   - Seleciona o primeiro elemento no documento com a classe `.answer2` para exibir o resultado.

2. **Inicialização de Variáveis**:
   ```javascript
   const number = 13;
   let n1 = 0;
   let i = 1;
   ```
   - `number`: O número que será verificado se faz parte da sequência de Fibonacci (13).
   - `n1`: Inicializa a variável que armazenará os números da sequência de Fibonacci.
   - `i`: Inicializa a variável de controle para iterar sobre os números da sequência.

3. **Loop `while` para Encontrar o Número**:
   ```javascript
   while (n1 < number) {
       n1 = fib(i);
       i++;
   }
   ```
   - Calcula os números da sequência de Fibonacci usando a função `fib` até que `n1` seja maior ou igual a `number`.
   - Atualiza `n1` com o próximo número da sequência em cada iteração.

4. **Verificação e Exibição do Resultado**:
   ```javascript
   if (n1 == number) {
       answer2.innerHTML += "<br>O número " + number + " faz parte da sequência de Fibonacci";
   } else {
       answer2.innerHTML += " O número " + number + " não faz parte da sequência de Fibonacci";
   }
   ```
   - Se `n1` for igual a `number` após o loop, exibe uma mensagem indicando que o número faz parte da sequência.
   - Caso contrário, exibe uma mensagem indicando que o número não faz parte da sequência.

5. **Chamada da Função**:
   ```javascript
   questao2();
   ```
   - Invoca a função `questao2` para executar a verificação e exibir o resultado na página.

### Resultado Esperado:
Após a execução, a função verifica se o número 13 faz parte da sequência de Fibonacci. Neste caso, exibirá a mensagem "O número 13 faz parte da sequência de Fibonacci" no elemento com a classe `.answer2`.

### Observações:
- A função `fib` é recursiva e pode ser ineficiente para números grandes devido à duplicação de cálculos. Uma abordagem iterativa ou memoization poderia melhorar o desempenho.
- A função `questao2` assume que um elemento com a classe `.answer2` está presente no HTML para exibir o resultado.

--------------------------------------------

### QUESTÃO 03 (função: `questao3`)

#### Descrição:
A função `questao3` calcula e exibe informações sobre o faturamento mensal de uma empresa. Ela analisa um array de valores diários de faturamento, calculando a média mensal, o menor e o maior valor, e conta quantos dias tiveram faturamento acima da média. O resultado é exibido na página web.

#### Código:
```javascript
function questao3() {
    const answer3 = document.querySelector(".answer3");

    const faturamentoMensal = [800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200];

    const media = faturamentoMensal.reduce((total, valor, índice, array) => {
        total += valor;
        if (índice === array.length - 1) { 
            return total / array.length;
        } else { 
            return total;
        }
    }, 0);

    const acimaDaMedia = faturamentoMensal.filter((valor) => valor > media).length;

    let menorFaturamento = Math.min(...faturamentoMensal);
    let maiorFaturamento = Math.max(...faturamentoMensal);

    answer3.innerHTML += 
    "<br>O menor valor de faturamento ocorrido em um dia do mês: R$ " + menorFaturamento + ",00.<br>" + 
    "O maior valor de faturamento ocorrido em um dia do mês: R$ " + maiorFaturamento + ",00.<br>" +
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + acimaDaMedia + " dias.";
}

questao3();
```

### Explicação do Código:

1. **Seleção do Elemento HTML**:
    ```javascript
    const answer3 = document.querySelector(".answer3");
    ```
    - Seleciona o primeiro elemento no documento com a classe `.answer3` e o armazena na constante `answer3`. Este elemento será usado para exibir os resultados da análise.

2. **Array de Faturamento Mensal**:
    ```javascript
    const faturamentoMensal = [800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200, 800, 900, 1000, 1100, 1200];
    ```
    - Armazena os valores de faturamento diário em um array chamado `faturamentoMensal`. Cada valor representa o faturamento de um dia específico.

3. **Cálculo da Média Mensal**:
    ```javascript
    const media = faturamentoMensal.reduce((total, valor, índice, array) => {
        total += valor;
        if (índice === array.length - 1) { 
            return total / array.length;
        } else { 
            return total;
        }
    }, 0);
    ```
    - Usa o método `reduce` para calcular a média do faturamento mensal.
    - O `reduce` acumula o valor total do array e, quando chega ao último elemento (`índice === array.length - 1`), divide o total pela quantidade de elementos para obter a média.

4. **Contagem de Dias com Faturamento Acima da Média**:
    ```javascript
    const acimaDaMedia = faturamentoMensal.filter((valor) => valor > media).length;
    ```
    - Usa o método `filter` para criar um novo array contendo apenas os valores do faturamento que são maiores que a média calculada.
    - A propriedade `length` retorna o número de elementos desse array, indicando quantos dias tiveram faturamento acima da média.

5. **Cálculo do Menor e Maior Faturamento**:
    ```javascript
    let menorFaturamento = Math.min(...faturamentoMensal);
    let maiorFaturamento = Math.max(...faturamentoMensal);
    ```
    - Usa `Math.min` e `Math.max` para encontrar, respectivamente, o menor e o maior valor no array `faturamentoMensal`.

6. **Exibição do Resultado**:
    ```javascript
    answer3.innerHTML += 
    "<br>O menor valor de faturamento ocorrido em um dia do mês: R$ " + menorFaturamento + ",00.<br>" + 
    "O maior valor de faturamento ocorrido em um dia do mês: R$ " + maiorFaturamento + ",00.<br>" +
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + acimaDaMedia + " dias.";
    ```
    - Atualiza o conteúdo HTML do elemento selecionado com a classe `.answer3`, adicionando informações sobre o menor faturamento, o maior faturamento e o número de dias com faturamento acima da média.

7. **Chamada da Função**:
    ```javascript
    questao3();
    ```
    - Invoca a função `questao3` para executar os cálculos e exibir os resultados na página.

### Resultado Esperado:
Após a execução da função, serão exibidas as seguintes informações no elemento com a classe `.answer3`:
- O menor valor de faturamento ocorrido em um dia do mês.
- O maior valor de faturamento ocorrido em um dia do mês.
- O número de dias em que o valor de faturamento diário foi superior à média mensal.

### Observações:
- A função usa métodos de array como `reduce`, `filter`, `Math.min`, e `Math.max` para manipulação e análise de dados.
- A função assume que um elemento com a classe `.answer3` está presente no HTML para exibir os resultados.
- O cálculo da média mensal é feito diretamente no array, e o resultado é arredondado até a precisão do ponto flutuante do JavaScript.

--------------------------------------------

### QUESTÃO 04 (função: `questao4`)

#### Descrição:
A função `questao4` calcula e exibe a porcentagem de contribuição de diferentes estados ao faturamento mensal total. Ela calcula a participação percentual de cada estado e exibe os resultados na página web.

#### Código:
```javascript
function questao4() {
    const answer4 = document.querySelector(".answer4");

    const sp = 67836.43;
    const rj = 36678.66;
    const mg = 29229.88;
    const es = 27165.48;
    const others = 19849.53;
    const soma = sp + rj + mg + es + others;

    const spPC = sp / soma * 100;
    const rjPC = rj / soma * 100;
    const mgPC = mg / soma * 100;
    const esPC = es / soma * 100;
    const othersPC = others / soma * 100;

    answer4.innerHTML += 
    "<br>O faturamento mensal de SP equivale a " + spPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal do RJ equivale a " + rjPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de MG equivale a " + mgPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de ES equivale a " + esPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal dos estados restantes equivale a " + othersPC.toFixed() + "% do faturamento mensal total.";
}

questao4();
```

### Explicação do Código:

1. **Seleção do Elemento HTML**:
    ```javascript
    const answer4 = document.querySelector(".answer4");
    ```
    - Seleciona o primeiro elemento no documento com a classe `.answer4` e o armazena na constante `answer4`. Este elemento será usado para exibir os resultados dos cálculos.

2. **Definição dos Faturamentos dos Estados**:
    ```javascript
    const sp = 67836.43;
    const rj = 36678.66;
    const mg = 29229.88;
    const es = 27165.48;
    const others = 19849.53;
    ```
    - Define as variáveis que armazenam os valores do faturamento mensal de cada estado (`sp`, `rj`, `mg`, `es`) e dos demais estados (`others`).

3. **Cálculo do Faturamento Total**:
    ```javascript
    const soma = sp + rj + mg + es + others;
    ```
    - Soma os valores de faturamento de todos os estados para obter o faturamento mensal total.

4. **Cálculo da Porcentagem de Contribuição de Cada Estado**:
    ```javascript
    const spPC = sp / soma * 100;
    const rjPC = rj / soma * 100;
    const mgPC = mg / soma * 100;
    const esPC = es / soma * 100;
    const othersPC = others / soma * 100;
    ```
    - Calcula a porcentagem de contribuição de cada estado em relação ao faturamento total, multiplicando o resultado por 100 para converter para porcentagem.

5. **Exibição do Resultado**:
    ```javascript
    answer4.innerHTML += 
    "<br>O faturamento mensal de SP equivale a " + spPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal do RJ equivale a " + rjPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de MG equivale a " + mgPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal de ES equivale a " + esPC.toFixed() + "% do faturamento mensal total.<br>" + 
    "O faturamento mensal dos estados restantes equivale a " + othersPC.toFixed() + "% do faturamento mensal total.";
    ```
    - Atualiza o conteúdo HTML do elemento selecionado com a classe `.answer4`, exibindo a porcentagem de contribuição de cada estado.
    - O método `.toFixed()` é usado para arredondar a porcentagem para um número inteiro.

6. **Chamada da Função**:
    ```javascript
    questao4();
    ```
    - Invoca a função `questao4` para executar os cálculos e exibir os resultados na página.

### Resultado Esperado:
Após a execução da função, serão exibidas as porcentagens de contribuição de São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo e outros estados em relação ao faturamento mensal total no elemento com a classe `.answer4`.

### Observações:
- A função usa cálculos básicos de matemática para determinar a porcentagem de participação de cada estado no faturamento total.
- Assume que um elemento com a classe `.answer4` está presente no HTML para exibir os resultados.
- O método `.toFixed()` é usado para formatar os valores das porcentagens como números inteiros, tornando a apresentação mais clara.

--------------------------------------------

### QUESTÃO 05 (função: `questao5`)

#### Descrição:
A função `questao5` inverte uma palavra e exibe o resultado na página web. Ela usa um loop `for` para percorrer a palavra original de trás para frente, construindo uma nova string que é a inversão da original.

#### Código:
```javascript
function questao5() {
    const answer5 = document.querySelector(".answer5");

    let palavra = "CALEBE";
    let palavraInversa = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInversa += palavra[i];
    }
    answer5.innerHTML += "<br>" + palavraInversa + " é o inverso de " + palavra;
}

questao5();
```

### Explicação do Código:

1. **Seleção do Elemento HTML**:
    ```javascript
    const answer5 = document.querySelector(".answer5");
    ```
    - Seleciona o primeiro elemento no documento com a classe `.answer5` e o armazena na constante `answer5`. Este elemento será usado para exibir o resultado da inversão da palavra.

2. **Inicialização da Palavra e da String Inversa**:
    ```javascript
    let palavra = "CALEBE";
    let palavraInversa = "";
    ```
    - Define a variável `palavra` com a string "CALEBE" que será invertida.
    - Define a variável `palavraInversa` como uma string vazia, que será preenchida durante o processo de inversão.

3. **Loop para Inversão da Palavra**:
    ```javascript
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInversa += palavra[i];
    }
    ```
    - Usa um loop `for` para percorrer a string `palavra` de trás para frente.
    - O loop começa com `i` igual ao índice do último caractere (`palavra.length - 1`) e decrementa `i` até 0.
    - Em cada iteração, o caractere atual (`palavra[i]`) é adicionado à variável `palavraInversa`, construindo assim a palavra invertida.

4. **Exibição do Resultado**:
    ```javascript
    answer5.innerHTML += "<br>" + palavraInversa + " é o inverso de " + palavra;
    ```
    - Atualiza o conteúdo HTML do elemento selecionado com a classe `.answer5`, exibindo a palavra original e sua versão invertida.

5. **Chamada da Função**:
    ```javascript
    questao5();
    ```
    - Invoca a função `questao5` para executar o processo de inversão da palavra e exibir o resultado na página.

### Resultado Esperado:
Após a execução da função, será exibida uma mensagem no elemento com a classe `.answer5` mostrando a palavra invertida. No caso fornecido, o texto exibido será:
```
"EBELAC é o inverso de CALEBE"
```

### Observações:
- A função usa um loop `for` para iterar pela string de trás para frente e criar uma nova string com a palavra invertida.
- A função assume que um elemento com a classe `.answer5` está presente no HTML para exibir os resultados.
- O código pode ser adaptado para inverter qualquer palavra, basta alterar o valor da variável `palavra`.