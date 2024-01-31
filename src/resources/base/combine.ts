// @ts-nocheck

export const createReducer = (combinedReducers) => {
  return (state, action) => {
    if (!combinedReducers[action.type])
      throw new Error(`${typeof combinedReducers} does not have a ${action.type} reducer`);
    const func = combinedReducers[action.type];
    return func ? func(state, action) : state;
  };
};
