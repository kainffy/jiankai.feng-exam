import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showSorter'
})
export class ShowSorterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
