import { Component, ViewChild } from '@angular/core';
import { LeftnavComponent } from './leftnav/leftnav.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(LeftnavComponent) leftNav;

  headerItem: string = 'home';

  receiveHeaderEvent($event) {
    this.headerItem = $event; 
    
    console.info('Show: ' + $event);
  }
  
}
