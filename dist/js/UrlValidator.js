"use strict";
var Validation;
(function (Validation) {
    class UrlValidator {
        isValid(str) {
            if (str === null || str.length === 0) {
                return false;
            }
            return true;
        }
    }
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
