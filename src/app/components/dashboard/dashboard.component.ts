import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DashboardComponent {
  ActiveTab = 'Add';
  searchText: string = '';
  sortColumn: string = '';
  sortDirection: boolean = true; // true = Ascending, false = Descending
  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalPages: number = 0;
  paginatedData: any[] = [];

  data = [
    { name: 'Ashutosh Mishra', email: 'bennyunsignedatgmail.com', mobile: '9692393470', gender: 'Male', address: 'Plot-203, Pearl Residency Jharapada' },
    { name: 'Rohit Sharma', email: 'rohit.sharmaexample.com', mobile: '9876543210', gender: 'Male', address: '102, Green Avenue, Mumbai' },
    { name: 'Priya Kapoor', email: 'priya.kapoorexample.com', mobile: '9876543221', gender: 'Female', address: '56, Park Street, Delhi' },
    { name: 'Aditya Verma', email: 'aditya.vermaexample.com', mobile: '9998877665', gender: 'Male', address: '21, Galaxy Towers, Bangalore' },
    { name: 'Neha Singh', email: 'neha.singhexample.com', mobile: '8887766554', gender: 'Female', address: '18, Rosewood Apartments, Kolkata' }
  ];

  filteredData: any[] = [];

  constructor() {
    this.filterData();
  }

  /** 🔹 Changes active tab */
  changeActiveTab(tabName: string) {
    this.ActiveTab = tabName;
  }

  /** 🔹 Filters data based on search */
  filterData() {
    this.filteredData = this.data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );

    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    this.goToPage(1);
  }

  /** 🔹 Handles pagination */
  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  /** 🔹 Sorts table data */
  sortData(column: string) {
    this.sortDirection = this.sortColumn === column ? !this.sortDirection : true;
    this.sortColumn = column;

    this.filteredData.sort((a, b) => {
      const valueA = a[column].toString().toLowerCase();
      const valueB = b[column].toString().toLowerCase();

      return this.sortDirection ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    this.goToPage(1);
  }
}
