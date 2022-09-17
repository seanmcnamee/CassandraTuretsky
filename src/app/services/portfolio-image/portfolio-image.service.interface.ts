export abstract class IPortfolioImageService {
  public abstract getImages(): PortfolioImage[];
}

export class PortfolioImage {
  /** Global counter for portfolio images */
  static idNum: number = 0;

  id: string;
  category: ImageCategory;
  imageUrl: string;
  tags: ImageTag[];
  
  public constructor(category: ImageCategory, imageUrl: string, tags?: ImageTag[]){
    this.id = String(PortfolioImage.idNum++);
    this.category = category;
    this.imageUrl = imageUrl;
    this.tags = tags ?? [];
  }
}

export enum ImageCategory {
  Drawing,
  Painting,
  Photography,
  Printmaking,
  Sculpture
}

export enum ImageTag {

}