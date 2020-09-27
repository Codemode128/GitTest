import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display=false;
  button_text='Display Details';
  clicks=[];
  apply=false;
  onClick() {
    this.display=this.display==false?true:false;
    this.button_text=this.button_text==='Display Details'?'Hide Details':'Display Details';
    this.clicks.push(this.clicks.length+1)
  }

  getColor(){
    return this.clicks.length>4?'blue':'';
  }

  getCount(){
    return this.clicks.length;
  }
}
