import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-sculpture',
  templateUrl: './portfolio-sculpture.component.html',
  styleUrls: ['./portfolio-sculpture.component.scss']
})
export class PortfolioSculptureComponent {
  filterHintEventSubject: Subject<void> = new Subject<void>();
  tagsUpdatedEventSubject: Subject<ImageTag[]> = new Subject<ImageTag[]>();
  
  images: PortfolioImage[];
  filteredImages?: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.filteredImages = this.images = portfolioImageService.getImages(ImageCategory.Sculpture);
  }

  updateFilteredResults(filteredImages: PortfolioImage[]) {
    this.filteredImages = filteredImages;
  }
}
