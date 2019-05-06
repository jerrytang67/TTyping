import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { IndexComponent } from "./router/home/index/index.component";

const COMPONENTS = [IndexComponent];

const MAT_COMPONENTS = [
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MAT_COMPONENTS],
  exports: [CommonModule, ...MAT_COMPONENTS],
  providers: []
})
export class SharedModule {}
