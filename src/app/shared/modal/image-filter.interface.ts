import {Filter} from './filter.interface';

export interface ImageFilter {
  ISBN: Filter;
  TITLE: Filter;
  AUTHOR: Filter;
  IMAGE_TYPE: Filter;
  PUBLICATION_TYPE: Filter;
  COPYRIGHT: Filter;
  ELSEVIER_IMAGE: Filter;
}
