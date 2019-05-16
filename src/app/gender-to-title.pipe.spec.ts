import { GenderToTitlePipe } from './gender-to-title.pipe';

describe('GenderToTitlePipe', () => {
  let pipe: GenderToTitlePipe;

  beforeAll(() => {
    pipe = new GenderToTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Returns Mr. for male', () => {
    expect(pipe.transform('male'))
      .toEqual('Mr.');
  });

  it('Returns Ms./Mrs. for female', () => {
    expect(pipe.transform('female'))
      .toEqual('Ms./Mrs.');
  });

  it('Takes in capitalized gender Male and returns Mr.', () => {
    expect(pipe.transform('Male'))
      .toEqual('Mr.');
  });
});
