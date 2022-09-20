import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-photography',
  templateUrl: './portfolio-photography.component.html',
  styleUrls: ['./portfolio-photography.component.scss']
})
export class PortfolioPhotographyComponent {
  filterHintEventSubject: Subject<void> = new Subject<void>();
  tagsUpdatedEventSubject: Subject<ImageTag[]> = new Subject<ImageTag[]>();
  
  images: PortfolioImage[];
  filteredImages?: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.filteredImages = this.images = portfolioImageService.getImages(ImageCategory.Photography);
  }

  updateFilteredResults(filteredImages: PortfolioImage[]) {
    this.filteredImages = filteredImages;
  }
}
