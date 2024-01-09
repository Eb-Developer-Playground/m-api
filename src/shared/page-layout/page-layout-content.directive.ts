import { Directive } from '@angular/core';

@Directive({
  selector: '[appequityBankPageLayoutContent],equity-bank-page-layout-content',
  host: {
    class: 'equity-bank-page-layout-content',
  },
})
export class PageLayoutContentDirective {
  constructor() {
  }
}
