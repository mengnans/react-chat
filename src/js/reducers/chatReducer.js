/* eslint-disable indent */
import { TOGGLE_CHAT } from '../constants/actions-types';

export const INITIAL_STATE = { isOpen: false };

export function chatReducer(state, action) {
  switch (action.type) {
    case TOGGLE_CHAT:
      return {...state, isOpen: !state.isOpen};
    default:
      return INITIAL_STATE;
  }
}