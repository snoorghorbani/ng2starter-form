import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services";
import { FormsListFailedAction, FormsListStartAction, FormsListSucceedAction, FormSchemaFechedAction } from "./list.actions";
export declare class FormsListEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: FormService);
    EditProfileRequest$: Observable<FormsListStartAction>;
    GetForm$: Observable<FormSchemaFechedAction>;
    get_forms_list$: Observable<FormsListSucceedAction | FormsListFailedAction>;
}