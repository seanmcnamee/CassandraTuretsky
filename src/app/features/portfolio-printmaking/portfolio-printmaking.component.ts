import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-printmaking',
  templateUrl: './portfolio-printmaking.component.html',
  styleUrls: ['./portfolio-printmaking.component.scss']
})
export class PortfolioPrintmakingComponent {
  ImageTag: typeof ImageTag = ImageTag;
  images: PortfolioImage[];

  tags: Map<DisplayImageTag, boolean>;
  enabledTags: DisplayImageTag[];

  filteredImages!: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.images = portfolioImageService.getImages(ImageCategory.Printmaking);
    var allTags = portfolioImageService.getTagsFrom(this.images).map(tag => new DisplayImageTag(tag));
    this.tags = new Map(allTags.map(tag => [tag, true]));
    this.enabledTags = Array.from(this.tags.keys()).filter((tag) => this.tags.get(tag) === true);

    this.updateResultsFromFilters();
  }

  updateTagFilter(tag: DisplayImageTag, isEnabled: boolean) {
    this.tags.set(tag, isEnabled);
    this.enabledTags = Array.from(this.tags.keys()).filter((tag) => this.tags.get(tag) === true);

    this.updateResultsFromFilters();
  }

  updateResultsFromFilters() {
    this.filteredImages = this.images.filter(image => this.enabledTags.some(tag => image.tags.includes(tag.tag)))
    return this.filteredImages;
  }
}

class DisplayImageTag {
  displayName: string;
  tag: ImageTag;

  constructor(tag: ImageTag) {
    this.tag = tag;
    this.displayName = ImageTag[tag];
  }
}