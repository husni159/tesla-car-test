import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseHyphen'
})
export class LowercaseHyphenPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      // Convert to lowercase and replace spaces with hyphens
      return value.toLowerCase().replace(/\s+/g, '-');
    }
    return value;
  }
}
