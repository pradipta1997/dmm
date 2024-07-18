import { Component } from '@angular/core';

@Component({
  selector: 'app-sektor-industri',
  templateUrl: './sektor-industri.component.html',
  styleUrls: ['./sektor-industri.component.css']
})
export class SektorIndustriComponent {
  constructor() { }
  switchTab(tabId: string) {
    // Hide all tabs and buttons
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.add('hidden'));
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.remove('btn-selected')); // Remove selected class from all buttons

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.remove('hidden');

      // Apply selected class to the corresponding button
      const selectedButton = document.querySelector(`button[data-tab="${tabId}"]`);
      if (selectedButton) {
        selectedButton.classList.add('btn-selected');
      }
    }
  }


}