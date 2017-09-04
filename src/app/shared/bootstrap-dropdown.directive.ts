import {Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class BootstrapDropdownDirective {
    @HostBinding("class.open") isOpen : boolean= false;

    @HostListener('click') toggleDropdown() {
        this.isOpen = !this.isOpen
    }
}