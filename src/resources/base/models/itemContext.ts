import { Context } from 'react';
import { Resource, Action } from '.';

export interface ItemState<RM = Resource> {
  item: RM;
  modified: boolean;
  currentId: string | undefined;
}

export type ReducerFunc<BSM = Record<string, unknown>, BAM = Action> = (state: BSM, action: BAM) => BSM;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ItemContext<R = Resource> {
  state: ItemState<R>;
  dispatch: React.Dispatch<Action>;
  item: R;
}

export interface ItemProviderProps {
  Context: Context<unknown>;
}
