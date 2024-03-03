import { Component } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {

  cardNumber='';
  pin='';
  amount='';
  depositedAmount='';
  errorMessage='';

  constructor(private service: BackendService) { }

  onSubmit(): void {
    debugger
    this.service.deposite(this.cardNumber, this.pin, this.amount).subscribe(
      data => {
        this.depositedAmount = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = error.error;
        this.depositedAmount = '';
      }
    );
  }
}
