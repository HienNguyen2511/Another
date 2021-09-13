import {Component, OnInit} from '@angular/core';
import {NewsapiService} from "../../../service/newsapiservice.service";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private newsService: NewsapiService) {
  }

  newsHealth: any = [];

  ngOnInit(): void {
    this.newsService.healthNews().subscribe(
      data => {
        console.log(data);
        this.newsHealth = data.articles;
      }
    )
  }

}
