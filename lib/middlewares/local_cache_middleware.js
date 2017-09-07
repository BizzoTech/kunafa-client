'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeOldDocs = async function removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) {
  var items = await cacheStore.getAll();
  var docs = items.filter(function (item) {
    return item && cacheDocTypes.includes(item.type);
  });
  var sortedDocs = _ramda2.default.sort(function (d1, d2) {
    return d2.fetchedAt - d1.fetchedAt;
  }, docs.filter(function (d) {
    return !(keepInCache(d, state) || d._id === state.currentProfile._id);
  }));
  if (sortedDocs.length > cacheLimit) {
    var toBeRemovedDocs = _ramda2.default.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = toBeRemovedDocs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var doc = _step.value;

        await cacheStore.delete(doc._id);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

exports.default = function (store, _ref) {
  var cacheDocTypes = _ref.cacheDocTypes,
      cacheLimit = _ref.cacheLimit,
      keepInCache = _ref.keepInCache,
      cacheStore = _ref.cacheStore;
  return function (next) {
    setTimeout(async function () {
      var items = await cacheStore.getAll();
      next({
        type: 'LOAD_DOCS_FROM_CACHE',
        docs: items.filter(function (item) {
          return item && cacheDocTypes.includes(item.type);
        })
      });
    }, 200);

    return function (action) {
      var result = next(action);

      setTimeout(async function () {
        if (action.type === 'LOAD_DOCS') {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = action.docs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var doc = _step2.value;

              await cacheStore.save(doc._id, doc);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (action.docs.length > 1) {
            removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
          }
        }
      }, 0);

      return result;
    };
  };
};