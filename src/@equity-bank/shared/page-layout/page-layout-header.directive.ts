import { Directive } from '@angular/core';

@Directive({
  selector: '[equityBankPageLayoutHeader],equity-bank-page-layout-header',
  host: {
    class: 'equity-bank-page-layout-header',
  },
})
export class PageLayoutHeaderDirective {
  constructor() {}
}
