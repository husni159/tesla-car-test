import { LowercaseHyphenPipe } from './lowercase-hyphen.pipe';

describe('LowercaseHyphenPipe', () => {
  it('create an instance', () => {
    const pipe = new LowercaseHyphenPipe();
    expect(pipe).toBeTruthy();
  });
});
