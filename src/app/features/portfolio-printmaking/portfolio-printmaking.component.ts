import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-printmaking',
  templateUrl: './portfolio-printmaking.component.html',
  styleUrls: ['./portfolio-printmaking.component.scss']
})
export class PortfolioPrintmakingComponent {
  images: PortfolioImage[];

  tags: DisplayImageTag[];
  enabledTags: DisplayImageTag[];
  disabledTags: DisplayImageTag[];

  filteredImages: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.filteredImages = this.images = portfolioImageService.getImages(ImageCategory.Printmaking);
    this.tags = portfolioImageService.getTagsFrom(this.images).map(tag => new DisplayImageTag(tag));
    console.log("Tags: ", this.tags);
    this.enabledTags = this.tags;
    this.disabledTags = [];

    console.log("Enabled tags: ", this.enabledTags);
    console.log("Disabled tags: ", this.disabledTags);
  }

  updateTagFilter(tag: DisplayImageTag, isEnabled: boolean) {
    var filterToAppend = isEnabled ? this.enabledTags : this.disabledTags;
    var filterToRemove = !isEnabled ? this.enabledTags : this.disabledTags;

    filterToAppend.push(tag);
    filterToRemove.splice(filterToRemove.indexOf(tag), 1);
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