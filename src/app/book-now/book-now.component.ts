import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  fromPlace: any;toPlace: any;showData: any;currentState: any;dropdownCondition: any;showBlurImg: any;

  @HostListener('document:click', ['$event'])
	public documentClick(event: MouseEvent): void {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
	}

  constructor() { }

  ngOnInit() {
    this.showData = true;this.currentState = 1;this.dropdownCondition = false;
    this.fromPlace = localStorage.getItem('fromPlace');
    this.toPlace = localStorage.getItem('toPlace');
    console.log(localStorage.getItem('fromPlace'));
    console.log(localStorage.getItem('toPlace'));
    setTimeout(() => {
      document.getElementById('loadingContainer').classList.add('fade-out');
      setTimeout(()=>{
        this.showData = false;
      },500)
    },4000)
  }

  openModal(){
    console.log('openModal');
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  activeState(val){
    this.currentState = val;
  }

  dropdownGender(){
    this.dropdownCondition = !this.dropdownCondition;
  }

}
