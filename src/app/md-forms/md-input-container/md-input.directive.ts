import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'input[mdInput], textarea[mdInput]',
    host: {
        '[class.md-input-element]': 'true',
        '[placeholder]': 'placeholder',
        '[required]': 'required',
        '(blur)': 'onBlur()',
        '(focus)': 'onFocus()'
    }
})
export class MdInputDirective {
    private _type = 'text';
    private _placeholder = '';
    private _required = false;

    focused = false;

    @Input()
    get type() { return this._type; }
    set type(value: string) {
        this._type = value || 'text';

        if (!this.isTextarea()) {
            this.renderer.setElementProperty(this.el.nativeElement, 'type', this._type);
        }
    }

    @Input()
    get placeholder() { return this._placeholder; }
    set placeholder(value: string) {
        if (this._placeholder !== value) {
            this._placeholder = value;
        }
    }

    @Input()
    get required() { return this._required; }
    set required(value: boolean) { this._required = value; }

    @Input()
    get value() { return this.el.nativeElement.value; }
    set value(value: string) { this.el.nativeElement.value = value; }

    get empty() {
        return this.value == null || this.value === '';
    }

    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    focus() {
        if (!this.focused) {
            this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
        }
    }

    private isTextarea() {
        const native = this.el.nativeElement;
        return native ? native.nodeName.toLowerCase() === 'textarea' : false;
    }

    private onBlur() {
        this.focused = false;
    }

    private onFocus() {
        this.focused = true;
    }
}
