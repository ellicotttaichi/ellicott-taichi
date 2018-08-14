import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  
  @Output() itemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(item: string): void {
    this.itemEvent.emit(item);
  }

}
