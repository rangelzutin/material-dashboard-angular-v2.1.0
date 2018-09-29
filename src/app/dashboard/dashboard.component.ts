import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Meses } from './../domain/meses';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public painelNFCE: any;

  selectedValue: number;

  meses: Meses[] = [
    {value: '7', viewValue: 'Julho 2018'},
    {value: '8', viewValue: 'Agosto 2018'},
    {value: '9', viewValue: 'Setembro 2018'}
  ];

  constructor(
    private _http: Http
  ) {}

  ngOnInit() {
    //this.carregaPainelNFCE();
  }

  carregaPainelNFCE(){

    this._http
      .get('http://localhost:8080/api-loja-natalina/webapp/vendas/nfce/' + this.selectedValue)
      .map(res => res.json())
      .toPromise()
      .then(painelNFCE => {
        this.painelNFCE = painelNFCE;
        console.log('Valor: ' + painelNFCE);
      })
      .catch(err => {
        console.log(err);
      });
  }

}