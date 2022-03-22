import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators{
    static restrictedEmails(control: AbstractControl):{[key:string]: boolean} {
        if(['v@mail.ru', 'test@mail.ru', 'rust@belcmt.by'].includes(control.value)) {
            return {'restrictedEmail' : true}
        }
        return null!;
    }
    //async validation
    static uniqEmail(control: AbstractControl): Promise<{[key:string]: boolean}> | Observable<{[key:string]: boolean}>{
        return new Promise(resolve => {
            setTimeout(() => {
                if(control.value === 'async@mail.ru') {
                    resolve({uniqEmail: true})
                } else {
                    resolve(null!)
                }
            },5000)
        })
    }
}