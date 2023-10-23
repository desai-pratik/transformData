import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataTransform';
  // home mathi aavyo
  parentNumberArray: number[] = []; 
  receiveNumberArrayFromChild(numberArray: number[]) {
    this.parentNumberArray = numberArray;
  }

  // home2 mathi aama aavyo
  parentOddNumbers: number[] = [];
  parentEvenNumbers: number[] = [];
  receiveOddNumbersFromChild(oddNumbers: number[]) {
    this.parentOddNumbers = oddNumbers;
  }
  receiveEvenNumbersFromChild(evenNumbers: number[]) {
    this.parentEvenNumbers = evenNumbers;
  }

  
   
}
