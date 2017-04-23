import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { EmailValidator } from './validators/email.validator';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contact: FormGroup;

    //Email to Cody
    scriptUrl: string = 'https://script.google.com/macros/s/AKfycbxmIltwp6iIqJyC94hYk-6mWGoaS9Sy3YRijbce9ffyoLpCHicx/exec';

    //Email to Ryan
    //scriptUrl: string = 'https://script.google.com/macros/s/AKfycbzX-gUECm-P77CQKxobR7XSG1XA-nJikU064X97rtrPib719zA/exec';


    constructor(
        private fb: FormBuilder,
        private jsonp: Jsonp,
        private toastr: ToastsManager,
        viewContainer: ViewContainerRef
    ) {
        this.contact = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, EmailValidator.isValidMailFormat]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });

        this.toastr.setRootViewContainerRef(viewContainer);
    }

    sendMessage() {
        if (this.contact.valid) {
                    
            const mail = this.contact.value;
            mail.message = mail.message.replace(/\r?\n/g, '\\n');

            const body = "?name=" + mail.name +
                        "&email=" + mail.email +
                        "&subject=" + mail.subject +
                        "&message=" + mail.message +
                        "&callback=JSONP_CALLBACK";

            this.contact.reset();

            this.toastr.success('Your message has been sent.', 'Success!', {
                toastLife: 5000
            });

            this.jsonp.get(this.scriptUrl + body)
                .map(result => result.json())
                .subscribe(result => {
                    //Never get 'successful' result due to goole attempting a redirect.
                }, error => {
                    //Always receive error, google wants to redirect but App prevents it. 
                    
                });
        }
        else {
            this.displayInvalid();
        }
    }

    displayInvalid() {
        let err = '';
        const name = this.contact.get('name');
        const email = this.contact.get('email');
        const subject = this.contact.get('subject');
        const message = this.contact.get('message');
        if (name.errors && name.errors.required) {
            err += '<p>Missing name.</p>';
        }
        if (email.errors) {
            if (email.errors.required) {
                err += '<p>Missing email.</p>';
            }
            else if (email.errors.invalidEmail) {
                err += '<p>Invalid email format.</p>';
            }
        }
        if (subject.errors && subject.errors.required) {
            err += '<p>Missing subject.</p>';
        }
        if (message.errors && message.errors.required) {
            err += '<p>Missing message body.</p>';
        }

        this.toastr.error(err, 'Form is invalid!', {
            toastLife: 5000,
            enableHTML: true
        });
    }
}
