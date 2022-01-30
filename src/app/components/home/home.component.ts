import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data';
import { Province } from 'src/app/model/province';
import { Regioni } from 'src/app/model/regioni';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl:
    `./home.component.html`,
  styleUrls: [
    `./home.component.css`
  ]
})
export class HomeComponent implements OnInit {
  data!: Data[];
  region!: Regioni[];
  province!: Province[];

  constructor(private dataService: DataService) { }

  getData() {
    this.dataService.getData()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  }

  getDataReg() {
    this.dataService.getDataReg()
      .subscribe(res => {
        this.region = res;
        console.log(this.region);
      })
  }

  getDataProv() {
    this.dataService.getDataProv()
      .subscribe(res => {
        this.province = res;
        console.log(this.province);
      })
  }

  ngOnInit(): void {
    this.getData();
    this.getDataReg();
    this.getDataProv();
  }

}
