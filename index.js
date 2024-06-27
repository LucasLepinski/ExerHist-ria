const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase para contar as palavras: ', (frase) => {
    
  // Remover espaços extras e dividir a frase em palavras
  const palavras = frase.trim().split(/\s+/);
  const totalPalavras = palavras.length;

  console.log(`A frase tem ${totalPalavras} palavras.`);

  // Contar a frequência de cada palavra
  const frequenciaPalavras = {};
  palavras.forEach(palavra => {
    if (frequenciaPalavras[palavra]) {
      frequenciaPalavras[palavra]++;
    } else {
      frequenciaPalavras[palavra] = 1;
    }
  });

  // Mostrar a relação de quantas vezes cada palavra aparece
  console.log('Frequência das palavras:');
  for (let palavra in frequenciaPalavras) {
    console.log(`${palavra}: ${frequenciaPalavras[palavra]} vez(es)`);
  }

  rl.close();
});

