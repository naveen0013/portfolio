import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainhere',
  templateUrl: './mainhere.component.html',
  styleUrls: ['./mainhere.component.scss']
})
export class MainhereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(screen.width,window.innerWidth,window.outerWidth)
  }
  
  

}
