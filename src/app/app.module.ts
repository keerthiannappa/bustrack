import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BusesComponent } from './components/buses/buses.component';
import { AuthenticationService,UserService} from './services'
import { ChangeRouteComponent } from './components/change-route/change-route.component';
import {MatChipsModule,MatTabsModule,MatIconModule,MatSnackBarModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './guard';
import { AgmCoreModule } from '@agm/core';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SwapRouteComponent } from './components/change-route/swap-route/swap-route.component';
import { MergeRouteComponent } from './components/change-route/merge-route/merge-route.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BusesComponent,
    ChangeRouteComponent,
    MobileAppComponent,
    FeedbackComponent,
    SwapRouteComponent,
    MergeRouteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [AuthenticationService,UserService,AuthGuard],
  bootstrap: [AppComponent],
  exports:[MatChipsModule]
})
export class AppModule { }
