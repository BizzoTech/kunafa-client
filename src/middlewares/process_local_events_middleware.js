import R from 'ramda';


const processEvents = async (processLocalEvent, events, next) => {
  next({ type: 'START_PROCESSING_LOCAL' });
  try {
    for (const event of events) {
      await processLocalEvent(event, progress => {
        next({ type: 'START_PROCESSING_LOCAL', progress });
      });
      next({
        type: 'UPDATE_EVENT',
        doc: {
          ...event,
          draft: "true",
          localOnly: undefined
        }
      });
    }
  } catch (e) {
    console.log(e);
  } finally {
    next({ type: 'END_PROCESSING_LOCAL' });
  }
}


export default (store, { processLocalEvent, isConnected }) => next => async (action) => {
  if (action.type === 'PROCESS_LOCAL_ONLY') {
    if (await isConnected()) {
      const localOnlyEvents = R.sort((a1, a2) => a1.createdAt - a2.createdAt, R.values(store.getState().events).filter(R.prop('localOnly')))
      if (localOnlyEvents.length < 1) {
        return
      }
      return processEvents(processLocalEvent, localOnlyEvents, next);
    }
  } else {
    return next(action);
  }
}
