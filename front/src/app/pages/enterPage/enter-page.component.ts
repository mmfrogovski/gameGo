import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {EnterPageService} from '../../services/enter-page.service';
import {Router} from '@angular/router';
import {Game} from "../../models/game";

@Component({
  selector: 'app-enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: ['./enter-page.component.css']
})

export class EnterPageComponent implements OnInit, OnDestroy {
  public enterNameForm;

  public game: Game;

  constructor(private formBuilder: FormBuilder,
              private enterService: EnterPageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.enterNameForm = this.formBuilder.group({
        name: new FormControl('',
          [Validators.required,
          ]),
        player: '',
      }
    );
    this.enterService.getGame().subscribe(res => {
      this.game = res;
      console.log(this.game);
    });
  }

  ngOnDestroy(): void {
  }

  public onSubmit(data): void {
    this.enterService.getGame().subscribe(res => {
      if (res.players % 2) {
        data.player = 'white';
      } else {
        data.player = 'black';
      }
      localStorage.setItem('user', JSON.stringify(data));
      this.game.players = this.game.players + 1;
      console.log(this.game.players);
      this.enterService.setGame(this.game).subscribe(res => {
        this.game = res;
      });
      this.router.navigate(['game-page']);
    });
    this.enterNameForm.reset();
  }

}
