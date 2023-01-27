import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookmarksArray: any[] = [];

  constructor(public dashBoardService : DashBoardService) { }

  ngOnInit(): void {
    this.dashBoardService.findAllatLoading().subscribe(data => {
      this.bookmarksArray = data;
    })
  }

  getData() {
    this.dashBoardService.getData().subscribe(data => {
      this.bookmarksArray = data;
    })
  }

  deleteBookMark(id: number) {
    this.dashBoardService.deleteBookMarka(id).subscribe( () => {
      this.loadData();
    });
  }

  private loadData() {
    this.dashBoardService.findAllatLoading().subscribe(data => {
      this.bookmarksArray = data;
    })
  }

}
