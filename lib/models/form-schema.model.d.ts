import { FormControlSchema } from "./form-field-schema.model";
export declare class FormSchemaModel {
    _id: string;
    name: string;
    description: string;
    form: FormControlSchema;
    events: {
        accept: {
            show: boolean;
            text: string;
        };
        cancel: {
            show: boolean;
            text: string;
        };
    };
    constructor();
    init(): void;
}
