"use strict";
var Validation;
(function (Validation) {
    class EmailValidator {
        isValid(str) {
            if (str === null || str.length === 0) {
                return false;
            }
            return true;
        }
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
