const INITIAL_VALUE = {
  value: "Working",
};

interface IAction {
  type: string;
  payload: any;
}

export const buttonReducer = (
  state = INITIAL_VALUE,
  { type, payload }: IAction
) => {
  switch (type) {
    case "clicked":
      return { ...state, value: payload };
    default:
      return state;
  }
};
