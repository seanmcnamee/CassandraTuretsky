import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorAlertsComponent } from './components/error-alerts/error-alerts.component';
import { IErrorAlertsService } from './services/error-alerts/error-alerts.service.interface';
import { ErrorAlertsService } from './services/error-alerts/error-alerts.service';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorAlertsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: IErrorAlertsService, useClass: ErrorAlertsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
