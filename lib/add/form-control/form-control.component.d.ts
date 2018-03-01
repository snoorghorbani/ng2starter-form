import { EventEmitter } from "@angular/core";
import { FormArray } from "@angular/forms";
import { FormControlSchema } from "../../models";
export declare class FormControlComponent {
    schema: FormControlSchema;
    changes: EventEmitter<{}>;
    width: number[];
    options: FormArray;
    constructor();
    changed(): boolean;
    addOption(): void;
    removeOption(i: any): void;
    insertOptions(): void;
}
