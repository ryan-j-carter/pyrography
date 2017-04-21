import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRouting } from './gallery.routing';

import { GalleryComponent } from './gallery.component';

@NgModule({
    imports: [
        CommonModule,
        GalleryRouting
    ],
    declarations: [
        GalleryComponent
    ],
    exports: [GalleryComponent]
})
export class GalleryModule {}
