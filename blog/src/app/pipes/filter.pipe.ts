import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    return value.filter(val => {
      return val.title.toLowerCase().includes(filterText);
    })
  }

}
