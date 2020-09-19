import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { take, takeWhile } from 'rxjs/operators'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  alive: boolean = true;
  detailsObjData: any;

  constructor(private dataservice: ServicesService) { }

  ngOnInit() {
    this.dataservice.detailData$.pipe(takeWhile(() => this.alive)).subscribe(
      (data) => {
        console.log(data)
        this.detailsObjData = data;
      }
    );
  }

  ngOnDestory() {
    this.alive = false;
  }

}
