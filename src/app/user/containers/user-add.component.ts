import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserForm } from '../models/user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  constructor(
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async submit(data: UserForm): Promise<void> {
    await this.userService.add(data);
    this.router.navigate(['/users']);
  }

}
