const initialState = {
  fname: "Amit",
  lname: "Patil",
  count: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        fname: action.payload.fname,
        lname: action.payload.lname,
      };
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CLEAR":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default AppReducer;
