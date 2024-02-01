import { reducers as fetchReducers } from '@/resources/fetch';
import { BaseStateModel, BaseActionModel, BaseResourceModel, BaseReducerTypes } from '.';

export const baseReducers = <RM = BaseResourceModel, SM = BaseStateModel>(defaultState: SM) => ({
  ...fetchReducers,
  reset: (state: SM, action: BaseActionModel<BaseReducerTypes, RM>): SM => ({
    ...defaultState,
  }),
  
  setItem: (state: SM, action: BaseActionModel<BaseReducerTypes, RM>): SM => ({
    ...state,
    item: action.payload as RM,
  }), 

  setList: (state: SM, action: BaseActionModel<BaseReducerTypes, RM[]>): SM => ({
    ...state,
    list: action.payload as RM[],
  }),  
})