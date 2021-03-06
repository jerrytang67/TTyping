import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.reducer";

declare var window: any;

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements AfterViewInit {
  @ViewChild("textArea") textArea: ElementRef;
  current = "";
  synth = window.speechSynthesis;
  units = {
    abc: `abcdefghijklmnopqrstuvwxyz`,
    unit1: `Where's Kitty?
Kitty, Kitty!
It isn't on the sofa.
Where's Kitty?
Is it under the table?
No.
Kitty, Kitty!
Miaow!
Look! It's behind the vase.
Miaow!
Oh, Kitty!`,
    unit2: `Dinner is ready!
What's for dinner, Dad?
Rice, broccoli and fish.
And soup too.
How nice!
Have some broccoli, Lingling.
Thanks, Dad.
Have some fish, Mum.
Thank you, Lingling.
`,
    unit3: `We all like PE!
We have Maths, Chinese, English And PE today.
I like Maths. It's fun.
How about you, Su Hai?
I like Chinese. It's easy.
I like English. It's easy and fun.
I like PE.
We all like PE!
`
    //     unit1: `She's my aunt
    // This is my cousin.
    // She's cute.
    // Is this your uncle?
    // Yes.
    // He's tall.
    // Is this your mum?
    // No. She's my aunt.
    // This is my mum.
    // Hello, Mrs Wang.
    // Hi!
    // uncle
    // cousin
    // aunt
    // tall
    // short`
    //     unit1: `Unit1 Let's count!
    // Look! Coll! How many red marbles?
    // One, two, three. Three red marbles.
    // How many green marbles?
    // One, two, three, four. Four green marbles.
    // How many yellow marbles?
    // One, two, three, four, five. Five yellow marbles.`,

    //     unit2: `Unit2 This is my pencil
    // Ouch! I'm sorry, Yang Ling.
    // That's OK.
    // Is this your book, Liu Tao?
    // Yes. Thank you, Su Hai.
    // Is this your pencil, Yang Ling?
    // No. Oh, this is my pencil!
    // Ha! Ha!
    // a book
    // a pencil
    // a ruler
    // a rubber`,

    //     unit3: `Unit3 I like carrots
    // I like carrots.
    // Me too.
    // Onions?
    // No, thanks.
    // I like onions. Peas?
    // Yes, please. We all like peas.
    // carrots
    // onions
    // peas
    // peppers`,
    //     unit4: `Unit4 Spring
    // Look at the trees. They're green.
    // Look at the flowers. They're beautiful.
    // Look at the birds. They're happy.
    // Look at the kites. They're colourful.
    // a tree
    // a flower
    // a bird
    // a kite`,
    //     unit5: `Unit5 What's this?
    // Look at the ladybird. It's cute.
    // What's this, Liu Tao? It's a cicada.
    // Look, Su Hai! Oh, a butterfly!
    // What's this? It's a dragonfly.
    // a ladybird
    // a cicada
    // a butterfly
    // a dragonfly`,
    //     unit6: `Unit6 Are you ready?
    // Are you ready? Yes!
    // One, two, three. Run!
    // One, two, three. Jump!
    // Well done!
    // run
    // jump
    // hop
    // walk`,

    //     unit7: `Unit7 What's that?
    // What's this? Shh! It's a pig.
    // Hello! What's that?
    // Baa! It's a lamb.
    // Quack! Quack! What's that? It's a duck.
    // a pig
    // a lamb
    // a duck
    // a cow`,
    //     unit8: `Unit8 What's in your bag?
    // What's in your bag. Yang Ling?
    // A bottle. A hankie. And three stickers.
    // What's in your bag. Liu Tao?
    // Two books. A yo-yo. And a bird.
    // A bird? Ha! Ha! Look!
    // a bottle
    // a hankie
    // a sticker
    // a yo-yo`
    //     unit47: `Unit7 What's the matter?
    // Come and have a pie, Taotao.
    // Thanks, Dad, but I'm not hungry.
    // I'm thirsty. Can I have some water, Mum?
    // Here you are. Thank you, Mum.
    // What's the matter, Taotao? Are you ill?
    // No, but I'm tired. I want to go to bed. Cood night, dear.
    // Good night, Mum and Dad.
    // happy
    // hungry
    // ill
    // sad
    // thirsty
    // tired`
  };

  app$: Observable<AppState>;

  // tslint:disable-next-line: deprecation
  constructor(public store: Store<any>, private renderer: Renderer2) {
    this.app$ = store.select("app");
    this.store.dispatch({ type: "SET_TEXT", payload: this.units.unit1 });
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.textArea.nativeElement.focus();
    }, 1000);
  }

  onKeydownEvent(input) {
    console.log(input);
    if (input.data) {
      this.input(input.data);
    }
  }
  enterKey(input) {
    if (input.key === "Enter") {
      this.input(`
`);
    }
  }

  input(input: string) {
    this.store.dispatch({ type: "INPUT", payload: input });
  }

  setText(text: string) {
    this.store.dispatch({ type: "SET_TEXT", payload: text });
    if (this.synth.speaking) {
      this.synth.cancel();
    }
    setTimeout(() => {
      const speechSU = new window.SpeechSynthesisUtterance(text);
      speechSU.voice = speechSynthesis.getVoices().filter(voice => {
        console.log(voice.name);
        return (
          voice.name === "Microsoft David Desktop - English (United States)"
        );
      })[0];
      speechSU.rate = 0.8;
      speechSU.language = "en";
      this.synth.speak(speechSU);
    }, 10);
  }

  next() {
    // this.store.dispatch({ type: "NEXT" });
  }
  button() {
    // this.store.dispatch({ type: "SET_TEXT", payload: this.text });
  }
}
