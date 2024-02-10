import { BaseStateModel, BaseActionModel, BaseResourceModel, BaseReducerTypes, defaults } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const reset = <RM = BaseResourceModel, SM = BaseStateModel>(
  state: SM,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  action: BaseActionModel<BaseReducerTypes, null>,
): SM => ({
  ...state,
  ...defaults.state,
});

export const setItem = <RM = BaseResourceModel, SM = BaseStateModel>(
  state: SM,
  action: BaseActionModel<BaseReducerTypes, RM>,
): SM => ({
  ...state,
  item: action.payload as RM,
});

export const setList = <RM = BaseResourceModel, SM = BaseStateModel>(
  state: SM,
  action: BaseActionModel<BaseReducerTypes, RM[]>,
): SM => ({
  ...state,
  list: action.payload as RM[],
});
