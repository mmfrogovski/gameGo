// noinspection AngularMissingOrInvalidDeclarationInModule
import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Game} from "../../models/game";
import {EnterPageService} from "../../services/enter-page.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})

export class GamePageComponent implements OnInit, OnDestroy {

  public user: User;
  public game: Game;
  public readyGame: boolean = false;
  sb: string = '';

  setInterval = setInterval;


  public cells: any [][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

  constructor(private gamePageService: EnterPageService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getGameA();
    this.setIntrvl();
  }

  public getIJ(num: number, i: number): void {
    if (this.user.player === this.game.turn) {
      if (this.cells[i][num] === 0) {
        if (this.user.player === 'black') {
          this.cells[i][num] = 2;
          this.cellsToString();
          this.game.turn = 'white';
          this.gamePageService.setGame(this.game).subscribe(res => {
            this.game = res;
          });
        } else {
          this.cells[i][num] = 1;
          this.cellsToString();
          this.game.turn = 'black';
          this.gamePageService.setGame(this.game).subscribe(res => {
            this.game = res;
          });
        }
      }
    } else {
      alert("Enemy turn to eto");
    }
  }

  public cellsToString(): void {
    this.sb = '';
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.sb = this.sb + JSON.stringify(this.cells[i][j]);
      }
    }
    this.game.cells = this.sb;
    // console.log(this.sb);
  }


  public getGameA(): void {
    this.gamePageService.getGame().subscribe(res => {
      this.game = res;
      this.stringToDoubleDimArray(this.game.cells);
    });
  }

  public stringToDoubleDimArray(str: string) {
    let k = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.cells[i][j] = parseFloat(str.charAt(k++));
      }
    }
  }

  public setIntrvl(): void {
    setInterval(() => {
      this.getGameA();
    }, 1000);
  }

  ngOnDestroy(): void {
  }

}
