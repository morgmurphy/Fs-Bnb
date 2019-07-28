import { Listing } from './listing';

describe('Listing', () => {
  it('should create an instance', () => {
    expect(new Listing(String, String, String)).toBeTruthy();
  });
});
