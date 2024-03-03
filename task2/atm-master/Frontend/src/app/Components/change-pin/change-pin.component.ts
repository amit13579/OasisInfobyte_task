import { Component } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePinComponent  {

  cardNumber='';
  pin='';
  newPin='';
  changedPin='';

  constructor(private backendService: BackendService) {}
 

  onSubmit(): void {
    this.backendService.changePin(this.cardNumber, this.pin, this.newPin)
      .subscribe(
        (data) => {
          this.changedPin = data.pin;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  
}

