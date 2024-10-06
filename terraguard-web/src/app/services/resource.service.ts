import { Injectable } from '@angular/core';
import { Resource } from '../model/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  readonly ALL: Resource[] = [
    { name: 'Water level', level: 56, icon: 'icon-water-level.png' },
    { name: 'Melting glaciers', level: 78, icon: 'icon-melting-gracier' },
    { name: 'Biodiversity', level: 26, icon: 'icon-biodiversity' },
    { name: 'Fire in woods', level: 88, icon: 'icon-fire' },
    { name: 'Air quality', level: 74, icon: 'icon-air-quality' },
    { name: 'Soil conditions', level: 11, icon: 'icon-soil-conditions' },
    { name: 'Urban climate', level: 37, icon: 'icon-urban-climate' },
  ];

  getAll(): Resource[] {
    return this.ALL;
  }
}
