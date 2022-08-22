// Variáveis globais da aplicação
// Constantes
const maxEntradas = 20000;
const padraoSenha = /^[a-z][a-z0-9]{0,9}$/;

// Função para verificar se uma senha individual digitada corresponde ao padrão: apenas letras minúsculas sem acento e dígitos de 0 a 9, com mínimo de 1 caracter e máximo de 10 caracteres.
function verificarPadraoSenha(senha, regexPadraoSenha = padraoSenha) {
  return regexPadraoSenha.test(senha);
}

// Função para verificar se todas as senhas do array correspondem ao padrão.
function verificarSenhasDigitadas(arraySenhas) {
  return arraySenhas.reduce((a, b) => {
    return a && verificarPadraoSenha(b);
  }, true);
}

// Função para verificar em quais linhas se localizam as senhas erradas. Retorna um array com os índices das senhas que não correspondem.
function verificarLinhasSenhasForaPadrao(arraySenhas) {
  let arraySenhasForaPadrao = [];

  arraySenhas.forEach((senha, index) => {
    if (!verificarPadraoSenha(senha)) {
      arraySenhasForaPadrao.push(index + 1);
    }
  });

  return arraySenhasForaPadrao;
}

//  Função principal, que retorna o número de incidentes de segurança, no qual um usuário, utilizando sua senha, consegue acesso à conta de outro usuário (no caso, conseguirá acesso se senha correta (inídice "j"), for uma substring contígua da senha digitada (representada pelo índice "j")). A verificação de substrings contíguas é realizada por meio do método String.prototype.includes do JavaScript Complexidade temporal do algoritmo: O(n^2).
export function retornaNumeroIncidentes(arraySenhas) {
  const n = arraySenhas.length;
  let numeroIncidentesSenhas = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && arraySenhas[i].includes(arraySenhas[j])) {
        numeroIncidentesSenhas++;
      }
    }
  }

  return numeroIncidentesSenhas;
}

// Função geral que verifica o atendimento às restrições fornecidas nas instruções do problema. Se todas as condições forem atendidas, chama a função para calcular o número de incidentes de segurança (usuários que logram acesso a conta de outros utiliza).
function verificarFalhasSeguranca(n, arraySenhas) {
  if (n > maxEntradas) {
    return `Erro: O número de senhas é maior que o máximo permitido (${maxEntradas}).`;
  } else if (arraySenhas.length !== n) {
    return "Erro: O número de senhas não corresponde à quantidade de usuários no sistema.";
  } else if (n === 1) {
    return "Não é possível fazer a verificação de possibilidades de incidente de segurança com apenas um usuário.";
  } else if (!verificarSenhasDigitadas(arraySenhas)) {
    let arraySenhasForaPadrao = verificarLinhasSenhasForaPadrao(arraySenhas);

    if (arraySenhasForaPadrao.length === 1) {
      return `Erro: a entrada contém uma senha inválida na linha ${arraySenhasForaPadrao} (padrão correto: inicia com letra minúscula sem acento e possui apenas letras minúsculas sem acento e dígitos de 0 a 9, com extensão mínima de 1 caracter e máxima de 10 caracteres).`;
    } else {
      return `Erro: a entrada contém senhas inválidas nas linhas ${arraySenhasForaPadrao} (padrão correto: inicia com letra minúscula sem acento e possui apenas letras minúsculas sem acento e dígitos de 0 a 9, com extensão mínima de 1 caracter e máxima de 10 caracteres).`;
    }
  } else {
    return `Saída: ${retornaNumeroIncidentes(arraySenhas)}`;
  }
}

function verificarNumeroEntrada(numeroEntrada) {
  let entradaValida = false;
  let mensagemRetorno = "";

  if (isNaN(numeroEntrada)) {
    mensagemRetorno =
      "Entrada inválida. O valor digitado na primeira linha não é um número (número de usuários).";
  } else if (!Number.isInteger(numeroEntrada) || numeroEntrada < 0) {
    mensagemRetorno =
      "Entrada inválida. O número digitado na primeira linha não é inteiro positivo.";
  } else if (numeroEntrada === 0) {
    mensagemRetorno =
      "Entrada inválida. O número digitado na primeira linha não pode ser zero.";
  } else {
    entradaValida = true;
    mensagemRetorno = "Número correto.";
  }

  return { entradaValida, mensagemRetorno };
}

// Função que recebe o input para processamento do frontEnd, e repassa os dados para outras funções, devolvendo a saída.
function receberInputProcessamento(input) {
  try {
    const arrayInput = input.trim().split("\n");

    console.log(arrayInput);

    if (arrayInput[0] === "") {
      throw new Error("Erro: a entrada está em branco.");
    }

    const numeroEntradas = Number(arrayInput[0]);
    const arraySenhas = arrayInput.slice(1);

    console.log(arrayInput);
    console.log(numeroEntradas);

    const validacaoNumeroEntradas = verificarNumeroEntrada(numeroEntradas);

    if (!validacaoNumeroEntradas.entradaValida) {
      throw new Error(validacaoNumeroEntradas.mensagemRetorno);
    }

    return verificarFalhasSeguranca(numeroEntradas, arraySenhas);
  } catch (error) {
    return error.message;
  }
}

export default receberInputProcessamento;
