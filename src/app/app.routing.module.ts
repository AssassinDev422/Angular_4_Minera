import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes,Router} from '@angular/router';


import {LoginComponent} from './components/authentication/login/login.component';
import {SignupComponent} from './components/authentication/signup/signup.component';
import {ForgotPasswordComponent} from './components/authentication/forgot-password/forgot-password.component';
import {DashboardComponent} from './components/include/dashboard/dashboard.component';

//home
import {HomeComponent} from './components/home/home.component';
//profile
import {ProfileComponent} from './components/profile/profile.component';
//cashout--
import {CashoutComponent} from './components/cashout/cashout.component';
//Orders
import {OrdersComponent } from './components/orders/orders.component';
import {SetupOrdersComponent} from './components/setup-orders/setup-orders.component';
import {SetupcustomerComponent} from './components/setupcustomer/setupcustomer.component';
import {BlocksComponent} from './components/Admin/blocks/blocks.component';
import {CustomersComponent} from './components/Admin/customers/customers.component';
import {RewardsComponent} from './components/Admin/rewards/rewards.component';
import {AdminordersComponent} from './components/Admin/adminorders/adminorders.component';

const appRoutes: Routes = [

                    { path:'',component: HomeComponent },
                    { path:'login',component: LoginComponent },
                    { path:'signup',component:SignupComponent },
                    { path:'forgotPassword',component:ForgotPasswordComponent },
                    { path:"dashboard",component:DashboardComponent},
                    { path:"profile",component:ProfileComponent },
                    { path:"cashout",component:CashoutComponent },
                    { path:"setupOrders",component:SetupOrdersComponent},
                    { path:"setupcustomer",component:SetupcustomerComponent},
                    { path:"Adminblocks",component:BlocksComponent},
                    { path:"Admincustomers",component:CustomersComponent},
                    { path:"Adminrewards",component:RewardsComponent },
                    { path:"Adminorders",component:AdminordersComponent},
                    { path:"cashout/:orderType", component:CashoutComponent},
                    { path:"orders/btc",  component:OrdersComponent},
                    { path:"orders/ltc",  component:OrdersComponent},
                    { path:"orders/eth",  component:OrdersComponent},
                    { path:"orders/dash",  component:OrdersComponent},
                    { path:"cashout", component:CashoutComponent}
                ];

@NgModule({
   imports: [CommonModule,RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [ RouterModule ],
  providers: [] 
})

export class AppRoutingModule { }
//export routingcomponet class include in module.ts file 

export const routingcomponent =
    [ 
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        DashboardComponent,
        ProfileComponent,
        HomeComponent,
        CashoutComponent,
        OrdersComponent,
        SetupOrdersComponent,
        SetupcustomerComponent,
        BlocksComponent,
        CustomersComponent,
        RewardsComponent,
        AdminordersComponent
]