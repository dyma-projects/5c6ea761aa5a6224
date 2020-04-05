import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('value') inputValue: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  getValue() {
    this.valeur = this.inputValue.nativeElement.value;
  }

}
