import { Directive } from '@angular/core';

@Directive({
  selector: '[equityBankTitle],equity-bank-title',
  host: {
    class: 'equity-bank-title',
  },
})
export class TitleDirective {
  constructor() {}
}
