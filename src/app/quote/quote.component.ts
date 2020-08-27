import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  quotes:Quote[]=[
    new Quote(1, 'Talk is cheap. Show me the code.','Author: Linus Torvalds, Submitted by: Koome,', new Date(2020,8,20)),
    new Quote(2, "I'm not a great programmer; I'm just a good programmer with great habits.", 'Author: Kent Beck, Submitted by: Koome, ', new Date(2020,7,23)),
    new Quote(3, 'Truth can only be found in one place: the code.', 'Author: Robert C. Martin, Submitted by: Edward,', new Date(2020, 3,3)),
  ];
  
  toggleDetails(index){
    this.quotes[index].showQuoteDescription = !this.quotes[index].showQuoteDescription;
  }


  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quoteTitle}"?`)
     
      if (toDelete){
        this.quotes.splice(index,1)
      }
      
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.quoteTitle
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
