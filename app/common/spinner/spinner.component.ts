import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <div *ngIf="isVisible" class="spinner">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
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
            background: #777272;
            height: 50px;
            width: 52px;
            z-index: 119;
            padding: 5px;
            display: flex;
            border-radius: 4px;
        }
    `]
})

export class SpinnerComponent {
    @Input() isVisible:boolean = false;

}

