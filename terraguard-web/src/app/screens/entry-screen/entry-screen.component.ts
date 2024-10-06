import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Animal } from '../../model/animal';
import { LogoComponent } from '../../components/logo.component';
import { MatIcon } from '@angular/material/icon';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-entry-screen',
  standalone: true,
  imports: [NgOptimizedImage, LogoComponent, MatIcon],
  templateUrl: './entry-screen.component.html',
  styleUrl: './entry-screen.component.css',
})
export class EntryScreenComponent {
  readonly places = [
    'Tokio, Japan',
    'Arctic region',
    'Amazonian forest',
    'Nairobi, Kenia',
    'Berlin, Germany',
  ];
  readonly animals: Animal[] = [
    { name: 'Albatros', src: 'albatros.png' },
    { name: 'Dolphin', src: 'dolphin.png' },
    { name: 'Rhino', src: 'rhino.png' },
    { name: 'Elephant', src: 'elephant.png' },
  ];

  constructor(private gameService: GameService) {}

  startGame() {
    this.gameService.startNewGame({
      animal: this.animals[0],
      place: this.places[0],
      score: 0,
    });
  }
}
