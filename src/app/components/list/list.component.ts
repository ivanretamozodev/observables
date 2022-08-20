import { Component, OnInit } from '@angular/core';
import { VillainService } from '../../service/villain.service';
import { villain } from '../../interfaces/villain.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public villains: villain[] = [];
  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.villainService
      .getVillains()
      .subscribe((villains: villain[]) => (this.villains = villains));
  }
}
