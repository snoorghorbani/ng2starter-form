import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
export declare class AddFormComponent {
    schema: FormSchemaModel;
    formGroup: FormGroup;
    submited: EventEmitter<{}>;
    changes: EventEmitter<{}>;
    emit(): void;
    changed($event: any): void;
    changeOrder($event: any): void;
    addFormGroup(root: FormControlSchema): FormControlSchema;
    addFormArray(root: FormControlSchema): FormControlSchema;
    addFormControl(root: FormControlSchema): FormControlSchema;
}
