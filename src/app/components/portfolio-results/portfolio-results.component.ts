import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ImageTag, PortfolioImage } from 'src/app/services/portfolio-image/portfolio-image.service.interface';

@Component({
  selector: 'app-portfolio-results',
  templateUrl: './portfolio-results.component.html',
  styleUrls: ['./portfolio-results.component.scss']
})
export class PortfolioResultsComponent implements OnInit, OnDestroy {
  @Input() images?: PortfolioImage[];
  @Input() filteredImages?: PortfolioImage[];
  @Input() filterHintEventSubject?: Subject<void>;
  @Input() tagsUpdatedEvent?: Observable<ImageTag[]>;
  @Output() filteredImagesUpdatedEvent: EventEmitter<PortfolioImage[]> = new EventEmitter();

  @ViewChild('ImageModalImg') modalImg!: ElementRef;

  private tagsUpdatedEventSubscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.tagsUpdatedEventSubscription = this.tagsUpdatedEvent?.subscribe(
      (tagFilters) => this.updateFilterResults(tagFilters));
  }
  ngOnDestroy() {
    this.tagsUpdatedEventSubscription?.unsubscribe();
  }

  openDropDown(e: MouseEvent): void {
    e.stopPropagation();
    this.filterHintEventSubject?.next();
  }

  setModalImg(image: PortfolioImage): void {
    this.modalImg.nativeElement.src = image.url;
  }

  private updateFilterResults(tagFilters: ImageTag[]): void {
    var filteredImages = this.images?.filter(image => tagFilters.some(tag => image.tags.includes(tag)));
    this.filteredImagesUpdatedEvent.emit(filteredImages);
  }
}
