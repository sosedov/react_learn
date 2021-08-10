const ADD_POST = 'ADD-POST'

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
    let stateCopy = {...state}
    stateCopy.posts = [...state.posts]
    if(action.type == ADD_POST){
        if(action.message.replaceAll(" ","").length > 0){
            stateCopy.posts.push({"id":7,"message":action.message,"likes":0});
        }
        return stateCopy
    }
    return stateCopy
}

export const AddPostActionCreator = (message) =>  ({type: ADD_POST,message:message})

export default profileReducer