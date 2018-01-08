import uuid from 'uuid';

const R = require('ramda');

import kunafaSelectors from '../selectors';
const {
  eventsByRelevantDocSelector
} = kunafaSelectors;

export default (store, config) => {
  const {
    localOnlyActions,
    needLocalProcessing,
    getActionPreProcessors,
    getActionPostProcessors,
    getRelevantDocsIds,
    deviceInfo
  } = config;
  const createEvent = (action, state) => {
    const eventsList = R.values(state.events);
    const localOnlyEvents = eventsList.filter(R.prop('localOnly'));
    const localProcessingDocumentsIds = R.flatten(localOnlyEvents.map(event => event.relevantDocsIds));
    const relevantDocsIds = getRelevantDocsIds(action);
    const shouldWaitForOtherAction = relevantDocsIds.some(docId => localProcessingDocumentsIds.includes(docId));

    const localOnly = needLocalProcessing.includes(action.type) || shouldWaitForOtherAction;
    const _id = state.currentProfile._id ?
      `${state.currentProfile._id}-${Date.now()}-${action.type}` :
      `anonymous-${deviceInfo.device_unique_id}-${Date.now()}-${action.type}`;
    return {
      _id,
      type: "EVENT",
      draft: "true",
      localOnly: localOnly ?
        "true" : undefined,
      action,
      relevantDocsIds: getRelevantDocsIds(action),
      preProcessors: getActionPreProcessors(action),
      postProcessors: getActionPostProcessors(action),
      status: "draft",
      info: deviceInfo,
      createdAt: Date.now(),
      createdBy: (state.currentProfile._id || "anonymous")
    }
  }

  return next => action => {

    if (!localOnlyActions.includes(action.type) && action.type !== 'ADD_PROFILE') {
      setTimeout(() => {
        next({
          type: 'ADD_EVENT',
          doc: createEvent(action, store.getState())
        });
      }, 0);
    }

    let result = next(action);


    if (action.type === 'LOAD_DOCS' || action.type === 'LOAD_DOCS_FROM_CACHE') {
      setTimeout(() => {
        const eventsByRelevantDoc = eventsByRelevantDocSelector(store.getState());
        action.docs.forEach(doc => {
          const docEvents = eventsByRelevantDoc[doc._id] || [];
          updateEventsToSetAppliedOnClient(doc, docEvents, next);
        });
      }, 0);
    }

    return result;

  }
}

const updateEventsToSetAppliedOnClient = (doc, docEvents, next) => {
  docEvents.forEach(event => {
    const isAppliedOn = event.appliedOn && event.appliedOn[doc._id];
    if (isAppliedOn && event.appliedOn[doc._id] <= doc._rev) {
      event.appliedOnClient = event.appliedOnClient || {};
      if (!event.appliedOnClient[doc._id]) {
        next({
          type: 'UPDATE_EVENT',
          doc: {
            ...event,
            draft: true,
            appliedOnClient: {
              ...(event.appliedOnClient),
              [doc._id]: doc._rev
            }
          }
        });
      }
    } else {
      next(event.action);
    }
  });
}