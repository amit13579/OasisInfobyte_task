import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 constructor(private snack:MatSnackBar) {}
 ngOnInit(): void {
   
 }

 btnClick1() {
   console.log("button clicked");
   this.snack.open("Create a account","cancel");
   
 }

 btnClick2() {
  console.log("button clicked");
  this.snack.open("welcome in ATM","cancel");
  
}


}
