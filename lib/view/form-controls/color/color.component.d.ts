import { FormControlSchema, FieldConfig, Field } from "../../../models";
import { FormGroup } from "@angular/forms";
export declare class ColorComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
    form: FormGroup;
    schema: FormControlSchema;
    constructor();
    ngOnInit(): void;
}
