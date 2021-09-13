import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {YoutubeapiserviceService} from "../../../service/youtubeapiservice.service";

@Component({
  selector: 'app-video',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channels: any

  @ViewChild('channelName') channelName: ElementRef | any;

  constructor(private youtubeServices: YoutubeapiserviceService) {
  }

  ngOnInit(): void {
    this.youtubeServices.getChannels("One Piece").subscribe(
      data => {
        console.log(data);
        this.channels = data.items
      }
    )
  }

  getDataChannel() {

    var channelName = this.channelName.nativeElement.value

    this.youtubeServices.getChannels(channelName).subscribe(
      data => {
        console.log(data);
        this.channels = data.items
      }
    )

  }


}
