import { Component, ContentChild, ViewEncapsulation, Input } from '@angular/core';
import { MdInputDirective } from './md-input.directive';

export type FloatPlaceholderType = 'always' | 'never' | 'auto';

@Component({
    selector: 'md-input-container',
    templateUrl: 'md-input-container.component.html',
    styleUrls: ['md-input-container.component.scss'],
    host: {
        '[class.md-focused]': 'mdInputChild.focused',
        '(click)': 'focusInput()'
    },
    encapsulation: ViewEncapsulation.None
})
export class MdInputContainer {
    @ContentChild(MdInputDirective) mdInputChild: MdInputDirective;

    @Input()
    get floatPlaceholder() { return this._floatPlaceholder; }
    set floatPlaceholder(value: FloatPlaceholderType) {
        this._floatPlaceholder = value || 'auto';
    }

    private _floatPlaceholder: FloatPlaceholderType = 'auto';

    constructor() {

    }

    ngAfterContentInit() {
        if (!this.mdInputChild) {
            throw new Error('No input element provided');
        }
    }

    private focusInput() {
        this.mdInputChild.focus();
    }

    get canPlaceholderFloat() {
        return this._floatPlaceholder !== 'never';
    }
}
