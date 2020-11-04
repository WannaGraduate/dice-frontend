import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogDatagridComponent } from './components/log-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { LogService } from './log.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LogListComponent } from './containers/log-list.component';



@NgModule({
  declarations: [
    LogDatagridComponent,
    LogListComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
  ],
  providers: [LogService],
})
export class LogModule { }
