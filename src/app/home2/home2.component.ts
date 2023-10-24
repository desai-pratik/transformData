import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  // app mathi input lethu
  @Input() dataFromParent: number[] = []; 

  // app ma pasu moklu
  @Output() oddNumbersEmitter = new EventEmitter<number[]>();
  @Output() evenNumbersEmitter = new EventEmitter<number[]>();

  // navi value store kari app ne value
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  ngOnChanges() {
    this.findOddEvenNumbers();
  }
  
    // value convert kari odd evan ma
  private findOddEvenNumbers() {
    this.oddNumbers = this.dataFromParent.filter(number => number % 2 !== 0);
    this.evenNumbers = this.dataFromParent.filter(number => number % 2 === 0);
    this.oddNumbersEmitter.emit(this.oddNumbers);
    this.evenNumbersEmitter.emit(this.evenNumbers);
  }
}
