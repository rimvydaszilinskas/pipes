import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], minSalary: number): any {
    return items.filter(item => item.annualSalary >= minSalary);
  }

}
