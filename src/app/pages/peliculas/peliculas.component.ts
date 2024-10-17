import { Component, OnInit } from '@angular/core';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';
import { LayoutCardsComponent } from '../../components/layout-cards/layout-cards.component';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  standalone: true,
  imports: [NgZorroModule, LayoutCardsComponent],
})
export class PeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
