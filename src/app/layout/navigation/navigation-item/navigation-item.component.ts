import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavItem } from '../../sidenav/sidenav-item/sidenav-item.interface';

@Component({
  selector: 'equity-bank-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input('item') item!: SidenavItem;
  @Input('currentlyOpen') currentlyOpen: SidenavItem[] = [];

  @Output() handleClick = new EventEmitter<SidenavItem>();

  constructor() {
  }

  ngOnInit() {
  }

}
