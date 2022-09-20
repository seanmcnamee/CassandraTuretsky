import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-printmaking',
  templateUrl: './portfolio-printmaking.component.html',
  styleUrls: ['./portfolio-printmaking.component.scss']
})
export class PortfolioPrintmakingComponent {
  filterHintEventSubject: Subject<void> = new Subject<void>();
  tagsUpdatedEventSubject: Subject<ImageTag[]> = new Subject<ImageTag[]>();
  
  images: PortfolioImage[];
  filteredImages?: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.filteredImages = this.images = portfolioImageService.getImages(ImageCategory.Printmaking);
  }

  updateFilteredResults(filteredImages: PortfolioImage[]) {
    this.filteredImages = filteredImages;
  }
}