import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { PtModalService } from './modals/pt-modal.service';

import { MenuComponent } from './components/menu/menu.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TextInputModalComponent } from './modals/text-input/text-input.modal.component';
import { ListSelectorModalComponent } from './modals/list-selector/list-selector.modal.component';



@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        CommonModule
    ],
    exports: [
        MenuComponent,
        DialogComponent
    ],
    declarations: [
        MenuComponent,
        DialogComponent,
        TextInputModalComponent,
        ListSelectorModalComponent
    ],
    providers: [
        PtModalService
    ],
    entryComponents: [
        TextInputModalComponent,
        ListSelectorModalComponent
    ]
})
export class SharedModule { }
