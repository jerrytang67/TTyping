import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <mat-sidenav-container class="example-container">
      <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
