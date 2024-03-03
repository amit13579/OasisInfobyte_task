import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/service/backend.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
 base={date_validator: 'dd/MM/yyyy'}



  selected = 'option1';
  email = new FormControl('', [Validators.required, Validators.email]);
  
  data ={
    name:"",
    email:"",
    contact_number:"",
    accountType:"",
    amount:"",
    pin:"",    
    expiryDate:"",
    cardNumber: "",
    CVV: ""
  }
  formSubmitted = false; 

  generateRandomNumber(length: number) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  ngOnInit() {
    this.data.cardNumber = this.generateRandomNumber(5); // Generate 12-digit card number
    this.data.CVV = this.generateRandomNumber(3); // Generate 3-digit CVV
  }
  successMessage: string;
  accountNumber: string;
  cvv: string;
  name: string;
  expiryDate: string;
  constructor(private backemd:BackendService, private snak:MatSnackBar) {
    this.successMessage = "Account created successfully!";
        this.accountNumber ='',
        this.cvv ='',
        this.name =''
        this.expiryDate=''
  }  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;  
  submitForm() {
    
   console.log("DATA:", this.data);
   this.formSubmitted = true;
   if(this.data.name==''||this.data.email =='' || this.data.contact_number == ''  || this.data.amount == '' || this.data.pin == '')
    {
        this.snak.open("fields cannot be empty","OK");
        return;
    }
   this.backemd.createAccount(this.data).subscribe(
    response => {
        alert(JSON.stringify(response.data));
        this.successMessage = "Account created successfully!";
        this.accountNumber = response.accountNumber; // assuming response contains the data returned from the server
        this.cvv = response.cvv;
        this.name = response.name;
        this.expiryDate = response.expiryDate;
    }, error => {
      alert(JSON.stringify(error))
      console.log(error);
      this.snak.open("Error occurred while creating account","OK");
    }
   ); 
   
  }  





 
}
