import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { NewUserComponent } from './Components/new-user/new-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { BackendService } from './service/backend.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';




import { AtmservicesComponent } from './Components/atmservices/atmservices.component';
import { ServicesComponent } from './Components/services/services.component';
import { CradDetailsComponent } from './Components/crad-details/crad-details.component';
import { ChangePinComponent } from './Components/change-pin/change-pin.component';
import { WithdrawComponent } from './Components/withdraw/withdraw.component';
import { DepositeComponent } from './Components/deposite/deposite.component';
import { BalanceComponent } from './Components/balance/balance.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewUserComponent,
    AtmservicesComponent,
    ServicesComponent,
    CradDetailsComponent,
    ChangePinComponent,
    WithdrawComponent,
    DepositeComponent,
    BalanceComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    

   
    

  ],
  providers: [MatSnackBar, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
