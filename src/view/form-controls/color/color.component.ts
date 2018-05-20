import { Component, OnInit, Input } from "@angular/core";
import { FieldConfig, Field } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-color",
	templateUrl: "./color.component.html",
	styleUrls: [ "./color.component.scss" ]
})
export class ColorComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	@Input() form: FormGroup;
	@Input() schema: FieldConfig;
	constructor() {}

	ngOnInit() {}
}
