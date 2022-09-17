export abstract class IPortfolioImageService {
  public abstract getImages(...categories: ImageCategory[]): PortfolioImage[];
  public abstract getCategoriesFrom(images: PortfolioImage[]): ImageCategory[];
  public abstract getTagsFrom(images: PortfolioImage[]): ImageTag[];
}

export class PortfolioImage {
  /** Global counter for portfolio images */
  static idNum: number = 0;

  id: string;
  category: ImageCategory;
  url: string;
  tags: ImageTag[];
  
  public constructor(category: ImageCategory, url: string, tags?: ImageTag[]){
    this.id = String(PortfolioImage.idNum++);
    this.category = category;
    this.url = url;
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
  //Subject
  BeatGeneration,
  MentalHealth,
  Person,

  //Materials
  Cloth,
  Paper,


}