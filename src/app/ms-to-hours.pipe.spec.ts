import { MsToHoursPipe } from './ms-to-hours.pipe';

describe('MsToHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new MsToHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
