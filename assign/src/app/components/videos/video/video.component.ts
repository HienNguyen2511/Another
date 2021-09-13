import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {YoutubeapiserviceService} from "../../../service/youtubeapiservice.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: any;

  @ViewChild('videoName') videoName: ElementRef | any;

  constructor(private youtubeService: YoutubeapiserviceService) {
  }

  ngOnInit(): void {

    this.youtubeService.getVideos("Độ Tộc 2").subscribe(
      data => {
        console.log(data);
        this.videos = data.items;
      }
    )
  }

  getDataVideo() {
    var videoName = this.videoName.nativeElement.value

    this.youtubeService.getVideos(videoName).subscribe(
      data => {
        console.log(data);
        this.videos = data.items
      }
    )
  }


}
