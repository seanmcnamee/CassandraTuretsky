import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistBackgroundComponent } from './features/artist-background/artist-background.component';
import { HomeComponent } from './features/home/home.component';
import { InspirationComponent } from './features/inspiration/inspiration.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PortfolioDrawingAndPaintingComponent } from './features/portfolio-drawing-and-painting/portfolio-drawing-and-painting.component';
import { PortfolioPhotographyComponent } from './features/portfolio-photography/portfolio-photography.component';
import { PortfolioPrintmakingComponent } from './features/portfolio-printmaking/portfolio-printmaking.component';
import { PortfolioSculptureComponent } from './features/portfolio-sculpture/portfolio-sculpture.component';

const routes: Routes = [
  { path: "", redirectTo: '/Home', pathMatch: 'full' },

  { path: "Home", component: HomeComponent },
  { path: "ArtistBackground", component: ArtistBackgroundComponent },
  { path: "Inspiration", component: InspirationComponent },
  { path: "Drawing-Painting", component: PortfolioDrawingAndPaintingComponent },
  { path: "Photography", component: PortfolioPhotographyComponent },
  { path: "Printmaking", component: PortfolioPrintmakingComponent },
  { path: "Sculpture", component: PortfolioSculptureComponent },
  { path: "404", component: NotFoundComponent },
  
  { path: "**", redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
