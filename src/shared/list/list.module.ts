import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { MaterialModule } from '../../app/@equity-bank/shared/material-components.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {
}
