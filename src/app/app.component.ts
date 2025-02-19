import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@Component({
  selector: 'app-root',
  imports: [AuthLayoutComponent, PageLoaderComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'WEB_TOSHAI';
  @ViewChild(PageLoaderComponent) loader!: PageLoaderComponent;

  // ngOnInit is typically for initialization logic before view rendering
  ngOnInit() {
    // You can do other initialization here, but not rely on @ViewChild here
    console.log('AppComponent initialized');
  }

  // ngAfterViewInit is called after the view has been initialized
  ngAfterViewInit() {
    // Now, the @ViewChild reference will be available
    this.loader.showLoader();

    // You can simulate hiding the loader after some operation or delay
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2000); // Simulating a delay of 2 seconds
  }
}
