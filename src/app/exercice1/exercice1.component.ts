import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number;
  public result: number;

  constructor() {
    this.compteur = 0;
  }

  ngOnInit() {
  }

  manageChange(event) {
    this.result = event;
  }

}
