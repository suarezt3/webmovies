import { Component, OnInit } from '@angular/core';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';

@Component({
  selector: 'app-layout-cards',
  templateUrl: './layout-cards.component.html',
  styleUrls: ['./layout-cards.component.css'],
  standalone: true,
  imports: [NgZorroModule],
})
export class LayoutCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
