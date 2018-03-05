import { FormControlSchema } from "./form-field-schema.model";
export declare class FormSchemaModel {
    _id: string;
    name: string;
    description: string;
    form: FormControlSchema;
    events: {
        accept: {
            show: false;
            text: string;
        };
        cancel: {
            show: false;
            text: string;
        };
    };
    constructor();
    init(): void;
}
