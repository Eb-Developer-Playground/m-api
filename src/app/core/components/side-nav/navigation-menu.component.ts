import { Component, EventEmitter, Output } from '@angular/core';
import { AuthStateService } from '../../../auth/services';

@Component({
  selector: 'app-navigation-menu',
  template: `
      <mat-nav-list>
          <a
                  mat-list-item
                  routerLinkActive="active-link"
                  [routerLink]="['profile']"
          >
              <mat-icon class="nav-icons">person</mat-icon>
              Profile
          </a>
          <a
                  mat-list-item
                  routerLinkActive="active-link"
                  [routerLink]="['apis']"
          >
              <mat-icon class="nav-icons">person_search</mat-icon>
              APIs List
          </a>
          <a mat-list-item routerLinkActive="active-link" (click)="sigOut()">
              <mat-icon class="nav-icons">logout</mat-icon>
              SignOut
          </a>
      </mat-nav-list>
  `,
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  @Output() navigate = new EventEmitter();

  constructor(private authState: AuthStateService) {
  }

  sigOut() {
    this.authState.logout();
  }
}
