import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/model/data';
import { Province } from 'src/app/model/province';
import { Regioni } from 'src/app/model/regioni';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-reg-detail',
  templateUrl: `./reg-detail.component.html`,
  styleUrls: [`./reg-detail.component.css`]
})
export class RegDetailComponent implements OnInit {
  data!: Data[];
  id!: any;
  reg!: Regioni[];
  prov!: Province[];
  prov2!: Province[];
  date1!: any;
  date2!: any;

  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getDetailReg();
    this.getDatailProv();
  }

  getDetailReg() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.detailReg(this.id)
      .subscribe(res => {
        this.reg = res.filter(t => t.denominazione_regione === this.id);
      })
  }

  getDatailProv() {
    this.date1 = new Date().toISOString().slice(0, 10);
    this.date2 = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.detailProv()
      .subscribe(res => {
        this.prov = res.filter(t => t.denominazione_regione === this.id).filter((value, index, self) => self.indexOf(value) === index);
        this.prov = [...new Map(this.prov.map(item => [item[`denominazione_provincia`], item])).values()];
        this.prov2 = res.filter(t => t.data.slice(0, 10) === this.date2).filter(t => t.denominazione_regione === this.id).filter((value, index, self) => self.indexOf(value) === index);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
