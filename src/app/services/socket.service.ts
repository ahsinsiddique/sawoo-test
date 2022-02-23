import {Injectable} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8081/trade', {
      transports: ['polling', 'websocket']
    });
  }

  // HANDLER
  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('trade', msg => {
        observer.next(msg);
      });
    });
  }
}
