import { animateChild } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.parentComponent.emit({    name: 'anil', age: 30    });
  }
  sendData()    {
    let item = {    name: 'anil', age: 40    };
    this.parentComponent.emit(item);
  }
}
