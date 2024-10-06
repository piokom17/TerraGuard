import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntryScreenComponent } from './screens/entry-screen/entry-screen.component';
import { GameScreenComponent } from './screens/game-screen/game-screen.component';
import { GameService } from './services/game.service';

enum GameScreen {
  intro,
  game,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EntryScreenComponent, GameScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  screen: GameScreen = GameScreen.intro;
  protected readonly GameScreen = GameScreen;

  constructor(private gameService: GameService) {
    this.gameService.gameStarted.subscribe(() => {
      this.screen = GameScreen.game;
    });
  }
}
