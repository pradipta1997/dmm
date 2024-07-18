import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent { 

  @ViewChild('dropdownMenuMobile') dropdownMenuMobile!: ElementRef;
  isDropdownOpenMobile = false;
  isDropdownOpenDesktop = false;
  isDropdownOpenMobile1 = false;
  isDropdownOpenDesktop1 = false;
  isDropdownOpenMobile2 = false;
  isDropdownOpenDesktop2 = false;
  isDropdownOpenMobile3 = false;
  isDropdownOpenDesktop3 = false;

  openCloseNavMobile() {
    this.isDropdownOpenMobile = !this.isDropdownOpenMobile;
  }
  openCloseNavDesktop() {
    this.isDropdownOpenDesktop = !this.isDropdownOpenDesktop;
  }

  openCloseNavMobile1() {
    this.isDropdownOpenMobile1 = !this.isDropdownOpenMobile1;
  }
  openCloseNavDesktop1() {
    this.isDropdownOpenDesktop1 = !this.isDropdownOpenDesktop1;
  }

  openCloseNavMobile2() {
    this.isDropdownOpenMobile2 = !this.isDropdownOpenMobile2;
  }
  openCloseNavDesktop2() {
    this.isDropdownOpenDesktop2 = !this.isDropdownOpenDesktop2;
  }

  openCloseNavMobile3() {
    this.isDropdownOpenMobile3 = !this.isDropdownOpenMobile3;
  }
  openCloseNavDesktop3() {
    this.isDropdownOpenDesktop3 = !this.isDropdownOpenDesktop3;
  }

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('id');
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
    return language;
  }

}
