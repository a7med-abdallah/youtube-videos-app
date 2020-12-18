import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';

const routes: Routes = [
  { path: '', component: VideosListComponent },
  { path: 'details/:id', component: VideoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
