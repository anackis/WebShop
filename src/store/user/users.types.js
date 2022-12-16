
import { createAction } from "../../utils/reducer/reducer.utils";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

export const setCurrentUser= (user) => {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
} 