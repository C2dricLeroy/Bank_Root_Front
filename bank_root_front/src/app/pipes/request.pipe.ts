import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'request',
})
export class RequestPipe implements PipeTransform {
  transform(type: string): string {
    let color = '';
    switch (type) {
      case 'OVERDRAFT_LIMIT':
        color = 'bg-orange-800';
        break;
      case 'PAYMENT_CEILING':
        color = 'bg-blue-800';
        break;
      case 'WITHDRAWAL_LIMIT':
        color = 'bg-green-800';
        break;
    }
    return color;
  }
}
