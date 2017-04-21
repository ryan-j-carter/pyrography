import { NgModule } from '@angular/core';

import { AboutRouting } from './about.routing';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [AboutRouting],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule {}
