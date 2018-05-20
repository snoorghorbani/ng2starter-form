import { Component, OnInit, Input } from "@angular/core";
import { Field, FieldConfig } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-checkbox",
	templateUrl: "./checkbox.component.html",
	styleUrls: [ "./checkbox.component.scss" ]
})
export class CheckboxComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
