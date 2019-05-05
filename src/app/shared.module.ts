import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { IndexComponent } from './router/home/index/index.component';
@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [CommonModule, MatButtonModule, MatCheckboxModule],
  providers: []
})
export class SharedModule {}
