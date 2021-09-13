import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  //import Service
  constructor(private newsService: NewsapiService) {
  }

  newsBusiness: any = [];

  ngOnInit(): void {

    this.newsService.businessNews().subscribe(
      data => {
        console.log(data);
        //  obj console data
        this.newsBusiness = data.articles;
      }
    )

  }

}
