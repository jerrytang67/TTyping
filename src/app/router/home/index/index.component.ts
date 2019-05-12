import { Component, OnInit, ViewChild } from "@angular/core";
import { UnitComponent } from "src/app/components/unit/unit.component";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.reducer";

declare var window: any;

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  current: string = "";

  units = {
    abc: `abcdefghijklmnopqrstuvwxyz`,
    unit1: `Unit1 Let's count! Look! Coll! How many red marbles? One, two, three. Three red marbles. How many green marbles? One, two, three, four. Four green marbles. How many yellow marbles? One, two, three, four, five. Five yellow marbles.`,
    unit2: `Unit2 This is my pencil Ouch! I'm sorry, Yang Ling. That's OK. Is this your book, Liu Tao? Yes. Thank you, Su Hai. Is this your pencil, Yang Ling? No. Oh, this is my pencil! Ha! Ha! a book a pencil a ruler a rubber`,

    unit3: `Unit3 I like carrots I like carrots. Me too. Onions? No, thanks. I like onions. Peas? Yes, please. We all like peas. carrots onions peas peppers`,

    unit4: `Unit4 Spring Look at the trees. They're green. Look at the flowers. They're beautiful. Look at the birds. They're happy. Look at the kites. They're colourful. a tree a flower a bird a kite`,
    unit5: `TODO`,
    unit6: `TODO`,
    unit7: `Unit7 What's the matter?
Come and have a pie, Taotao.
Thanks, Dad, but I'm not hungry.
I'm thirsty. Can I have some water, Mum?
Here you are. Thank you, Mum.
What's the matter, Taotao? Are you ill? No, but I'm tired.
I want to go to bed. Cood night, dear.
Good night, Mum and Dad. happy hungry ill sad thirsty tired`
  };

  app$: Observable<AppState>;
  constructor(public store: Store<any>) {
    this.app$ = store.select("app");
    this.app$.subscribe(z => {
      console.log(z);
    });
    this.store.dispatch({ type: "SET_TEXT", payload: this.units.unit3 });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  onKeydownEvent(input) {
    if (input.key === "Shift") return;
    console.log(input);
    if (input.key) {
      this.input(input.key);
    }
  }

  input(input: string) {
    this.store.dispatch({ type: "INPUT", payload: input });
  }

  setText(text: string) {
    this.store.dispatch({ type: "SET_TEXT", payload: text });
    const synth = window.speechSynthesis;
    synth.cancel();
    setTimeout(() => {
      const speechSU = new window.SpeechSynthesisUtterance();
      speechSU.text = text;
      synth.speak(speechSU);
    }, 10);
  }

  next() {
    // this.store.dispatch({ type: "NEXT" });
  }
  button() {
    // this.store.dispatch({ type: "SET_TEXT", payload: this.text });
  }
}
