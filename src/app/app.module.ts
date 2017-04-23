import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouting,
        ToastModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
