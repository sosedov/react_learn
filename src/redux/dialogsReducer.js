export const dialogsReducer = (state, action) => {
    if(action.type == "ADD-MESSAGE"){
        state.messages.push({"id":7,"text":action.message});
    }
    return state
}