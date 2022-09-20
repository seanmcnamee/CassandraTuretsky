import { Injectable } from '@angular/core';
import { ImageCategory, ImageTag, IPortfolioImageService, PortfolioImage } from './portfolio-image.service.interface';

@Injectable()
export class PortfolioImageService implements IPortfolioImageService {
  portfolioImages: PortfolioImage[] = this.instantiateImages();

  constructor() { }

  public getImages(...categories: ImageCategory[]): PortfolioImage[] {
    return this.portfolioImages.filter(image => categories.includes(image.category));
  }
  
  public getCategoriesFrom(images?: PortfolioImage[]): ImageCategory[] {
    var imagesAsCategories = images?.map(image => image.category);
    var uniqueCategories = Array.from(new Set(imagesAsCategories));
    var sortedCategories = uniqueCategories.sort((a, b) => ImageCategory[a].localeCompare(ImageCategory[b]));
    return sortedCategories;
  }

  public getTagsFrom(images?: PortfolioImage[]): ImageTag[] {
    if (!images) return [];

    var imagesAsTagArrays = images.map(image => image.tags);
    var imagesAsFlattenedTags = Array.prototype.concat.apply([], imagesAsTagArrays) as ImageTag[];
    var uniqueTags = Array.from(new Set(imagesAsFlattenedTags));
    var sortedTags = uniqueTags.sort((a, b) => ImageTag[a].localeCompare(ImageTag[b]));

    //ImageTag.None should be the last option
    if (sortedTags.includes(ImageTag.None)) {
      sortedTags.splice(sortedTags.indexOf(ImageTag.None), 1);
      sortedTags.push(ImageTag.None);
    }
    return sortedTags;
  }


  instantiateImages(): PortfolioImage[] {
    return [
      //Drawings
      new PortfolioImage(ImageCategory.Drawing, "assets/portfolio/drawing/cassie-double.jpeg"),
      new PortfolioImage(ImageCategory.Drawing, "assets/portfolio/drawing/cassie-livingroom.jpeg"),

      //Paintings
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/cassie-bed.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/hands-teapot.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/hands-bed.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/girl-forest.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/face-picked.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/body-cuts.jpeg"),
      new PortfolioImage(ImageCategory.Painting, "assets/portfolio/painting/abstract-1.jpeg"),

      //Photography
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/jukebox-1.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/jukebox-2.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/cassie-lindsay.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/winter-outside.jpg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/cassie-blurryface.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/vermont-car-windshield.jpg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/docks-water.jpg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/marissa-connor-ghosts.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/vermont-outside.jpg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/vermont-dahole.jpg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/marissa-bridge.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/marissa-stairs.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/marissa-pebble.jpeg"),
      new PortfolioImage(ImageCategory.Photography, "assets/portfolio/photography/marissa-jeep.jpeg"),

      //Printmaking
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/BeatGeneration-Collage-1.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/BeatGeneration-Collage-2.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/BeatGeneration-Red.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/StoryBoard.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/121.jpeg", [ImageTag.Intaglio]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/Bodies-Sewn-Collage.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/Cassie-Stomach.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/Sean-Neck.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/Sean-Knees.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/Sean-Eating.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/ClothesLine-Closeup-1.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/ClothesLine-WithStream-1.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/ClothesLine-Closeup-2.jpeg", [ImageTag.SilkScreen]),
      new PortfolioImage(ImageCategory.Printmaking, "assets/portfolio/printmaking/ClothesLine-WithStream-2.jpeg", [ImageTag.SilkScreen]),

      //Sculpture
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/little-man.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/bookhouse-1.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/bookhouse-2.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/bookhouse-3.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/bookhouse-4.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/cassie-stomach-1.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/cassie-stomach-2.jpeg"),
      new PortfolioImage(ImageCategory.Sculpture, "assets/portfolio/sculpture/cassie-chest-ribs.jpeg"),
    ];
  }
}
