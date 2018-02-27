import { zoo, name, animal, presenceFilter } from '../src/reducers';

describe('CombineReducers', () => {
  
  it('all reducers should be combined into one single function chk1', () => {
    expect(zoo).toEqual(expect.any(Function));
  });

  it('should combine name', () => {
    expect(zoo(undefined, {})).toMatchObject({ name: 'Hoboken' });
  });

  it('should combine presenceFilter', () => {
    expect(zoo(undefined, {})).toMatchObject({ filter: 'all' });
  });

  it('should combine animals', () => {
    expect(zoo(undefined, {})).toMatchObject({ animals: [] });
  });

});
