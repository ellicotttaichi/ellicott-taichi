import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

}
