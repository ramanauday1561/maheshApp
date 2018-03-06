import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentValue: any;
  @Output() notifyEventPageVal = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('currentValue : ',this.currentValue);
  }

  routeTo(val) {
    this.currentValue = val+1;
    this.notifyEventPageVal.emit(this.currentValue);
  }

}
