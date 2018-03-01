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

import { ResetPasswordRequestModel } from "../models";

import {
	ResetPasswordRequestActionTypes,
	DisableGetLink,
	EnableGetLink,
	MaximumTryHappend,
	ResetPasswordLinkRequestStart,
	ResetPasswordLinkRequestSucceed,
	ResetPasswordLinkRequestFailed
} from "./reset-password-request.actions";
import { PasswordService } from "../services";

@Injectable()
export class ResetPasswordRequestEffects {
	constructor(private actions$: Actions<any>, private router: Router, private passwordService: PasswordService) {}

	@Effect()
	ResetPasswordRequest$ = this.actions$
		.ofType(ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK)
		.map(toPayload)
		.switchMap((data: ResetPasswordRequestModel.Request) => {
			return this.passwordService.isValidResetPasswordRequest().map((isValid: boolean) => {
				return isValid ? new ResetPasswordLinkRequestStart(data) : new MaximumTryHappend();
			});
		});

	@Effect()
	MaximumTryHappend$ = this.actions$
		.ofType(
			ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND,
			ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START
		)
		.map(() => new DisableGetLink());

	@Effect()
	enableAfterTime$ = this.actions$
		.ofType(ResetPasswordRequestActionTypes.DISABLE_GET_LINK)
		.takeUntil(this.actions$.ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND))
		.delay(3 * 1000)
		.map(() => new EnableGetLink());

	@Effect()
	RequestResetPasswordLink$ = this.actions$
		.ofType(ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
		.map(toPayload)
		.switchMap((data: ResetPasswordRequestModel.Request) => {
			return this.passwordService
				.requestResetPasswordLink(data)
				.map(() => new ResetPasswordLinkRequestSucceed())
				.catch(() => Observable.of(new ResetPasswordLinkRequestFailed()));
		});
}
