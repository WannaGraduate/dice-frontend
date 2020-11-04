import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleDatagridComponent } from './components/rule-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { RuleService } from './rule.service';
import { RuleAddComponent } from './containers/rule-add.component';
import { RuleFormComponent } from './components/rule-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RuleEditComponent } from './containers/rule-edit.component';
import { RuleListComponent } from './containers/rule-list.component';
import { RouterModule } from '@angular/router';
import { RuleViewComponent } from './containers/rule-view.component';
import { ItemDatagridComponent } from './components/item-datagrid.component';
import { ItemFormComponent } from './components/item-form.component';



@NgModule({
  declarations: [
    RuleDatagridComponent,
    ItemDatagridComponent,
    RuleListComponent,
    RuleAddComponent,
    RuleEditComponent,
    RuleFormComponent,
    ItemFormComponent,
    RuleViewComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [RuleService],
})
export class RuleModule { }
