const reducer = (state, action) => {
  switch (action.type) {
    case "ClEAR_CART": {
      return { ...state, cart: [] };
    }
  }
};
export default reducer;
