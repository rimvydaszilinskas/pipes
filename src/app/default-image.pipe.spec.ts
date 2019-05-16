import { DefaultImagePipe } from './default-image.pipe';

describe('DefaultImagePipe', () => {
  let pipe: DefaultImagePipe;

  beforeAll(() => {
    pipe = new DefaultImagePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return the same string', () => {
    expect(pipe.transform('http://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', ''))
      .toEqual('http://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png');
  });

  it('return https insted of http', () => {
    expect(pipe.transform('http://google.com', 'http://yahoo.com', true))
      .toEqual('https://google.com');
  });

  it('return callback instead', () => {
    expect(pipe.transform('google.com', 'https://yahoo.com'))
      .toEqual('https://yahoo.com');
  });

  it('return sad smiley face', () => {
    expect(pipe.transform('google.com', 'yahoo.com'))
      .toEqual('https://upload.wikimedia.org/wikipedia/commons/e/e9/Sad_face.svg');
  });
});
