import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img
    ngSrc="logo.png"
    height="125"
    width="236"
    alt="TerraGuard"
    class="logo"
  />`,
  styles: [
    `
      .logo {
        max-height: 82px;
        width: auto;
      }
    `,
  ],
})
export class LogoComponent {}
