import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  content: string;
  id: number;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this._activatedRoute.params["id"];
  }


}
