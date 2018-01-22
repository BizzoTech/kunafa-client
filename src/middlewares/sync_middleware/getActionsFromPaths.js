const R = require("ramda");

export const getDocs = (state, action) => [action.doc];

const getActionsFromPaths = syncPaths => {
  const actionsList = syncPaths.map(path => {
    const actions = R.pick(["insert", "update", "remove"], path.actions);
    const transformAction = action => {
      if (Array.isArray(action)) {
        return R.flatten(action.map(transformAction));
      }
      if (typeof action === "object") {
        return [
          {
            type: action.type,
            getDocs: action.getDocs || getDocs
          }
        ];
      }
      return [
        {
          type: action,
          getDocs
        }
      ];
    };
    return R.map(transformAction, actions);
  });

  return actionsList.reduce((result, actionObj) => {
    return {
      insert: [...result.insert, ...actionObj.insert],
      update: [...result.update, ...actionObj.update],
      remove: [...result.remove, ...actionObj.remove]
    };
  });
};

export default getActionsFromPaths;
