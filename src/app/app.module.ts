import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorAlertsComponent } from './components/error-alerts/error-alerts.component';
import { IErrorAlertsService } from './services/error-alerts/error-alerts.service.interface';
import { ErrorAlertsService } from './services/error-alerts/error-alerts.service';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ArtistBackgroundComponent } from './features/artist-background/artist-background.component';
import { InspirationComponent } from './features/inspiration/inspiration.component';
import { PortfolioDrawingAndPaintingComponent } from './features/portfolio-drawing-and-painting/portfolio-drawing-and-painting.component';
import { PortfolioPhotographyComponent } from './features/portfolio-photography/portfolio-photography.component';
import { PortfolioPrintmakingComponent } from './features/portfolio-printmaking/portfolio-printmaking.component';
import { PortfolioSculptureComponent } from './features/portfolio-sculpture/portfolio-sculpture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorAlertsComponent,
    HomeComponent,
    NotFoundComponent,
    ArtistBackgroundComponent,
    InspirationComponent,
    PortfolioDrawingAndPaintingComponent,
    PortfolioPhotographyComponent,
    PortfolioPrintmakingComponent,
    PortfolioSculptureComponent,
    FooterComponent
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
