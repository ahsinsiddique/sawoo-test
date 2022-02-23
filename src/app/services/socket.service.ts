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

    this.socket.on('connect', function () {
      debugger
      console.log('<span class="connect-msg">The client has connected with the server. Username: ' + "userName" + '</span>');
    });
    this.socket.on('trade', function (data) {
      console.log('Received message', data);
      debugger

      console.log('<span class="username-msg">' + data + 'L </span> ');
    });
    this.socket.on('disconnect', function () {
      console.log('<span class="disconnect-msg">The client has disconnected!</span>');
    });
    this.socket.on('reconnect_attempt', (attempts) => {
      console.log('Try to reconnect at ' + attempts + ' attempt(s).');
    });

  }

  // EMITTER example
  sendMessage(msg: string) {
    this.socket.emit('sendMessage', {message: msg});
  }

  // HANDLER example
  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('trade', msg => {
        debugger
        observer.next(msg);
      });
    });
  }
}
