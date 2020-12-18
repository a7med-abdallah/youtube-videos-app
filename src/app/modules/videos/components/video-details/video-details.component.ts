import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../models/video';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  video: Video;
  videoId: number;
  rating: number
  constructor(private route: ActivatedRoute, private videosService: VideosService) { }

  ngOnInit() {
    this.videoId = +this.route.snapshot.paramMap.get('id');
    this.videosService.getVideos().subscribe(res => {
      this.video = res[this.videoId];
      this.rating = res[this.videoId].rating;
      localStorage.setItem('videoRating', JSON.stringify(this.rating))
    });
  }
}
