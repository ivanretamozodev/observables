import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VillainService } from '../../service/villain.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  public form: FormGroup;

  constructor(private villainService: VillainService) {
    this.form = new FormGroup({
      name: new FormControl(),
      alias: new FormControl(),
      movie: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.villainService.addVillain(this.form.value);
    this.form.reset();
  }
}
