import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameState } from '../model/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameStarted = new Subject<void>();

  currentGame: GameState | undefined;

  constructor() {}

  startNewGame(game: GameState) {
    this.currentGame = game; // TODO: trust it
    this.gameStarted.next();
  }
}
