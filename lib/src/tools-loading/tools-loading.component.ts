import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolsLoadingService} from "./tools-loading.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'tools-loading',
    templateUrl: './tools-loading.component.html',
    styleUrls: ['./tools-loading.component.css']
})
export class ToolsLoadingComponent implements OnInit, OnDestroy {
    count = 0;
    subscription: Subscription;

    constructor(private loadingService: ToolsLoadingService) {
    }

    ngOnInit(): void {
        this.subscription = this.loadingService.currentState.subscribe(result => {
            this.count += result;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
