import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data';
import { Regioni } from '../model/regioni';
import { Province } from '../model/province';

const apiData = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json";
const apiRegions = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";
const apiProvince = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json";
const apiRegAll = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json";
const apiProvAll = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data!: Data[];

  constructor(private http: HttpClient) { }

  // Lettura Dati Nazionali;
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(apiData);
  }

  // Lettura Dati Regionali;
  getDataReg(): Observable<Regioni[]> {
    return this.http.get<Regioni[]>(apiRegions);
  }

  // Lettura Dati Provinciali;
  getDataProv(): Observable<Province[]> {
    return this.http.get<Province[]>(apiProvince);
  }

  // Dettaglio Regioni;
  detailReg(id: any): Observable<Regioni[]> {
    return this.http.get<Regioni[]>(`${apiRegAll}?id=${id}`);
  }

  // Dettaglio Province;
  detailProv(): Observable<Province[]> {
    return this.http.get<Province[]>(`${apiProvAll}`);
  }
}
