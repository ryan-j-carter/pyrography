import { NgModule } from '@angular/core';

import { MdInputContainer } from './/md-input-container/md-input-container.component';
import { MdInputDirective } from './/md-input-container/md-input.directive';

@NgModule({
    declarations: [
        MdInputContainer,
        MdInputDirective
    ],
    exports: [
        MdInputContainer,
        MdInputDirective
    ]
})
export class MdFormsModule {}
