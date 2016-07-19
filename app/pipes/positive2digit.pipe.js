import { Pipe, PipeTransform } from '@angular/core';

//pipe numbers between 0 and 100 only
@Pipe({ name: 'positive2digit' })
export class Positive2DigitPipe implements PipeTransform {
  transform(value, args) {
    return value > 0 && value < 100;
  }
}
