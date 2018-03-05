import { Validators } from "./form-schema.model";
export declare class FormControlSchema {
    id: number;
    type: "group" | "array" | "control";
    name: string;
    title: string;
    parentType?: "array" | "group";
    formGroupPath?: string;
    path?: string;
    inputType: "select" | "text" | "number" | "email" | "color" | "checkbox";
    value?: any;
    order?: number;
    width?: number;
    options: {
        [key: string]: string;
    };
    optionsEndpoint: string;
    fields?: FormControlSchema[];
    validators: Validators;
    constructor(type: "group" | "array" | "control");
}
