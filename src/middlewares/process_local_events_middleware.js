import Promise from 'bluebird';

import R from 'ramda';

export default(store, {
  processLocalEvent,
  isConnected
}) => next => action => {
  if(action.type === 'PROCESS_LOCAL_ONLY') {
    isConnected().then(isConnected => {
      //console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      if(isConnected) {
        const localOnlyEvents = R.sort((a1, a2) => a1.createdAt - a2.createdAt, R.values(store.getState().events).filter(R.prop('localOnly')))
        if(localOnlyEvents.length < 1) {
          return
        }
        next({
          type: 'START_PROCESSING_LOCAL'
        });
        //console.log(localOnlyEvents);
        Promise.each(localOnlyEvents, (event, index, length) => {
          return processLocalEvent(event, progress => {
            next({
              type: 'START_PROCESSING_LOCAL',
              progress
            });
          }).then(event => {
            setTimeout(() => {
              next({
                type: 'UPDATE_EVENT',
                doc: {
                  ...event,
                  draft: "true",
                  localOnly: undefined
                }
              });
            }, 0);
          });
        }).catch(console.log).finally(() => {
          next({
            type: 'END_PROCESSING_LOCAL'
          });
        });
      }
    });
  } else {
    return next(action);
  }
}
