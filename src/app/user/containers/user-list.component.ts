import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor(public userService: UserService) {}

  async ngOnInit(): Promise<void> {
    await this.userService.getAll();
    this.userList = this.userService.users;
  }

  onSelect(id: string): void {
    this.userService.selected = this.userList.find((x) => x.id === id);
  }

  async onDelete(id: string): Promise<void> {
    await this.userService.delete(id);
    await this.userService.getAll();
    this.userList = this.userService.users;
  }
}
