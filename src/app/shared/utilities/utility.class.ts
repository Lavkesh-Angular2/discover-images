import {MediaChange} from '@angular/flex-layout';

export class Utility {

  public static isMobileLayout(change: MediaChange) {
    return change.mqAlias === 'xs' || change.mqAlias === 'sm';
  }

}
