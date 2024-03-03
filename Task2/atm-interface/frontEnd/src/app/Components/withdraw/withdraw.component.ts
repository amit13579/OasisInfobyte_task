import { Component } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { bank } from 'src/bank';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  tbl_bank:bank=new bank(10106,4321,100); 

  // cardNumber:number | undefined
  // pin?:number;
  
  // amount?:number;

  constructor(private backendservice : BackendService){}

  onSubmit() {
    debugger
    this.backendservice.withdraw(this.tbl_bank.cardNumber, this.tbl_bank.pin , this.tbl_bank.amount).subscribe(
        response => {
            debugger
            alert(JSON.stringify(response));
        },
        error => {
            alert(JSON.stringify(error.error));
        }
    );
}

}
