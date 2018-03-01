import { FormControlSchema } from "./form-field-schema.model";
export declare class Validators {
    readonly: boolean;
}
export declare class FormSchemaModel {
    _id: string;
    name: string;
    description: string;
    form: FormControlSchema;
    constructor();
    init(): void;
}
