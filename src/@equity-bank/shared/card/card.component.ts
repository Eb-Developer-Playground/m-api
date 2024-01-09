import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
} from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'equity-bank-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'equity-bank-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquityBankCard {}

// noinspection TsLint
@Component({
  selector: 'equity-bank-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'equity-bank-card-header' },
  template: `
    <div class="equity-bank-card-header-heading-group">
      <ng-content select="equity-bank-card-header-heading"></ng-content>
      <ng-content select="equity-bank-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="equity-bank-card-header-actions"></ng-content>
  `,
})
export class EquityBankCardHeader {}

// noinspection TsLint
@Component({
  selector: 'equity-bank-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'equity-bank-card-content' },
  template: ` <ng-content></ng-content>`,
})
export class EquityBankCardContent {}

// noinspection TsLint
@Directive({
  selector: 'equity-bank-card-header-heading',
  host: { class: 'equity-bank-card-header-heading' },
})
export class EquityBankCardHeaderTitle {}

// noinspection TsLint
@Directive({
  selector: 'equity-bank-card-header-subheading',
  host: { class: 'equity-bank-card-header-subheading' },
})
export class EquityBankCardHeaderSubTitle {}

// noinspection TsLint
@Directive({
  selector: 'equity-bank-card-header-actions',
  host: { class: 'equity-bank-card-header-actions' },
})
export class EquityBankCardHeaderActions {}

// noinspection TsLint
@Directive({
  selector: 'equity-bank-card-actions',
  host: {
    class: 'equity-bank-card-actions',
    '[class.equity-bank-card-actions-align-end]': 'align === "end"',
  },
})
export class EquityBankCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
