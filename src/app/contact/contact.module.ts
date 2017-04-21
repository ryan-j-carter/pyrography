import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MdFormsModule } from '../md-forms/md-forms.module';

import { ContactRouting } from './contact.routing';

import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        MdFormsModule,
        ContactRouting
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule {}
