import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'equity-bank-toolbar-sidenav-mobile-toggle',
  templateUrl: './toolbar-sidenav-mobile-toggle.component.html',
  styleUrls: ['./toolbar-sidenav-mobile-toggle.component.scss'],
})
export class ToolbarSidenavMobileToggleComponent {
  @Output() openSidenav = new EventEmitter();

  constructor() {}
}
