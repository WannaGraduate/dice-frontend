import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item, ItemForm } from '../models/rule.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Input() set data(value: Item) {
    this.editId = value.id;
    this.formGroup = new FormGroup({
      name: new FormControl([value.name]),
    });
  }
  @Output() output = new EventEmitter<ItemForm>();

  formGroup: FormGroup;
  editId: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.editId) {
      this.formGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        prob: new FormControl('', Validators.required),
      });
    }
  }

  save(): void {
    this.output.emit({
      name: this.formGroup.controls['name'].value,
      prob: this.formGroup.controls['prob'].value,
    });
  }

}
