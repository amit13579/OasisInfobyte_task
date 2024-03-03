import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

import { NewUserComponent } from './Components/new-user/new-user.component';
import { AtmservicesComponent } from './Components/atmservices/atmservices.component';
import { CradDetailsComponent } from './Components/crad-details/crad-details.component';
import { ChangePinComponent } from './Components/change-pin/change-pin.component';
import { WithdrawComponent } from './Components/withdraw/withdraw.component';
import { DepositeComponent } from './Components/deposite/deposite.component';
import { BalanceComponent } from './Components/balance/balance.component';



const routes: Routes = [
  {
    path:"newuser",
    component :NewUserComponent,
    pathMatch :"full"

  },
  {
    path:"",
    component : HomeComponent,
    pathMatch : "full"
  },
  {
    path:"services",
    component: AtmservicesComponent,
    pathMatch:"full"
  },
  {
    path:"cardDetails",
    component: CradDetailsComponent,
    pathMatch:"full"
  },
  {
    path:"changePin",
    component: ChangePinComponent,
    pathMatch:"full"
  },
  {
    path:"withdraw",
    component: WithdrawComponent,
    pathMatch:"full"
  },
  {
    path:"deposite",
    component: DepositeComponent,
    pathMatch:"full"
  },
  {
    path:"checkBalance",
    component:BalanceComponent,
    pathMatch:"full"
  }


 
];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
