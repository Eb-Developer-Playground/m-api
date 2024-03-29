import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';
import { MaterialModule } from '../../../@equity-bank/shared/material-components.module';
import { ScrollbarModule } from '../../../@equity-bank/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ScrollbarModule],
  declarations: [SidenavComponent, SidenavItemComponent],
  exports: [SidenavComponent],
  providers: [SidenavService],
})
export class SidenavModule {}
