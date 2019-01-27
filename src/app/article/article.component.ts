import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from '../config.service';
import { Post } from '../post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post: Post = {
    id: 12,
    title: 'lodaing',
    author: 'lodaing',
    publishdate: '2028-04-23T18:25:43.511Z',
    excert: 'lodaing',
    image: 'gallery-image-1.jpg'
  };
  // @Input()

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // setInterval(() => {
      this.getPostById(id);
    // }, 500);
    // this.post = this.getPostById(id);
  }

  getPostById(id: number) {
    return this.config.getPostByID(id).subscribe(
      post => this.post = post
    );
  }

  getBack() {
    this.location.back();
  }

}
