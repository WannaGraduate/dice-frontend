import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { LotteryService } from './lottery.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LotteryRequestComponent } from './containers/lottery-request.component';



@NgModule({
  declarations: [
    LotteryRequestComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
  ],
  providers: [LotteryService],
})
export class LotteryModule { }
