import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule,
	MatTableModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SelectComponent } from "./select";
import { CheckboxComponent } from "./checkbox";
import { EmailComponent } from "./email";
import { ColorComponent } from "./color";
import { TextComponent } from "./text";
import { NumberComponent } from "./number";
import { TableComponent } from "./table";

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatTableModule,
		MatSelectModule,
		MatSliderModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		SelectComponent,
		CheckboxComponent,
		EmailComponent,
		ColorComponent,
		TextComponent,
		NumberComponent,
		TableComponent
	],
	exports: [
		SelectComponent,
		CheckboxComponent,
		EmailComponent,
		ColorComponent,
		TextComponent,
		NumberComponent,
		TableComponent
	]
})
export class FormControlsModule {}
