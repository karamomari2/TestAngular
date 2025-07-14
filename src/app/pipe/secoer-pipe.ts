import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secoer'
})
export class SecoerPipe implements PipeTransform {

  transform(nnumber:number):number {
    return nnumber*nnumber;
  }

}
