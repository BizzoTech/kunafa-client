const getDefaultAction = act => {
  let action = act;
  if (Array.isArray(action)) {
    action = action[0];
  }
  if (typeof action === "string") {
    return action;
  } else {
    return action.type;
  }
};

export default getDefaultAction;
