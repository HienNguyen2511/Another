import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {


  constructor(private newsService: NewsapiService) {
  }

  newsEntertainment: any = [];

  ngOnInit(): void {

    this.newsService.entertainmentNews().subscribe(
      data => {
        console.log(data);
        //  obj console data
        this.newsEntertainment = data.articles;
      }
    )
  }

}
