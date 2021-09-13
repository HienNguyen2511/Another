import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private httpClient: HttpClient) {
  }

  api_key = "903870548b2b43b181bcc502fc583f57"

  //newsUrl
  newsUrl = "https://newsapi.org/v2/top-headlines?country=de&apiKey=" + this.api_key;

  //sportUrl
  sportUrl = "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=" + this.api_key+"&totalResults";

  //businessUrl
  businessUrl = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=" + this.api_key;

  //techUrl
  techUrl = "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=" + this.api_key;

  //healthUrl
  healthUrl = "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=" + this.api_key;

  //scienceUrl
  scienceUrl = "https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=" + this.api_key;

  //entertainmentUrl
  entertainmentUrl = "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=" + this.api_key;

  //generalUrl
  generalUrl = "https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=" + this.api_key;

  //Get data

  //news
  normalNews(): Observable<any> {
    return this.httpClient.get(this.newsUrl)
  }

  //sport
  sportNews(): Observable<any> {
    return this.httpClient.get(this.sportUrl)
  }

  //  business
  businessNews(): Observable<any> {
    return this.httpClient.get(this.businessUrl)
  }

  //  tech
  techNews(): Observable<any> {
    return this.httpClient.get(this.techUrl)
  }

  //health
  healthNews(): Observable<any> {
    return this.httpClient.get(this.healthUrl)
  }

  //science
  scienceNews(): Observable<any> {
    return this.httpClient.get(this.scienceUrl)
  }

  //entertainment
  entertainmentNews(): Observable<any> {
    return this.httpClient.get(this.entertainmentUrl)
  }

  //general
  generalNews(): Observable<any> {
    return this.httpClient.get(this.generalUrl)
  }

}
