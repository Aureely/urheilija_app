const appReducer = (state, action) => {
  const { payload, type } = action; // type kertoo mitä tehdään ja payload on taas data, jolla se tehdään

  switch (type) {
    case "GET_ATHLETES":
      return {
        ...state,
        athletes: payload,
      };
    case "GET_ATHLETE":
      return {
        ...state,
        athletes: payload,
      };

    case "ADD_ATHLETE":
      return {
        ...state,
        athletes: [action.payload, ...state.athletes],
      };
    case "EDIT_ATHLETE":
      return {
        ...state,
        athletes: state.athletes.map((athlete) =>
          athlete.id === action.payload.id ? action.payload : athlete,
        ),
      };
    case "DELETE_ATHLETE":
      return {
        ...state,
        athletes: state.athletes.filter(
          (athlete) => athlete.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default appReducer;
