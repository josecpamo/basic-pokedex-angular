import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() url = '';
  @Input() name = '';
  @Input() buttonClass = 'button';
  @Input() buttonText = 'Do something';
  buttonAction() {
    alert('It works!');
  }
}
