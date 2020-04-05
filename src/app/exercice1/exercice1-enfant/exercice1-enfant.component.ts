import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() changeValueCounter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  incrementCounter(): void {
    this.compteur++;
    this.changeValueCounter.emit(this.compteur);
  }

  decrementCounter(): void {
    this.compteur--;
    this.changeValueCounter.emit(this.compteur);
  }

}
