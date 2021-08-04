export const profileReducer = (state, action) => {
    if(action.type == 'ADD-POST'){
        if(action.message.replaceAll(" ","").length > 0){
            state.posts.push({"id":7,"message":action.message,"likes":0});
        }
    }
    return state
}