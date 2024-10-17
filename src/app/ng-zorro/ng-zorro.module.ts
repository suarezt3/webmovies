import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [
    NzButtonModule
  ],
})
export class NgZorroModule { }
