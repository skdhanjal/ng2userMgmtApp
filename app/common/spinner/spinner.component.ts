import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <div *ngIf="isVisible" class="spinner">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
    `,
    styles: [`
        .spinner {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #5bc0de;;
            height: 50px;
            width: 50px;
            z-index: 119;
            display: flex;
            border-radius: 4px;
        }
        .spinner i {
            position: relative;
            margin: auto;
        } 
    `]
})

export class SpinnerComponent {
    @Input() isVisible:boolean = false;

}

