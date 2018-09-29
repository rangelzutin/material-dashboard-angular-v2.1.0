import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public painelNFCE: any;

  selected = '9';

  constructor(
    private _http: Http
  ) {}

  ngOnInit() {
    //this.carregaPainelNFCE();
  }

  carregaPainelNFCE(){
    
    this._http
      .get('http://localhost:8080/api-loja-natalina/webapp/vendas/nfce/' + this.selected)
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