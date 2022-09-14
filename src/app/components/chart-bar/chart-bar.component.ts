import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: any;//ElementRef<HTMLCanvasElement>;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['jan/fev', 'mar/abr', 'maio/jun', 'jul/ago', 'set/out', 'nov/dez'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ano atual' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ano informado' }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
