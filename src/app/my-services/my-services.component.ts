import { Component, OnInit } from '@angular/core';
import { ListDataModel } from './my-services';
import { MyServicesService } from './my-services.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
})
export class MyServicesComponent implements OnInit {
  listOfData: Array<ListDataModel> = [];
  constructor(private service: MyServicesService) {}

  serviceType: Array<ListDataModel> = [];

  searchFilter: string = '';

  allServicesSelected = false;
  hostingSelected = false;
  serverSelected = false;
  sslSelected = false;
  cdnSelected = false;
  domainSelected = false;
  otherSelected = false;

  allServicesNumber: number = 0;
  hostingNumber: number = 0;
  domainsNumber: number = 0;
  serversNumber: number = 0;
  sslNumber: number = 0;
  cdnNumber: number = 0;
  otherNumber: number = 0;

  ngOnInit(): void {
    this.getListData();
    this.findServicesNumber();
  }

  getListData() {
    this.service.loadListData().subscribe((r) => {
      this.listOfData = r.data;
    });
  }

  selectAllServices() {
    this.resetAllTabIcon();
    this.allServicesSelected = true;
    this.getListData();
  }

  selectHosting() {
    this.resetAllTabIcon();
    this.hostingSelected = true;
    this.filterListByType('Hosting');
  }
  selectDomain() {
    this.resetAllTabIcon();
    this.domainSelected = true;
    this.filterListByType('Domain');
  }
  selectServer() {
    this.resetAllTabIcon();
    this.serverSelected = true;
    this.filterListByType('Server');
  }
  selectSSL() {
    this.resetAllTabIcon();
    this.sslSelected = true;
    this.filterListByType('SSl');
  }

  selectCDN() {
    this.resetAllTabIcon();
    this.cdnSelected = true;
    this.filterListByType('CDN');
  }

  selectOthers() {
    this.resetAllTabIcon();
    this.otherSelected = true;
    this.filterListByType('Other');
  }

  resetAllTabIcon() {
    this.allServicesSelected = false;
    this.hostingSelected = false;
    this.serverSelected = false;
    this.sslSelected = false;
    this.cdnSelected = false;
    this.domainSelected = false;
    this.otherSelected = false;
  }

  filterListByType(type: string) {
    this.service.loadListData().subscribe((r) => {
      this.listOfData = r.data.filter((item) => item.type === type);
    });
  }

  findServicesNumber() {
    this.service.loadListData().subscribe((r) => {
      this.allServicesNumber = r.data.length;
      this.hostingNumber = r.data.filter((item) => item.type === 'Hosting').length;
      this.domainsNumber = r.data.filter((item) => item.type === 'Domain').length;
      this.serversNumber = r.data.filter((item) => item.type === 'Server').length;
      this.sslNumber = r.data.filter((item) => item.type === 'SSl').length;
      this.cdnNumber = r.data.filter((item) => item.type === 'CDN').length;
      this.otherNumber = r.data.filter((item) => item.type === 'Other').length;
    });
  }


  searchByName(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.service.loadListData().subscribe((r) => {
        this.listOfData = r.data.filter((item) => item.name === this.searchFilter);
      });
    }
  }
}
