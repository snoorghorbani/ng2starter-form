// ./effects/auth.ts
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { UserService } from "../services";
import { EditProfile_ApiModel } from "../models";
import {
	EditProfileActionTypes,
	EditProfileStart,
	EditProfileSucceed,
	EditProfileFailed
} from "./edit-profile.actions";
import { GetProfile } from "../profile-view";

@Injectable()
export class EditProfileEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: UserService) {}

	@Effect()
	EditProfileRequest$ = this.actions$
		.ofType(EditProfileActionTypes.EDIT_PROFILE)
		.map(toPayload)
		.map((data) => new EditProfileStart(data));

	@Effect()
	RequestEditProfileLink$ = this.actions$
		.ofType(EditProfileActionTypes.EDIT_PROFILE_START)
		.map(toPayload)
		.switchMap((data: EditProfile_ApiModel.Request) => this.service.editProfile(data))
		.map((res) => new EditProfileSucceed(res))
		.catch(() => Observable.of(new EditProfileFailed()));
	// .switchMap((data: EditProfile_ApiModel.Request) => {
	// 	return this.service
	// 		.editProfile(data)
	// 		.map((res) => new EditProfileSucceed(res))
	// 		.catch(() => Observable.of(new EditProfileFailed()));
	// });

	@Effect()
	goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).map(() => {
		this.router.navigate([ "/user/profile" ]);
		return new GetProfile();
	});
}
