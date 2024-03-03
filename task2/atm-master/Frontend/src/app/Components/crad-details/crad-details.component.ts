import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-crad-details',
  templateUrl: './crad-details.component.html',
  styleUrls: ['./crad-details.component.css']
})
export class CradDetailsComponent implements OnInit{

  cardNumber = '';
  pin = '';

  cardDetails : any;
  constructor(private backendService : BackendService) { }
  ngOnInit() {
  }

  getCardDetails() {
    this.backendService.getCardDetails(this.cardNumber, this.pin)
    .subscribe(
      data=>{
        this.cardDetails=data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
