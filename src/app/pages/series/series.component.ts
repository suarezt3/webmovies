import { Component, OnInit } from '@angular/core';
import { CardSeriesComponent } from '../../components/card-series/card-series.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  standalone: true,
  imports: [CardSeriesComponent],
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
