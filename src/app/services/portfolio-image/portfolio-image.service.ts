import { Injectable } from '@angular/core';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from './portfolio-image.service.interface';

@Injectable()
export class PortfolioImageService implements IPortfolioImageService {
  portfolioImages: PortfolioImage[] = this.instantiateImages();

  constructor() { }

  public getImages(...categories: ImageCategory[]): PortfolioImage[] {
    return this.portfolioImages.filter(image => categories.includes(image.category));
  }
  
  public getCategoriesFrom(images: PortfolioImage[]): ImageCategory[] {
    var imagesAsCategories = images.map(image => image.category);
    var uniqueCategories = Array.from(new Set(imagesAsCategories));
    var sortedCategories = uniqueCategories.sort((a, b) => ImageCategory[a].localeCompare(ImageCategory[b]));
    return sortedCategories;
  }

  public getTagsFrom(images: PortfolioImage[]): ImageTag[] {
    console.log("PortfolioImageService.getTagsFrom(images: ", images);

    var imagesAsTagArrays = images.map(image => image.tags);
    var imagesAsFlattenedTags = Array.prototype.concat.apply([], imagesAsTagArrays) as ImageTag[];
    var uniqueTags = Array.from(new Set(imagesAsFlattenedTags));
    var sortedTags = uniqueTags.sort((a, b) => ImageTag[a].localeCompare(ImageTag[b]))
    return sortedTags;
  }


  instantiateImages(): PortfolioImage[] {
    return [
      //Drawings
      new PortfolioImage(ImageCategory.Drawing, ""),
      new PortfolioImage(ImageCategory.Drawing, ""),
      new PortfolioImage(ImageCategory.Drawing, ""),
      new PortfolioImage(ImageCategory.Drawing, ""),

      //Paintings
      new PortfolioImage(ImageCategory.Painting, ""),
      new PortfolioImage(ImageCategory.Painting, ""),
      new PortfolioImage(ImageCategory.Painting, ""),
      new PortfolioImage(ImageCategory.Painting, ""),

      //Photography
      new PortfolioImage(ImageCategory.Photography, ""),
      new PortfolioImage(ImageCategory.Photography, ""),
      new PortfolioImage(ImageCategory.Photography, ""),
      new PortfolioImage(ImageCategory.Photography, ""),

      //Printmaking
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/BeatGeneration-Collage-1.jpeg", [ImageTag.BeatGeneration]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/BeatGeneration-Collage-2.jpeg", [ImageTag.BeatGeneration]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/BeatGeneration-Red.jpeg", [ImageTag.BeatGeneration]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/StoryBoard.jpeg"),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/121.jpeg"),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/Bodies-Sewn-Collage.jpeg", [ImageTag.Person]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/Cassie-Stomach.jpeg", [ImageTag.Person]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/Sean-Neck.jpeg", [ImageTag.Person]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/Sean-Knees.jpeg", [ImageTag.Person]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/Sean-Eating.jpeg", [ImageTag.Person]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/ClothesLine-Closeup-1.jpeg", [ImageTag.Cloth]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/ClothesLine-WithStream-1.jpeg", [ImageTag.Cloth]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/ClothesLine-Closeup-2.jpeg", [ImageTag.Cloth]),
      new PortfolioImage(ImageCategory.Printmaking, "/assets/portfolio/printmaking/ClothesLine-WithStream-2.jpeg", [ImageTag.Cloth]),

      //Sculpture
      new PortfolioImage(ImageCategory.Sculpture, ""),
      new PortfolioImage(ImageCategory.Sculpture, ""),
      new PortfolioImage(ImageCategory.Sculpture, ""),
      new PortfolioImage(ImageCategory.Sculpture, ""),
    ];
  }
}
