import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValcomTableModuleComponent } from './valcom-table-module.component';
import { ValcomTableActions } from './valcom-table-actions/valcom-table-actions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValcomTableModuleComponent,
    ValcomTableActions
  ],
  exports: [
    ValcomTableModuleComponent,
    ValcomTableActions
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class ValcomTableModuleModule { }
