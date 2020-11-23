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
  user: User;

  constructor(
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.selected.subscribe(user => {
      this.user = user;
    });
  }
}
