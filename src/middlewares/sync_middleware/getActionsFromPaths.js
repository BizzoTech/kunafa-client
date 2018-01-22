export const getDocs = (state, action) => [action.doc];

const getActionsFromPaths = syncPaths => {
  const mergedActions = {
    insert: [],
    update: [],
    remove: []
  };
  const mergeAction = actName => action => {
    if (typeof action === "string") {
      mergedActions[actName].push({
        type: action,
        getDocs
      });
    }
    if (typeof action === "object") {
      mergedActions[actName].push({
        type: action.type,
        getDocs: action.getDocs || getDocs
      });
    }
  };
  syncPaths.forEach(path => {
    if (Array.isArray(path.actions.insert)) {
      path.actions.insert.forEach(mergeAction("insert"));
    } else {
      mergeAction("insert")(path.actions.insert);
    }

    if (Array.isArray(path.actions.update)) {
      path.actions.update.forEach(mergeAction("update"));
    } else {
      mergeAction("update")(path.actions.update);
    }

    if (Array.isArray(path.actions.remove)) {
      path.actions.remove.forEach(mergeAction("remove"));
    } else {
      mergeAction("remove")(path.actions.remove);
    }
  });
  return mergedActions;
};

export default getActionsFromPaths;
