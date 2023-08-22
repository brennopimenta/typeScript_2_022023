import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { UrlValidatorExternal } from "./UrlValidatorExternal";

let email2 = "Teste@gmail.com.br";

console.log(new EmailValidatorExternal().isValid(email2));
console.log(new UrlValidatorExternal().isValid(email2));