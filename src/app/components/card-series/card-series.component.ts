import { Component, Inject, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css'],
  standalone: true,
  imports: [NgZorroModule],
})
export class CardSeriesComponent implements OnInit {

  public dataSeries!: any[]
  private dataService = inject(DataService)

  constructor() { }

  ngOnInit() {
    this.dataService.getSeries().subscribe((resp: any) => {
      console.log("series", resp);
      this.dataSeries = resp
    })


  }

}
