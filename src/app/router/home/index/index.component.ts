import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  pictures = [
    {
      title: "a natural view",
      img:
        "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg"
    },
    {
      title: "a natural view",
      img:
        "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg"
    },
    {
      title: "a natural view",
      img:
        "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg"
    },
    {
      title: "a natural view",
      img:
        "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
