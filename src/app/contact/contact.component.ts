import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

import { EmailValidator } from './validators/email.validator';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contact: FormGroup;

    scriptUrl: string = 'https://script.google.com/macros/s/AKfycbzX-gUECm-P77CQKxobR7XSG1XA-nJikU064X97rtrPib719zA/exec';


    constructor(private fb: FormBuilder, private http: Http, private jsonp: Jsonp) {
        this.contact = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, EmailValidator.isValidMailFormat]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

    sendMessage() {
        const mail = this.contact.value;
        mail.message = mail.message.replace(/\r?\n/g, '\\n');

        const body = "?name=" + mail.name +
                     "&email=" + mail.email +
                     "&subject=" + mail.subject +
                     "&message=" + mail.message +
                     "&callback=JSONP_CALLBACK";

        this.jsonp.get(this.scriptUrl + body)
            .map(result => result.json())
            .subscribe(result => {
                console.log('sent message');
            }, error => {
                //throw new Error(error);
                console.log('hit error');
            });
    }
}
