import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.css']
})
export class LiveTrackingComponent implements OnInit {
  trackORmap: any;lat: number = 51.678418;lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
    this.trackORmap = 1;
  }

  trackDetails(){
    this.trackORmap = 2;
  }

  gotoTracking() {
    this.trackORmap = 3;
  }

}
