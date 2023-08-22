namespace Validation{

    export class UrlValidator implements Validator{
        isValid(str:string): boolean{
            if(str === null || str.length === 0){
                return false;
            }
            return true;
        }
    }

}