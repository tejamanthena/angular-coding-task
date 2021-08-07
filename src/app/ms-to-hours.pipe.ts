import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToHours'
})

export class MsToHoursPipe implements PipeTransform {

  transform(milliseconds: number): string {

  let hours = milliseconds / (1000*60*60);
  let absoluteHours = Math.floor(hours);
  let hrs = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  let minutes = (hours - absoluteHours) * 60;
  let absoluteMinutes = Math.floor(minutes);
  let mins = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

  let seconds = (minutes - absoluteMinutes) * 60;
  let absoluteSeconds = Math.floor(seconds);
  let secs = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;


  return `${hrs} H` + ' : ' + `${mins} M`;
    
  }
}
