var Validation;
(function (Validation) {
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            if (str === null || str.length === 0) {
                return false;
            }
            return true;
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            if (str === null || str.length === 0) {
                return false;
            }
            return true;
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts"/>
/// <reference path="EmailValidator.ts"/>
/// <reference path="UrlValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
var email = "Teste@gmail.com.br";
console.log(new EmailValidator().isValid(email));
console.log(new UrlValidator().isValid(email));
