import { GENERAL_TYPES } from "./general.types";

export type INITIAL_VALUE_Type = {
  isNavbarOpen: boolean;
};

const INITIAL_VALUE: INITIAL_VALUE_Type = {
  isNavbarOpen: false,
};

type userTypes = {
  type: string;
  payload: any;
};

export const generalReducer = (
  state = INITIAL_VALUE,
  { type, payload }: userTypes
) => {
  switch (type) {
    case GENERAL_TYPES.navbar:
      return { ...state, isNavbarOpen: payload };
    default:
      return state;
  }
};
