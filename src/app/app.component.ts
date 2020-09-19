import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'my-demo';
  search: any;

  constructor(private dataservice: ServicesService) { }

  ngOnInit() {
    $("#menu-toggle").click((e) => {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  sendData(ev) {
    this.dataservice.emitSearchData(ev.target.value);
  }
}
