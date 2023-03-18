import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'request',
})
export class RequestPipe implements PipeTransform {
  transform(type: string): string {
    let color = '';
    switch (type) {
      case 'OVERDRAFT_LIMIT':
        color = 'orange';
        break;
      case 'PAYMENT_CEILING':
        color = 'cyan';
        break;
    }
    return type.toLowerCase();
  }
}
