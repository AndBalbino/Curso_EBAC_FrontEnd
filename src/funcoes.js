"use strict";
/*• Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

• No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.*/
const multiplicaNumeros = (number1, number2) => number1 * number2;
console.log(multiplicaNumeros(10, 10));
const saudacao = (nome) => console.log(`Olá ${nome}`);
saudacao('Anderson');