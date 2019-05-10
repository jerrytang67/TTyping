import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hands",
  templateUrl: "./hands.component.html",
  styleUrls: ["./hands.component.scss"]
})
export class HandsComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input("current") current: string;

  finger = {
    1: { cx: 60.9, cy: 239 }, // 左手 小指
    2: { cx: 174.1, cy: 89.6 },
    3: { cx: 327.5, cy: 60.7 },
    4: { cx: 459.3, cy: 139.7 },
    5: { cx: 557.8, cy: 473.3 }, // 左手 拇指
    6: { cx: 836.2, cy: 473.3 }, // 右手 拇指
    7: { cx: 934.7, cy: 139.7 },
    8: { cx: 1066.5, cy: 60.7 },
    9: { cx: 1219.9, cy: 89.6 },
    10: { cx: 1333.1, cy: 239 } // 右手 小指
  };

  list = {
    1: ["1", "Q", "A", "Z", "!"],
    2: ["2", "W", "S", "X", "@"],
    3: ["3", "E", "D", "C", "#"],
    4: ["4", "R", "F", "V", "$", "5", "T", "G", "B", "%"],
    5: [" "],
    6: [" "],
    7: ["6", "7", "^", "&", "Y", "U", "H", "J", "N", "M"],
    8: ["8", "*", "I", "K", ","],
    9: ["9", "O", "L", "."],
    10: ["0", "P", ";"]
  };
  constructor() {
  }

  ngOnInit() {
    // this.current$.subscribe(z => {
    //   console.log(z);
    //   this.current = z;
    // });
  }

  show(index): boolean {
    const result = this.list[index].indexOf(this.current.toUpperCase()) >= 0;
    return result;
  }
}
