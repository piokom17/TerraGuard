import { Animal } from './animal';
import { Place } from './place';

export interface GameState {
  animal: Animal;
  gameOver?: boolean;
  place: Place;
  resources?: number[];
  score: number;
  level: string;
}
