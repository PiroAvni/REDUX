// const initialState ={
//     balance:0
// }



const accountReducer = (state = 100, action) => {
    switch (action.type) {
      case "DEPOSIT":
        return state + action.payload;
  //       return { ...state, balance: state.balance + action.payload }
      case "WITHDRAW":
        return state - action.payload;
  //       return { ...state, balance: state.balance - action.payload }
      default:
        return state;
    }
  }
  
  export default accountReducer;