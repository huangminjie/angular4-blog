import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader.model';
@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit {
    show = false;
    progress = 0;
    private subscription: Subscription;
    constructor(
        private loaderService: LoaderService
    ) { }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                if (state.show) {
                    this.progress = 0;
                    this.onprogress();
                }
                else {
                    this.progress = 100;
                }
                this.show = state.show;
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    onprogress() {
        var timeout = this.random(10, 30);
        setTimeout(() => {
            this.progress += this.random(1, 5);
            if (this.progress > 94) {
                this.progress = 99;
                return false;
            }
            this.onprogress();
        }, timeout);
    }
}