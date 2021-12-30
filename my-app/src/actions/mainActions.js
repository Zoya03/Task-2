export const setformInfo = (formInfo) =>{
    console.log("action will dispatched");
    const values={
        ...formInfo,
    }
     return (dispatch) => {
              dispatch({ type: "SETFORMINFO", payload: values})
              console.log("new state");
     }  
 };

export function registerForm() {
    return {
        type: "REGISTER_FORM"
    };
}
