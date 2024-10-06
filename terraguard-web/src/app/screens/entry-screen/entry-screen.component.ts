import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Animal } from '../../model/animal';
import { LogoComponent } from '../../components/logo.component';
import { MatIcon } from '@angular/material/icon';
import { GameService } from '../../services/game.service';
import { places } from '../../mocks/places';
import { Place } from '../../model/place';

@Component({
  selector: 'app-entry-screen',
  standalone: true,
  imports: [NgOptimizedImage, LogoComponent, MatIcon],
  templateUrl: './entry-screen.component.html',
  styleUrl: './entry-screen.component.css',
})
export class EntryScreenComponent {
  readonly animals: Animal[] = [
    { name: 'Albatros', src: 'albatros.png' },
    { name: 'Dolphin', src: 'dolphin.png' },
    { name: 'Rhino', src: 'rhino.png' },
    { name: 'Elephant', src: 'elephant.png' },
  ];

  selectedAnimal?: Animal;
  selectedPlace?: Place;

  constructor(private gameService: GameService) {}

  startGame() {
    if (this.selectedPlace && this.selectedAnimal) {
      this.gameService.startNewGame({
        animal: this.selectedAnimal,
        place: this.selectedPlace,
        score: 0,
        level: '01',
        resources:
          this.selectedPlace.initialResources ||
          this.places[0].initialResources,
      });
    } else {
      alert('Select place and animal');
    }
  }

  selectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }

  selectPlace(place: Place) {
    this.selectedPlace = place;
  }

  protected readonly places = places;
}
