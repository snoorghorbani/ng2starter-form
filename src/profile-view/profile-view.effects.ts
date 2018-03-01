import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import { UserService } from '../services';
import { EditProfile_ApiModel } from '../models';
import { ProfileViewActionTypes, GetProfileStart, GetProfileSucceed, GetProfileFailed } from './profile-view.actions';
import { RefreshUserInfoAction } from '../dashboard';

@Injectable()
export class ProfileViewEffects {
	constructor(private actions$: Actions<any>, private router: Router, private userService: UserService) {}

	@Effect()
	ProfileRequest$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE)
		.map(toPayload)
		.map((data) => new GetProfileStart());

	@Effect()
	getProfile$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE_START)
		.map(toPayload)
		.switchMap((data: EditProfile_ApiModel.Request) => this.userService.getProfileInformation())
		.map((res) => new GetProfileSucceed(res))
		.catch(() => Observable.of(new GetProfileFailed()));

	@Effect()
	refreshUserInfo$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
		.map(toPayload)
		.map((data) => new RefreshUserInfoAction(data));
}
