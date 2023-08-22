"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
class EmailValidatorExternal {
    isValid(str) {
        if (str === null || str.length === 0) {
            return false;
        }
        return true;
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;
