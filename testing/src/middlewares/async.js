export default ({ dispatch }) => next => action => {
  // check if action is promise

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if action is promise

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };

    dispatch(newAction);
  });
};
