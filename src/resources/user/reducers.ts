import { UserStateModel, UserActionModel, defaultState, UserReducerFunc } from '.';

export const reset: UserReducerFunc = (state: UserStateModel, action: UserActionModel): UserStateModel => ({
  ...defaultState,
});
