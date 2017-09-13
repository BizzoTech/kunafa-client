function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import R from 'ramda';

const removeOldDocs = (() => {
  var _ref = _asyncToGenerator(function* (cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) {
    const items = yield cacheStore.getAll();
    const docs = items.filter(function (item) {
      return item && cacheDocTypes.includes(item.type);
    });
    const sortedDocs = R.sort(function (d1, d2) {
      return d2.fetchedAt - d1.fetchedAt;
    }, docs.filter(function (d) {
      return !(keepInCache(d, state) || d._id === state.currentProfile._id);
    }));
    if (sortedDocs.length > cacheLimit) {
      const toBeRemovedDocs = R.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
      for (let doc of toBeRemovedDocs) {
        yield cacheStore.delete(doc._id);
      }
    }
  });

  return function removeOldDocs(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
})();

export default ((store, {
  cacheDocTypes,
  cacheLimit,
  keepInCache,
  cacheStore
}) => next => {
  setTimeout(_asyncToGenerator(function* () {
    const items = yield cacheStore.getAll();
    next({
      type: 'LOAD_DOCS_FROM_CACHE',
      docs: items.filter(function (item) {
        return item && cacheDocTypes.includes(item.type);
      })
    });
  }), 200);

  return action => {
    let result = next(action);

    setTimeout(_asyncToGenerator(function* () {
      if (action.type === 'LOAD_DOCS') {
        for (const doc of action.docs) {
          yield cacheStore.save(doc._id, doc);
        }
        if (action.docs.length > 1) {
          removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
        }
      }
    }), 0);

    return result;
  };
});