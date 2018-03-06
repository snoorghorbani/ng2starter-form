import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { FormSchemaModel } from "../../models";
import { MainContainerState } from "../../main-container";
export declare class NgsFormSelectorComponent {
    private store;
    forms$: Observable<FormSchemaModel[]>;
    select: EventEmitter<{}>;
    constructor(store: Store<MainContainerState>);
}
