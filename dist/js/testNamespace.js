"use strict";
/// <reference path="Validation.ts"/>
/// <reference path="EmailValidator.ts"/>
/// <reference path="UrlValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
let email = "Teste@gmail.com.br";
console.log(new EmailValidator().isValid(email));
console.log(new UrlValidator().isValid(email));
