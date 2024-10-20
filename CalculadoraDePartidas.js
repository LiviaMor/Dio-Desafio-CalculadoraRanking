// Função para calcular o saldo de ranqueadas e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calculo do saldo
    const saldoVitorias = vitorias - derrotas;
  
    // Retorna o saldo de vitórias
    return saldoVitorias;
  }
  
  // Determinação do nível baseado na quantidade de vitórias
  function getValorantRanking(nome, experiencia) {
    let ranking;
  
    if (experiencia <= 1000) {
      ranking = "Ferro";
    } else if (experiencia <= 2000) {
      ranking = "Bronze";
    } else if (experiencia <= 3000) {
      ranking = "Prata";
    } else if (experiencia <= 4000) {
      ranking = "Ouro";
    } else if (experiencia <= 5000) {
      ranking = "Platina";
    } else if (experiencia <= 6000) {
      ranking = "Diamante";
    } else if (experiencia <= 7000) {
      ranking = "Ascendente";
    } else if (experiencia <= 8000) {
      ranking = "Imortal";
    } else if (experiencia <= 10000) {
      ranking = "Radiante";
    } else {
      ranking = "Inválido";
    }
  
    // Retorna o nome, saldo de vitórias e o ranking
    return {
      nome: nome,
      saldoVitorias: experiencia,
      ranking: ranking
    };
  }
  
  // Exemplo de uso
  const nomeJogador = "Scarlet"; 
  const experienciaJogador = calcularNivel(45, 10);
  const resultado = getValorantRanking(nomeJogador, experienciaJogador); 
  
  console.log('Jogador:' , resultado.nome ,)
  console.log( 'Saldo de Vitórias:' , resultado.saldoVitorias,)  
  console.log('Ranking:' , resultado.ranking); 
  