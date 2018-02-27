import { SET_PRESENCE_FILTER, setPresenceFilter } from '../src/actions/zoo'
import { filter } from '../src/reducers'

describe('PresenceFilter', () => {

  it('there should be a SET_PRESENCE_FILTER action type', () => {
    expect(SET_PRESENCE_FILTER).toEqual(expect.any(String));
  });

  it('there should be setPresenceFilter action creator', () => {
    const action = setPresenceFilter();
    expect(action).toMatchObject({ type: SET_PRESENCE_FILTER });
  });

  it('there should be a filter field', () => {
    const action = setPresenceFilter('present');
    expect(action).toMatchObject({ filter: 'present' });
  });

  describe('presenceFilter reducer', () => {

    it('there should be a presenceFilter reducer', () => {
      expect(setPresenceFilter).toEqual(expect.any(Function));
    });

    it('initial state should be "all"', () => {
      const state = filter(undefined, {});    
      expect(state).toBe('all');
    });

    it('should return the same state if no relevant action', () => {
      const state = filter('absent', {});
      expect(state).toBe('absent');
    });

    it('should react tp setPresenceFilter action', () => {
      const state = filter('present', setPresenceFilter('absent'));
      expect(state).toBe('absent');
    });

  });

});
