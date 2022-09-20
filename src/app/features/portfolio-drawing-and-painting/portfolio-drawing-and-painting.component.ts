import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-drawing-and-painting',
  templateUrl: './portfolio-drawing-and-painting.component.html',
  styleUrls: ['./portfolio-drawing-and-painting.component.scss']
})
export class PortfolioDrawingAndPaintingComponent {
  filterHintEventSubject: Subject<void> = new Subject<void>();
  tagsUpdatedEventSubject: Subject<ImageTag[]> = new Subject<ImageTag[]>();
  
  images: PortfolioImage[];
  filteredImages?: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.filteredImages = this.images = portfolioImageService.getImages(ImageCategory.Drawing, ImageCategory.Painting);
  }

  updateFilteredResults(filteredImages: PortfolioImage[]) {
    this.filteredImages = filteredImages;
  }
}
