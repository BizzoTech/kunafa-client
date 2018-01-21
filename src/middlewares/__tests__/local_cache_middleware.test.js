import localCacheMiddleware from "../local_cache_middleware";

const items = [
  {
    _id: "doc_1",
    type: "type1",
    fetchedAt: 2
  },
  {
    _id: "doc_2",
    type: "type2",
    fetchedAt: 3
  },
  {
    _id: "doc_3",
    type: "type_3",
    fetchedAt: 1
  }
];
const config = {
  cacheDocTypes: ["type1", "type2"],
  cacheLimit: 20,
  keepInCache: () => false,
  cacheStore: {
    getAll: async () => items
  }
};

describe("Local cache middleware test", () => {
  //jest.useFakeTimers();

  it("should load docs from cache when initialized", done => {
    const _config = {
      ...config,
      cacheStore: {
        getAll: jest.fn(async () => items)
      }
    };
    const next = jest.fn();
    localCacheMiddleware({}, _config)(next);

    setTimeout(() => {
      expect(_config.cacheStore.getAll).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toBeCalledWith({
        type: "LOAD_DOCS_FROM_CACHE",
        docs: [
          {
            _id: "doc_1",
            type: "type1",
            fetchedAt: 2
          },
          {
            _id: "doc_2",
            type: "type2",
            fetchedAt: 3
          }
        ]
      });
      done();
    }, 300);
  });

  it("shoud pass action to next middleware", () => {
    const action = {
      type: "ANY_ACTION"
    };
    const next = jest.fn();
    localCacheMiddleware({}, config)(next)(action);
    expect(next).toBeCalledWith(action);
  });

  it("should save loaded docs", done => {
    const _config = {
      ...config,
      cacheStore: {
        getAll: jest.fn(async () => items),
        save: jest.fn()
      }
    };
    const next = jest.fn();
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "new_doc",
          type: "type1"
        },
        {
          _id: "no_cache_doc",
          type: "any_type"
        }
      ]
    };
    const store = {
      getState: jest.fn()
    };
    localCacheMiddleware(store, _config)(next)(action);
    setTimeout(() => {
      expect(_config.cacheStore.save).toHaveBeenCalledTimes(1);
      expect(_config.cacheStore.save).toBeCalledWith("new_doc", {
        _id: "new_doc",
        type: "type1"
      });
      done();
    }, 50);
  });

  it("should remove oldest docs when cached items > cacheLimit", done => {
    const _config = {
      ...config,
      cacheLimit: 1,
      cacheStore: {
        getAll: jest.fn(async () => items),
        save: jest.fn(),
        delete: jest.fn()
      }
    };
    const next = jest.fn();
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "new_doc",
          type: "type1"
        },
        {
          _id: "no_cache_doc",
          type: "any_type"
        }
      ]
    };
    const store = {
      getState: jest.fn()
    };
    localCacheMiddleware(store, _config)(next)(action);
    setTimeout(() => {
      expect(_config.cacheStore.delete).toHaveBeenCalledTimes(1);
      expect(_config.cacheStore.delete).toBeCalledWith("doc_1");
      done();
    }, 50);
  });
});
