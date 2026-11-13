import Farmland from '../Farmland';
import TileImprovement from '@civ-clone/core-tile-improvement/TileImprovement';
import { expect } from 'chai';

describe('Farmland', (): void => {
  it('should be a tile improvement', (): void => {
    expect(Farmland.prototype).to.be.instanceOf(TileImprovement);
  });
});
