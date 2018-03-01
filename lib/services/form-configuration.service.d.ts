import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormModuleConfig } from "../form.config";
import { FormState } from "../main-container";
export declare class FormConfigurationService {
    private store;
    private _config;
    readonly config: FormModuleConfig;
    config$: BehaviorSubject<FormModuleConfig>;
    constructor(configFile: any, store: Store<FormState>);
}
