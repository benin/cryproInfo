import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { CompareCoin } from "../models/CompareCoin.model";

@Injectable({
  providedIn: 'root'
})

export class CryptoDataService {

  baseImageUrl: string = '';

  constructor(private _http: HttpClient) { 
  }

  getCoins(): Observable<CompareCoinDictionary> {
    return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .pipe(
        map((res: CoinListResponse) => {
          this.baseImageUrl = res.BaseImageUrl;
          return res.Data;
        })
      );
  }

  getCoinsPrice(fromSybol: string, toSymbol: string): Observable<CompareCoinPriceDictionary> {
    let url = `https://min-api.cryptocompare.com/data/price?fsym=${fromSybol}&tsyms=${toSymbol}`;
    return this._http.get(url)
      .pipe(
        map((res: CompareCoinPriceDictionary) => res)
      );
  }
}

export interface CompareCoinDictionary {
    [Key: string]: CompareCoin;
}

export interface CompareCoinPriceDictionary {
  [Key: string]: number;
}

class CoinListResponse {
  Response: string; // "Success",
  Message: string; // "Coin list succesfully returned!",
  Data: CompareCoinDictionary;
  BaseImageUrl: string; // "https://www.cryptocompare.com",
  BaseLinkUrl: string; //"https://www.cryptocompare.com"
}