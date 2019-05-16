import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderToTitle'
})
export class GenderToTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase() === 'MALE' ? 'Mr.' : value.toUpperCase() === 'FEMALE' ? 'Ms./Mrs.' : 'NaN';
  }

}
