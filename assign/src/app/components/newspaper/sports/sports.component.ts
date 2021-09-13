import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  //import Service
  constructor(private newsService: NewsapiService) {
  }

  newsSport: any = [];

  ngOnInit(): void {

    this.newsService.sportNews().subscribe(
      data => {
        console.log(data);
        //  obj console data
        this.newsSport = data.articles;
      }
    )
  }

}
