/*
Fluxo de um elevador
Problema
Um engenheiro teve uma ideia para estudar o perfil do público majoritário (que é a maioria) de um determinado shopping. 
Ele observou que o shopping era dividido em dois departamentos:

Departamento de jogos;
Departamento de esportes.
As lojas do primeiro departamento ficavam no primeiro andar; as do segundo departamento, no segundo andar. 
Para estimar qual departamento é mais visitado, ele decidiu analisar a quantidade de vezes que os botões do elevador eram apertados. 
Esse elevador possuia 3 botões:

A1: que vai para o primeiro andar (andar 1);
A2: que vai para o segundo andar (andar 2);
E: que vai para o estacionamento.
Você deve implementar a lógica que, a partir de um array que salva os botões apertados, 
diga se o público daquele shopping é majoritariamente composto por atletas, por pessoas que gostam de vídeo game ou é um público diversificado.

Entrada
A entrada do problema será sempre composta por um array do tipo string (texto), denominado botoesApertados, 
em que cada posição diz qual botão foi apertado, sendo:

"A1" que foi apertado o botão que vai para o primeiro andar
"A2" que foi apertado o botão que vai para o segundo andar
"E" que foi apertado o botão que vai para o estacionamento
Saída
Você deve RETORNAR:

NERD: caso tenha sido apertado mais vezes o botão de ir para o primeiro andar (andar de jogos);
ATLETA: caso tenha sido apertado mais vezes o botão de ir para o segundo andar (andar de esportes);
DIVERSIFICADO: caso ambos os botões tenham sidos apertados na mesma quantidade.
*/

function solucao(botoesApertados: string[]): string {
  // seu código aqui
  let somaA1: number = 0
  let somaA2: number = 0
  let somaE: number = 0

  for(let i = 0; i < botoesApertados.length; i++){
    if(botoesApertados[i]=== 'A1'){
      somaA1++
    }
    else if(botoesApertados[i] === 'A2'){
      somaA2++
    }
    else{
      somaE++
    }
  }
  if(somaA1 > somaA2 && somaA1 > somaE){
    return 'NERD'
  }
  else if(somaA1 === somaA2){
    return 'DIVERSIFICADO'
  }
  return 'ATLETA'
}

export default solucao;
