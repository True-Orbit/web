import { BaseStateModel, ActionModel, BaseReducerModel } from '@/resources/base';

export const createReducer = ((combinedReducers: { [key: string]: BaseReducerModel } ): BaseReducerModel => {
  return (state: BaseStateModel, action: ActionModel) => {
    if (!combinedReducers[action.type]) throw new Error(`${typeof combinedReducers} does not have a ${action.type} reducer`);
    const func = combinedReducers[action.type];
    return func ? func(state, action) : state;
  }
})