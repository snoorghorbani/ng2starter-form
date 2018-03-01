import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { MainContainerState } from "../../main-container";
import { FormService } from "../../services";
import { AddFormContainerComponent } from "../../add";
export declare class EditFormContainerComponent extends AddFormContainerComponent {
    service: FormService;
    private route;
    store: Store<MainContainerState>;
    formGroup: FormGroup;
    constructor(service: FormService, route: ActivatedRoute, store: Store<MainContainerState>);
    ngOnInit(): void;
    update(data: any): void;
}
