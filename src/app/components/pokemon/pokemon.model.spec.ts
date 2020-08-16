import { Pokemon.Model } from './pokemon.model';

describe('Pokemon.Model', () => {
  it('should create an instance', () => {
    expect(new Pokemon.Model()).toBeTruthy();
  });
});
