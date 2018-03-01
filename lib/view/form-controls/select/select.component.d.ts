import { OnInit } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";
export declare class SelectComponent implements OnInit {
    form: FormGroup;
    schema: FormControlSchema;
    constructor();
    ngOnInit(): void;
}
