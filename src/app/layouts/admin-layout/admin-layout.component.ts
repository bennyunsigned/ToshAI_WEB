import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  imports: [CommonModule, RouterOutlet]
})
export class AdminLayoutComponent implements OnInit {
  isProfileDropdownOpen = false;
  isNotificationDropDownOpen = false;
  messages = [
    { sender: 'John Doe', text: 'Hey, how are you?', time: '2m ago', avatar: 'assets/john.jpg' },
    { sender: 'Alice Smith', text: 'Meeting at 5PM?', time: '10m ago', avatar: 'assets/alice.jpg' },
    { sender: 'Michael Lee', text: 'Check out this link...', time: '30m ago', avatar: 'assets/michael.jpg' },
    { sender: 'John Doe', text: 'Hey, how are you?', time: '2m ago', avatar: 'assets/john.jpg' },
    { sender: 'Alice Smith', text: 'Meeting at 5PM?', time: '10m ago', avatar: 'assets/alice.jpg' },
    { sender: 'Michael Lee', text: 'Check out this link...', time: '30m ago', avatar: 'assets/michael.jpg' },
    { sender: 'John Doe', text: 'Hey, how are you?', time: '2m ago', avatar: 'assets/john.jpg' },
    { sender: 'Alice Smith', text: 'Meeting at 5PM?', time: '10m ago', avatar: 'assets/alice.jpg' },
    { sender: 'Michael Lee', text: 'Check out this link...', time: '30m ago', avatar: 'assets/michael.jpg' },
    { sender: 'John Doe', text: 'Hey, how are you?', time: '2m ago', avatar: 'assets/john.jpg' },
    { sender: 'Alice Smith', text: 'Meeting at 5PM?', time: '10m ago', avatar: 'assets/alice.jpg' },
    { sender: 'Michael Lee', text: 'Check out this link...', time: '30m ago', avatar: 'assets/michael.jpg' },
  ];

  ngOnInit(): void {
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDropdown(menuType: string) {
    if (menuType === 'profile') {
      this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
      this.isNotificationDropDownOpen = false;
    } else if (menuType === 'notification') {
      this.isNotificationDropDownOpen = !this.isNotificationDropDownOpen;
      this.isProfileDropdownOpen = false;
    }
  }
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      const isActive = sidebar.classList.toggle('active');
      if (window.innerWidth <= 768) {        
        const menuTogglers = document.getElementsByClassName('menu-toggler');
        for (let i = 0; i < menuTogglers.length; i++) {
          (menuTogglers[i] as HTMLElement).hidden = isActive;
        }
      }
    }
  }


  toggleSidebarSubMenu(event: Event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const target = event.target as HTMLElement;
    const submenu = target.nextElementSibling as HTMLElement;
    submenu.classList.toggle('show');
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
