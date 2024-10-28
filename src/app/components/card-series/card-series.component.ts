import { Component, Inject, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';
import { SERIE } from '../../interfaces/series';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css'],
  standalone: true,
  imports: [NgZorroModule, RouterModule],
})
export class CardSeriesComponent implements OnInit {


  public dataSeries!: SERIE[]
  private dataService = inject(DataService)
  private router = inject(Router)


  constructor() { }

  ngOnInit() {
    this.dataService.getSeries().subscribe((resp: any) => {
      console.log("series", resp);
      this.dataSeries = resp
    })
  }

  seeSerie(IDSerie: string){
    console.log(IDSerie);

    this.router.navigate(['/series', IDSerie])
  }


}
