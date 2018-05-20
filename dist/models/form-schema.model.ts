import { FormControlSchema } from "./form-field-schema.model";

export class FormSchemaModel {
	_id: string;
	name: string;
	description: string;
	form: FormControlSchema;
	events = {
		accept: {
			show: false,
			text: "ثبت"
		},
		cancel: {
			show: false,
			text: "انصراف"
		}
	};

	constructor() {
		this.form = new FormControlSchema("group");
	}
	init() {
		this._id = (Math.random() * 10).toString();
	}
}
