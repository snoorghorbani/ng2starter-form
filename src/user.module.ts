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
	MatRadioModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { InfraModule } from "@soushians/infra";

import { UserModuleConfig, MODULE_CONFIG_TOKEN } from "./user.config";
import { PasswordService, UserService, UserConfigurationService } from "./services";
import { FeatureContainerComponent, UserReducers, UserEffects } from "./feature";
import { ProfileComponent, ProfileViewEffects, ProfileContainerComponent } from "./profile-view";
import { ChangePasswordComponent, ChangePasswordEffects, ChangePasswordContainerComponent } from "./change-password";
import { ProfileEditComponent, EditProfileEffects, ProfileEditContainerComponent } from "./profile-edit";
import { ResetPasswordRequestComponent, ResetPasswordRequestEffects } from "./reset-password";
import { SearchEffects, SearchComponent } from "./search-account";
import { DashboardLinksComponent, DashboardContainerComponent } from "./dashboard";

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
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		SearchComponent,
		ProfileComponent,
		ChangePasswordComponent,
		ProfileEditComponent,
		ProfileContainerComponent,
		DashboardLinksComponent,
		ResetPasswordRequestComponent,
		FeatureContainerComponent,
		DashboardContainerComponent,
		ChangePasswordContainerComponent,
		ProfileEditContainerComponent
	],
	exports: []
})
export class NgsUserModule {
	static forRoot(config?: UserModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsUserModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				UserConfigurationService,
				PasswordService,
				UserService
			]
		};
	}
}

@NgModule({
	imports: [
		NgsUserModule,
		StoreModule.forFeature("user", UserReducers),
		EffectsModule.forFeature([
			ResetPasswordRequestEffects,
			EditProfileEffects,
			ChangePasswordEffects,
			ProfileViewEffects,
			SearchEffects,
			UserEffects
		])
	]
})
export class RootNgsUserModule {}
