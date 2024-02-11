import { MODELS, defaults } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const reset = <RM = MODELS.Resource, SM = MODELS.State>(
  state: SM,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  action: MODELS.Action<MODELS.ReducerTypes, null>,
): SM => ({
  ...state,
  ...defaults.state,
});

export const setItem = <RM = MODELS.Resource, SM = MODELS.State>(
  state: SM,
  action: MODELS.Action<MODELS.ReducerTypes, RM>,
): SM => ({
  ...state,
  item: action.payload as RM,
});

export const setList = <RM = MODELS.Resource, SM = MODELS.State>(
  state: SM,
  action: MODELS.Action<MODELS.ReducerTypes, RM[]>,
): SM => ({
  ...state,
  list: action.payload as RM[],
});
