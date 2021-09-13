import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsapiService) {
  }

  newsNormal: any = [];

  //Not optimize

  // categoriesNews=[
  //   {'types':'Sports','router':'sports'},
  //   {'types':'Business'},
  //   {'types':'Technology'},
  //   {'types':'Health'},
  //   {'types':'General'},
  //   {'types':'Science'},
  //   {'types':'Entertainment'}
  // ]
  //
  // Links=[
  //   {'router':'sports'},
  //   {'router':'business'},
  //   {'router':'tech'},
  //   {'router':'health'},
  //   {'router':'general'},
  //   {'router':'science'},
  //   {'router':'entertainment'}
  // ]

  ngOnInit(): void {
    this.newsService.normalNews().subscribe(
      data => {
        console.log(data)
        //  obj console data
        this.newsNormal = data.articles
      }
    )
  }


}
