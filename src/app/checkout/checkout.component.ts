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

  constructor(private dataservice: ServicesService) { }

  ngOnInit() {

    this.dataservice.detailData$.pipe(takeWhile(() => this.alive)).subscribe(
      (data) => {
        this.jsonData.push(data)
        this.jsonData.forEach(element => {
          this.CheckoutAmount += Number(element.price)
        });
      }
    );

  }

}
