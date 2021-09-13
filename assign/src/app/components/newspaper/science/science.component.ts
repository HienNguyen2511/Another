import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private newsService: NewsapiService) {
  }

  newsScience: any=[];

  ngOnInit(): void {
    this.newsService.scienceNews().subscribe(
      data => {
        console.log(data);
        this.newsScience = data.articles;
      }
    )
  }

}
