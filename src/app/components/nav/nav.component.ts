import { Component, OnInit } from '@angular/core';
import { VillainService } from '../../service/villain.service';
import { villain } from '../../interfaces/villain.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  lengthVillains: number = 0;

  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.villainService.getVillains().subscribe((villain: villain[]) => {
      this.lengthVillains = villain.length;
    });
  }
}
