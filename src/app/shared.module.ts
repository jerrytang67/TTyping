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
import { HandsComponent } from "./components/hands/hands.component";
import { UnitComponent } from './components/unit/unit.component';

const COMPONENTS = [IndexComponent, HandsComponent];

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
  declarations: [...COMPONENTS, UnitComponent],
  imports: [CommonModule, ...MAT_COMPONENTS],
  exports: [CommonModule, ...MAT_COMPONENTS],
  providers: []
})
export class SharedModule {}
