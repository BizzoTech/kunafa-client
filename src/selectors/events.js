// @flow
import {
  createSelector
} from 'reselect';
import R from 'ramda';
import type {State} from '../types';

const eventsSelector = (state: State) => state.events;

const interestingEventsSelector = createSelector(eventsSelector, events => {
  return R.values(events).filter(event => event.relevantDocsIds !== undefined && event.relevantDocsIds.length > 0);
})

const sortedEventsSelector = createSelector(interestingEventsSelector, events => {
  return R.sort((e1, e2) => e1.createdAt - e2.createdAt, events);
})

export const eventsByRelevantDocSelector = createSelector(sortedEventsSelector, (events) => {
  const eventsWithDocIds = R.flatten(events.map(event => {
    return event.relevantDocsIds.map(docId => {
      return {
        ...event,
        docId
      }
    });
  }));
  const eventsGroupedByDocId = R.groupBy(event => event.docId, eventsWithDocIds);
  return R.map(events => {
    return events.filter(event => {
      const appliedOnClientRev: ?string = R.path(['appliedOnClient', event.docId
      ], event);
      return appliedOnClientRev === undefined
    });
  }, eventsGroupedByDocId);
})
