import {Component} from '@angular/core';
import {usersData} from "../models/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = usersData.find(({id}) => id === 1);
}
