import { AbstractControl, ValidationErrors } from '@angular/forms'

export class InputValidators {
    /* input cant contain space validator */
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

    /* input cant contain number validator */
    static cannotContainNumber(control: AbstractControl): ValidationErrors | null {
        for (let i = 0; i < control.value.length; i++) {
            if (!isNaN(control.value[i])) {
                return { cannotContainNumber: true }
            }
        }
        return null;
    }
}