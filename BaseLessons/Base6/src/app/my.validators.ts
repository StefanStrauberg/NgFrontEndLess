import { ɵBrowserPlatformLocation } from "@angular/common";
import { AbstractControl, FormControl } from "@angular/forms";

export class MyValidators{
    static restrictedEmails(control: AbstractControl):{[key:string]: boolean} {
        if(['v@mail.ru', 'test@mail.ru', 'rust@belcmt.by'].includes(control.value)) {
            return {'restrictedEmail' : true}
        }
        return null!;
    }
}