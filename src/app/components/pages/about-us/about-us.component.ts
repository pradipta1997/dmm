import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  
  @ViewChild('numbersContainer') numbersContainer: ElementRef | undefined;
  @ViewChild('numbersContainer2') numbersContainer2: ElementRef | undefined;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  target1: number = 1904569; // Update with your target numbers
  target2: number = 192000; // Update with your target numbers
  target3: number = 15027; // Update with your target numbers
  duration: number = 3500; // Duration in milliseconds for the counting animation
  interval: any;
  startTime: number = 0;
  isInView: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.checkInView();
  }

  checkInView() {
    if (!this.numbersContainer) return;
    if (!this.numbersContainer2) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isInView = true;
          this.startCounting();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.numbersContainer.nativeElement);
    observer.observe(this.numbersContainer2.nativeElement);
  }

  startCounting() {
    if (!this.isInView) return;

    const steps = 100; // Number of steps for the counting animation
    const stepDuration = this.duration / steps;

    this.startTime = Date.now(); // Record the start time

    this.interval = setInterval(() => {
      const elapsedTime = Date.now() - this.startTime; // Calculate elapsed time
      const progress = Math.min(1, elapsedTime / this.duration); // Calculate progress (0 to 1)

      // Update counts based on progress
      this.count1 = Math.ceil(this.target1 * progress);
      this.count2 = Math.ceil(this.target2 * progress);
      this.count3 = Math.ceil(this.target3 * progress);

      // Check if counts have reached or exceeded targets
      if (this.count1 >= this.target1 && this.count2 >= this.target2 && this.count3 >= this.target3) {
        clearInterval(this.interval); // Stop the counting animation
      }
    }, stepDuration);
  }

}
