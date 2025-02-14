"use strict";
/* Expressando algoritmos diretamente com
** a linguagem de programação.
** Autor: Fabrício Galende M. de Carvalho.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync = require("prompt-sync");
var numero_1;
var numero_2;
var resultado;
var prompt = prompt_sync();
numero_1 = parseFloat(prompt("Primeiro número: "));
numero_2 = parseFloat(prompt("Segundo número: "));
resultado = numero_1 + numero_2;
console.log(resultado);
