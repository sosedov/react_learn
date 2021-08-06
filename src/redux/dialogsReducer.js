let initialState = {
    messages : [
        {
            "id" : 1,
            "text" : "Hi"
        },
        {
            "id" : 2,
            "text" : "How do you do"
        },
        {
            "id" : 3,
            "text" : "I'm fine Thanks"
        },
        {
            "id" : 4,
            "text" : "Fuck you"
        },
    ],
    dialogs : [
        {
            "id":1,
            "name" : "Dima"
        },
        {
            "id":2,
            "name" : "Katya"
        },
        {
            "id":3,
            "name" : "Alisa"
        },
        {
            "id":4,
            "name" : "Maxim"
        }
    ]
}

export const dialogsReducer = (state=initialState, action) => {
    if(action.type == "ADD-MESSAGE"){
        state.messages.push({"id":7,"text":action.message});
    }
    return state
}