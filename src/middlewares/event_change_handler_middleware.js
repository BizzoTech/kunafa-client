const R = require("ramda");

const checkToArchive = event => {
  if (!event.relevantDocsIds || event.relevantDocsIds.length === 0) {
    return true;
  }
  return (
    event.appliedOn &&
    event.appliedOnClient &&
    Object.keys(event.appliedOn).every(docId => event.appliedOnClient[docId])
  );
};

export default (store, { actionCreators }) => next => action => {
  let result = next(action);

  if (action.type === "LOAD_EVENTS") {
    for (const event of action.events) {
      if (
        event.relevantDocsIds &&
        event.relevantDocsIds.length > 0 &&
        event.status !== "archived" &&
        !checkToArchive(event)
      ) {
        next(event.action);
      }
    }
  }

  if (action.type === "UPDATE_EVENT" || action.type === "ADD_EVENT") {
    if (!action.doc.draft && action.doc.appliedOn) {
      for (const docId of Object.keys(action.doc.appliedOn)) {
        store.dispatch(
          actionCreators.fetchDoc({
            _id: docId
          })
        );
      }
    }
  }

  return result;
};
