import { OnInit } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";
export declare class EmailComponent implements OnInit {
    form: FormGroup;
    schema: FormControlSchema;
    constructor();
    ngOnInit(): void;
}
