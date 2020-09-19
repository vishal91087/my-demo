import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  private searchData = new Subject<any>();
  public searchData$ = this.searchData.asObservable();

  emitSearchData(x: any) {
    this.searchData.next(x);
  }

  private detailData = new BehaviorSubject<any>("");
  public detailData$ = this.detailData.asObservable();

  emitDetailsData(x: any) {
    this.detailData.next(x);
  }

}
