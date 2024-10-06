import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LogoComponent } from '../../components/logo.component';
import { Resource } from '../../model/resource';
import { MeterComponent } from '../../components/meter.component';
import {
  DialogActionsDirective,
  DialogComponent,
} from '../../components/dialog.component';
import { ResourceService } from '../../services/resource.service';
import Globe from 'globe.gl';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { GameService } from '../../services/game.service';
import { GameState } from '../../model/game';
import { Alert, AlertAction } from '../../model/alert';
import { alerts } from '../../mocks/alerts';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [
    LogoComponent,
    MeterComponent,
    DialogComponent,
    DialogActionsDirective,
  ],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.css',
})
export class GameScreenComponent implements OnInit, AfterViewInit {
  progress = 55;
  resources: Resource[] = [];
  globeMode = true;
  dialog?: Alert;
  game?: GameState;
  selectedChoice?: AlertAction;

  @ViewChild('scene')
  scene?: ElementRef;
  private map?: Map;

  constructor(
    private gameService: GameService,
    private resourceService: ResourceService,
  ) {
    this.resources = this.resourceService.getAll();
    this.gameService.gameStarted.subscribe(() => {
      this.game = this.gameService.currentGame;
    });
  }

  ngOnInit() {
    this.game = this.gameService.currentGame;
    if (this.game?.place.alert) {
      this.showAlert(this.game?.place.alert);
    }
  }

  ngAfterViewInit() {
    console.log('calling ngAfterViewInit');
    if (this.globeMode) {
      this.installGlobe();
    } else {
      this.installOpenLayers();
    }
  }

  doAction(action: AlertAction) {
    this.dialog = undefined;
    if (action.points) {
      this.addPoints(action.points);
    }
    if (action.switchMapTo) {
      console.log('should switch map to ', action.switchMapTo);
      const newMode = action.switchMapTo === '3d';
      if (newMode !== this.globeMode) {
        this.globeMode = newMode;
        this.ngAfterViewInit();
      }
    }
    if (action.alert != null) {
      this.showAlert(action.alert);
    }
    if (action.navigateTo) {
      this.navigateTo(action.navigateTo);
    }
    if (action.changes) {
      this.game!.resources = action.changes;
    }
    if (action.cost) {
      this.removePoints(action.cost);
    }
  }

  navigateTo(point: number[]) {
    console.log('navigate', point);
    setTimeout(() => {
      this.map?.setView(
        new View({
          center: point,
          zoom: 2,
        }),
      );
    }, 1000);
  }

  addPoints(pts: number) {
    if (this.game?.score != null) {
      this.game.score += pts;
    }
  }

  removePoints(pts: number) {
    if (this.game?.score != null) {
      this.game.score -= pts;
      if (this.game.score < 0) {
        this.game.score = 0;
      }
    }
  }

  showAlert(code: string) {
    setTimeout(() => {
      for (let alert of alerts) {
        if (code === alert.code) {
          this.dialog = alert;
        }
      }
    }, 1000);
  }

  answerQuiz() {
    if (this.selectedChoice) {
      const choice = this.selectedChoice;
      this.dialog = undefined;
      this.selectedChoice = undefined;
      this.doAction(choice);
    }
  }

  private installGlobe() {
    if (this.scene?.nativeElement) {
      const myGlobe = Globe();
      myGlobe(this.scene.nativeElement)
        .globeImageUrl(
          '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        )
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');
    }
  }

  private installOpenLayers() {
    if (this.scene?.nativeElement) {
      document.querySelector('#scene')!.innerHTML = '';
      this.map = new Map({
        target: 'scene',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }
}
