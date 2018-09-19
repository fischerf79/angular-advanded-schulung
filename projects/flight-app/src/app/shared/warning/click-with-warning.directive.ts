import { Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer, OnInit, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[clickWithWarning]'  // AttributeDirective
})
export class ClickWithWarningDirective implements OnInit {

    @Input() warning: string = 'Are you sure?';
    @Output() clickWithWarning = new EventEmitter();

    ngOnInit() {
        this.cssClass = 'btn btn-danger';
    }

    @HostBinding('class') cssClass: string;

    @HostListener('click', ['$event'])
    handleClick($event): void {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.clickWithWarning.emit();
        }
    }
}
