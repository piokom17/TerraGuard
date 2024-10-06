import { Animal } from './animal';

export interface GameState {
  animal: Animal;
  gameOver?: boolean;
  place: string;
  resources?: { [key: string]: number };
  score: number;
}
