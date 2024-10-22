import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';



@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzBadgeModule
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzBadgeModule
  ],
})
export class NgZorroModule { }
