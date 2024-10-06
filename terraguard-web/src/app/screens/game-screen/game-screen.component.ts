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
  points = 155;
  level = '02';
  progress = 55;
  resources: Resource[] = [];
  dialog = false;

  @ViewChild('scene')
  scene?: ElementRef;

  constructor(private resourceService: ResourceService) {
    this.resources = this.resourceService.getAll();
  }

  ngOnInit() {
    this.dialog = true;
  }

  ngAfterViewInit() {
    if (this.scene?.nativeElement) {
      const myGlobe = Globe();
      myGlobe(this.scene.nativeElement)
        .globeImageUrl(
          '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        )
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');
      console.log(this.scene.nativeElement);
    }
  }
}
