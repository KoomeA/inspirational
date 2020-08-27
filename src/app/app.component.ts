import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-IP';
  
  quotes:Quote[]=[
    new Quote(1, 'Talk is cheap. Show me the code.','Author: Linus Torvalds, Submitted by: Koome,', new Date(2020,8,20)),
    new Quote(2, "I'm not a great programmer; I'm just a good programmer with great habits.", 'Author: Kent Beck, Submitted by: Koome, ', new Date(2020,7,23)),
    new Quote(3, 'Truth can only be found in one place: the code.', 'Author: Robert C. Martin, Submitted by: Edward,', new Date(2020, 3,3)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuoteDescription = !this.quotes[index].showQuoteDescription;
  }

  constructor(){
    this.quotes = [, , ]
  }

}
