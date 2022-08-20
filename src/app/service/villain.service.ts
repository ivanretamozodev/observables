import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { villain } from '../interfaces/villain.interface';

@Injectable({
  providedIn: 'root',
})
export class VillainService {
  private villains: villain[];
  private villains$: Subject<villain[]>;
  constructor() {
    this.villains = [];
    this.villains$ = new Subject();
  }

  addVillain(villain: villain) {
    this.villains.push(villain);
    this.villains$.next(this.villains);
  }

  getVillains() {
    return this.villains$.asObservable();
  }
}
