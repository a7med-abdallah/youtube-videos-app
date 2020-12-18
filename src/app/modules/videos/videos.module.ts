import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarRatingComponent } from 'src/app/shared/components/star-rating/star-rating.component';

@NgModule({
  declarations: [VideosListComponent, VideoDetailsComponent, StarRatingComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
  exports: [
    StarRatingComponent,
    VideosListComponent,
    VideoDetailsComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTooltipModule,
  ]
})
export class VideosModule { }
