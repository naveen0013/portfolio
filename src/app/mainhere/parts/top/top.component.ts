import { Component, OnInit } from '@angular/core';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [trigger('paraAnimate', [
    state('small', style({ width: '45%' })),
    state('big', style({ width: '50%' })),
    transition('small => big', animate('2s')),
    transition('big => small', animate('2s'))
  ])]
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSmall = true;

  toggle() {
    this.isSmall = !this.isSmall;
  }





  public name = "Hello I'm Naveen,";
  public intro_paragraph = `Thank you for visiting my portfolio , These Portfolio and the below Project 
   is done because of the reason to Practice , showcase my Skills and I thought this will make my career improve .
   Check out below .
                           `

  public menu = ["Introduction", "Work_Experience", "Studies", "Skills", "Projects", "Others"];

  changeText(text: string) {
    return text.replace("_", " ");
  }

}
