import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meter',
  template:
    '<div><span [style.width.%]="percent" [style.background-color]="color">{{displayValue}}</span></div>',
  standalone: true,
  styles: [
    `
      div {
        background-color: transparent;
        width: 100%;
        min-height: 28px;
      }

      span {
        background-color: #eeeeeecc;
        height: 100%;
        display: inline-block;
        color: transparent;
        border-radius: 1rem;
        min-height: 28px;
      }
    `,
  ],
})
export class MeterComponent implements OnChanges {
  @Input() max = 1;
  @Input() min = 0;
  @Input() value = 0;

  percent: number = 0;
  displayValue = '';
  color = '';

  ngOnChanges(changes: SimpleChanges) {
    const percent = (this.value / (this.max - this.min)) * 100;
    this.percent = Math.max(0, Math.min(percent, 100));
    this.displayValue = percent.toFixed(2);
    this.color = this.percentToRGB(Math.round(this.percent));
  }

  percentToRGB(percent: number) {
    percent = 100 - percent;
    if (percent === 100) {
      percent = 99;
    }
    var r, g, b;

    if (percent < 50) {
      // green to yellow
      r = Math.floor(255 * (percent / 50));
      g = 255;
    } else {
      // yellow to red
      r = 255;
      g = Math.floor(255 * ((50 - (percent % 50)) / 50));
    }
    b = 0;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}
