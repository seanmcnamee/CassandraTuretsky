import { Injectable } from '@angular/core';
import { IPortfolioImageService, PortfolioImage } from './portfolio-image.service.interface';

@Injectable()
export class PortfolioImageService implements IPortfolioImageService {

  constructor() { }
  public getImages(): PortfolioImage[] {
    throw new Error('Method not implemented.');
  }
}
