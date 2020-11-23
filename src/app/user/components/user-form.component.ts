import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserForm } from '../models/user.model';
import * as vrf from 'ecvrf';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() set data(value: User) {
    this.editId = value.id;
    this.formGroup = new FormGroup({
      name: new FormControl([value.name]),
    });
  }
  @Output() output = new EventEmitter<UserForm>();

  formGroup: FormGroup;
  editId: string;

  pkey = '';
  skey = '';

  constructor() { }

  ngOnInit(): void {
    if (!this.editId) {
      this.formGroup = new FormGroup({
        name: new FormControl(''),
        publicKey: new FormControl('', Validators.required),
      });
    }
  }

  save(): void {
    this.output.emit({
      name: this.formGroup.controls['name'].value,
      publicKey: this.formGroup.controls['publicKey'].value,
    });
  }

  createKey(): void {
    const keys = vrf.keygen();
    this.pkey = keys.public_key;
    this.skey = keys.secret_key;
    this.formGroup.controls['publicKey'].setValue(this.pkey);
  }

}
