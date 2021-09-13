import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private newsService: NewsapiService) {
  }

  newsGeneral: any = [];

  ngOnInit(): void {
    this.newsService.generalNews().subscribe(
      data => {
        console.log(data);
        this.newsGeneral = data.articles;
      }
    )
  }

}
