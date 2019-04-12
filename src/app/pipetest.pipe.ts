import { Pipe, PipeTransform } from '@angular/core';
import {isEmpty} from 'rxjs/operators';

@Pipe({
  name: 'test'
})
export class PipetestPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value === '') {
      return ('rotating_card_profile.png');

    }
    return value;
  }

}
