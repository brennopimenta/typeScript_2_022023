namespace Validation{

    export class EmailValidator implements Validator{
        isValid(str:string): boolean{
            if(str === null || str.length === 0){
                return false;
            }
            return true;
        }
    }

}