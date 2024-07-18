import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-our-strength',
  templateUrl: './our-strength.component.html',
  styleUrls: ['./our-strength.component.css']
})
export class OurStrengthComponent implements AfterViewInit {
  @ViewChild('numbersContainer') numbersContainer: ElementRef | undefined;
  @ViewChild('numbersContainer2') numbersContainer2: ElementRef | undefined;

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count11: number = 0;
  count22: number = 0;
  count33: number = 0;
  target1: number = 1904569; // Update with your target numbers
  target2: number = 192000; // Update with your target numbers
  target3: number = 15027; // Update with your target numbers
  target11: number = 1904569; // Update with your target numbers
  target22: number = 190964; // Update with your target numbers
  target33: number = 14916; // Update with your target numbers
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
      this.count11 = Math.ceil(this.target11 * progress);
      this.count22 = Math.ceil(this.target22 * progress);
      this.count33 = Math.ceil(this.target33 * progress);

      // Check if counts have reached or exceeded targets
      if (this.count1 >= this.target1 && this.count2 >= this.target2 && this.count3 >= this.target3 && this.count11 >= this.target11 && this.count22 >= this.target22 && this.count33 >= this.target33) {
        clearInterval(this.interval); // Stop the counting animation
      }
    }, stepDuration);
  }

}
