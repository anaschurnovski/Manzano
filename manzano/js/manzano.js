function ex001() {
  let celsius = Number(prompt("Digite a temperatura em graus Celsius:"))
  let fahrenheit = (9 * celsius + 160) / 5
  let mensagem = isNaN(celsius)
      ? "Valor inválido. Digite um número." : `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`

  alert(mensagem)
}

function ex002() {
  let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"))
  let celsius = (fahrenheit - 32) * (5 / 9)
  let mensagem = isNaN(fahrenheit)
    ? "Valor inválido. Digite um número." : `Temperatura em Celsius: ${celsius.toFixed(2)}°C`

  alert(mensagem)
}

function ex003() {
  let altura = parseFloat(prompt("Digite a altura da lata (em cm):"))
  let raio = parseFloat(prompt("Digite o raio da lata (em cm):"))
  let volume = Math.PI * altura * Math.pow(raio, 2)

  let resultado = (isNaN(altura) || isNaN(raio))
    ? "Valor inválido. Digite números válidos." : `Volume da lata: ${volume.toFixed(2)} cm³`

  alert(resultado)
}

function ex004() {
  let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"))
  let velocidade = parseFloat(prompt("Digite a velocidade média (em km/h):"))

  let distancia = tempo * velocidade
  let litrosUsados = distancia / 12

  let resultado = (isNaN(tempo) || isNaN(velocidade))
    ? "Valor inválido. Digite números válidos." : `Velocidade média: ${velocidade} km/h\nTempo gasto: ${tempo} h\n
    Distância percorrida: ${distancia} km\nLitros usados: ${litrosUsados.toFixed(2)} L`

  alert(resultado)
}

function ex005() {
  let valor = parseFloat(prompt("Digite o valor da compra (R$):"))
  let taxa = parseFloat(prompt("Digite a taxa de juros (% ao mês):"))
  let meses = parseInt(prompt("Digite o número de meses para pagamento:"))

  let prestacao = valor + (valor * (taxa / 100) * meses)

  let resultado = (isNaN(valor) || isNaN(taxa) || isNaN(meses))
    ? "Valor inválido. Digite números válidos." : `Valor da prestação: R$ ${prestacao.toFixed(2)}`

  alert(resultado)
}

function ex006() {
  let a = parseFloat(prompt("Digite o valor de A:"))
  let b = parseFloat(prompt("Digite o valor de B:"))

  let resultado = (isNaN(a) || isNaN(b))
    ? "Valor inválido. Digite números válidos." : (() => {
        [a, b] = [b, a];
        return `Após a troca:\nA = ${a}\nB = ${b}`;
      })()

  alert(resultado)
}

function ex007() {
  const nums = [];
  for (let i = 1; i <= 4; i++) {
    nums.push(Number(prompt("Informe o " + i + "º número inteiro:")));
  }

  const soma = nums[0] + nums[1] + nums[2] + nums[3];
  let mults = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j) {
        mults += nums[i] + " * " + nums[j] + " = " + (nums[i] * nums[j]) + "\n";
      }
    }
  }
  alert("Soma dos quatro números: " + soma + "\n\nMultiplicações (12 resultados):\n" + mults);
}

function ex008() {
  const c = Number(prompt("Comprimento:"));
  const l = Number(prompt("Largura:"));
  const a = Number(prompt("Altura:"));
  const v = c * l * a;
  alert("Volume da caixa: " + v);
}

function ex009() {
  const A = Number(prompt("Informe A (inteiro):"));
  const B = Number(prompt("Informe B (inteiro):"));
  const res = Math.pow(A - B, 2);
  alert("Quadrado da diferença (A - B)^2 = " + res);
}

function ex010() {
  let cotacao = parseFloat(prompt("Digite a cotação do dólar:"))
  let dolar = parseFloat(prompt("Digite a quantidade de dólares:"))
  let real = cotacao * dolar

  let resultado = (isNaN(cotacao) || isNaN(dolar))
    ? "Valor inválido. Digite números válidos." : `Valor em reais: R$ ${real.toFixed(2)}`

  alert(resultado)
}

function ex011() {
  let cotacao = parseFloat(prompt("Digite a cotação do dólar:"))
  let real = parseFloat(prompt("Digite o valor em reais:"))
  let dolar = real / cotacao

  let resultado = (isNaN(cotacao) || isNaN(real))
    ? "Valor inválido. Digite números válidos." : `Valor em dólares: $${dolar.toFixed(2)}`

  alert(resultado)
}

function ex012() {
  let a = parseFloat(prompt("Digite o valor de A:"))
  let b = parseFloat(prompt("Digite o valor de B:"))
  let c = parseFloat(prompt("Digite o valor de C:"))

  let soma = a * a + b * b + c * c

  let resultado = (isNaN(a) || isNaN(b) || isNaN(c))
    ? "Valor inválido. Digite números válidos." : `Soma dos quadrados: ${soma}`

  alert(resultado)
}

function ex013() {
  const A = Number(prompt("Informe A:"));
  const B = Number(prompt("Informe B:"));
  const C = Number(prompt("Informe C:"));
  const res = Math.pow(A + B + C, 2);
  alert("Quadrado da soma: " + res);
}

function ex014() {
  const A = Number(prompt("Informe A:"));
  const B = Number(prompt("Informe B:"));
  const C = Number(prompt("Informe C:"));
  const D = Number(prompt("Informe D:"));
  const S = B + D;
  alert("Soma (B + D) = " + S);
}

function ex015() {
  const SM = Number(prompt("Informe o salário mensal (SM):"));
  const reaj = Number(prompt("Informe o percentual de reajuste (%):"));
  const NS = SM + (SM * reaj / 100);
  alert("Novo salário (NS): " + NS);
}

function ex016() {
  const votosA = Number(prompt("Votos do candidato A:"));
  const votosB = Number(prompt("Votos do candidato B:"));
  const votosC = Number(prompt("Votos do candidato C:"));
  const brancos = Number(prompt("Votos em branco:"));
  const eleitores = Number(prompt("Total de eleitores:"));
  const pctA = (votosA / eleitores) * 100;
  const pctBrancos = (brancos / eleitores) * 100;
  alert("Percentual do candidato A: " + pctA + "%\nPercentual de votos em branco: " + pctBrancos + "%");
}

function ex017() {
  let a = parseInt(prompt("Digite o primeiro número inteiro:"))
  let b = parseInt(prompt("Digite o segundo número inteiro:"))

  let resultado = (isNaN(a) || isNaN(b))
    ? "Valor inválido. Digite números inteiros válidos." : `Diferença entre o maior e o menor: ${Math.abs(a - b)}`

  alert(resultado)
}

function ex018() {

  const n = Number(prompt("Informe um número inteiro:"));
  const tipo = (n % 2 === 0) ? "par" : "ímpar";
  alert("O número é " + tipo + ".");
}

function ex019() {
  let n1 = parseFloat(prompt("Digite a primeira nota:"))
  let n2 = parseFloat(prompt("Digite a segunda nota:"))
  let n3 = parseFloat(prompt("Digite a terceira nota:"))
  let n4 = parseFloat(prompt("Digite a quarta nota:"))

  let media = (n1 + n2 + n3 + n4) / 4;

  let resultado = (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4))
    ? "Valor inválido. Digite notas válidas." : (media >= 5 
    ? "Aprovado" : "Reprovado")

  alert(`Média: ${media.toFixed(2)} - ${resultado}`)
}

function ex020() {
  let n1 = parseFloat(prompt("Digite a primeira nota:"));
  let n2 = parseFloat(prompt("Digite a segunda nota:"));
  let n3 = parseFloat(prompt("Digite a terceira nota:"));
  let n4 = parseFloat(prompt("Digite a quarta nota:"));

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    alert("Valor inválido. Digite notas válidas.");
    return;
  }

  let media = (n1 + n2 + n3 + n4) / 4
  let mensagem;

  if (media >= 7) {
    mensagem = `Aprovado com média ${media.toFixed(2)}.`
  } else {
    let exame = parseFloat(prompt("Nota do exame:"))
    if (isNaN(exame)) {
      alert("Nota de exame inválida.")
      return
    }

    let novaMedia = (media + exame) / 2
    mensagem = (novaMedia >= 5)
      ? `Aprovado em exame com média ${novaMedia.toFixed(2)}.` : `Reprovado com média ${novaMedia.toFixed(2)}.`
  }

  alert(mensagem)
}

function ex021() {
 
  const base = Number(prompt("Informe a base do triângulo:"));
  const altura = Number(prompt("Informe a altura do triângulo:"));
  const area = (base * altura) / 2;
  alert("Área do triângulo: " + area);
}

function ex022() {
 
  const r = Number(prompt("Informe o raio do círculo:"));
  const perimetro = 2 * Math.PI * r;
  const area = Math.PI * r * r;
  alert("Perímetro: " + perimetro + "\nÁrea: " + area);
}

function ex023() {
 
  let dias = Number(prompt("Informe a quantidade de dias:"));
  const anos = Math.floor(dias / 365);
  dias = dias % 365;
  const meses = Math.floor(dias / 30);
  dias = dias % 30;
  alert(anos + " ano(s), " + meses + " mês(es) e " + dias + " dia(s)");
}

function ex024() {
  const salario = Number(prompt("Informe o salário bruto:"));
  const inss = salario * 0.08; 
  const ir = salario * 0.11; 
  const liquido = salario - inss - ir;
  alert("Salário líquido estimado: " + liquido);
}

function ex025() {
  let numero = parseInt(prompt("Digite um número:"))
  let resultado = (numero % 2 === 0)
    ? "Par" : "Ímpar"

  alert("O número é " + resultado)
}

function ex026() {

  let out = "";
  for (let c = 0; c <= 100; c += 20) {
    const f = (9*c)/5 + 32;
    out += c + " °C = " + f + " °F\n";
  }
  alert(out);
}
  
function ex027() {
  alert("ex027");
}

function ex028() {
  let nome = prompt("Digite seu nome:")
  let sexo = prompt("Digite seu sexo (M para masculino, F para feminino):").toUpperCase()

  let saudacao = (sexo === "M") 
    ? `Ilmo Sr. ${nome}` : (sexo === "F") 
    ? `Ilma Sra. ${nome}` : "Sexo inválido. Digite M ou F."

  alert(saudacao)
}

function ex029() {
  let numero = parseInt(prompt("Digite um número para ver sua tabuada:"))
  let resultado = isNaN(numero)
    ? "Valor inválido. Digite um número inteiro." : (() => {
        let tabuada = `Tabuada do ${numero}:\n`;
        for (let i = 1; i <= 10; i++) {
          tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
        return tabuada;
      })();

  alert(resultado)
}

function ex030() {

  const ano = Number(prompt("Informe o ano:"));
  const bis = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
  alert(ano + (bis ? " é bissexto." : " não é bissexto."));
}
function ex031() {

  const capital = Number(prompt("Capital:"));
  const taxa = Number(prompt("Taxa (% a.m.):"));
  const tempo = Number(prompt("Tempo (meses):"));
  const montante = capital + (capital * taxa / 100) * tempo;
  alert("Montante (juros simples): " + montante);
}
function ex032() {

  let soma=0, cont=0;
  while (true) {
    const v = Number(prompt("Informe uma nota (negativo termina):"));
    if (v < 0) break;
    soma += v; cont++;
  }
  if (cont===0) alert("Nenhuma nota informada.");
  else alert("Média = " + (soma/cont));
}
function ex033() {
 
  let prod = 1;
  for (let i=1;i<=10;i+=2) prod *= i;
  alert("Produto dos ímpares de 1 a 10 = " + prod);
}
function ex034() {

  const N = Number(prompt("Informe N (>=1):"));
  let s=0;
  for (let i=2;i<=N;i+=2) s += i;
  alert("Soma dos pares até " + N + " = " + s);
}
function ex035() {

  const n = Number(prompt("Informe um número para tabuada:"));
  let out = "";
  for (let i=1;i<=10;i++) out += n + " x " + i + " = " + (n*i) + "\n";
  alert(out);
}
function ex036() {

  const n = Number(prompt("Informe um número inteiro (>1):"));
  if (n<=1) { alert("Não é primo."); return; }
  for (let i=2;i<=Math.sqrt(n);i++) {
    if (n % i === 0) { alert("Não é primo."); return; }
  }
  alert("É primo.");
}
function ex037() {

  const n = Number(prompt("Informe um inteiro positivo:"));
  let out = "Divisores de " + n + ":\n";
  for (let i=1;i<=n;i++) if (n % i === 0) out += i + "\n";
  alert(out);
}
function ex038() {
 
  let s = Number(prompt("Informe segundos totais:"));
  const hh = Math.floor(s / 3600);
  s = s % 3600;
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  alert(hh + "h:" + mm + "m:" + ss + "s");
}
function ex039() {

  let s = 0;
  for (let i=1;i<=100;i++) s += i;
  alert("Soma 1..100 = " + s);
}
function ex040() {

  const N = Number(prompt("Quantos valores deseja informar?"));
  let s=0;
  for (let i=0;i<N;i++) s += Number(prompt("Valor " + (i+1) + ":"));
  alert("Média = " + (s/N));
}
function ex041() {

  const N = Number(prompt("Quantos valores?"));
  let maior = -Infinity, menor = Infinity;
  for (let i=0;i<N;i++) {
    const v = Number(prompt("Valor " + (i+1) + ":"));
    if (v > maior) maior = v;
    if (v < menor) menor = v;
  }
  alert("Maior: " + maior + "\nMenor: " + menor);
}
function ex042() {

  let s=0;
  for (let i=2;i<=500;i+=2) s += i;
  alert("Somatório dos pares 1..500 = " + s);
}
function ex043() {
 
  let out = "";
  for (let i=1;i<=20;i+=2) out += i + "\n";
  alert(out);
}
function ex044() {

  let out = "";
  for (let i=1;i<200;i++) if (i % 4 === 0) out += i + "\n";
  alert(out);
}
function ex045() {

  let out = "";
  for (let e=0;e<=15;e++) out += "3^" + e + " = " + Math.pow(3,e) + "\n";
  alert(out);
}
function ex046() {

  const base = Number(prompt("Informe a base:"));
  const expo = Number(prompt("Informe o expoente (inteiro >=0):"));
  let res = 1;
  for (let i=0;i<expo;i++) res *= base;
  alert(base + "^" + expo + " = " + res);
}
function ex047() {
 
  function fatorial(n){ let p=1; for(let i=2;i<=n;i++) p*=i; return p; }
  let out = "";
  for (let i=1;i<=10;i+=2) out += i + "! = " + fatorial(i) + "\n";
  alert(out);
}
function ex048() {

  let total = 0;
  const qtd = Number(prompt("Quantos cômodos deseja informar?"));
  for (let i=0;i<qtd;i++) {
    const largura = Number(prompt("Largura do cômodo " + (i+1) + ":"));
    const comprimento = Number(prompt("Comprimento do cômodo " + (i+1) + ":"));
    total += largura * comprimento;
  }
  alert("Área total residencial = " + total);
}
function ex049() {

  let maior = -Infinity, menor = Infinity;
  while (true) {
    const v = Number(prompt("Informe um valor positivo (negativo termina):"));
    if (v < 0) break;
    if (v > maior) maior = v;
    if (v < menor) menor = v;
  }
  if (maior === -Infinity) alert("Nenhum valor informado.");
  else alert("Maior: " + maior + "\nMenor: " + menor);
}
function ex050() {

  const dividendo = Number(prompt("Dividendo:"));
  const divisor = Number(prompt("Divisor:"));
  if (divisor === 0) { alert("Divisor zero!"); return; }
  let contador = 0;
  let restante = dividendo;
  while (restante >= divisor) { restante -= divisor; contador++; }
  alert("Quociente inteiro: " + contador + "\nResto: " + restante);
}
function ex051() {
  let out = "";
  for (let i=15;i<=200;i++) out += i + "^2 = " + (i*i) + "\n";
  alert(out);
}
function ex052() {
  const n = Number(prompt("Número para tabuada:"));
  let out = "";
  for (let i=1;i<=10;i++) out += n + " x " + i + " = " + (n*i) + "\n";
  alert(out);
}
function ex053() {
  let s = 0;
  for (let i=1;i<=100;i++) s += i;
  alert("Soma 1..100 = " + s);
}
function ex054() {
  let s = 0;
  for (let i=2;i<=500;i+=2) s += i;
  alert("Somatório dos pares 1..500 = " + s);
}
function ex055() {
  let out = "";
  for (let i=1;i<=20;i+=2) out += i + "\n";
  alert(out);
}
function ex056() {
  let out = "";
  for (let i=1;i<200;i++) if (i % 4 === 0) out += i + "\n";
  alert(out);
}
function ex057() {
  let out = "";
  for (let e=0;e<=15;e++) out += "3^" + e + " = " + Math.pow(3,e) + "\n";
  alert(out);
}
function ex058() {
  const base = Number(prompt("Informe a base:"));
  const expo = Number(prompt("Informe o expoente (inteiro >=0):"));
  let res = 1;
  for (let i=0;i<expo;i++) res *= base;
  alert(base + "^" + expo + " = " + res);
}
function ex059() {
 
  const termos = 15;
  let a=0,b=1;
  let out = a + "\n" + b + "\n";
  for (let i=3;i<=termos;i++) { const c = a + b; out += c + "\n"; a = b; b = c; }
  alert(out);
}
function ex060() {

  let out = "";
  for (let c=10;c<=100;c+=10) out += c + " °C = " + ((9*c)/5 + 32) + " °F\n";
  alert(out);
}
function ex061() {

  function fatorial(n){ let p=1; for(let i=2;i<=n;i++) p*=i; return p; }
  let out = "";
  for (let i=1;i<=10;i+=2) out += i + "! = " + fatorial(i) + "\n";
  alert(out);
}

const btns = document.querySelectorAll(".exercise");

btns.forEach((btn) => {
  const num = btn.querySelector(".letter").textContent.padStart(3, "0");
  btn.addEventListener("click", () => {
    const funcName = `ex${num}`;
    if (typeof window[funcName] === "function") {
      window[funcName]();
    } else {
      console.error(`Função ${funcName} não existe!`);
    }
  });
});
  