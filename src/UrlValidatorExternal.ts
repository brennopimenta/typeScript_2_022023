import { ValidatorExternal } from "./ValidatorExternal";

export class UrlValidatorExternal implements ValidatorExternal{
    isValid(str:string): boolean{
        if(str === null || str.length === 0){
            return false;
        }
        return true;
    }
}