import { BaseStateModel, BaseActionModel, BaseResourceModel, BaseReducerTypes, defaultState } from '.';

export const reset = <RM = BaseResourceModel, SM = BaseStateModel>(
  state: SM,
  action: BaseActionModel<BaseReducerTypes, null>,
): SM => ({
  ...state,
  ...defaultState,
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
