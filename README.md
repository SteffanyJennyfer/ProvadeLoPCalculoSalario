# ProvadeLoPCalculoSalario

Provas das turmas de lógica de programação referente a um cálculo do imposto de renda - calendário 2022

A sigla IRPF significa imposto de renda de pessoa física, essa é uma obrigação tributária destinada à Receita federal (PF). O imposto de renda (IR), em resumo, é um tributo obrigatório, em que uma porcentagem da renda do trabalhador é descontada e repassada ao Governo. Para calcular o IRPF, é necessário saber o salário bruto do colaborador. A partit disso, deve-se subtrair os descontos do INSS, para em seguida realizar o cálculo do IRPF.

Faça um programa que, dado o salário bruto de uma pessoa, calcule o salário líquido considerando o desconto de INSS e o desconto de IRPF.

O cálculo do desconto de IR é realizado sobre o salário base. Para calcular o salário base, basta pegar o valor do salário bruto e subtrair do desconto do INSS. O salário líquido então é encontrado a partir do salário bruto descontado o INSS e o IR. No final, o seu programa deve apresentar apenas o valor do salário na saída.

A taxa de INSS  é calculada sobre o salário bruto e com variação de forma progressiva, quanto maior o salário maior será a proporção do desconto. O desconto relativo a cada faixa pode ser descrito da seguinte forma: para as faixas anteriores, será a subtração do valor final menos o valor inicial da faixa multiplicada pela porcentagem do descona da faixa; para faixa que contém o valor do salário bruto, o resultado da subtração do valor do slaário bruto da faixa pelo valor inicial multiplicado pela porcentagem da faixa. O desconto final será obtida através da soma dos descontos de cada faixa. 

Veja a seguir as faixas de contribuições do INSS para 2022:
 * Salários até R$ 1.212 -> 7,5%
 * Salários de R$ 1.212,01 até 2.427,35 -> 9%
 * Salários até R$ 2.427,36 até 3.641,03 -> 12%
 * Salários até R$ 3.641,04 até 7.087,22 -> 14%
 * O valor máximo permitido para o desconto do INSS é de R$ 828,39.
 

No cálculo do IR, segue a mesma lógica do INSS, onde o desconto final das faixas mais elevadas é obtido pela soma dos descontos relativos de cada faixa, calculados sobre o salário base.

As faixas de desconto do IRPF referente ao cálculo mensal oara o exercício de 2021, considerando o salário base, estão descritas abaixo:
  * Até R$ 1.903,98 -> Isento;
  * De R$ 1.903,90 até R$ 2.826,65 -> 7,5%;
  * De R$ 2.826,66 até R$ 3.751,05 -> 15%;
  * De R$ 3.751,06 até R$ 4.664,68 -> 22,5%;
  * Aima de R$ 4.664,68 -> 27,5%;
  

Suponha que uma pessoa física tenha um salário líquido de R$ 8.828,39, seu salário base será de R$ 8.000,00 mensais, pois 14% do INSS irá ultrapassar o valor máximo permitido para esse desconto que é de R$ 828,39. De acordo com o sistema de alíquotos, ela terá retido na fonte R$ 1330,64 reais de imposto de renda, pois dos R$ 8000:
  * R$ 1.903,98 estão isentos;
  * R4 2.826,65 - R$ 1.903,98 incidem 7,5% de IR, resultando em R$ 69,20;
  * R4 3.751,05 - R$ 2.826,65 incidem 15% de IR, resultando em R$ 138,66;
  * R4 4.664,68 - R$ 3.751,05 incidem 22,5% de IR, resultando em R$ 205,57;
  * Acima de R$ 4.664,68 incidem 27,5% de IR, resultando em R$ 917,21 (valores aproximados).
  

Neste exemplo, o salário líquido resultante será de: 
  - Salário líquido: R$ 6.669,36
  
  R$ 8.828,39 - R$ 828,39 - R$ 1330,64.
  
  Use a operação "toFixed(2)" para garantir que o valor do salário líquido seja apresentado com duas casas decimais.
  
  * Exemplos de entrada:
    - 8828.39
    - 1000
  
  * Exemplos de saída:
    - 6669.36
    - 925.00
