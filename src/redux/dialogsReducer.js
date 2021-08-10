const ADD_MESSAGE = 'ADD-MESSAGE'

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
    let stateCopy = {...state}
    stateCopy.messages = [...state.messages]
    if(action.type == ADD_MESSAGE){ 
        stateCopy.messages.push({"id":7,"text":action.message});
        return stateCopy
    }
    return stateCopy
}

export const AddMessageActionCreator = (message) =>  ({type: ADD_MESSAGE, message:message})