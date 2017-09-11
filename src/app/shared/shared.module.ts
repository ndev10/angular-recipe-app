import { CommonModule } from '@angular/common';
import { BootstrapDropdownDirective } from './bootstrap-dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[BootstrapDropdownDirective],
    exports:[BootstrapDropdownDirective,CommonModule]
})
export class SharedModule {

}