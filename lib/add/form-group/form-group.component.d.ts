import { EventEmitter } from "@angular/core";
import { FormControlSchema } from "../../models";
export declare class FormGroupComponent {
    schema: FormControlSchema;
    noHeader: boolean;
    changes: EventEmitter<{}>;
    delete: EventEmitter<{}>;
    constructor();
    changed(): void;
    addFormGroup(root: FormControlSchema): FormControlSchema;
    addFormArray(root: FormControlSchema): FormControlSchema;
    addFormControl(root: FormControlSchema): FormControlSchema;
    deleteFormGroup(idx: number): void;
}
