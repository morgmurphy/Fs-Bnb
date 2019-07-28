import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider.model'
import { ServiceProviderService } from '../../services/service-provider.service'
//import { GraphDataService } from '../../services/admin-panel/graph-data.service';
//import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
//import { Label } from 'ng2-charts';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  serviceProviders: Array<ServiceProvider> = [];

  constructor(
    //private spService: ServiceProviderService,
    //private graphDataService: GraphDataService,
    private providerService: ServiceProviderService
  ) { 
    //this.serviceProviders = this.spService.getServiceProviders();
    this.providerService.getProviders().then((response: any) => {
      this.serviceProviders = response;
    }).catch(err => alert(err));
  }

  ngOnInit() {
  }

  // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}
