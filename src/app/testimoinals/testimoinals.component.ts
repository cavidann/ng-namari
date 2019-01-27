import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimoinals',
  templateUrl: './testimoinals.component.html',
  styleUrls: ['./testimoinals.component.css']
})
export class TestimoinalsComponent implements OnInit {

  testimoinals: any = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimoinals = this.getTestimoinal();
  }

  getTestimoinal() {
    return this.config.getConfig().testimoinals;
  }

}
