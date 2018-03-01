import { EventEmitter } from "@angular/core";
import { FormControlSchema } from "../../models";
export declare class FormArrayComponent {
    schema: FormControlSchema;
    changes: EventEmitter<{}>;
    constructor();
    changed(): void;
    addFormGroup(root: FormControlSchema): FormControlSchema;
    addFormArray(root: FormControlSchema): FormControlSchema;
    addFormControl(root: FormControlSchema): FormControlSchema;
}
