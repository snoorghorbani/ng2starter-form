import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { UserModuleConfig } from "../user.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../user.config";
// import { UserState } from "../../feature/feature.reducers";
import { getUserModuleConfig } from "@soushians/config";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UserConfigurationService {
	private _config: UserModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<any>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getUserModuleConfig).subscribe(userConfig => {
			if (!userConfig) return;
			this._config = Object.assign({}, this._config, userConfig.Config);
			this.config$.next(this._config);
		});
	}
}
