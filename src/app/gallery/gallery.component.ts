import { Component, trigger, state, style, transition, animate } from '@angular/core';

import { images } from './images';

const animationTime = '200ms';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [
        trigger('slideIn', [
            state('*', style({
                marginLeft: '0'
            })),
            state('void', style({
                marginLeft: '-100%'
            })),
            transition('void => *', animate(animationTime + ' ease-in')),
            transition('* => void', animate(animationTime + ' ease-out'))
        ]),
        trigger('fadeIn', [
            state('*', style({
                opacity: '1'
            })),
            state('void', style({
                opacity: '0'
            })),
            transition('void => *', animate(animationTime + ' ease-in')),
            transition('* => void', animate(animationTime + ' ease-out'))
        ]),
        trigger('scaleIn', [
            state('*', style({
                transform: 'translate(-50%, -50%) scale(1)'
            })),
            state('void', style({
                transform: 'translate(-50%, -50%) scale(0)'
            })),
            transition('void => *', animate(animationTime + ' ease-out')),
            transition('* => void', animate(animationTime + ' ease-out'))
        ])
    ]
})
export class GalleryComponent {
    baseUrl: string;
    images: any[];
    selectedImage: number;
    showFullImage: boolean;


    constructor() {
        this.baseUrl = '../../assets/images';

        this.images = images;

        this.showFullImage = false;
    }

    viewImage(i) {
        this.selectedImage = i;
        this.showFullImage = true;
    }
}
