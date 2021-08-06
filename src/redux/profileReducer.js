let initialState = {
    posts : [
        {"id":1,"message":"My first post","likes":25},
        {"id":2,"message":"I am Dima","likes":15},
        {"id":3,"message":"I like programming","likes":10},
        {"id":4,"message":"This my first react","likes":11},
        {"id":5,"message":"React is difficult","likes":5},
        {"id":6,"message":"The ENd","likes":1},
    ]
}

export const profileReducer = (state=initialState, action) => {
    if(action.type == 'ADD-POST'){
        if(action.message.replaceAll(" ","").length > 0){
            state.posts.push({"id":7,"message":action.message,"likes":0});
        }
    }
    return state
}