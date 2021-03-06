import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckbox,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { InfraModule } from "@soushians/infra";

import { RoutingModule } from "./form-routing.module";
import { FormModuleConfig, MODULE_CONFIG_TOKEN } from "./form.config";
import { MainContainerComponent, FormReducers } from "./main-container";
import { AddFormComponent, AddFormContainerComponent } from "./add";
import { FormService, FormConfigurationService } from "./services";
import { FormListComponent, FormsListEffects, FormListContainerComponent } from "./list";
import { EditFormComponent, EditFormContainerComponent, EditFormEffects } from "./edit";
import { AddFormEffects } from "./add/add-form.effects";
import { FormViewComponent, DynamicFieldDirective } from "./view";
import { FormGroupComponent } from "./add/form-group";
import { FormArrayComponent } from "./add/form-array";
import { FormControlComponent } from "./add/form-control";
import { NgsFormSelectorComponent } from "./form-selector";
import { SelectComponent, CheckboxComponent, EmailComponent, ColorComponent, TextComponent, NumberComponent, TableComponent } from "./view/form-controls";

@NgModule({
	imports: [
		HttpClientModule,
		InfraModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatTableModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		EditFormContainerComponent,
		EditFormComponent,
		FormListContainerComponent,
		FormListComponent,
		AddFormContainerComponent,
		MainContainerComponent,
		AddFormComponent,
		FormGroupComponent,
		FormArrayComponent,
		FormControlComponent,
		FormViewComponent,
		DynamicFieldDirective,
		SelectComponent,
		CheckboxComponent,
		EmailComponent,
		ColorComponent,
		TextComponent,
		NumberComponent,
		TableComponent,
		NgsFormSelectorComponent
	],
	entryComponents: [
		SelectComponent,
		CheckboxComponent,
		EmailComponent,
		ColorComponent,
		TextComponent,
		NumberComponent,
		TableComponent
	],
	exports: [FormViewComponent, NgsFormSelectorComponent]
})
export class NgsFormModule {
	static forRoot(config?: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsFormModule,
			providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FormService, FormConfigurationService]
		};
	}
}

@NgModule({
	imports: [
		NgsFormModule,
		StoreModule.forFeature("form", FormReducers),
		EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
		RoutingModule
	],
	exports: [NgsFormModule]
})
export class RootNgsFormModule { }
