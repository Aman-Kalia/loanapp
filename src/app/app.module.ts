import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoantypeComponent } from './loantype/loantype.component';
import { HomeComponent } from './home/home.component';

const appRoute: Routes =[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'LoanType',component:LoantypeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoantypeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
