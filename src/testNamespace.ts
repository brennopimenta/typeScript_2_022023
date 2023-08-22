/// <reference path="Validation.ts"/>
/// <reference path="EmailValidator.ts"/>
/// <reference path="UrlValidator.ts"/>
import EmailValidator = Validation.EmailValidator;
import UrlValidator = Validation.UrlValidator;

let email = "Teste@gmail.com.br";

console.log(new EmailValidator().isValid(email));
console.log(new UrlValidator().isValid(email));