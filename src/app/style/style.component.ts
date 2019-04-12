import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  @Input () color = 'red';
  @Input ()  size = 12  ;
  @Input ()  font = 'comic';
  show = true ;
  constructor() { }

  ngOnInit() {
  }

  showing() {

    this.show = true;
  }
  notshowing() {

    this.show = false;
  }
}
