import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MyService} from "../../services/MyService";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts = null;

  constructor(private _route: Router, private service : MyService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(results => {
      this.posts = results
    })
  }


  goToPostDetails(id: number) {
    this._route.navigate(["post", id]);
    console.log("klik")
  }
}





