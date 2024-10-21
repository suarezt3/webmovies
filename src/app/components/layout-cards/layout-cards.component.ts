import { Component, inject, OnInit } from '@angular/core';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';
import { DataService } from '../../services/data.service';
import { log } from 'console';
import { PELICULA } from '../../interfaces/pelicula';

@Component({
  selector: 'app-layout-cards',
  templateUrl: './layout-cards.component.html',
  styleUrls: ['./layout-cards.component.css'],
  standalone: true,
  imports: [NgZorroModule],
})
export class LayoutCardsComponent implements OnInit {

  public dataMovies!: PELICULA[]
  private dataServices = inject(DataService)



  constructor() { }

  ngOnInit() {
    this.dataServices.getMovies().subscribe((resp: any) => {
      this.dataMovies = resp
      console.log(this.dataMovies);
    })
  }

}
