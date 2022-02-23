import {Component, OnDestroy, OnInit} from '@angular/core';
import {TradeProcessorService} from "../../services/trade-processor.service";
import {TradeProcessor} from "../models/trade-processor";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {SocketService} from "../../services/socket.service";

@UntilDestroy()
@Component({
  selector: 'trade-processor',
  templateUrl: './trade-processor.component.html',
  styleUrls: ['./trade-processor.component.scss']
})
export class TradeProcessorComponent implements OnInit, OnDestroy {
  tradeProcessorData = new Array<TradeProcessor>();

  constructor(private readonly tradeProcessorService: TradeProcessorService,
              private readonly socketService: SocketService) {
  }

  ngOnInit(): void {
    this.fetchData();
    this.socketService.onNewMessage().pipe(untilDestroyed(this))
      .subscribe((newMessage) => {
        console.log(newMessage);

      });
  }


  fetchData = () => {

    this.tradeProcessorService.getTradeProcessorData()
      .pipe(untilDestroyed(this))
      .subscribe((data: Array<TradeProcessor>) => {
        this.tradeProcessorData = data;
        console.log(data)
      })
  }

  ngOnDestroy() {
  }

}
