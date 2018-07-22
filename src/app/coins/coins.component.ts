import { Component, OnInit } from '@angular/core';
import { CryptoDataService, CompareCoinDictionary } from "../services/crypto-data.service";
import { CompareCoin } from '../models/CompareCoin.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})

export class CoinsComponent implements OnInit {

  defaultCoinSymbol: string = 'BTC';

  coinsDictionary: CompareCoinDictionary;
  selectedCoin: CompareCoin;

  imageBaseUrl: string = '';
  
  constructor(private _cryptoData: CryptoDataService) { 
    this.selectedCoin = new CompareCoin();
  }

  ngOnInit() {
    this._cryptoData.getCoins()
      .subscribe(res => {
        this.coinsDictionary = res;
        if (this.coinsDictionary.hasOwnProperty(this.defaultCoinSymbol))
          this.selectedCoin = this.coinsDictionary[this.defaultCoinSymbol];

        this.imageBaseUrl = this._cryptoData.baseImageUrl;
      });
  }

  coinSelect(coin: CompareCoin) {
    console.log(coin.FullName);
    this._cryptoData.getCoinsPrice(coin.Symbol, 'USD,BTC,EUR')
      .subscribe(res => {
        console.log(res);            
      });
  }

}
