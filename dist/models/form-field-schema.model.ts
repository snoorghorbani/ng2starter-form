import { Validator } from "./form-field-validator.model";

export class FormControlSchema {
	id: number;
	type: "group" | "array" | "control";
	name: string;
	title: string;
	parentType?: "array" | "group";
	formGroupPath?: string;
	path?: string;
	inputType: "select" | "text" | "number" | "email" | "color" | "checkbox" | "table";
	value?: any;
	order?: number;
	width?: number;
	options: { [key: string]: string };
	optionsEndpoint: string;
	fields?: FormControlSchema[];
	validator: Validator;
	constructor(type: "group" | "array" | "control") {
		this.type = type;
		if (type != "control") this.fields = [];
		this.width = 3;
		this.validator = new Validator();
	}
}
