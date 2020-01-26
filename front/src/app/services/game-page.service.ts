import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../models/game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamePageService {

  constructor(private httpClient: HttpClient) {
  }

  public getGame(): Observable<Game> {
    return this.httpClient.get<Game>('/api/games/1');
  }
}
