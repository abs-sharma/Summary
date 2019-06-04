import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'JOE';

  isavailable:boolean=false;
  Variety = ["Invoice", "Taxes", "Budget", "Fiscal"];
   myClickFunction($event) { 
      this.isavailable = !this.isavailable;
      alert("Select Quarter");
      console.log(event);
}
}
