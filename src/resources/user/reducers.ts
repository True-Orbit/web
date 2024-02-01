import { UserStateModel, UserActionModel, defaultState, UserReducerFunc } from '.';

export const blank: UserReducerFunc = (state: UserStateModel, action: UserActionModel) => {
  return state;
}