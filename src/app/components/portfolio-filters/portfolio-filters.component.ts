import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ImageTag, IPortfolioImageService, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-filters',
  templateUrl: './portfolio-filters.component.html',
  styleUrls: ['./portfolio-filters.component.scss']
})
export class PortfolioFiltersComponent implements OnInit {
  @Input() images?: PortfolioImage[];
  @Input() filteredImageCount?: number;
  @Input() filterHintEvent?: Observable<void>;
  @Input() tagsUpdatedEventSubject?: Subject<ImageTag[]>

  @ViewChild('tagFiltersDropdownBtn') filterDropdownBtn!: ElementRef;
  private filterHintEventSubscription?: Subscription;

  ImageTag: typeof ImageTag = ImageTag;
  tags?: Map<DisplayImageTag, boolean>;
  enabledTags?: DisplayImageTag[];
  hasDefinedTags: boolean = false;

  constructor(private portfolioImageService: IPortfolioImageService) { }

  ngOnInit(): void {
    this.tags = new Map(
      this.portfolioImageService.getTagsFrom(this.images)
        .map(tag => [new DisplayImageTag(tag), true]));
    this.hasDefinedTags = this.tags.size > 1;
    this.updateResultsFromFilters();

    this.filterHintEventSubscription = this.filterHintEvent?.subscribe(
      () => this.filterDropdownBtn.nativeElement.click());
  }
  ngOnDestroy() {
    this.filterHintEventSubscription?.unsubscribe();
  }

  updateAllTagFilters(isEnabled: boolean) {
    this.tags?.forEach((_, key, map) => map.set(key, isEnabled));
    this.updateResultsFromFilters();
  }

  updateTagFilter(tag: DisplayImageTag, isEnabled: boolean) {
    this.tags?.set(tag, isEnabled);
    this.updateResultsFromFilters();
  }

  updateResultsFromFilters(): void {
    if (this.tags) {
      this.enabledTags = Array.from(this.tags.keys()).filter((tag) => this.tags!.get(tag));
      this.tagsUpdatedEventSubject?.next(this.enabledTags.map(displayTag => displayTag.tag));
    }
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