import R from 'ramda';

const removeOldDocs = async(cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) => {
  const items = await cacheStore.getAll();
  const docs = items.filter(item => item && cacheDocTypes.includes(item.type));
  const sortedDocs = R.sort((d1, d2) => d2.fetchedAt - d1.fetchedAt, docs.filter(d => !(keepInCache(d, state) || d._id === state.currentProfile._id)));
  if(sortedDocs.length > cacheLimit) {
    const toBeRemovedDocs = R.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
    for(let doc of toBeRemovedDocs) {
      await cacheStore.delete(doc._id);
    }
  }
}

export default(store, {
  cacheDocTypes,
  cacheLimit,
  keepInCache,
  cacheStore
}) => next => {
  setTimeout(async() => {
    const items = await cacheStore.getAll();
    next({
      type: 'LOAD_DOCS_FROM_CACHE',
      docs: items.filter(item => item && cacheDocTypes.includes(item.type))
    });
  }, 200);

  return action => {
    let result = next(action);

    setTimeout(async() => {
      if(action.type === 'LOAD_DOCS') {
        for(const doc of action.docs) {
          await cacheStore.save(doc._id, doc);
        }
        if(action.docs.length > 1) {
          removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
        }
      }
    }, 0);

    return result;
  }
}
