import { Component, OnInit } from '@angular/core';
import {CarColorService} from '../car-color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  private dateVal: Date = new Date();
  private jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};
  title: string = null;
  constructor() { }

  ngOnInit() {
    this.title = 'Testing';
  }



}
