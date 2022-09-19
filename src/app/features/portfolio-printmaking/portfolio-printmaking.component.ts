import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-printmaking',
  templateUrl: './portfolio-printmaking.component.html',
  styleUrls: ['./portfolio-printmaking.component.scss']
})
export class PortfolioPrintmakingComponent {
  @ViewChild('tagFiltersDropdownBtn') filterDropdownBtn!: ElementRef;
  @ViewChild('ImageModalImg') modalImg!: ElementRef;
  ImageTag: typeof ImageTag = ImageTag;
  images: PortfolioImage[];

  tags: Map<DisplayImageTag, boolean>;

  enabledTags!: DisplayImageTag[];
  filteredImages!: PortfolioImage[];

  constructor(portfolioImageService: IPortfolioImageService) { 
    this.images = portfolioImageService.getImages(ImageCategory.Printmaking);
    var allTags = portfolioImageService.getTagsFrom(this.images).map(tag => new DisplayImageTag(tag));
    this.tags = new Map(allTags.map(tag => [tag, true]));
    this.updateResultsFromFilters();
  }

  updateAllTagFilters(isEnabled: boolean) {
    this.tags.forEach((_, key, map) => map.set(key, isEnabled));
    this.updateResultsFromFilters();
  }

  updateTagFilter(tag: DisplayImageTag, isEnabled: boolean) {
    this.tags.set(tag, isEnabled);
    this.updateResultsFromFilters();
  }

  private getTagsWithStatus(tags: Map<DisplayImageTag, boolean>, isEnabled: boolean = true): DisplayImageTag[] {
    return Array.from(this.tags.keys()).filter((tag) => this.tags.get(tag) === isEnabled);
  }

  updateResultsFromFilters(): void {
    this.enabledTags = this.getTagsWithStatus(this.tags, true);
    this.filteredImages = this.images.filter(image => this.enabledTags.some(tag => image.tags.includes(tag.tag)));
  }

  openDropDown(e: MouseEvent): void {
    e.stopPropagation();
    this.filterDropdownBtn.nativeElement.click();
  }

  setModalImg(image: PortfolioImage): void {
    this.modalImg.nativeElement.src = image.url;
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