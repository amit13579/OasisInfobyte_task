import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{

  ngOnInit(): void {
    
  }

  cardNumber='';
  pin='';
  balance: any;
  constructor(private service:BackendService) {}

  checkBalance(){
    this.service.checkBalance(this.cardNumber,this.pin).subscribe(data=>{this.balance=data;})
  }
}
