import { MODELS, defaults } from '.';

export const setMofified = (state: MODELS.ItemState, action: MODELS.Action<'setMofified', boolean>) => {
  return {
    ...state,
    modified: action.payload,
  };
};

export const resetItem = (state: MODELS.ItemState, _action: MODELS.Action<'resetItem', never>) => {
  return {
    ...state,
    modified: false,
    item: {},
  };
};

export const reset = (_state: MODELS.ItemState, _action: MODELS.Action<'reset', never>) => {
  return defaults.itemState;
};

export const setItem = (state: MODELS.ItemState, action: MODELS.Action<'setItem', MODELS.Resource>) => {
  return {
    ...state,
    modified: false,
    item: action.payload,
  };
};

export const setItemProps = (state: MODELS.ItemState, action: MODELS.Action<'setItemProps', MODELS.Resource>) => {
  return {
    ...state,
    modified: true,
    item: {
      ...state.item,
      ...action.payload,
    },
  };
};

export const setCurrentItemId = (state: MODELS.ItemState, action: MODELS.Action<'setCurrentItemId', string>) => {
  return {
    ...state,
    currentId: action.payload,
    modified: false,
    item: {},
  };
};
