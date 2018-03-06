import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  sunSRC: any;moonSRC: any;currentPage: any;fromPlace: any;toPlace: any;offsetHeight: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.sunSRC = 'assets/sun.png';
    this.moonSRC = 'assets/moon.png';
    this.currentPage = 1;
    this.offsetHeight = document.getElementById('homePage').offsetHeight;
  }

  changeImg(val){
    if(val == 1){
      this.sunSRC = 'assets/sunActive.png';
      this.moonSRC = 'assets/moon.png';
    }else {
      this.sunSRC = 'assets/sun.png';
      this.moonSRC = 'assets/moonActive.png';
    }
  }

  navigatePage(val) {
    switch(val){
      case 1:
        this.currentPage = 2;
        setTimeout(()=>{
          document.getElementById("secondDiv").style.height = (this.offsetHeight-67) + 'px';
        })
        break;
      case 2:
        this.currentPage = 1;
        break;
      case 3:
        this.currentPage = 3;
        setTimeout(()=>{
          document.getElementById("thirdDiv").style.height = (this.offsetHeight-67) + 'px';
        })
        break;
      case 4:
        this.currentPage = 2;
        setTimeout(()=>{
          document.getElementById("secondDiv").style.height = (this.offsetHeight-67) + 'px';
        })
        break;
      case 5:
        this.currentPage = 4;
        setTimeout(()=>{
          document.getElementById("fourthDiv").style.height = (this.offsetHeight-67) + 'px';
        })
        break;
      case 6:
        this.currentPage = 3;
        setTimeout(()=>{
          document.getElementById("thirdDiv").style.height = (this.offsetHeight-67) + 'px';
        })
        break;
    }
  }

  onKey(e){
    if(this.currentPage >= 3 && e.keyCode == 39){
      this.currentPage += 1;
      setTimeout(()=>{
        document.getElementById("fourthDiv").style.height = (this.offsetHeight-67) + 'px';
      })
    }
    if(e.keyCode == 39){
      if(this.currentPage < 3){
        this.currentPage += 1;
        if(this.currentPage == 2){
          setTimeout(()=>{
            document.getElementById("secondDiv").style.height = (this.offsetHeight-67) + 'px';
          })
        }else if(this.currentPage == 3){
          setTimeout(()=>{
            document.getElementById("thirdDiv").style.height = (this.offsetHeight-67) + 'px';
          })
        }
      }
    }else if(e.keyCode == 37){
      if(this.currentPage > 1){
        this.currentPage -= 1;
        if(this.currentPage == 2){
          setTimeout(()=>{
            document.getElementById("secondDiv").style.height = (this.offsetHeight-67) + 'px';
          })
        }else if(this.currentPage == 3){
          setTimeout(()=>{
            document.getElementById("thirdDiv").style.height = (this.offsetHeight-67) + 'px';
          })
        }
      }
    }
  }

  checkFare(){
    if(this.fromPlace && this.toPlace){
      console.log(this.fromPlace,this.toPlace);
      localStorage.setItem('fromPlace',this.fromPlace);
      localStorage.setItem('toPlace',this.toPlace);
      this.router.navigateByUrl('/bookNow');      
    }else {
      console.log('Please fill all the fields');
      let x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
    }
  }

  currentPageChange(e) {
    console.log('e : ',e);
    if(e == 1) {
      this.currentPage = 1;
    }else if(e == 2){
      this.currentPage = 2;
      setTimeout(()=>{
        document.getElementById("secondDiv").style.height = (this.offsetHeight-67) + 'px';
      })
    }else if(e == 3){
      this.currentPage = 3;
      setTimeout(()=>{
        document.getElementById("thirdDiv").style.height = (this.offsetHeight-67) + 'px';
      })
    }else if(e == 4){
      this.currentPage = 4;
      setTimeout(()=>{
        document.getElementById("fourthDiv").style.height = (this.offsetHeight-67) + 'px';
      })
    }
  }

}
