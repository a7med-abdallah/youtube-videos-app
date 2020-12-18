import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Video } from '../../models/video';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})

export class VideosListComponent implements OnInit {
  ELEMENT_DATA: Video[] = [];
  displayedColumns: string[] = ['thumbnail', 'name', 'actions'];
  dataSource = new MatTableDataSource<Video>(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.getAllVideos()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllVideos() {
    this.videosService.getVideos().subscribe(res => {
      this.dataSource.data = res as Video[];
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
