import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LIST_FADE_ANIMATION } from '../../../../@equity-bank/shared/list.animation';

@Component({
  selector: 'equity-bank-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarNotificationsComponent implements OnInit {
  notifications!: any[];
  isOpen!: boolean;

  constructor() {}

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        name: 'This is a notification',
        time: 'few sec ago',
        read: false,
        colorClass: '',
      },
      {
        icon: 'shopping_basket',
        name: 'User bought your API',
        time: '23 min ago',
        read: false,
        colorClass: 'primary',
      },
      {
        icon: 'eject',
        name: 'Server Crashed',
        time: 'an hour ago',
        read: false,
        colorClass: 'accent',
      },
      {
        icon: 'cached',
        name: 'New user registered',
        time: '6 hours ago',
        read: true,
        colorClass: '',
      },
      {
        icon: 'code',
        name: 'John added you as friend',
        time: 'yesterday',
        read: true,
        colorClass: '',
      },
    ];
  }

  markAsRead(notification: { read: boolean }) {
    notification.read = true;
  }

  dismiss(notification: any, event: { stopPropagation: any }) {
    event.stopPropagation();
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  markAllAsRead() {
    this.notifications.forEach((notification) => (notification.read = true));
  }
}
