const initialState ={
    formVal: {},
    message: ""
};

const Reducer=(state = initialState, action) => {
    debugger;
    switch (action.type) {
        case "SETFORMINFO":
            return {
                  ...state,
               formVal: action.payload 
            }
            
        case "REGISTER_FORM":
            console.log(" Form Submitted");
            return {
                ...state,
                message: "Form submitted!!"
            };
        default: return state;
    }
    
}
  
export default Reducer;