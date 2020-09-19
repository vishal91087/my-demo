import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { take, takeWhile } from 'rxjs/operators'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  CheckoutAmount: any = 0;
  alive: boolean = true;


  jsonData: any = [];
  dummyArray: any = [];

  constructor(private dataservice: ServicesService) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem("arr")) == null) {
      this.dummyArray = [];
    }
    else {
      this.dummyArray = JSON.parse(localStorage.getItem("arr"))
    }

    this.dataservice.detailData$.pipe(takeWhile(() => this.alive)).subscribe(
      (data) => {
        this.dummyArray.push(data);
        localStorage.setItem("arr", JSON.stringify(this.dummyArray));
      }
    );

    this.jsonData = this.dummyArray.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i)

    this.jsonData.forEach(element => {
      this.CheckoutAmount += Number(element.price)
    });

  }

}
