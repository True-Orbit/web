import { UserStateModel, UserActionModel, UserReducerFunc } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const blank: UserReducerFunc = (state: UserStateModel, action: UserActionModel) => {
  return state;
};
