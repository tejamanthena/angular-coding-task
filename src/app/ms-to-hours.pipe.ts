import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToHours',
})

export class MsToHoursPipe implements PipeTransform {

  transform(time: number): string {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    let hours = Math.floor((time / hour) % 24);
    let minutes = Math.floor((time / minute) % 60);
    let seconds = Math.floor((time / second) % 60);

    return `${hours} h` + ' : ' + `${minutes} m` + ' : ' + `${seconds} s`;
  }

}
