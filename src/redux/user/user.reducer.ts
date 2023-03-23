import { USER_TYPES } from "./user.types";

export type INITIAL_VALUE_Type = {
  user: null | {
    uid: number;
    displayName: string;
    photoURL: string;
    gmail: string;
    createdAt: string;
  };
};

const INITIAL_VALUE: INITIAL_VALUE_Type = {
  user: null,
};

type userTypes = {
  type: string;
  payload: any;
};

export const userReducer = (
  state = INITIAL_VALUE,
  { type, payload }: userTypes
) => {
  switch (type) {
    case USER_TYPES.user:
      return { ...state, user: payload };
    default:
      return state;
  }
};
