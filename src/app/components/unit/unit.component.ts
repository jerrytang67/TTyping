import { Component, OnInit, Input, Output } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.reducer";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.scss"]
})
export class UnitComponent implements OnInit {
  app$: Observable<AppState>;
  constructor(store: Store<any>) {
    this.app$ = store.select("app");
  }

  ngOnInit() {}
}
