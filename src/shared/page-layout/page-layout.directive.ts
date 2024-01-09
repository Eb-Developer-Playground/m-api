import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[equityBankPageLayout],equity-bank-page-layout',
  host: {
    class: 'equity-bank-page-layout',
  },
})
export class PageLayoutDirective {
  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() {
  }

  @HostBinding('class.equity-bank-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.equity-bank-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }
}
