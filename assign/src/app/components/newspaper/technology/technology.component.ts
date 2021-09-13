import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  //import Service
  constructor(private newsService: NewsapiService) {
  }

  newsTech: any = [];

  ngOnInit(): void {
    this.newsService.techNews().subscribe(
      data => {
        console.log(data)
        //obj console data
        this.newsTech = data.articles;
      }
    )
  }

}
