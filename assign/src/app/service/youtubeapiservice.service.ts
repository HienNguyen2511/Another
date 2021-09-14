import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeapiserviceService {

  constructor(private httpClient: HttpClient) {
  }

  getChannels(channelName: string): Observable<any> {

    const api_key_youtube = "AIzaSyA2a_H32PJdgH-T4JubBXIOUhb3-6ohaIQ";

    const url_search = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=" + api_key_youtube + "&maxResults=50";

    return this.httpClient.get<any>(url_search);
  }

  getVideos(videoName: string): Observable<any> {

    const api_key_youtube = "AIzaSyCvXSyqN_dII1zeolDIlc8hi1Bnd3ZgRpY";

    const url_search_video = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + videoName + "&type=videos&key=" + api_key_youtube + "&maxResults=50";

    return this.httpClient.get<any>(url_search_video);
  }
}
