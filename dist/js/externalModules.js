"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
const UrlValidatorExternal_1 = require("./UrlValidatorExternal");
let email2 = "Teste@gmail.com.br";
console.log(new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email2));
console.log(new UrlValidatorExternal_1.UrlValidatorExternal().isValid(email2));
