import { Component, Directive, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  template: `
    <div class="dialog-container">
      <div class="dialog">
        <h3>{{ title }}</h3>
        <div class="dialog-body">
          <ng-content></ng-content>
        </div>
      </div>
      <ng-content select="app-dialog-actions"></ng-content>
    </div>
  `,
  styles: `
    .dialog-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }

    .dialog {
      background: black;
      border: 1px solid var(--primary);
      border-radius: 1rem;
      overflow: hidden;
      max-width: 450px;
    }

    h3 {
      margin: 0;
      text-align: center;
    }

    .dialog-body {
      background: black;
      padding: 1rem;
    }
  `,
})
export class DialogComponent {
  @Input() title: string = '';
}

@Directive({
  selector: 'app-dialog-actions',
  standalone: true,
})
export class DialogActionsDirective {}
