import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UserModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
export declare class ProfileEditContainerComponent implements OnInit {
    private store;
    userInforamation$: Observable<UserModel>;
    formGroup: FormGroup;
    roles$: Observable<string[]>;
    groups: Observable<string[]>;
    constructor(store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    updateProfile(data: any): void;
}
