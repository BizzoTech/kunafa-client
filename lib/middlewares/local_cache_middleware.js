'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var removeOldDocs = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) {
    var items, docs, sortedDocs, toBeRemovedDocs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return cacheStore.getAll();

          case 2:
            items = _context.sent;
            docs = items.filter(function (item) {
              return item && cacheDocTypes.includes(item.type);
            });
            sortedDocs = _ramda2.default.sort(function (d1, d2) {
              return d2.fetchedAt - d1.fetchedAt;
            }, docs.filter(function (d) {
              return !(keepInCache(d, state) || d._id === state.currentProfile._id);
            }));

            if (!(sortedDocs.length > cacheLimit)) {
              _context.next = 33;
              break;
            }

            toBeRemovedDocs = _ramda2.default.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = toBeRemovedDocs[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 19;
              break;
            }

            doc = _step.value;
            _context.next = 16;
            return cacheStore.delete(doc._id);

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context['catch'](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(25);

          case 33:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[10, 21, 25, 33], [26,, 28, 32]]);
  }));

  return function removeOldDocs(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = function (store, _ref2) {
  var cacheDocTypes = _ref2.cacheDocTypes,
      cacheLimit = _ref2.cacheLimit,
      keepInCache = _ref2.keepInCache,
      cacheStore = _ref2.cacheStore;
  return function (next) {
    setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var items;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return cacheStore.getAll();

            case 2:
              items = _context2.sent;

              next({
                type: 'LOAD_DOCS_FROM_CACHE',
                docs: items.filter(function (item) {
                  return item && cacheDocTypes.includes(item.type);
                })
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })), 200);

    return function (action) {
      var result = next(action);

      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(action.type === 'LOAD_DOCS')) {
                  _context3.next = 28;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 4;
                _iterator2 = action.docs[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 13;
                  break;
                }

                doc = _step2.value;
                _context3.next = 10;
                return cacheStore.save(doc._id, doc);

              case 10:
                _iteratorNormalCompletion2 = true;
                _context3.next = 6;
                break;

              case 13:
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3['catch'](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 19:
                _context3.prev = 19;
                _context3.prev = 20;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 22:
                _context3.prev = 22;

                if (!_didIteratorError2) {
                  _context3.next = 25;
                  break;
                }

                throw _iteratorError2;

              case 25:
                return _context3.finish(22);

              case 26:
                return _context3.finish(19);

              case 27:
                if (action.docs.length > 1) {
                  removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
                }

              case 28:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined, [[4, 15, 19, 27], [20,, 22, 26]]);
      })), 0);

      return result;
    };
  };
};