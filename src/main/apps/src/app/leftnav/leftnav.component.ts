import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  @Output() itemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(item: string): void {
    this.itemEvent.emit(item);
  }

}
