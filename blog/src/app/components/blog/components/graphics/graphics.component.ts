import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  @Input('imageUrl') imageUrl: string;

  constructor() {

  }

  ngOnInit() {
  }

}
