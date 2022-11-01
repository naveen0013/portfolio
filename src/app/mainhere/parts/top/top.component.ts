import { Component, OnInit } from '@angular/core';
import { state, trigger, animate, transition, style } from '@angular/animations';
import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [trigger('paraAnimate', [
    state('small', style({ margin:"10%"})),
    state('big', style({margin:"5%"})),
    transition('small => big', animate('1s')),
    transition('big => small', animate('1s'))
  ])]
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  here=window.innerWidth
  isSmall = true;

  
  toggle() {
    this.isSmall = !this.isSmall;
  }

  onResize(){
    return this.here=window.innerWidth
  }




  public name = "Hello ,";
  public intro_paragraph = `Thank you for visiting my portfolio, These Portfolio and the below Project 
   is done because of the reason to Practice , showcase my Skills and I thought this will make my career improve .
   Check out below .
                           `

  public navmenu = ["Introduction", "Work_Experience", "Studies", "Skills", "Projects", "Others"];

  changeText(text: string) {
    return text.replace("_", " ");
  }

  menu=false;
  onClickMenu(){
    return this.menu=!this.menu;
  }
}
