import { Component , EventEmitter, OnInit, Output , Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  // app (main) ma moklya
  @Output() numberArrayEmitter = new EventEmitter<number[]>(); 
  ngOnInit(){
    this.numberArrayEmitter.emit(this.numberArray);
  } 


  // main app mathi aavyo
  @Input() dataFromParent: number[] = [];
  @Input() dataFromParent: number[] = [];

  
}
