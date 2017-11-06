import R from 'ramda';

export default(store, {processLocalEvent, isConnected}) => next => action => {
  if (action.type === 'PROCESS_LOCAL_ONLY') {
    return isConnected().then(isConnected => {
      //console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      if (isConnected) {
        const localOnlyEvents = R.sort((a1, a2) => a1.createdAt - a2.createdAt, R.values(store.getState().events).filter(R.prop('localOnly')))
        if (localOnlyEvents.length < 1) {
          return
        }
        next({type: 'START_PROCESSING_LOCAL'});
        //console.log(localOnlyEvents);
        return (async () => {
          for (const event of localOnlyEvents) {
            try {
              await processLocalEvent(event, progress => {
                next({type: 'START_PROCESSING_LOCAL', progress});
              });
              next({
                type: 'UPDATE_EVENT',
                doc: {
                  ...event,
                  draft: "true",
                  localOnly: undefined
                }
              });
            } catch (e) {
              console.log(e);
            } finally {
              next({type: 'END_PROCESSING_LOCAL'});
            }
          }
        })();

      }
    });
  } else {
    return next(action);
  }
}
