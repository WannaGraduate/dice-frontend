import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogListComponent } from './log/containers/log-list.component';
import { LotteryRequestComponent } from './lottery/containers/lottery-request.component';
import { RuleAddComponent } from './rule/containers/rule-add.component';
import { RuleEditComponent } from './rule/containers/rule-edit.component';
import { RuleListComponent } from './rule/containers/rule-list.component';
import { RuleViewComponent } from './rule/containers/rule-view.component';

const routes: Routes = [
  {
    path: 'lottery',
    component: LotteryRequestComponent,
  },
  {
    path: 'logs',
    component: LogListComponent,
  },
  {
    path: 'rules/:id/edit',
    component: RuleEditComponent,
  },
  {
    path: 'rules/:id/view',
    component: RuleViewComponent,
  },
  {
    path: 'rules/add',
    component: RuleAddComponent,
  },
  {
    path: 'rules',
    component: RuleListComponent,
  },
  { path: '', redirectTo: 'rules', pathMatch: 'full' },
  { path: '**', redirectTo: 'rules' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
