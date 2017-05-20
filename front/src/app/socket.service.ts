import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';


@Injectable()
export class SocketService {
  private socket: CustomSocketType;
  private url: string;
  private observables: any;
  constructor() {
    this.url = "http://localhost:3000";
    this.observables = {}
  }

  connect(tableId: string) {
    this.socket = io.connect(this.url, { query: "tableId=" + tableId+'&userToken='+localStorage.getItem('PokrToken') });
  }

  send(method: string, data: any) {
    this.socket.emit(method, data);
  }

  receive(method: string) {
    const observable = this.observables[method];
    
    if(!observable) {
      const observable = new Observable(observer => {
        this.socket.on(method, (data) => {
          observer.next(data);
        });
      });
      this.observables[method] = observable;
    }

    return this.observables[method];
  }

  
  on(method: string, cb:(data: any)=> void) {
    return this.socket.on(method, cb);
  }

  once(method: string, cb:(data: any)=> void) {
    return this.socket.once(method, cb);
  }

  close() {
    this.socket.disconnect();
  }
}
