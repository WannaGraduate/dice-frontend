import { Component, OnInit } from '@angular/core';
import { User } from './user/models/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dice-frontend';

  constructor(
    public userService: UserService,
  ) { }

  async ngOnInit() {
    await this.userService.getAll();
    this.userService.selected = this.userService.users[0];
  }
}
