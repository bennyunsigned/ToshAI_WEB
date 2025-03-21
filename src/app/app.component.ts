import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
@Component({
  selector: 'app-root',
  imports: [AuthLayoutComponent,
    PageLoaderComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'WEB_TOSHAI';
  @ViewChild(PageLoaderComponent) loader!: PageLoaderComponent;

  constructor(private router: Router) { }


  ngOnInit() {
    // Enable the dark mode for Login and Signup Component
    document.body.classList.add('dark-mode');

  }


  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.showLoader();
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loader.hideLoader();
        }, 1000);
      }
    });
  }

  toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current mode in local storage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  }


}
