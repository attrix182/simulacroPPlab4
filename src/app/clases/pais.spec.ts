import { Pais } from './pais';

describe('Pais', () => {
  it('should create an instance', () => {
    expect(new Pais("Argentina","", "ARG")).toBeTruthy();
  });
});
