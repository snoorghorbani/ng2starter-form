import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, toPayload } from "@ngrx/effects";

import { ProfileViewModel } from "../models";
import { UserService } from "../services";
import { SearchStartAction, SearchFailed, SearchActionTypes, SearchSucceed } from "./search.actions";

@Injectable()
export class SearchEffects {
	constructor(private actions$: Actions<any>, private router: Router, private userService: UserService) { }

	@Effect()
	canSearch$ = this.actions$.ofType(SearchActionTypes.SEARCH).map(toPayload).map((data) => {
		return new SearchStartAction(data);
	});

	@Effect()
	search$ = this.actions$
		.ofType(SearchActionTypes.SEARCH_START)
		.map(toPayload)
		.switchMap((data: ProfileViewModel.Request) => {
			return this.userService
				.getInfo(data)
				.map((res) => {
					return res == null ? new SearchFailed() : new SearchSucceed(res);
				})
				.catch(() => Observable.of(new SearchFailed()));
		});
}
