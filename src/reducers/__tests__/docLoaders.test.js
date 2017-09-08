import docLoaders from '../docLoaders';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe("DocLoaders reducer", () => {

  it('should have initial state', () => {
    expect(docLoaders(undefined, {})).toEqual(defaultState);
  });

  it('should handle CREATE_DOCS_LOADER', () => {
    const state = defaultState;
    const action = {
      type: 'CREATE_DOCS_LOADER',
      loaderName: 'TestLoader',
      query: {
        testProp: 123
      }
    }
    const result = {
      TestLoader: {
        query: {
          testProp: 123
        },
        loaded: 0,
        endReached: false
      }
    }
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

  it('should handle REMOVE_DOCS_LOADER', () => {
    const state = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 45,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    const action = {
      type: 'REMOVE_DOCS_LOADER',
      loaderName: 'TestLoader1'
    }
    const result = {
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

  it('LOAD_DOCS should update relevant docLoader', () => {
    const state = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 45,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    const action = {
      type: 'LOAD_DOCS',
      loaderName: 'TestLoader1',
      docs: ['doc1', 'doc2']
    }
    const result = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 47,
        endReached: true
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

  it('LOAD_DOCS should only update relevant docLoader', () => {
    const state = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 45,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    const action = {
      type: 'LOAD_DOCS',
      docs: ['doc1', 'doc2']
    }
    const result = state;
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

  it('should handle REFRESH_LOADER', () => {
    const state = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 45,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    const action = {
      type: 'REFRESH_LOADER',
      loaderName: 'TestLoader1'
    }
    const result = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 0,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

  it('should not REFRESH_LOADER if not found', () => {
    const state = {
      TestLoader1: {
        query: {
          testProp: 123
        },
        loaded: 45,
        endReached: false
      },
      TestLoader2: {
        query: {
          testProp: 456
        },
        loaded: 10,
        endReached: false
      }
    };
    const action = {
      type: 'REFRESH_LOADER',
      loaderName: 'TestLoader3'
    }
    const result = state;
    Reducer(docLoaders).withState(state).expect(action).toReturnState(result);
  });

});
