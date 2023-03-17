// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './root.component.html',
//   styleUrls: ['./root.component.css']
// })
// export class RootComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  title = 'angular-bootstrap';
  footerUrl = 'https://www.ganatan.com/';
  footerLink = 'www.ganatan.com';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
    ) {
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }
  } 

}