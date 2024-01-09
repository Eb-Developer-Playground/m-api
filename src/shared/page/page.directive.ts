import { Directive } from '@angular/core';

@Directive({
  selector: '[equityBankPage],equity-bank-page',
  host: {
    class: 'equity-bank-page',
  },
})
export class PageDirective {
  constructor() {
  }
}
