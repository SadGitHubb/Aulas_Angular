import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingsFormComponent } from '../meetings-form/meetings-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMeeting() {
    const dialogRef = this.dialog.open(MeetingsFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Dialog was closed');
    });
  }
}
