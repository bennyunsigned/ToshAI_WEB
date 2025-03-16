import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule]
  
})
export class DashboardComponent {
 
  ActiveTab='Add';

  changeActiveTab(tabName: string) {   
    this.ActiveTab = tabName;    
  }
}
