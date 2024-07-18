import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-investor-relation-detail-page',
  templateUrl: './investor-relation-detail-page.component.html',
  styleUrls: ['./investor-relation-detail-page.component.css']
})
export class InvestorRelationDetailPageComponent{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  switchTab(tabId: string) {
    console.log('test');
    const tabButtons = this.elementRef.nativeElement.querySelectorAll('[data-tab]');
    const tabContents = this.elementRef.nativeElement.querySelectorAll('.tab-content');

    tabContents.forEach((tabContent: HTMLElement) => {
      if (tabContent.id === tabId) {
        this.renderer.removeClass(tabContent, 'hidden');
      } else {
        this.renderer.addClass(tabContent, 'hidden');
      }
    });
  }

}
