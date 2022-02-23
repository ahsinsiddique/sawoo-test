import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {TradeProcessor} from "../components/models/trade-processor";


@Injectable({
  providedIn: 'root'
})
export class TradeProcessorService {
  tradeProcessorUrl = environment.baseUrl + "/api/trade";

  constructor(private httpClient: HttpClient) {
  }

  getTradeProcessorData(): Observable<Array<TradeProcessor>> {
    return this.httpClient.get(this.tradeProcessorUrl)
      .pipe(map((data: any) => data))
  }
}
