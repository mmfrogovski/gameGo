import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class EnterPageService {

  constructor(private httpClient: HttpClient) {
  }

  public getPlayersNumber(): Observable<number> {
    return this.httpClient.get<number>('/api/players');
  }

  public getGame(): Observable<Game> {
    return this.httpClient.get<Game>('/api/games/1');
  }

  public setGame(game: Game): Observable<Game> {
    return this.httpClient.post<Game>('/api/games/', game);
  }
}
