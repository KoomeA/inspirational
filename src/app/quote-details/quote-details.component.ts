import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input ()
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean){
    this.isComplete.emit(complete)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
